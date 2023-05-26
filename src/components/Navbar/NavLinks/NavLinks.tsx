import React from 'react'

// MUI Components
import { Box, Button, Stack } from '@mui/material'

const NavLinks = () => {
  return (
    <Box sx={{ flexGrow: 1 }} >
        <Stack direction='row' spacing={2} justifyContent="center">
            <Button color='inherit' href='/'>Home</Button>
            <Button color='inherit' href='/store'>Store</Button>
            <Button color='inherit' href='/about'>About</Button>
        </Stack>
    </Box>  
  )
}

export default NavLinks
