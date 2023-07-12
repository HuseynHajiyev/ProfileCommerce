import { Drawer } from '@mui/material';
import { styled } from '@mui/system';
import theme from '../../../themes/theme';

const SearchDrawerStyled = styled(Drawer)(() => ({
    display: 'flex',
    justifyContent: 'center',
    zIndex: theme.zIndex.drawer + 1,
    paddingBottom: '2%',
    [theme.breakpoints.up('xs')]: {
        '& .MuiDrawerPaper': {
            paddingTop: '17%',
        }
    },
    [theme.breakpoints.up('sm')]: {
      '& .MuiDrawerPaper': {
          paddingTop: '15%',
      }
    },
    [theme.breakpoints.up('md')]: {
      '& .MuiDrawer-paper': {
          paddingTop: '4%',
      }
    },
    [theme.breakpoints.up('lg')]: {
        '& .MuiDrawerPaper' : {
            paddingTop: '5.4vh',
        }
    },
    [theme.breakpoints.up('xl')]: {
        '& .MuiDrawerPaper' :{
            paddingTop: '5.4vh',
        }
    },
    [`@media(min-width: ${theme.breakpoints.values.xl + 100}px)`]: {
        '& .MuiDrawerPaper' :{
            paddingTop: '5vh',
        }
    },
}));
    

export default SearchDrawerStyled;