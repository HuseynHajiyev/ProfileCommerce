// NavbarComponents
import NavLinkStyled from '../StyledComponents/NavLinkStyled';
import NavItemContainerStyled from '../../NavbarComponents/StyledComponents/NavItemContainerStyled';
import NavTypographyComponent from '../../NavbarComponents/NavTypographyComponent';

interface LinkComponentProps {
    to: string;
}

const LinkComponent = ({ to }: LinkComponentProps): JSX.Element => {
    const linkText = (to === '/') ? 'Home' : to.slice(1).charAt(0).toUpperCase() + to.slice(2);
    return (
        <NavItemContainerStyled>
            <NavLinkStyled to={to} aria-label={`Link to ${linkText}`}>
                <NavTypographyComponent>{linkText}</NavTypographyComponent>    
            </NavLinkStyled>
        </NavItemContainerStyled>
    )
    }

export default LinkComponent
