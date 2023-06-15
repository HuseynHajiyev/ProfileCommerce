// Desc: Main App component

// React imports
import { Routes, Route } from 'react-router-dom';

// MUI imports
import {  CssBaseline, Box, ThemeProvider } from '@mui/material';

// Pages
import Home from './pages/Home/Home';
import Store from './pages/Store/Store';
import About from './pages/About/About';
import NewArrivals from './pages/NewArrivals/NewArrivals';
import NotFound404 from './pages/NotFound404/NotFound404';

// Components
import Navbar from './components/Navbar/Navbar';

// Context
import { IsMobileProvider } from './context/IsMobileContext';

// Theme
import theme from './themes/theme';

const App = () => {


  return (
    <>
    <IsMobileProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <Navbar />  
          <Box sx={
            {
              paddingLeft: '10%',
              paddingRight: '10%',
            }
          }>
            <Routes>
              <Route path="/" element={ <Home />} />
              <Route path="/new-arrivals" element={ <NewArrivals/>} />
              <Route path="/store" element={ <Store />} />
              <Route path="/about" element={ <About />} />
              <Route path="/404-not-found" element={ <NotFound404 />} />
            </Routes>
        </Box>
      </ThemeProvider>
    </IsMobileProvider>
    </>
  )
}

export default App
