import { Drawer } from '@mui/material';
import { styled } from '@mui/system';
import theme from '../../../../../themes/theme';

const DrawerStyled = styled(Drawer)(() => ({
    zIndex: theme.zIndex.drawer - 1000,
    paddingBottom: '2%',
    [theme.breakpoints.down('sm')]: {
      '& .MuiDrawerPaper': {
          paddingTop: '12%',
      }
    },
    [theme.breakpoints.up('md')]: {
      '& .MuiDrawer-paper': {
          paddingTop: '5.8%',
      }
    },
    [theme.breakpoints.up('lg')]: {
        '& .MuiDrawerPaper' : {

            paddingTop: '5.4%',
        }
    },
    [theme.breakpoints.up('xl')]: {
        '& .MuiDrawerPaper' :{
            paddingTop: '5%',
        }
    }
}));
    

export default DrawerStyled;