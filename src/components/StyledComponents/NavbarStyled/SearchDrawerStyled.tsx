import { Drawer, styled } from '@mui/material';
import theme from '../../../themes/theme';

const SearchDrawerStyled = styled(Drawer)(() => ({
    display: 'flex',
    justifyContent: 'center',
    zIndex: theme.zIndex.drawer - 1,
    paddingBottom: '2%',
    '& .MuiDrawerPaper': {
        zIndex: theme.zIndex.drawer - 1,
    },
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
          paddingTop: '5.1%',
      }
    },
    [theme.breakpoints.up('lg')]: {
        '& .MuiDrawerPaper' : {
            paddingTop: '5%',
        }
    },
    [theme.breakpoints.up('xl')]: {
        '& .MuiDrawerPaper' :{
            paddingTop: '5%',
        }
    },
    [`@media(min-width: ${theme.breakpoints.values.xl + 100}px)`]: {
        '& .MuiDrawerPaper' :{
            paddingTop: 'clamp(2rem, 5vw, 4rem)',
        }
    },
}));
    

export default SearchDrawerStyled;