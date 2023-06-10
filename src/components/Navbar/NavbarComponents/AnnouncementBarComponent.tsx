//MUI Imports
import { Box, Typography } from '@mui/material'


const AnnouncementBarComponent = () => {
  return (
    <Box sx={{display: 'flex', width: '100%', backgroundColor: '#F5F5F5', justifyContent: 'center', paddingY: '0.5%'}}>
        <Typography fontFamily='"muli", sans-serif' fontSize='12px' lineHeight='18px'>Free Shipping On All U.S. Orders</Typography>
    </Box>
  )
}

export default AnnouncementBarComponent
