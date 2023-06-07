// React-Router Imports
import { NavLink, NavLinkProps } from 'react-router-dom';

// MUI Imports
import { styled } from '@mui/system';

const NavLinkStyled = styled(NavLink)<NavLinkProps>`
    color: #000;
    text-decoration: none;
    transition: color 0.2s;
    display: block;
    font-size: 15px;
    padding: 0;
    &:hover {
        color: #888;
    }

    &:active {
        border-bottom: 2px solid rgba(0, 0, 0, 0.3);
    }

    &.active {
        border-bottom: 2px solid rgba(0, 0, 0, 0.3);
    }
`;

export default NavLinkStyled;
