// React Imports
import { ReactNode } from 'react'; 

// MUI Imports
import { Typography } from '@mui/material';
import { useIsMobile } from '../../../../hooks/useIsMobile';


// Hooks


interface NavLinkTypographyStyledProps {
    children: ReactNode;
}


const NavTypographyComponent = ({children} : NavLinkTypographyStyledProps) => {
  const isDesktop = useIsMobile('desktop');
  return (
    <Typography variant={ !isDesktop ? 'body1' : 'h6'} fontFamily='Mulish'>
        {children}
    </Typography>
  )
}

export default NavTypographyComponent