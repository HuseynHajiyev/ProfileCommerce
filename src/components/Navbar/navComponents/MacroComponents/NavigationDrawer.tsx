// MUI imports
import { Box } from '@mui/material';

// Component Imports
import { NavigationDrawerStyled } from '../../../StyledComponents/NavbarStyled/NavbarStyled';
import PrimaryNavigation from '../MicroComponents/PrimaryNavigation';

// Hooks
import { useDrawerToggle } from '../../../../hooks/useDrawerToggle';
import { useIsMobile } from '../../../../hooks/useIsMobile';
import { useEffect } from 'react';


const NavigationDrawer = () => {
    const { navigationIsOpen, closeNavigationDrawer } = useDrawerToggle();
    const isMobile = useIsMobile();
    useEffect(()=>{
        if (!isMobile) {
            closeNavigationDrawer();
        }
    }, [isMobile, closeNavigationDrawer])
    
    return (
        <NavigationDrawerStyled
            anchor='top'
            variant='temporary'
            open={ navigationIsOpen }
            
        >
            <Box sx={{width: '100%'}}>
                <PrimaryNavigation />
            </Box>  
        </NavigationDrawerStyled>
    )
}

export default NavigationDrawer



