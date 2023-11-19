import Cookies from 'js-cookie';

// MUI components
import { Alert, Snackbar, Stack, useTheme } from '@mui/material';
import { FaRegCheckCircle } from "react-icons/fa";



// Component Imports
import { NavbarStyled } from '../StyledComponents/NavbarStyled/NavbarStyled';
import ToolbarComponent from './navComponents/MacroComponents/ToolbarComponent';

// Context Imports
import NavigationDrawer from './navComponents/MacroComponents/NavigationDrawer';

// Redux Imports
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { loadShoppingBag, resetShoppingBag } from '../../features/shoppingBagReducer/shoppingBagSlice';
import { loadProducts } from '../../features/productsReducer/productsSlice';
import SearchBarDrawer from './navComponents/MacroComponents/SearchBarDrawer';
import LoginPopover from './navComponents/MacroComponents/LoginPopover';
import { RootState } from '../../app/store';
import { loginRequest, logoutUser } from '../../features/userReducer/userSlice';
import { useDrawerToggle } from '../../hooks/useDrawerToggle';



const Navbar = () => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const userState = useSelector((state: RootState) => state.userState);
    const shoppingBagState = useSelector((state: RootState) => state.shoppingBag);
    const [initialLoginAttempted, setInitialLoginAttempted] = useState(false);
    const [successSnackbarShown, setSuccessSnackbarShown] = useState(false);
    const { loginSuccessSnackbarOpen, loginAttempted, handleSuccessSnackbar } = useDrawerToggle();

    useEffect(() => {
        if (!initialLoginAttempted) {
            const token = Cookies.get('authToken');
            const userId = userState.user?.id;
            const username = userState.user?.username;
            const password = userState.user?.password;
    
            if (token && userId && username && password) {
                dispatch(loginRequest({ username, password }));
            } else {
                dispatch(logoutUser());
            }
            setInitialLoginAttempted(true);
        }
        if(!userState.loggedIn || !userState.user) {
            dispatch(resetShoppingBag());
        } else {
            dispatch(loadShoppingBag(userState.user.id));
        }
    }, [dispatch, userState.loggedIn, userState.user, initialLoginAttempted, shoppingBagState.userId]);

    useEffect(() => {
        dispatch(loadProducts(0));
    }, [dispatch]);

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
