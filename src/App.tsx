// Desc: Main App component
// MUI imports
import { CssBaseline ,ThemeProvider } from '@mui/material'
// React imports
import { Routes, Route } from 'react-router-dom';
// Redux imports



// Pages
import Shop from './pages/Shop/Shop';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Account from './pages/Account/Account';
import NewArrivals from './pages/NewArrivals/NewArrivals';
import NotFound404 from './pages/NotFound404/NotFound404';
import ShoppingBag from './pages/ShoppingBag/ShoppingBag';

// Components
import Navbar from './components/Navbar/Navbar';
import SearchBarDrawer from './components/Navbar/navComponents/MacroComponents/SearchBarDrawer';
import NavigationDrawer from './components/Navbar/navComponents/MacroComponents/NavigationDrawer';
import AnnouncementBarComponent from './components/Navbar/navComponents/MicroComponents/AnnouncementBarComponent';
import NavbarPlaceholder from './components/Placeholders/NavbarPlaceholder';
import ProductsOverview from './pages/Shop/ProductsOverview/ProductsOverview';

// Styled components
import PageContainerStyled from './components/StyledComponents/AppFileStyled/PagesContainerStyled';

// Context
import { IsMobileProvider } from './context/IsMobileContext';

// Theme
import theme from './themes/theme';

// Context
import { DrawerToggleProvider } from './context/navbarContext/DrawerToggleContext';
import ViewProduct from './pages/Shop/ViewAll/ViewProduct';

const App = () => {
  return (
    <IsMobileProvider>
      <DrawerToggleProvider>
        <ThemeProvider theme={theme}>
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
                <Route path="/shop" element={<Shop />}>
                  <Route path="shop/clothing" element={<ProductsOverview />} />
                  <Route path="view-all/:productId" element={<ViewProduct />} />
                  <Route path=":category" element={<ProductsOverview />} />
                </Route>
                <Route path="/about" element={ <About />} />
                <Route path="/account" element={ <Account />} />
                <Route path="/shopping-bag" element={ <ShoppingBag />} />
                <Route path="/404-not-found" element={ <NotFound404 />} />
              </Routes>
            </PageContainerStyled>
        </ThemeProvider>
      </DrawerToggleProvider>
    </IsMobileProvider>
  )
}

export default App
