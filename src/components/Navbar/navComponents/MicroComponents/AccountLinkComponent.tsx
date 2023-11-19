// Components
import { Box, Button } from '@mui/material';
import NavTypographyComponent from './NavTypographyComponent';
import { useDrawerToggle } from '../../../../hooks/useDrawerToggle';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../app/store';
import AccountPopover from '../MacroComponents/AccountPopover';
import { useRef } from 'react';

const AccountLinkComponent = () => {
  const { loginPopoverOpen, accountPopoverOpen, closeLoginPopover, openAccountPopover, closeAccountPopover } = useDrawerToggle();
  const isLoggedIn = useSelector((state: RootState) => state.userState.loggedIn);
  const anchorRef = useRef<HTMLElement>(null);
  const handleClick = () => {
    if(loginPopoverOpen) {
      closeLoginPopover();
    }
    if(isLoggedIn && !accountPopoverOpen) {
      openAccountPopover();
    } else {
      closeAccountPopover
    }
  };
  return (
    <Box position={'relative'} display={'flex'} alignItems={'center'} justifyContent={'center'} ref={anchorRef}>
      <Box display={'flex'} alignItems={'center'}>
        <Button onClick={handleClick} variant={'text'} sx={{ textTransform: 'none' }}>
          <NavTypographyComponent>Account</NavTypographyComponent>
        </Button>
      </Box>
      <AccountPopover anchorRef={anchorRef}/>

    </Box>
  )
}

export default AccountLinkComponent