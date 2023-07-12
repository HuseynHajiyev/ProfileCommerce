// MUI Imports
import { Stack, useTheme } from '@mui/material';

// Component Imports
import LeftSide from './LeftSide';
import Center from './Center';
import RightSide from './RightSide';
import { BoxContainerBase } from '../../../Containers/BoxContainerBase';
import SearchBarDrawer from './SearchBarDrawer';
import NavigationDrawer from './NavigationDrawer';

// Styled Component Imports
import ToolbarStyled from '../../../StyledComponents/NavbarStyled/ToolBarStyled';


// Hook Imports
import { useIsMobile } from '../../../../hooks/useIsMobile';

const ToolbarComponent = () => {
    const isMobile = useIsMobile();   
    const theme = useTheme();
    return (
        <BoxContainerBase sx={
                {
                    padding: isMobile? '0 5%' : '0 10%', 
                    '& .MuiToolbar-root': { padding: '0.5% 0' },
                    zIndex: theme.zIndex.drawer + 300,
                }
            }>
            <ToolbarStyled sx={{zIndex: theme.zIndex.drawer+1}}>
                <Stack direction="row" justifyContent='space-between' sx={{width:'100%',}}>
                    <LeftSide />
                    <Center />
                    <RightSide />
                    <SearchBarDrawer />
                    <NavigationDrawer />
                </Stack>   
            </ToolbarStyled>
        </BoxContainerBase>
    )
}

export default ToolbarComponent
