//MUI Imports
import { Box, Typography, useTheme } from '@mui/material';


const AnnouncementBarComponent = () => {
  const theme = useTheme();
  return (
    <Box sx={{display: 'flex', width: '100%', backgroundColor: '#F5F5F5', justifyContent: 'center', zIndex: theme.zIndex.drawer+2, paddingY: '0.4%'}}>
      <Box>       
        <Typography fontFamily='"muli", sans-serif' fontSize='12px' lineHeight='18px'>Free Shipping On All U.S. Orders</Typography>
      </Box>
    </Box>
  )
}

export default AnnouncementBarComponent
