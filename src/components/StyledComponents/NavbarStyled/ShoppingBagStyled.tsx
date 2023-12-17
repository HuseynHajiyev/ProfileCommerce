import { Card, Box, IconButton, styled, Button, Stack } from '@mui/material';
import theme from '../../../themes/theme';

// Custom Components
import NavTypographyComponent from '../../Navbar/navComponents/MicroComponents/NavTypographyComponent';


export const ShoppingBagProductCardStyled = styled(Card)(({ theme }) => ({
    display: 'flex',
    width: '100%',
    borderRadius: '0px',
    boxShadow: 'none',
    borderBottom: `1px solid ${theme.palette.divider}`,
    padding: '5% 0',
    '&:last-child': {
        borderBottom: 'none', 
    },
}));


export const ShoppingBagCheckoutButtonStyled = styled(Button)(() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#000000',
    color: '#ffffff',
    padding: '5%',
    textTransform: 'none',
    fontWeight: 'bold',
    [theme.breakpoints.up('lg')]: {
        fontSize: '1rem',
        padding: '3%',
    },
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
    padding: '3%',
}));

export const ProductsGridStyled = styled(Stack)(() => ({
    padding: theme.spacing(0, 5),
}));
