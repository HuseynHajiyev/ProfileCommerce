import Cookies from 'js-cookie';

// MUI components
import { Stack, useTheme } from '@mui/material';


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



const Navbar = () => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const userState = useSelector((state: RootState) => state.userState);
    const shoppingBagState = useSelector((state: RootState) => state.shoppingBag);
    const [initialLoginAttempted, setInitialLoginAttempted] = useState(false);

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
        </>
    )
};

export default Navbar;
