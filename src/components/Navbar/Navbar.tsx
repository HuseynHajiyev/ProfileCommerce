import { AppBar, Badge, Box, Button, Container, IconButton, Stack, Toolbar } from '@mui/material';
import React from 'react';
import { Typography } from '@mui/material';

// Components
import NavLinks from './NavLinks/NavLinks';
import Logo from './Logo/Logo';
import Personal from './Personal/Personal';





const Navbar = () => {
  return (
    <AppBar position='sticky' aria-label='Navbar' sx={
      {
        p: 1,
        backgroundColor: 'transparent',
        color: '#011627',
      }  
      
    }>
      <Toolbar>
        <Logo />
        <NavLinks />   
        <Personal />
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
