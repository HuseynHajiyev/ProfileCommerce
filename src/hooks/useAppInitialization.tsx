// useAppInitialization.ts
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import { loadShoppingBag, resetShoppingBag, setShoppingBag } from '../features/shoppingBagReducer/shoppingBagSlice';
import { loadProducts, setProducts } from '../features/productsReducer/productsSlice';
import { logoutUser, setUser } from '../features/userReducer/userSlice';
import { useLogin } from './useLogin';
import { RootState } from '../app/store';
import { resetLocalUser, setLocalUser } from '../features/localUserReducer/localUserSlice';
import { loadUsers } from '../features/usersReducer/usersSlice';


const useAppInitialization = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state: RootState) => state.userState);
  const localUserState = useSelector((state: RootState) => state.localUserState);
  const shoppingBagState = useSelector((state: RootState) => state.shoppingBag);
  const productsState = useSelector((state: RootState) => state.productsState);
  const [showResponsiveSplash, setShowResponsiveSplash] = useState(true);
  const [showLoadingSplash, setShowLoadingSplash] = useState(true);
  const {instantiateLocalUser} = useLogin();
  

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
    dispatch(loadUsers());
    if (token && userState.user) {
      dispatch(setUser(userState.user));
      dispatch(resetLocalUser());
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
    } else {
      if(localUserState && localUserState.localUser && !userState.loggedIn) {
        setLocalUser(localUserState.localUser);
      } else {
        instantiateLocalUser();
      }
    }
  }, [dispatch, userState.loggedIn, userState.user, shoppingBagState.loaded, shoppingBagState.userId, shoppingBagState, localUserState.localUser, localUserState, instantiateLocalUser]);

  useEffect(() => {
    const isEverythingLoaded = productsState.loaded && !userState.loading && shoppingBagState.loaded;  
    if (isEverythingLoaded) {
      setShowLoadingSplash(false);
    }
  }, [productsState.loaded, userState.loading, shoppingBagState.loaded]);

  return { showResponsiveSplash, showLoadingSplash };
};

export default useAppInitialization;
