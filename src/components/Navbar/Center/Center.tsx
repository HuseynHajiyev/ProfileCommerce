// MUI Imports
import { Box } from '@mui/material'

// NavbarComponents
import LogoLinkComponent from './CenterComponents/LogoLinkComponent'

interface CenterProps {
  isMobile: boolean,
}

const Center = ({ isMobile }: CenterProps) => {
  return (
    <Box sx={{flex:1, display: 'flex', justifyContent: 'center', marginX: isMobile ? '0' : '10%'}}>
      <LogoLinkComponent />
    </Box>
  )
}

export default Center
