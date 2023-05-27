import React from 'react';

// MUI Components
import { Box, Button, IconButton, Stack, Typography } from '@mui/material';

// MUI Icons
import FingerprintIcon from '@mui/icons-material/Fingerprint';

const Logo = () => {
  return (
    <Box sx={{ flexGrow: 1 }} >
    <Button aria-label='Logo' href='/'>
      <Stack direction='row' spacing={1}>
        
        <Typography variant='h6' component='div' sx={
          { 
            flexGrow: 1,
            alignItems: 'center' 
          }
        }>
          <Button aria-label='Logo' color='inherit'>
            <FingerprintIcon />
            Virtual Bazaar
          </Button>
        </Typography>
      </Stack>
    </Button>  
  </Box>
  )
}

export default Logo
