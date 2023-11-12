// MUI imports
import { Grid } from '@mui/material';

// Component Imports
import NavLinkComponent from './NavLinkComponent';

// Hook Imports
import { useIsMobile } from '../../../../hooks/useIsMobile';
import { useDrawerToggle } from '../../../../hooks/useDrawerToggle';

const PrimaryNavigation = () => {
    const isDesktop = useIsMobile('desktop');
    const isLargeDesktop = useIsMobile('largeDesktop')
    const { assignNavigationDrawerRef } = useDrawerToggle();

    return (
        <Grid 
            container 
            direction={!isDesktop && !isLargeDesktop ? 'column' : 'row'}
            sx={{
                flex: '1 1 0px',
                paddingTop: !isDesktop && !isLargeDesktop ?  '17vh' : 'inherit',
                paddingBottom: !isDesktop && !isLargeDesktop ? '2%' : 'inherit',
                width: !isDesktop && !isLargeDesktop ? 'inherit' : 0
            }}
            ref={assignNavigationDrawerRef}
            spacing={!isDesktop && !isLargeDesktop ? 1 : 0}
        >
            <Grid item xs={12} md={4} sx={{ display: 'flex' }} justifyContent={'center'} alignItems={'center'}>
                <NavLinkComponent to='/new-arrivals' justify={!isDesktop && !isLargeDesktop ? 'center' : 'flex-start'} />
            </Grid>

            <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }} alignItems={'center'}>
                <NavLinkComponent to='/shop/clothing' justify='center' />
            </Grid>

            <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }} alignItems={'center'}>
                <NavLinkComponent to='/about' justify='center' />
            </Grid>
        </Grid>
    )
}


export default PrimaryNavigation
