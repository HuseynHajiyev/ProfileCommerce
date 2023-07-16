// MUI Imports
import { Box, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

// Hooks
import { useIsMobile } from '../../../../hooks/useIsMobile';
import { useDrawerToggle } from '../../../../hooks/useDrawerToggle';

// Custom Components
import { NavItemContainerLeftStyled } from '../../../StyledComponents/NavbarStyled/NavbarStyled';
import PrimaryNavigation from '../MicroComponents/PrimaryNavigation';

const LeftSide = () => {
    const { openNavigationDrawer,navigationIsOpen, closeNavigationDrawer } = useDrawerToggle();
    const isMobile = useIsMobile()
    const { assignNavigationButtonRef } = useDrawerToggle();
    return (
        isMobile ? (
            <NavItemContainerLeftStyled 
            sx={{p: 0, flex: 1}}>
                <IconButton
                    aria-label="large"
                    sx={{ order: -1}}
                    onClick={() => {isMobile? (navigationIsOpen ? closeNavigationDrawer() : openNavigationDrawer()) : ( null ) }}
                    // onTouchStart= { navigationIsOpen ? closeNavigationDrawer : openNavigationDrawer}
                    onTouchEnd={() => {isMobile ? ( null ) : (navigationIsOpen ? closeNavigationDrawer() : openNavigationDrawer()) }}
                >
                    <Box ref={ assignNavigationButtonRef }>
                        <MenuIcon />
                    </Box>
                </IconButton>
            </NavItemContainerLeftStyled>
        ) : (
            <PrimaryNavigation />
        )
    )
}

export default LeftSide
