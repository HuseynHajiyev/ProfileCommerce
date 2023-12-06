import { Box, Stack } from '@mui/material';
import { useDrawerToggle } from '../../../../hooks/useDrawerToggle';
import { AccountPopoverStyled } from '../../../StyledComponents/AccountStyled/AccountPopoverStyled'
import PopoverSignOutLink from '../MicroComponents/AccountPopover/PopoverSignOutLink';
import PopoverAccountPageLink from '../MicroComponents/AccountPopover/PopoverAccountPageLink';
import { RefObject } from 'react';

interface AccountPopoverProps {
  anchorRef: RefObject<HTMLElement>;
}

const AccountPopover = ({anchorRef} : AccountPopoverProps) => {
  const {accountPopoverOpen, closeAccountPopover } = useDrawerToggle();
  return (
    <AccountPopoverStyled
      open={accountPopoverOpen}
      onClose={closeAccountPopover}
      anchorEl={anchorRef.current}
      disableScrollLock={ true }
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
    }}
    sx={{
      top: '1.5%',
      '& .MuiBackdrop-root': {
        maxWidth: '100vw',
      },
    }}
    >
      <Stack padding={'5%'}>
        <Box>
          <PopoverAccountPageLink />
        </Box>
        <Box>
           <PopoverSignOutLink />
        </Box>
      </Stack>
    </AccountPopoverStyled>
  )
}

export default AccountPopover