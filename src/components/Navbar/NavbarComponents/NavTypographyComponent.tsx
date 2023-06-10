import { Typography } from '@mui/material';

import { ReactNode } from 'react'; 

interface NavLinkTypographyStyledProps {
    children: ReactNode;
}


const NavTypographyComponent = ({children} : NavLinkTypographyStyledProps) => {
  return (
    <Typography variant='h6' fontFamily='Mulish'>
        {children}
    </Typography>
  )
}

export default NavTypographyComponent