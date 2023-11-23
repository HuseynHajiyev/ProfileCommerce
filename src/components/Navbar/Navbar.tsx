// MUI components
import { Alert, Snackbar, Stack, useTheme } from '@mui/material';
import { FaRegCheckCircle } from "react-icons/fa";



// Component Imports
import { NavbarStyled } from '../StyledComponents/NavbarStyled/NavbarStyled';
import ToolbarComponent from './navComponents/MacroComponents/ToolbarComponent';

// Context Imports
import NavigationDrawer from './navComponents/MacroComponents/NavigationDrawer';

// Redux Imports
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import SearchBarDrawer from './navComponents/MacroComponents/SearchBarDrawer';
import LoginPopover from './navComponents/MacroComponents/LoginPopover';
import { RootState } from '../../app/store';
import { useDrawerToggle } from '../../hooks/useDrawerToggle';



const Navbar = () => {
    const theme = useTheme();
    const userState = useSelector((state: RootState) => state.userState);
    const [successSnackbarShown, setSuccessSnackbarShown] = useState(false);
    const { loginSuccessSnackbarOpen, loginAttempted, handleSuccessSnackbar } = useDrawerToggle();

    useEffect(() => {
        if (!userState.loading && userState.loggedIn && loginAttempted && !loginSuccessSnackbarOpen && !successSnackbarShown) {
          handleSuccessSnackbar();
          setSuccessSnackbarShown(true);
        }
      
        if (!userState.loggedIn || !loginAttempted) {
          setSuccessSnackbarShown(false);
        }
      }, [userState.loading, userState.loggedIn, loginAttempted, loginSuccessSnackbarOpen, successSnackbarShown, handleSuccessSnackbar]);
      
    return (
        <>
            <NavbarStyled sx={{ zIndex: theme.zIndex.drawer + 1 }}>
                    <Stack direction='column'>
                        <ToolbarComponent />
                        <NavigationDrawer />    
                    </Stack>
            </NavbarStyled>
            <SearchBarDrawer />
            <NavigationDrawer />
            <LoginPopover />
            <Snackbar 
                open={loginSuccessSnackbarOpen}
                message={'Login successful'}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            >
                <Alert icon={<FaRegCheckCircle />} sx={{width: '100%'}} severity='success'>
                    Login successful
                </Alert>
            </Snackbar>
        </>
    )
};

export default Navbar;
