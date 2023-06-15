// Components
import NavItemContainerStyled from '../../../StyledComponents/NavItemContainerStyled'
import NavTypographyComponent from '../../../Components/NavTypographyComponent'
import NavLinkStyled from '../../LeftSide/StyledComponents/NavLinkStyled'

const SignInLinkComponent = () => {
  return (
    <NavItemContainerStyled>
      <NavLinkStyled to='/404-not-found'>
        <NavTypographyComponent>Sign In</NavTypographyComponent>
      </NavLinkStyled>
    </NavItemContainerStyled>
  )
}

export default SignInLinkComponent
