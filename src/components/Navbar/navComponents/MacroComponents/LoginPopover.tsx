import { useCallback, useEffect, useState } from 'react';
import { Grid, IconButton, Typography } from '@mui/material';
import { useDrawerToggle } from '../../../../hooks/useDrawerToggle';
import PopoverHeader from '../MicroComponents/LoginPopover/PopoverHeader';
import PopoverFooter from '../MicroComponents/LoginPopover/PopoverFooter';
import AuthButtons from '../MicroComponents/LoginPopover/AuthButtons';
import PasswordInput from '../MicroComponents/LoginPopover/PasswordInput';
import UsernameInput from '../MicroComponents/LoginPopover/UsernameInput';
import { Close } from '@mui/icons-material';
import { useLogin } from '../../../../hooks/useLogin';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../app/store';
import { LoginPopoverStyled } from '../../../StyledComponents/LoginPopoverStyled/LoginPopoverStyled';
import UnlockTimer from '../MicroComponents/LoginPopover/UnlockTimer';
import { unlockUser } from '../../../../features/localUserReducer/localUserSlice';

const LoginPopover = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { loginPopoverOpen, loginAttempted, closeLoginPopover } = useDrawerToggle();
    const { loading, error, loggedIn } = useSelector((state: RootState) => state.userState);
    const [wrongCredentials, setWrongCredentials] = useState<boolean>(false);
    const localUserState = useSelector((state: RootState) => state.localUserState);
    const usersState = useSelector((state: RootState) => state.usersState);
    const dispatch = useDispatch();
    const {
        login,
        password,
        loginValid,
        passwordValid,
        checkLoginIsValid,
        loginInputHandler,
        pickUser,
        checkPasswordIsValid,
        passwordInputHandler,
        submitLogin,
        emptyValues
    } = useLogin();
    const handlePasswordToggle = () => {
        setShowPassword(!showPassword);
    };

    const handleClose = useCallback(() => {
        emptyValues();
        closeLoginPopover();
    }, [closeLoginPopover, emptyValues]);

    useEffect(()=>{
        if(loggedIn) {
            handleClose();
        }
    },[loggedIn, handleClose]);

    useEffect(() => {
        if(!loading && error && !loggedIn && loginAttempted) {
            setWrongCredentials(true);
        } else {
            setWrongCredentials(false);
        }
    }, [loading, error, loggedIn, loginAttempted]);

    useEffect(()=>{
        if(localUserState.locked && localUserState.lockedAt) {
          const lockedAt = new Date(localUserState.lockedAt);
          const unlockTime = new Date(lockedAt.getTime() + localUserState.lockTimeout * 60000);
          const now = new Date();
          if(now >= unlockTime) {
            dispatch(unlockUser());
          }
        }
      },[localUserState.locked, localUserState.lockedAt, localUserState.lockTimeout, dispatch]);

    return (
        <LoginPopoverStyled
            open={loginPopoverOpen}
            anchorEl={null}
            onClose={handleClose}
            disableScrollLock={true}
            anchorReference="anchorPosition"
            anchorPosition={{ top: window.innerHeight / 2, left: window.innerWidth / 2 }}
            transformOrigin={{
                vertical: 'center',
                horizontal: 'center',
        }}>
            <IconButton onClick={closeLoginPopover} style={{ position: 'absolute', right: '2%', top: '2%' }}>
              <Close />
            </IconButton>
            <Grid container direction="column" alignItems="center" justifyContent="center" spacing={2} sx={{ padding: '2vh 2vw'}}>

                <Grid item xs={12} width={'100%'} >
                    <PopoverHeader />
                </Grid>
                
                <Grid item xs={12} width={'100%'}>
                    <UsernameInput 
                        login={login} 
                        loginValid={loginValid} 
                        checkLoginIsValid={checkLoginIsValid} 
                        loginInputHandler={loginInputHandler}
                        pickUser={pickUser}
                        options={usersState.users}
                    />
                </Grid>
                
                <Grid item xs={12} width={'100%'}>
                    <PasswordInput password={password} showPassword={showPassword} passwordValid={passwordValid} togglePasswordVisibility={handlePasswordToggle} checkPasswordIsValid={checkPasswordIsValid} passwordInputHandler={passwordInputHandler}/>
                </Grid>
                { (wrongCredentials && !localUserState.locked ) && (
                    <Grid item xs={12} width={'100%'}>
                        <Typography variant="body2" display="block" align="center" textTransform={'none'} sx={{ color: 'red' }}>
                            Wrong credentials
                        </Typography>
                        <Typography variant="body2" display="block" align="center" textTransform={'none'} sx={{ color: 'red' }}>
                            Login attempts remaining: {localUserState.maxLoginAttempts - localUserState.loginAttempts}
                        </Typography>
                    </Grid>
                    )
                }
                {
                    localUserState.locked && (
                        <Grid item xs={12} width={'100%'}>
                            <Typography variant="body2" display="block" align="center" textTransform={'none'} sx={{ color: 'red' }}>
                                Account locked. Too many failed login attempts. 
                            </Typography>
                            <UnlockTimer />
                        </Grid>
                    )
                }
                <Grid item xs={12} width={'100%'}>
                    <AuthButtons loginAttempted={loginAttempted} submitLogin={submitLogin} passwordValid={passwordValid} loginValid={loginValid}/>
                </Grid>
                
                <Grid item xs={12} width={'100%'}>
                    <PopoverFooter />
                </Grid>

            </Grid>
        </LoginPopoverStyled>
    );
}

export default LoginPopover;