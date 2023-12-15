import { Popover, styled, Box, Stack } from "@mui/material";
import theme from "../../../themes/theme";

export const BadgePopoverStyled = styled(Popover)(() => ({
    zIndex: 2000,
    '& .MuiPopover-paper': {
      width: '80vw', 
      height: '81vh', 
      border: '2px solid black',
      borderRadius: '0px',
      position: 'relative',
      overflow: 'visible',
      [theme.breakpoints.up('sm')]: {
        width: '50vw', 
      },
      [theme.breakpoints.up('md')]: {
        width: '35vw', 
      },
      [theme.breakpoints.up('lg')]: {
        width: '30vw', 
      },
      [theme.breakpoints.up('xl')]: {
        width: '25vw', 
      },
    },
    '& .popoverArrow': {
      zIndex: 1999,
      position: 'absolute',
      top: '-15px',
      right: '10.69%',
      borderWidth: '7px',
      borderStyle: 'solid',
      borderColor: 'transparent transparent black transparent',
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
    
export const BadgePopoverContentGridStyled = styled(Stack)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: '100%',
  borderRadius: '0px',
  boxShadow: 'none',
  borderBottom: `1px solid ${theme.palette.divider}`,
  height: '100%',
  padding: '0',
  '&:last-child': {
      borderBottom: 'none', // Removes the border for the last item
  },
}));