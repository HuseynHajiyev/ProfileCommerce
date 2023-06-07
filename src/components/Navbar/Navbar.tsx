// React State
import { useState } from 'react';

// MUI components
import { Stack, IconButton, useMediaQuery} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';


import { useTheme, Theme } from '@mui/material/styles';


// NavbarComponents

// Macro Components
import RightSide from './RightSide/RightSide';
import Center from './Center/Center';
import LeftSide from './LeftSide/LeftSide';
import NavbarStyled from './NavbarComponents/StyledComponents/NavbarStyled';
import ToolbarStyled from './NavbarComponents/StyledComponents/ToolBarStyled';
import NavItemContainerStyled from './NavbarComponents/StyledComponents/NavItemContainerStyled';
import DrawerComponent from './NavbarComponents/DrawerComponent';

const Navbar = () => {

    // Drawer State
    const [drawerOpen, setDrawerOpen] = useState(false);

    // Drawer Toggle
    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    const theme: Theme = useTheme();

    const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

    return (
        <>
            <NavbarStyled>
                <ToolbarStyled>
                    <Stack direction="row" justifyContent='space-between' sx={{width:'100%',}}>
                        {
                            isMobile ? (
                                <>
                                    <NavItemContainerStyled sx={{p: 0, flex: 1}}>
                                        <IconButton
                                            aria-label="large"
                                            sx={{ order: -1}}
                                            onClick={handleDrawerToggle}
                                        >
                                            <MenuIcon />
                                        </IconButton>
                                    </NavItemContainerStyled>
                                    <Center />
                                    <RightSide />
                                </>
                            ) : (
                                <>
                                    <LeftSide />
                                    <Center />
                                    <RightSide />
                                </>
                            )
                        }
                    </Stack>   
                </ToolbarStyled>
            </NavbarStyled>
            <DrawerComponent>
                <LeftSide />
            </DrawerComponent>
        </>
    )
};

export default Navbar;
