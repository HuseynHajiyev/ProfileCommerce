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
import { useSelector } from 'react-redux';
import { RootState } from '../../../../app/store';
import { LoginPopoverStyled } from '../../../StyledComponents/LoginPopoverStyled/LoginPopoverStyled';
import { useIsMobile } from '../../../../hooks/useIsMobile';

const LoginPopover = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { loginPopoverOpen, loginAttempted, closeLoginPopover } = useDrawerToggle();
    const { loading, error, loggedIn } = useSelector((state: RootState) => state.userState);
    const [wrongCredentials, setWrongCredentials] = useState<boolean>(false);
    const isTablet = useIsMobile('tablet');
    const {
        login,
        password,
        loginValid,
        passwordValid,
        checkLoginIsValid,
        loginInputHandler,
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

    return (
        <LoginPopoverStyled
            open={loginPopoverOpen}
            anchorEl={null} // No anchoring element
            onClose={handleClose}
            disableScrollLock={true}
            anchorReference="anchorPosition" // Use anchorPosition for positioning
            anchorPosition={{ top: window.innerHeight / 2, left: window.innerWidth / 2 }} // Center of viewport
            transformOrigin={{
                vertical: 'center',
                horizontal: 'center',
            }}
            sx={{
                zIndex: 2000,
                '& .MuiPopover-paper': {
                    width: isTablet? '60vw' : '35vw',
                    zIndex: 2000,
                },
            }}
        >
            <IconButton onClick={closeLoginPopover} style={{ position: 'absolute', right: '2%', top: '2%' }}>
              <Close />
            </IconButton>
            <Grid container direction="column" alignItems="center" display={'flex'} sx={{ width: '100%'}}>

                <Grid item xs={12} width={'100%'} paddingBottom={'10%'}>
                    <PopoverHeader />
                </Grid>
                
                <Grid item xs={12} width={'100%'}>
                    <UsernameInput login={login} loginValid={loginValid} checkLoginIsValid={checkLoginIsValid} loginInputHandler={loginInputHandler}/>
                </Grid>
                
                <Grid item xs={12} width={'100%'}>
                    <PasswordInput password={password} showPassword={showPassword} passwordValid={passwordValid} togglePasswordVisibility={handlePasswordToggle} checkPasswordIsValid={checkPasswordIsValid} passwordInputHandler={passwordInputHandler}/>
                </Grid>
                <Grid item xs={12} width={'100%'}>
                    { wrongCredentials && (
                            <Typography variant="body2" display="block" align="center" textTransform={'none'} sx={{ color: 'red' }}>
                                Wrong credentials
                            </Typography>
                        )
                    }
                </Grid>
                
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