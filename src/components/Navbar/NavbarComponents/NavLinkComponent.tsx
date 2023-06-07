// MUI Imports
import { Typography } from '@mui/material';

// NavbarComponents
import NavLinkStyled from './StyledComponents/NavLinkStyled';
import NavItemContainerStyled from './StyledComponents/NavItemContainerStyled';

interface LinkComponentProps {
    to: string;
}

const LinkComponent = ({ to }: LinkComponentProps): JSX.Element => {
    const linkText = (to === '/') ? 'Home' : to.slice(1).charAt(0).toUpperCase() + to.slice(2);
    return (
        <NavItemContainerStyled>
            <NavLinkStyled to={to} aria-label={`Link to ${linkText}`}>
                <Typography variant='body1' fontFamily='Mulish'>{linkText}</Typography>    
            </NavLinkStyled>
        </NavItemContainerStyled>
    )
    }

export default LinkComponent
