// Desc: Main App component
// React imports
import { Routes, Route } from 'react-router-dom';

// MUI imports
import { Box, CssBaseline,GlobalStyles,ThemeProvider } from '@mui/material';

// Pages
import Home from './pages/Home/Home';
import Store from './pages/Store/Store';
import About from './pages/About/About';
import NewArrivals from './pages/NewArrivals/NewArrivals';
import NotFound404 from './pages/NotFound404/NotFound404';
import ShoppingBag from './pages/ShoppingBag/ShoppingBag';

// Components
import Navbar from './components/Navbar/Navbar';
import SearchBarDrawer from './components/Navbar/Components/MacroComponents/SearchBarDrawer';
import NavigationDrawer from './components/Navbar/Components/MacroComponents/NavigationDrawer';
import AnnouncementBarComponent from './components/Navbar/Components/MicroComponents/AnnouncementBarComponent';
import NavbarPlaceholder from './components/Placeholders/NavbarPlaceholder';

// Styled components
import PageContainerStyled from './components/StyledComponents/AppFileStyled/PagesContainerStyled';

// Context
import { IsMobileProvider } from './context/IsMobileContext';

// Theme
import theme from './themes/theme';

// Context
import { DrawerToggleProvider } from './context/navbarContext/DrawerToggleContext';

const App = () => {
  return (
    <IsMobileProvider>
      <ThemeProvider theme={theme}>
        <DrawerToggleProvider>
          <CssBaseline />
          <AnnouncementBarComponent />
            <NavbarPlaceholder />
            <SearchBarDrawer />
            <NavigationDrawer />
            <PageContainerStyled>
              <Navbar />
              <Routes>
                <Route path="/" element={ <Home />} />
                <Route path="/new-arrivals" element={ <NewArrivals/>} />
                <Route path="/store" element={ <Store />} />
                <Route path="/about" element={ <About />} />
                <Route path="/shopping-bag" element={ <ShoppingBag />} />
                <Route path="/404-not-found" element={ <NotFound404 />} />
              </Routes>
            </PageContainerStyled>
        </DrawerToggleProvider>
      </ThemeProvider>
    </IsMobileProvider>
  )
}

export default App
