import { Popover, styled } from "@mui/material";

export const AccountPopoverStyled = styled(Popover)(() => ({
    '& .MuiPopover-paper': {
        width: '10%',
        border: '2px solid black',
        borderRadius: '0px',
        position: 'absolute', 
    },
}));
