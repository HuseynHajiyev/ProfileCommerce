import React from 'react';
import { Routes, Route } from 'react-router-dom';

// MUI imports
import {  CssBaseline, Box, ThemeProvider} from '@mui/material';

// Pages
import Home from './pages/Home/Home.tsx';
import Store from './pages/Store/Store.tsx';
import About from './pages/About/About.tsx';

// NavbarComponents
import Navbar from './components/Navbar/Navbar.tsx';

// Theme
import theme from './theme.tsx';

const App = () => {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Navbar />  
        <Box sx={
          {
            paddingTop: '8%',
            paddingLeft: '10%',
            paddingRight: '10%',
          }
        }>
          <Routes>
            <Route path="/" element={ <Home />} />
            <Route path="/store" element={ <Store />} />
            <Route path="/about" element={ <About />} />
          </Routes>
        </Box>
      </ThemeProvider>
    </>
  )
}

export default App
