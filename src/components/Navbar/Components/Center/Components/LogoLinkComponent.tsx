// React Router
import { NavLink } from 'react-router-dom'

// MUI Imports
import { Button, Typography } from '@mui/material'


// Components
import { useIsMobile } from '../../../../../hooks/UseIsMobile'


const LogoLinkComponent = () => {
  const isMobile = useIsMobile();
  return (
    <NavLink to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
        <Button aria-label='Logo' sx={{ textTransform: 'none', paddingTop: '0'}}>
          <Typography sx={
                {
                    color: 'black', 
                    fontFamily: 'Palanquin Dark', 
                    fontSize: isMobile ? '40px' :'48px',
                    letterSpacing: '-0.055em',
                }
            }>
            Participle+
          </Typography>
        </Button>
      </NavLink>
  )
}

export default LogoLinkComponent
