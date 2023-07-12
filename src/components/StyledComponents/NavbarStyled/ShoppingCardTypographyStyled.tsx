import { Typography, styled } from "@mui/material";
import { NavLink, NavLinkProps } from "react-router-dom";
import theme from "../../../themes/theme";


export const ProductTitleStyled = styled(Typography)(() => ({
    fontSize: '0.8rem',
    fontWeight: 'bold',
    fontFamily: 'muli',
    [theme.breakpoints.up('sm')]: {
        fontSize: '2.4rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '2rem',
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: '0.8rem',
    },
}));

export const ProductPriceStyled = styled(Typography)(() => ({
    fontSize: '0.8rem',
    fontWeight: 'bold',
    fontFamily: 'muli',
    [theme.breakpoints.up('sm')]: {
        fontSize: '1.8rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '1.5rem',
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: '0.8rem',
    },
}));

export const ProductDescriptionStyled = styled(Typography)(() => ({
    fontSize: '0.6rem',
    fontWeight: 'lighter',
    color: '#9C9C9C', 
    fontFamily: 'muli',
    [theme.breakpoints.up('sm')]: {
        fontSize: '1.9rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '1.5rem',
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: '0.6rem',
    },
}));

export const TotalStyled = styled(Typography)(() => ({

    fontSize: '0.9375rem',
    fontWeight: 'bold',
    fontFamily: 'muli',
    [theme.breakpoints.up('sm')]: {
        fontSize: '2.1rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '1.8rem',
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: '1rem',
    },
}));

export const ShippingStyled = styled(Typography)(() => ({
    fontSize: '0.9375rem',
    fontWeight: 'lighter',
    color: '#9C9C9C', 
    fontFamily: 'muli',
    [theme.breakpoints.up('sm')]: {
        fontSize: '2rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '1.8rem',
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: '1rem',
    },
}));

export const ViewBagStyled = styled(Typography)(() => ({
    fontSize: '0.9rem',
    color: '#black', 
    fontFamily: 'muli',
    [theme.breakpoints.up('md')]: {
        fontSize: '2rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '1.8rem',
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: '0.9rem',
    },
}));

export const ViewBagLinkStyled = styled(NavLink)<NavLinkProps>`
    text-decoration: none;
    display: block;
    padding: 0;
    &:visited {
        color: inherit;
    }
`;