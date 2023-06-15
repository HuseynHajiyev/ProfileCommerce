// MUI Imports
import { Stack } from '@mui/system';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';


// Custom Components
import NavLinkComponent from '../NavLinkComponent';
import { useIsMobile } from '../../../../hooks/UseIsMobile';
import NavItemContainerStyled from '../../StyledComponents/NavItemContainerStyled';


// Props
interface LeftSideProps {
    toggleNavigationDrawer?: () => void
}

const LeftSide = ({toggleNavigationDrawer} : LeftSideProps) => {
    const isMobile = useIsMobile()
    return (
        isMobile ? (
            <NavItemContainerStyled sx={{p: 0, flex: 1}}>
                <IconButton
                    aria-label="large"
                    sx={{ order: -1}}
                    onClick={ toggleNavigationDrawer }
                >
                    <MenuIcon />
                </IconButton>
            </NavItemContainerStyled>
        ) : (

        <Stack direction={isMobile ? 'column' : 'row'} spacing={ isMobile ? 2 : 10 } sx={{ flex: '1 1 0px;', width: 0 }}>
            <NavLinkComponent to='/new-arrivals' />
            <NavLinkComponent to='/about' />
            <NavLinkComponent to='/store' />
        </Stack>
        )
    )
}

export default LeftSide
