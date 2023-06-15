// MUI Imports
import { Box } from '@mui/material'

// Components
import LogoLinkComponent from './Components/LogoLinkComponent'
import { useIsMobile } from '../../../../hooks/UseIsMobile'

const Center = () => {
  const isMobile = useIsMobile();
  return (
    <Box sx={{flex:'1 1 0px;', width: 0, display: 'flex', justifyContent: 'center'}}>
      <LogoLinkComponent />
    </Box>
  )
}

export default Center
