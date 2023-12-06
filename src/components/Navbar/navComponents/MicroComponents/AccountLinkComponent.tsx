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
  const newOrdersLength = useSelector((state: RootState) => state.userState.newOrdersLength);
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
    <>
      <Box position={'relative'} display={'flex'} alignItems={'center'} justifyContent={'flex-start'} ref={anchorRef}>
        <Box display={'flex'} alignItems={'center'}>
          <Box position={'relative'}>
            {newOrdersLength <= 0 ? null : (
                <Box component={'span'} sx={{
                  position: 'absolute',
                  top: '-0.3rem',
                  right: '-0.5rem',
                  padding: '0px 4px',
                  borderRadius: '100%',
                  background: 'red',
                  color: 'white',
                  fontSize: '10px',
                }}>{newOrdersLength > 100 ? `99+` : newOrdersLength}</Box>
              )}
              <Button onClick={handleClick} variant={'text'} sx={{ textTransform: 'none' }}>
                <NavTypographyComponent>Account</NavTypographyComponent>
              </Button>
          </Box>
        </Box>

      </Box>
      <AccountPopover anchorRef={anchorRef}/>
    </>
  )
}

export default AccountLinkComponent