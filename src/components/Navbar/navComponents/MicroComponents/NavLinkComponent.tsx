// Components
import { Box } from '@mui/material';
import { useCallback } from 'react';
import { useDrawerToggle } from '../../../../hooks/useDrawerToggle';
import { NavLinkStyled } from '../../../StyledComponents/NavbarStyled/NavbarStyled';
import NavTypographyComponent from './NavTypographyComponent';

interface NavLinkComponentProps {
    to: string;
    justify?: string;
}

const formatLinkText = (str: string) => {
    const strOut = str.slice(1)
    if(strOut === 'shop/clothing') return 'Shop'
    return strOut == 'about' ? 'About Us' :(
        strOut.split('-').map(word => word[0].toUpperCase() + word.substring(1)).join(' ')
    )
}



const NavLinkComponent = ({ to, justify }: NavLinkComponentProps): JSX.Element => {
    const linkText = formatLinkText(to);
    const { closeAllDrawers } = useDrawerToggle();
    const handleClick = useCallback(() => {
        closeAllDrawers();
    }, [closeAllDrawers])
    return (
            <Box
                sx={{
                    justifyContent: justify ? justify : 'inherit',
                    alignItems: 'center',
                }}
                onClick={(e) => { e.stopPropagation(); handleClick(); }} 
                onTouchStart={(e) => { e.stopPropagation(); }}
            >
                <NavLinkStyled to={to} replace aria-label={`Link to ${linkText}`} 
                    sx={{
                        display: 'flex',
                        justifyContent: justify ? justify : 'inherit',
                        alignItems: 'center',
                        }}>
                    <NavTypographyComponent>{linkText}</NavTypographyComponent>    
                </NavLinkStyled>
            </Box>
    )
    }

export default NavLinkComponent
