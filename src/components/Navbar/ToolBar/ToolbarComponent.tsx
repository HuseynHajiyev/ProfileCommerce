// MUI Imports
import { Stack, Box, useTheme } from '@mui/material'

// Component Imports
import LeftSide from '../Components/LeftSide/LeftSide'
import Center from '../Components/Center/Center'
import RightSide from '../Components/RightSide/RightSide'
import ToolbarStyled from './StyledComponents/ToolBarStyled'
import { useIsMobile } from '../../../hooks/UseIsMobile'
import { BoxContainerBase } from '../../Containers/BoxContainerBase'

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
                </Stack>   
            </ToolbarStyled>
        </BoxContainerBase>
    )
}

export default ToolbarComponent
