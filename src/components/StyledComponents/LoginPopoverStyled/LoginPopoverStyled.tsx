import { Popover, styled } from "@mui/material";


export const LoginPopoverStyled = styled(Popover)({
    '& .MuiPopover-paper': {
        height: 'auto',
        borderRadius: '0px',
        boxShadow: '0px 0px 24px rgba(0, 0, 0, 0.25)',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '5%',
        overflow: 'hidden',
    },
})