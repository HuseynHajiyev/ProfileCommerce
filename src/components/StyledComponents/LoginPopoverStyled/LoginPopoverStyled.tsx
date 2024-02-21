import { Popover, styled } from "@mui/material";
import theme from "../../../themes/theme";


export const LoginPopoverStyled = styled(Popover)({
    zIndex: 1300,
    '& .MuiPopover-paper': {
        borderRadius: '0px',
        boxShadow: '0px 0px 24px rgba(0, 0, 0, 0.25)',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 'auto',
        maxWidth: 'calc(100% - 32px)',
        minWidth: { xs: '90vw', sm: '70vw', md: '50vw', lg: '40vw', xl: '30vw' },
        maxHeight: 'calc(100% - 32px)',
        overflow: 'hidden',
        zIndex: 2000,
        [theme.breakpoints.down('xs')]: {
            maxWidth: '90vw',
        },
        [theme.breakpoints.up('sm')]: {
        maxWidth: '70vw',
        minWidth: '300px',
        padding: theme.spacing(3),
        },
        [theme.breakpoints.up('md')]: {
        maxWidth: '50vw',
        padding: theme.spacing(4),
        },
        [theme.breakpoints.up('lg')]: {
        maxWidth: '40vw',
        },
        [theme.breakpoints.up('xl')]: {
        maxWidth: '30vw',
        },
    },
})