// MUI imports
import { Stack } from '@mui/material';

// Component Imports
import NavLinkComponent from './NavLinkComponent';

// Hook Imports
import { useIsMobile } from '../../../../hooks/useIsMobile';
import { useDrawerToggle } from '../../../../hooks/useDrawerToggle';

const PrimaryNavigation = () => {
    const isMobile = useIsMobile();
    const { assignNavigationDrawerRef } = useDrawerToggle();
    return (
        <Stack direction={isMobile ? 'column' : 'row'} spacing={ isMobile ? 2 : 10 } 
            sx={{ flex: '1 1 0px;', paddingBottom: isMobile ? '2%' : 'inherit', width: isMobile ? 'inherit' : 0, }} 
            ref={ assignNavigationDrawerRef }       
        >
            <NavLinkComponent justify={isMobile ? 'center!important' : undefined} to='/new-arrivals' />
            <NavLinkComponent to='/store' />
            <NavLinkComponent to='/about' />
        </Stack>
    )
}

export default PrimaryNavigation
