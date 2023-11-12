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
  const isLargeDesktop = useIsMobile('largeDesktop');
  return (
    <Typography variant='body2' fontFamily='Mulish' fontSize={!isDesktop && !isLargeDesktop ? '1rem' : 'inherit'}>
        {children}
    </Typography>
  )
}

export default NavTypographyComponent