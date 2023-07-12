import { FormControl } from '@mui/material';
import { styled } from '@mui/system';
import theme from '../../../themes/theme';

const FormControlStyled = styled(FormControl)({
    width: '100%',
    position: 'static',
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
        paddingTop: '6.5vw',
    },
    [`@media (min-width: ${theme.breakpoints.values.md + 200}px) and (max-width: ${theme.breakpoints.values.lg}px)`]: {
        paddingTop: '5vw',
    },    
    [theme.breakpoints.up('lg')]: {
        paddingTop: '4vw',
    },
    [`@media (min-width: ${theme.breakpoints.values.lg + 100}px) and (max-width: ${theme.breakpoints.values.xl + 200}px)`]: {
        paddingTop: '3.7vw',
    },    
    [theme.breakpoints.up('xl')]: {
            paddingTop: '2vw',
    },
    [`@media(min-width: ${theme.breakpoints.values.xl + 100}px)`]: {
            paddingTop: '2.7vw',
    },
    [`@media(min-width: ${theme.breakpoints.values.xl + 200}px)`]: {
            paddingTop: '2.4vw',
    },
});


export default FormControlStyled;