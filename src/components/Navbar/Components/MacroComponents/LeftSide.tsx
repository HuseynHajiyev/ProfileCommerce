// MUI Imports
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

// Hooks
import { useIsMobile } from '../../../../hooks/useIsMobile';
import { useDrawerToggle } from '../../../../hooks/useDrawerToggle';

// Custom Components
import { NavItemContainerLeftStyled } from '../../../StyledComponents/NavbarStyled/NavbarStyled';
import PrimaryNavigation from '../MicroComponents/PrimaryNavigation';

const LeftSide = () => {
    const { openNavigationDrawer, } = useDrawerToggle();
    const isMobile = useIsMobile()
    return (
        isMobile ? (
            <NavItemContainerLeftStyled sx={{p: 0, flex: 1}}>
                <IconButton
                    aria-label="large"
                    sx={{ order: -1}}
                    onClick={ openNavigationDrawer }
                    onTouchEnd={ openNavigationDrawer }
                >
                    <MenuIcon />
                </IconButton>
            </NavItemContainerLeftStyled>
        ) : (
            <PrimaryNavigation />
        )
    )
}

export default LeftSide
