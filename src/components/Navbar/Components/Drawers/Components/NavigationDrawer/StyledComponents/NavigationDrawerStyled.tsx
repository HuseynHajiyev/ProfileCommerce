import { Drawer, DrawerProps } from '@mui/material';
import { styled } from '@mui/system';


import { ReactNode } from 'react';
import theme from '../../../../../../../themes/theme';




interface StyledDrawerProps extends DrawerProps {
    children?: ReactNode;
  }

const NavigationDrawerStyled = styled(({ children, ...other }: StyledDrawerProps) => (
    <Drawer anchor="top" {...other}>
      {children}
    </Drawer>
  ))({
        width: '100%',  // Adjust width here
        flexShrink: 0,            
        '& .MuiDrawer-paper': {
        [theme.breakpoints.up('xs')]: {
            top: '5%',
        },
        [theme.breakpoints.up('sm')]: {
            top: '6%',
        },
        [theme.breakpoints.up('md')]: {
            top: '7.2%',
        },
        width: '100%',
        paddingTop: "7%",
        paddingBottom: "4%"
        },
})

export default NavigationDrawerStyled;