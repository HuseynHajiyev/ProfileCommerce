import { useEffect, useState } from 'react';
import { Grid, IconButton, Popover, Typography } from '@mui/material';
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

const LoginPopover = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { loginPopoverOpen, closeLoginPopover } = useDrawerToggle();
    const { loading, error, loggedIn } = useSelector((state: RootState) => state.userState);
    const [wrongCredentials, setWrongCredentials] = useState<boolean>(false);
    const {
        login,
        password,
        loginValid,
        passwordValid,
        loginAttempted,
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

    const handleClose = () => {
        emptyValues();
        closeLoginPopover();
    }

    useEffect(() => {
        if(!loading && error && !loggedIn && loginAttempted) {
            setWrongCredentials(true);
        } else {
            setWrongCredentials(false);
        }
    }, [loading, error, loggedIn, loginAttempted]);

    return (
        <Popover
            open={loginPopoverOpen}
            anchorEl={null} // No anchoring element
            onClose={handleClose}
            anchorReference="anchorPosition" // Use anchorPosition for positioning
            anchorPosition={{ top: window.innerHeight / 2, left: window.innerWidth / 2 }} // Center of viewport
            transformOrigin={{
                vertical: 'center',
                horizontal: 'center',
            }}
            sx={{
                '& .MuiPopover-paper': {
                    width: '35vw',
                    height: 'auto',
                    borderRadius: '0px',
                    boxShadow: '0px 0px 16px rgba(0, 0, 0, 0.25)',
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingX: '5%',
                    paddingY: '5%',
                    overflow: 'hidden',
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
        </Popover>
    );
}

export default LoginPopover;