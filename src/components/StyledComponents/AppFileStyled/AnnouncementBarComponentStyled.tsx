import { Box, styled } from '@mui/material'

import theme from '../../../themes/theme'

const AnnouncementBarComponentStyled = styled(Box)(() => ({
    display: 'flex', 
    width: '100%', 
    backgroundColor: '#F5F5F5', 
    justifyContent: 'center', 
    padding: '0.4% 0',
}));

export default AnnouncementBarComponentStyled