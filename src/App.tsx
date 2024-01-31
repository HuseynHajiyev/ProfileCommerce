// Desc: Main App component
// MUI imports
import { Box, CssBaseline ,ThemeProvider } from '@mui/material'
// React imports
import { Routes, Route } from 'react-router-dom';
import Lenis from '@studio-freight/lenis'

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
import ShopClothing from './pages/Shop/Clothing/ShopClothing';

// Context
import { IsMobileProvider } from './context/IsMobileContext';

// Theme
import theme from './themes/theme';

// Context
import { DrawerToggleProvider } from './context/navbarContext/DrawerToggleContext';
import ViewProduct from './pages/Shop/ViewAll/ViewProduct';
import PagesContainer from './components/Overlays/PagesContainer';
import { MainScrollProvider } from './context/scrollContext/MainScrollContext';
import useAppInitialization from './hooks/useAppInitialization';
import MainSplash from './components/SplashScreens/MainSplash';
import LoadingSplash from './components/SplashScreens/LoadingSplash';
import { useEffect } from 'react';


const App = () => {
  const { showResponsiveSplash, showLoadingSplash } = useAppInitialization();
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  })

  return (
    <IsMobileProvider>
      <DrawerToggleProvider>
        <MainScrollProvider>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              {showResponsiveSplash ? (
                  <MainSplash />
                ) : ( !showLoadingSplash ? (
                  <LoadingSplash />
                ) : (
                <>
                  <Box position={'sticky'} top={0} zIndex={'2000'}>
                    <AnnouncementBarComponent />
                    <SearchBarDrawer />
                    <Navbar />
                  </Box>
                  <NavigationDrawer />

                  <PagesContainer>
                    <Routes>
                      <Route path="/" element={ <Home /> } />
                      <Route path="/new-arrivals" element={ <NewArrivals/>} />
                      <Route path="/shop" element={<Shop />}>
                        <Route path="clothing" element={<ShopClothing />}>
                        <Route path=":category" element={<ShopClothing />} />
                        </Route>
                        <Route path="view-all/:productId" element={<ViewProduct />} />
                      </Route>
                      <Route path="/about" element={ <About />} />
                      <Route path="/account" element={ <Account />} />
                      <Route path="/shopping-bag" element={ <ShoppingBag />} />
                      <Route path="*" element={ <NotFound404 />} />
                    </Routes>
                  </PagesContainer>
                </>
              ))}
            </ThemeProvider>
        </MainScrollProvider>
      </DrawerToggleProvider>
    </IsMobileProvider>
  );
}

export default App
