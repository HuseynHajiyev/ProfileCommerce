import React from 'react';
import { Routes, Route } from 'react-router-dom';

// MUI imports
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, ThemeProvider} from '@mui/material';

// Pages
import Home from './pages/Home/Home.tsx';
import Store from './pages/Store/Store.tsx';
import About from './pages/About/About.tsx';

// Components
import Navbar from './components/Navbar/Navbar.tsx';

// Theme
import theme from './theme.tsx';

const App = () => {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Navbar />  
        <Container sx={
          {
            mb: 2,
          }
        }>
          <Routes>
            <Route path="/" element={ <Home />} />
            <Route path="/store" element={ <Store />} />
            <Route path="/about" element={ <About />} />
          </Routes>
        </Container>
      </ThemeProvider>
    </>
  )
}

export default App
