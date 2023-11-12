import { Box, styled } from '@mui/material'

import theme from '../../../themes/theme'

const AnnouncementBarComponentStyled = styled(Box)(() => ({
    display: 'flex', 
    width: '100%', 
    backgroundColor: '#F5F5F5', 
    justifyContent: 'center', 
    zIndex: theme.zIndex.drawer + 5,
    padding: '0.4% 0',
    position: 'sticky',
}));

export default AnnouncementBarComponentStyled