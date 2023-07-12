import { Typography, styled } from "@mui/material";
import theme from "../../../themes/theme";

export const ShoppingBagPageTitleStyled = styled(Typography)({
    fontSize: '2rem',
    fontWeight: '500',
    fontFamily: '"Palaquin Dark" sans-serif',
    [theme.breakpoints.up('sm')]: {
        fontSize: '3rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '2.5rem',
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: '2rem',
    },
})

export const ShoppingBagPageTypographyStyled = styled(Typography)({
    fontWeight: '600',
    fontSize: '0.8rem',
    display: 'inline-block',
    [theme.breakpoints.up('sm')]: {
        fontSize: '1.6rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '1.2rem',
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: '0.8rem',
    },
})

export const ShoppingBagProductContentTypographyStyled = styled(Typography)({
    fontWeight: 'lighter',
    fontSize: '0.8rem',
    display: 'inline-block',
    [theme.breakpoints.up('sm')]: {
        fontSize: '1.6rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '1.2rem',
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: '0.8rem',
    },
})

export const GridHeaderRowTypographyStyled = styled(Typography)({
    fontWeight: '600',
    fontSize: '0.9rem',
    display: 'inline-block',
    [theme.breakpoints.up('sm')]: {
        fontSize: '1.6rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '1.2rem',
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: '0.8rem',
    },
})

export const BagEmptyTypographyStyled = styled(Typography)({
    fontWeight: 'regular',
    fontSize: '1.5rem',
    [theme.breakpoints.up('sm')]: {
        fontSize: '2.5rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '2rem',
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: '1.5rem',
    },
})

export const SummaryTitleTypographyStyled = styled(Typography)({
    fontWeight: 'regular',
    fontSize: '3rem',
    display: 'inline-block',
    [theme.breakpoints.up('sm')]: {
        fontSize: '2.5rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '2rem',
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: '1.5rem',
    },
})