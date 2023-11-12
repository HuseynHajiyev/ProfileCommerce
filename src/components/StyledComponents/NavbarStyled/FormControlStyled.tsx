import { FormControl, styled } from '@mui/material';
import theme from '../../../themes/theme';

const FormControlStyled = styled(FormControl)({
    width: '100%',
    position: 'static',
    // paddingTop: 'clamp(17vw, (100% * ((2.6vw - 17vw) * ((100vw - 360px) / (1920px - 360px)) + 17vw)), 2.6vw)',
    [theme.breakpoints.up('xs')]: {
        paddingTop: '17vw',
    },
    [theme.breakpoints.up('sm')]: {
        paddingTop: '15.5vw',
    },
    [`@media (min-width: ${theme.breakpoints.values.sm + 100}px) and (max-width: ${theme.breakpoints.values.md}px)`]: {
        paddingTop: '13.5vw',
    },    
    [theme.breakpoints.up('md')]: {
        paddingTop: '5%',
    },
    [`@media (min-width: ${theme.breakpoints.values.md + 200}px) and (max-width: ${theme.breakpoints.values.lg}px)`]: {
        paddingTop: '5.2vh',
    },    
    [theme.breakpoints.up('lg')]: {
        paddingTop: '4.5vw',
    },
    [`@media (min-width: ${theme.breakpoints.values.lg + 100}px) and (max-width: ${theme.breakpoints.values.xl + 200}px)`]: {
        paddingTop: '4vw',
    },    
    [theme.breakpoints.up('xl')]: {
            paddingTop: 'clamp(2rem, 3vw, 4rem)',
    },
    [`@media(min-width: ${theme.breakpoints.values.xl + 200}px)`]: {
            paddingTop: 'clamp(2rem, 1vw, 3rem)',
    },
});


export default FormControlStyled;