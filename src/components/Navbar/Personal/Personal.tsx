import React from 'react';

// MUI Components
import { Box, IconButton, Stack } from '@mui/material';

// MUI Icons
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalMallIcon from '@mui/icons-material/LocalMall';

const Personal = () => {
  return (
    <Box sx={{ flexGrow: 1 }} >
        <Stack direction='row' justifyContent='right'>
            <IconButton size='large' aria-label='User_Account' color='inherit'>
                <AccountCircleIcon />
            </IconButton>
        </Stack>
    </Box>
  )
}

export default Personal
