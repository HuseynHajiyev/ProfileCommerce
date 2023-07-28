//MUI Imports
import { Box, Typography } from '@mui/material';

import AnnouncementBarComponentStyled from '../../../StyledComponents/AppFileStyled/AnnouncementBarComponentStyled';
const AnnouncementBarComponent = () => {

  return (
    <AnnouncementBarComponentStyled>
      <Box>       
        <Typography fontFamily='"muli", sans-serif' fontSize='12px' lineHeight='18px'>Free Shipping On All U.S. Orders</Typography>
      </Box>
    </AnnouncementBarComponentStyled>
  )
}

export default AnnouncementBarComponent
