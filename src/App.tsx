// Desc: Main App component

// React imports
import { Routes, Route } from 'react-router-dom';


// MUI imports
import {  CssBaseline, Box, ThemeProvider, useMediaQuery} from '@mui/material';

// Pages
import Home from './pages/Home/Home.tsx';
import Store from './pages/Store/Store.tsx';
import About from './pages/About/About.tsx';

// NavbarComponents
import Navbar from './components/Navbar/Navbar.tsx';

// Theme
import theme from './themes/theme.tsx';

const App = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <Navbar isMobile={isMobile}/>  
          <Box sx={
            {
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
