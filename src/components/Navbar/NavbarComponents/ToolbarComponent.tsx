// MUI Imports
import { Stack, Box, IconButton } from '@mui/material'

// Component Imports
import LeftSide from '../LeftSide/LeftSide'
import Center from '../Center/Center'
import RightSide from '../RightSide/RightSide'
import NavItemContainerStyled from '../NavbarComponents/StyledComponents/NavItemContainerStyled'
import ToolbarStyled from '../NavbarComponents/StyledComponents/ToolBarStyled'
import MenuIcon from '@mui/icons-material/Menu';

// Props
interface ToolBarComponentProps {
    isMobile: boolean,
    handleDrawerToggle: () => void
}

const ToolbarComponent = ({ isMobile, handleDrawerToggle } : ToolBarComponentProps) => {
  return (
    <Box sx={{padding: '0 10%', '& .MuiToolbar-root': { padding: '0.5% 0' }}}>
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
                            <Center isMobile={isMobile} />
                            <RightSide isMobile={isMobile}/>
                        </>
                    ) : (
                        <>
                            <LeftSide isMobile={ isMobile }/>
                            <Center isMobile={isMobile}/>
                            <RightSide isMobile={isMobile}/>
                        </>
                    )
                }
            </Stack>   
        </ToolbarStyled>
    </Box>
  )
}

export default ToolbarComponent
