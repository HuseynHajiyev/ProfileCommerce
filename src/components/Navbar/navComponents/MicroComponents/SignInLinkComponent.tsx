// Components
import { Box, Button } from '@mui/material';
import NavTypographyComponent from './NavTypographyComponent';
import { useDrawerToggle } from '../../../../hooks/useDrawerToggle';

const SignInLinkComponent = () => {
  const { loginPopoverOpen, openLoginPopover, closeLoginPopover } = useDrawerToggle();
  const handleClick = () => {
    if(loginPopoverOpen) {
      closeLoginPopover();
    }
    else {
      openLoginPopover();
    }
  };
  return (
    <Box display={'flex'} alignItems={'center'}>
      <Button onClick={handleClick} variant={'text'} sx={{ textTransform: 'none' }}>
        <NavTypographyComponent>Sign In</NavTypographyComponent>
      </Button>
    </Box>
  )
}

export default SignInLinkComponent
