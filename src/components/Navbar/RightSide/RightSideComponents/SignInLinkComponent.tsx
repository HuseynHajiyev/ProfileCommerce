// NavbarComponents
import NavItemContainerStyled from '../../NavbarComponents/StyledComponents/NavItemContainerStyled'
import NavTypographyComponent from '../../NavbarComponents/NavTypographyComponent'
import NavLinkStyled from '../../LeftSide/StyledComponents/NavLinkStyled'

const SignInLinkComponent = () => {
  return (
    <NavItemContainerStyled>
      <NavLinkStyled to=''>
        <NavTypographyComponent>Sign In</NavTypographyComponent>
      </NavLinkStyled>
    </NavItemContainerStyled>
  )
}

export default SignInLinkComponent
