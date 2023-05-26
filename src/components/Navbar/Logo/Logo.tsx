import React from 'react';

// MUI Components
import { Box, IconButton, Stack, Typography } from '@mui/material';

// MUI Icons
import FingerprintIcon from '@mui/icons-material/Fingerprint';

const Logo = () => {
  return (
    <Box sx={{ flexGrow: 1 }} >
    <Stack direction='row' spacing={1}>
      
      <Typography variant='h6' component='div' sx={
        { 
          flexGrow: 1,
          alignItems: 'center' 
        }
      }>
        <IconButton size='large' edge='start' color='inherit' aria-label='Logo'>
          <FingerprintIcon />
        </IconButton>
        Virtual Bazaar
      </Typography>
    </Stack>
  </Box>
  )
}

export default Logo
