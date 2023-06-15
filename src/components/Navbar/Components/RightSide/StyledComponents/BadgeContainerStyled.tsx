import { styled } from '@mui/system';
import { Box } from '@mui/material';

const BadgeContainerStyled = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  border: '1px solid black',
  padding: '10%',
  '& *': {
    position: 'static',
    zIndex: 0,
  },
  [theme.breakpoints.up('sm')]: {
    padding: '5%',  // adjust padding for screens wider than 'sm' breakpoint
  },
  [theme.breakpoints.up('md')]: {
    padding: '10%',  // adjust padding for screens wider than 'md' breakpoint
    justifyContent: 'center',
  },
}));

export default BadgeContainerStyled;