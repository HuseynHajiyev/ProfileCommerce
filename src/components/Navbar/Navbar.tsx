// React State
import { useState } from 'react';

// MUI components
import { Stack } from '@mui/material';

import { ThemeProvider } from '@mui/material/styles';


// NavbarComponents

// Macro Components
import LeftSide from './LeftSide/LeftSide';
import NavbarStyled from './NavbarComponents/StyledComponents/NavbarStyled';
import DrawerComponent from './NavbarComponents/DrawerComponent';
import ToolbarComponent from './NavbarComponents/ToolbarComponent';


// Theme imports
import theme from '../../themes/theme';
import AnnouncementBarComponent from './NavbarComponents/AnnouncementBarComponent';
import SignInLinkComponent from './RightSide/RightSideComponents/SignInLinkComponent';

// Props
interface NavbarProps {
    isMobile: boolean,
  }
  

const Navbar = ({isMobile}: NavbarProps) => {

    // Drawer State
    const [drawerOpen, setDrawerOpen] = useState(false);

    // Drawer Toggle
    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    return (
        <ThemeProvider theme={theme}>
            <NavbarStyled>
                <Stack direction='column'>
                    <AnnouncementBarComponent />
                    <ToolbarComponent isMobile={isMobile} handleDrawerToggle={handleDrawerToggle} />
                </Stack>
            </NavbarStyled>
            <DrawerComponent>
                <SignInLinkComponent />
                <LeftSide isMobile={ isMobile }/>
            </DrawerComponent>
        </ThemeProvider>
    )
};

export default Navbar;
