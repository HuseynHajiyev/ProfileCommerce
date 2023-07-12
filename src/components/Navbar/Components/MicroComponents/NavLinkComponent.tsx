// Components
import { NavLinkStyled } from '../../../StyledComponents/NavbarStyled/NavbarStyled';
import { NavItemContainerLeftStyled } from '../../../StyledComponents/NavbarStyled/NavbarStyled';
import NavTypographyComponent from './NavTypographyComponent';

interface NavLinkComponentProps {
    to: string;
    justify?: string;
}

const formatLinkText = (str: string) => {
    const strOut = str.slice(1)
    return strOut == 'about' ? 'About Us' :(
        strOut.split('-').map(word => word[0].toUpperCase() + word.substring(1)).join(' ')
    )
}



const NavLinkComponent = ({ to, justify }: NavLinkComponentProps): JSX.Element => {
    const linkText = formatLinkText(to);
    return (
            <NavItemContainerLeftStyled
                sx={{justifyContent: justify ? justify : 'inherit'}}
                onClick={(e) => { e.stopPropagation(); }} 
                onTouchStart={(e) => { e.stopPropagation(); }} 
            >
                <NavLinkStyled to={to} replace aria-label={`Link to ${linkText}`}>
                    <NavTypographyComponent>{linkText}</NavTypographyComponent>    
                </NavLinkStyled>
            </NavItemContainerLeftStyled>
    )
    }

export default NavLinkComponent
