// React State
import { useState } from 'react';

// MUI components
import { Stack, useTheme } from '@mui/material';


// Component Imports
import NavbarStyled from './StyledComponents/NavbarStyled';
import ToolbarComponent from './ToolBar/ToolbarComponent';
import AnnouncementBarComponent from './Components/AnnouncementBarComponent';
import SearchBarDrawer from './Components/Drawers/Components/SearchBarDrawer/SearchBarDrawer';

// Context Imports
import { SearchDrawerToggleProvider } from '../../context/navbarContext/searchDrawerToggleContext';

// Interface
interface SearchBarDrawerHandles {
    getFocus: () => void;
    focusInput: () => void;
  }

const Navbar = () => {

    // Drawer State
    const [navigationBarOpen, setNavigationBarOpen] = useState(false);
    
    // Focus Search Bar Input
    const [searchBarInputFocus, setSearchBarInputFocus] = useState(false);

    
    // Drawer handlers
    const toggleNavigationDrawer = () => {
        setNavigationBarOpen(prevState => !prevState);
    };

    
    const theme = useTheme();

    return (
        <SearchDrawerToggleProvider>
            <NavbarStyled sx={{ zIndex: theme.zIndex.drawer + 1 }}>
                <Stack direction='column'>
                    <AnnouncementBarComponent />
                    <ToolbarComponent />
                    <SearchBarDrawer  />
                </Stack>
            </NavbarStyled>
        </SearchDrawerToggleProvider>
    )
};

export default Navbar;
