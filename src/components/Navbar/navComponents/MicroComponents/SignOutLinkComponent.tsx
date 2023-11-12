// Components
import { Box, Button } from '@mui/material';
import NavTypographyComponent from './NavTypographyComponent';
import { useDrawerToggle } from '../../../../hooks/useDrawerToggle';
import { useLogin } from '../../../../hooks/useLogin';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../app/store';

const SignOutLinkComponent = () => {
  const { loginPopoverOpen, closeLoginPopover } = useDrawerToggle();
  const { logoutUser } = useLogin();
  const isLoggedIn = useSelector((state: RootState) => state.userState.loggedIn);
  const handleClick = () => {
    if(loginPopoverOpen) {
      closeLoginPopover();
    }
    if(isLoggedIn) {
      logoutUser();
    }
  };
  return (
    <Box display={'flex'} alignItems={'center'}>
      <Button onClick={handleClick} variant={'text'} sx={{ textTransform: 'none' }}>
        <NavTypographyComponent>Sign Out</NavTypographyComponent>
      </Button>
    </Box>
  )
}

export default SignOutLinkComponent
