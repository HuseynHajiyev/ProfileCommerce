import { AppBar, Drawer, Box } from '@mui/material';
import { styled } from '@mui/system';
import { NavLink, NavLinkProps } from 'react-router-dom';
import theme from '../../../themes/theme';


export const NavbarStyled = styled(AppBar)({
    boxShadow: 'none',
    borderBottom: 'none',
    position: 'sticky',
    zIndex: theme.zIndex.drawer + 5,
    paddingRight: '0',
    '&.MuiPaper-root .MuiPaper-elevation': {
        paddingRight: '0',
    },
});

export const NavigationDrawerStyled = styled(Drawer)(() => ({
    display: 'flex',
    justifyContent: 'center',
    maxWidth: '100%',
    width: '100%',
    zIndex: theme.zIndex.drawer + 1,
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
            paddingTop: '12%',
            display: 'flex',
            alignItems: 'center',
    }
    },
}));    


export const NavItemContainerLeftStyled = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: '1 1 0px;',
    '&:first-of-type': {
        justifyContent: 'flex-start',
    },
    '&:nth-of-type(2)': {
        justifyContent: 'center',
    },
    [theme.breakpoints.down('lg')]: {
        '&': {
            justifyContent: 'center',
        },
    },
}));


export const NavItemContainerRightStyled = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: '1 1 0px;',
    '&:first-of-type': {
        justifyContent: 'flex-start',
    },
    '&:nth-of-type(2)': {
        justifyContent: 'center',
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