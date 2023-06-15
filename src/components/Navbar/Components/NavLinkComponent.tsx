// Components
import NavLinkStyled from './LeftSide/StyledComponents/NavLinkStyled';
import NavItemContainerStyled from '../StyledComponents/NavItemContainerStyled';
import NavTypographyComponent from './NavTypographyComponent';

interface LinkComponentProps {
    to: string;
}

const CapitalizeEachWord = (str: string) => {
    return str.split('-').map(word => word[0].toUpperCase() + word.substring(1)).join(' ');
}
  

const LinkComponent = ({ to }: LinkComponentProps): JSX.Element => {
    const linkText = CapitalizeEachWord(to.slice(1));
    return (
        <NavItemContainerStyled>
            <NavLinkStyled to={to} aria-label={`Link to ${linkText}`}>
                <NavTypographyComponent>{linkText}</NavTypographyComponent>    
            </NavLinkStyled>
        </NavItemContainerStyled>
    )
    }

export default LinkComponent
