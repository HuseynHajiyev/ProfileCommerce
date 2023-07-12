// MUI components
import { Stack, useTheme } from '@mui/material';


// Component Imports
import { NavbarStyled } from '../StyledComponents/NavbarStyled/NavbarStyled';
import ToolbarComponent from './Components/MacroComponents/ToolbarComponent';
import AnnouncementBarComponent from './Components/MicroComponents/AnnouncementBarComponent';

// Context Imports
import NavigationDrawer from './Components/MacroComponents/NavigationDrawer';

// Redux Imports
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { loadShoppingBag } from '../../features/shoppingBagReducer/shoppingBagSlice';


const Navbar = () => {
    const theme = useTheme();
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(loadShoppingBag(1));
      console.log('Navbar Dispatch was called');
    }, [dispatch]);
    return (
        <NavbarStyled sx={{ zIndex: theme.zIndex.drawer + 1 }}>
                <Stack direction='column'>
                    <AnnouncementBarComponent />
                    <ToolbarComponent />
                    <NavigationDrawer />
                </Stack>
        </NavbarStyled>
    )
};

export default Navbar;
