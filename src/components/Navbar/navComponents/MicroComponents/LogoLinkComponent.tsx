// React Router
import { NavLink } from 'react-router-dom'

// MUI Imports
import { Button, Typography } from '@mui/material'


// Components
import { useIsMobile } from '../../../../hooks/useIsMobile'


const LogoLinkComponent = () => {
  const isMobile = useIsMobile('mobile');
  const isTablet = useIsMobile('tablet');
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
            {isMobile || isTablet ? `P+` : `Participle+`}
          </Typography>
        </Button>
      </NavLink>
  )
}

export default LogoLinkComponent
