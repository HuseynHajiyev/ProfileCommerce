// React Router
import { NavLink } from 'react-router-dom'

// MUI Imports
import { Button, Typography } from '@mui/material'

const LogoLinkComponent = () => {
  return (
    <NavLink to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
        <Button aria-label='Logo' sx={{ textTransform: 'none', paddingTop: '0'}}>
          <Typography sx={
                {
                    color: 'black', 
                    fontFamily: 'Palanquin Dark', 
                    fontSize: '48px',
                    letterSpacing: '-0.055em'
                }
            }>
            Participle+
          </Typography>
        </Button>
      </NavLink>
  )
}

export default LogoLinkComponent
