// MUI Imports
import { Typography } from '@mui/material'

// NavbarComponents
import NavItemContainerStyled from './StyledComponents/NavItemContainerStyled'

const SignInLinkComponent = () => {
  return (
    <NavItemContainerStyled>
        <Typography variant='body1' sx={{color: 'black', fontFamily:'Mulish'}}>Sign In</Typography>
    </NavItemContainerStyled>
  )
}

export default SignInLinkComponent
