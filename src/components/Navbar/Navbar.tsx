// MUI components
import { Stack, useTheme } from '@mui/material';


// Component Imports
import { NavbarStyled } from '../StyledComponents/NavbarStyled/NavbarStyled';
import ToolbarComponent from './navComponents/MacroComponents/ToolbarComponent';

// Context Imports
import NavigationDrawer from './navComponents/MacroComponents/NavigationDrawer';

// Redux Imports
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { loadShoppingBag } from '../../features/shoppingBagReducer/shoppingBagSlice';
import { loadProducts } from '../../features/productsReducer/productsSlice';
import SearchBarDrawer from './navComponents/MacroComponents/SearchBarDrawer';


const Navbar = () => {
    const theme = useTheme();
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(loadShoppingBag(1));
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
        </>
    )
};

export default Navbar;
