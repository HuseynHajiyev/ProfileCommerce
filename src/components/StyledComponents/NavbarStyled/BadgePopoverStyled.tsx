import { Popover, styled, Box, Grid } from "@mui/material";
import theme from "../../../themes/theme";

export const BadgePopoverStyled = styled(Popover)(() => ({
    '& .MuiPopover-paper': {
        width: '25%',
        height: '81vh',
        border: '2px solid black',
        borderRadius: '0px',
        position: 'relative', 
        overflow: 'visible',
    },
    [theme.breakpoints.up('lg')]: {
      '& .MuiPopover-paper': {
          width: '30%',
          height: '81vh',
          border: '2px solid black',
          borderRadius: '0px',
          position: 'relative', 
          overflow: 'visible',
      },
    },
    '& .popoverArrow': { // create another style for our arrow
        position: 'absolute',
        top: '-2.2%',  // adjust as needed
        right: '10.69%',
        borderWidth: '7px',
        borderStyle: 'solid',
        borderColor: 'transparent transparent black transparent',
        zIndex: theme.zIndex.drawer + 400,
    }
}));

export const BadgeContainerStyled = styled(Box)(() => ({
    width: '100%',
    display: 'flex',
    border: '1px solid black',
    padding: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    '& *': {
      position: 'static',
      zIndex: 0,
    },
    [theme.breakpoints.up('sm')]: {
      padding: '4.5%',
    },
    [`@media (min-width: ${theme.breakpoints.values.sm}px) and (max-width: ${theme.breakpoints.values.md}px)`]: {
      '&' : {
        width : '50%',
      }
    },
    [theme.breakpoints.up('md')]: {
      paddingY: '5%',
      width: '50%',
    },
    [theme.breakpoints.up('lg')]: {
      width: '100%',
    },
}));
    
export const BadgePopoverContentGridStyled = styled(Grid)(() => ({
    display:"flex",
    flexDirection:'column',
    flexWrap: 'wrap',
    maxHeight: '100%',
    [theme.breakpoints.up('lg')]: {
        minHeight:'inherit',
    },
}));