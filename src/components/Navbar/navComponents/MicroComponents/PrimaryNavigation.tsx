// MUI imports
import { Stack } from '@mui/material';

// Component Imports
import NavLinkComponent from './NavLinkComponent';

// Hook Imports
import { useIsMobile } from '../../../../hooks/useIsMobile';
import { useDrawerToggle } from '../../../../hooks/useDrawerToggle';
import { useCallback } from 'react';

const PrimaryNavigation = () => {
    const isDesktop = useIsMobile('largeDesktop');
    const { assignNavigationDrawerRef } = useDrawerToggle();
   
    return (
        <Stack direction={!isDesktop ? 'column' : 'row'} spacing={ !isDesktop ? 2 : 10 } 
            sx={{ flex: '1 1 0px;', paddingBottom: !isDesktop ? '2%' : 'inherit', width: !isDesktop ? 'inherit' : 0, }} 
            ref={ assignNavigationDrawerRef }       
        >
            <NavLinkComponent justify={!isDesktop ? 'center!important' : undefined} to='/new-arrivals' />
            <NavLinkComponent justify={!isDesktop ? 'center' : undefined}to='/shop/clothing' />
            <NavLinkComponent justify={!isDesktop ? 'center' : undefined} to='/about' />
        </Stack>
    )
}

export default PrimaryNavigation
