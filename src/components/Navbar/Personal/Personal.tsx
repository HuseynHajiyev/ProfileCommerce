import React, { useState } from 'react';

// MUI Components
import { Box, Button, IconButton, Stack, Typography } from '@mui/material';

// MUI Icons
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalMallIcon from '@mui/icons-material/LocalMall';

const Personal = () => {
  const [userName, setUserName] = useState('Guest')
  return (
    <Box sx={{ flexGrow: 1 }} >
        <Stack direction='row' justifyContent='right' color='inherit'>
            <IconButton size='large' aria-label='User_Cart'>
                <LocalMallIcon />
            </IconButton>
            <Button variant='text' sx={{ mx: 2 }}>
              <Stack direction='row' spacing={1}>
                <Typography variant='body1'>
                  {userName}
                </Typography>
                <AccountCircleIcon />
              </Stack>
          </Button>
        </Stack>
    </Box>
  )
}

export default Personal
