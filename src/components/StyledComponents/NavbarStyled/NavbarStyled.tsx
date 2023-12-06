import { AppBar, Drawer, Box, styled} from '@mui/material';
import { NavLink, NavLinkProps } from 'react-router-dom';
import theme from '../../../themes/theme';


export const NavbarStyled = styled(AppBar)({
    boxShadow: 'none',
    borderBottom: 'none',
    position: 'sticky',
    top: 0,
    zIndex: theme.zIndex.drawer + 5,
});

export const NavigationDrawerStyled = styled(Drawer)(() => ({
    display: 'flex',
    justifyContent: 'center',
    maxWidth: '100%',
    width: '100%',
    '& .MuiDrawerPaper': {
            display: 'flex',
            alignItems: 'center',
            paddingBottom: '3%',
    },
    '& .MuiBackdrop-root': {
            zIndex: theme.zIndex.drawer - 1000,
            display: 'none',
    },
    [theme.breakpoints.down('sm')]: {
    '& .MuiDrawerPaper': {
            paddingTop: '18%',
    }
    },
    [theme.breakpoints.up('md')]: {
    '& .MuiDrawer-paper': {
            paddingTop: 'clamp(11vw, 10%, 5vh)',
            display: 'flex',
            alignItems: 'center',
    }
    },
}));    




export const NavItemContainerRightStyled = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    flex: '1 1 0px;',
    '&:first-of-type': {
        justifyContent: 'center',
    },
    '&:nth-of-type(2)': {
        justifyContent: 'flex-start',
    },
    '&:last-of-type': {
        justifyContent: 'flex-end',
    },
    [theme.breakpoints.down('lg')]: {
        '&:last-of-type': {
            justifyContent: 'flex-end',
        },
        '&:first-of-type': {
            justifyContent: 'center',
        },
    },
}));

export const NavLinkStyled = styled(NavLink)<NavLinkProps>`
    text-decoration: none;
    transition: color 0.2s;
    display: block;
    padding: 0;
    color: inherit;
    &:hover {
        color: #888;
    }

    &:active {
        border-bottom: 2px solid rgba(0, 0, 0, 0.3);
    }

    &.active {
        border-bottom: 2px solid rgba(0, 0, 0, 0.3);
    }

    &:visited {
        color: inherit;
    }
`;