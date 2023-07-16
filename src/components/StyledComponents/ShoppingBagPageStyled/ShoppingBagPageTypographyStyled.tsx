import { Typography, styled } from "@mui/material";

export const ShoppingBagPageTitleStyled = styled(Typography)({
    fontSize: '2rem',
    fontWeight: '500',
    overflow: 'hidden',
    fontFamily: '"Palaquin Dark" sans-serif',
})

export const GridHeaderRowTypographyStyled = styled(Typography)({
    display: 'inline-block',
    lineHeight: '1.5rem',
    maxHeight: '3rem',
    overflow: 'hidden',
    fontSize: 'clamp(0.8rem, 60%, 1.2rem)',
})

export const ShoppingBagPageTypographyStyled = styled(Typography)({
    fontWeight: '600',
    lineHeight: '1.5rem',
    maxHeight: '3rem',
    minHeight: '3rem',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    fontSize: 'clamp(0.6rem, 100%, 0.8rem)',
})

export const ShoppingBagProductContentTypographyStyled = styled(Typography)({
    fontWeight: 'lighter',
    lineHeight: '1.5rem',
    minHeight: '3rem',
    maxHeight: '3rem',
    overflow: 'hidden',
    fontSize: 'clamp(0.6rem, 100%, 0.8rem)',
    display: 'flex',
    alignItems: 'center'
})

export const BagEmptyTypographyStyled = styled(Typography)({
    fontWeight: 'regular',
    lineHeight: '1.5rem',
    maxHeight: '3rem',
    overflow: 'hidden',
    fontSize: 'clamp(1.5rem, 80%, 2.5rem)',
})


// Summary

export const SummaryTitleTypographyStyled = styled(Typography)({
    fontWeight: 'regular',
    fontSize: 'clamp(1.5rem, 100%, 2.5rem)',
    display: 'inline-block',
    lineHeight: '1.5rem',
    maxHeight: '3rem',
    overflow: 'hidden',
})