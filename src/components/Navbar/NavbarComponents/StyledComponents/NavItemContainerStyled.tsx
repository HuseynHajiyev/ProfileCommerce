import { Box } from '@mui/material';
import { styled } from '@mui/system';

const NavItemContainerStyled = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    '&:first-of-type': {
        justifyContent: 'flex-start',
    },
    '&:nth-of-type(2)': {
        justifyContent: 'center',
    },
    flex: 1,
}));

export default NavItemContainerStyled;