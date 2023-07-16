import { Card, Box, IconButton, Grid } from '@mui/material';
import { styled } from '@mui/system';
import theme from '../../../themes/theme';

// Custom Components
import NavTypographyComponent from '../../Navbar/Components/MicroComponents/NavTypographyComponent';


export const ShoppingBagProductCardStyled = styled(Card)(() => ({
    display: 'flex', 
    width: '100%',  
    borderRadius: '0px',
    boxShadow: 'none',
    borderBottom: '1px solid #DDDDDD',
    padding: '0',
}))

export const ShoppingBagCheckoutButtonStyled = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#000000',
    color: '#ffffff',
    padding: '5%',
    fontSize: '0.8rem',
    textTransform: 'none',
    fontWeight: 'bold',
}))

export const ShoppingBagAddRemoveStyled = styled(IconButton)(() => ({
    padding:0,
}));


export const ShoppingBadgeTextStyled = styled(NavTypographyComponent)({
    padding: '0 4px',
    '& span' : {
        backgroundColor: 'transparent',
        color: '#000',
        whiteSpace: 'nowrap',
        '@media (min-width:600px)': {
            fontSize: '1rem',
          },
          '@media (min-width:960px)': {
            fontSize: '1rem',
          },
    },
});

export const ShoppingBagSubtotalStyled = styled(Box)(() => ({
    borderTop: '1px solid #D9D9D9', 
    padding: '3% 3% 3% 3%',
}));

export const ProductsGridStyled = styled(Grid)(() => ({
    flex: 8, 
    display: 'flex', 
    padding: '0 5%',
    maxHeight: 'calc(100vh * 8 / 12)',
    overflowY: 'scroll',
    '&::-webkit-scrollbar': {
        width: 10,
    },
    '&::-webkit-scrollbar-track': {
        backgroundColor: '#F1F1F1',
    },
    '&::-webkit-scrollbar-thumb': {
        backgroundColor: '#C4C4C4',
        borderRadius: 2,
    },

    [theme.breakpoints.up('md')]: {
        minHeight: '20vh',
        maxHeight: 'calc(100vh * 6 / 12)',
    },
    [theme.breakpoints.up('lg')]: {
        minHeight: '20vh',
        maxHeight: 'calc(100vh * 6 / 12)',
    },
    [theme.breakpoints.up('xl')]: {
        minHeight: '20vh',
        maxHeight: 'calc(100vh * 6 / 12)',
    }
}));
