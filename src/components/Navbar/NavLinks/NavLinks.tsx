import React from 'react'

// MUI Components
import { Box, Button, Stack, Typography } from '@mui/material'

// Router Nav
import { NavLink } from 'react-router-dom';


const NavLinks = () => {
  return (
    <Box sx={{ flexGrow: 1 }} >
        <Stack direction='row' spacing={4} justifyContent="center">
          <Button component={NavLink} to='/about'>
            <Typography> About </Typography>
          </Button>
          <Button component={NavLink} to='/store'>
            <Typography> Store </Typography>
          </Button>
        </Stack>
    </Box>  
  )
}

export default NavLinks
