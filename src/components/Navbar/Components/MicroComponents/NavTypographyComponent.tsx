// React Imports
import { ReactNode } from 'react'; 

// MUI Imports
import { Typography } from '@mui/material';


// Hooks


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