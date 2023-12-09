// Desc: Main App component
// MUI imports
import { Box, CssBaseline ,ThemeProvider } from '@mui/material'
// React imports
import { Routes, Route } from 'react-router-dom';
// Redux imports
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';

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
import PagesContainer from './pages/PagesContainer';
import { MainScrollProvider } from './context/scrollContext/MainScrollContext';
import { useEffect, useState } from 'react';
import { RootState } from './app/store';
import { logoutUser, setUser } from './features/userReducer/userSlice';
import { loadShoppingBag, resetShoppingBag, setShoppingBag } from './features/shoppingBagReducer/shoppingBagSlice';
import { loadProducts, setProducts } from './features/productsReducer/productsSlice';
import MainSplash from './components/SplashScreens/MainSplash';


const App = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state: RootState) => state.userState);
  const shoppingBagState = useSelector((state: RootState) => state.shoppingBag);
  const productsState = useSelector((state: RootState) => state.productsState);
  const [showResponsiveSplash, setShowResponsiveSplash] = useState(true);


  useEffect(() => {
    const handleResize = () => {
      const isDesktop = window.innerWidth >= 1024;
      setShowResponsiveSplash(!isDesktop);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  useEffect(() => {
    if(!productsState.loaded && productsState.products.length === 0) {
      dispatch(loadProducts(0));
    } else {
      dispatch(setProducts(productsState.products));
    }
  }, [dispatch, productsState.loaded, productsState.products, userState.loggedIn, userState.loading, userState.user]);

  useEffect(() => {
    const token = Cookies.get('authToken');
    if (token && userState.user) {
      if (!userState.loggedIn) {
        dispatch(setUser(userState.user));
      }
    } else if (!token && userState.user) {
      dispatch(logoutUser());
    }
  }, [dispatch, userState.user, userState.loggedIn, productsState.products]);

  
  useEffect(() => {
    if (userState.loggedIn && userState.user) {
      if (shoppingBagState && shoppingBagState.userId === userState.user.id) {
        dispatch(setShoppingBag(shoppingBagState));
      } else if(!shoppingBagState.loaded) {
        dispatch(loadShoppingBag(userState.user.id));
      }
    } else if (userState.loggedIn === false && shoppingBagState.loaded) {
      dispatch(resetShoppingBag());
    }
  }, [dispatch, userState.loggedIn, userState.user, shoppingBagState.loaded, shoppingBagState.userId, shoppingBagState]);
  
  return (
    <IsMobileProvider>
      <DrawerToggleProvider>
        <MainScrollProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {showResponsiveSplash ? (
                <MainSplash />
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
                    <Route path="/" element={ <Home />} />
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
            )}
          </ThemeProvider>
        </MainScrollProvider>
      </DrawerToggleProvider>
    </IsMobileProvider>
  )
}

export default App
