import { Popover, styled } from "@mui/material";
import theme from "../../../themes/theme";

export const AccountPopoverStyled = styled(Popover)(() => ({
    '& .MuiPopover-paper': {
        width: '10vw',
        height: 'fit-content',
        border: '2px solid black',
        borderRadius: '0px',
        position: 'absolute', 
        overflow: 'visible',
    },
    [theme.breakpoints.up('lg')]: {
      '& .MuiPopover-paper': {
          width: '10vw',
          height: 'fit-content',
          border: '2px solid black',
          borderRadius: '0px',
          position: 'absolute', 
          overflow: 'visible',
      },
    },
}));