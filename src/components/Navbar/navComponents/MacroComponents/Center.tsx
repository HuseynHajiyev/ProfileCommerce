// MUI Imports
import { Box } from '@mui/material'

// Components
import LogoLinkComponent from '../MicroComponents/LogoLinkComponent'

const Center = () => {
  return (
    <Box sx={{flex:'1 1 0px;', width: 0, display: 'flex', justifyContent: 'center'}}>
      <LogoLinkComponent />
    </Box>
  )
}

export default Center
