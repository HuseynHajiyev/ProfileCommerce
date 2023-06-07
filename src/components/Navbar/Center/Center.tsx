// MUI Imports
import { Box } from '@mui/material'

// NavbarComponents
import LogoLinkComponent from '../NavbarComponents/LogoLinkComponent'

const Center = () => {
  return (
    <Box sx={{flex:1, display: 'flex', justifyContent: 'center', marginX: '5%'}}>
      <LogoLinkComponent />
    </Box>
  )
}

export default Center
