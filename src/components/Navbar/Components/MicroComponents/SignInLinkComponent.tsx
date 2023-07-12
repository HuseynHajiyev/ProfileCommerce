// Components
import { NavItemContainerLeftStyled } from '../../../StyledComponents/NavbarStyled/NavbarStyled';
import NavTypographyComponent from './NavTypographyComponent';
import { NavLinkStyled } from '../../../StyledComponents/NavbarStyled/NavbarStyled';

const SignInLinkComponent = () => {
  return (
    <NavItemContainerLeftStyled>
      <NavLinkStyled to='/404-not-found'>
        <NavTypographyComponent>Sign In</NavTypographyComponent>
      </NavLinkStyled>
    </NavItemContainerLeftStyled>
  )
}

export default SignInLinkComponent
