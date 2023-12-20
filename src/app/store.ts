import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import shoppingBagReducer from "../features/shoppingBagReducer/shoppingBagSlice";
import productsReducer from "../features/productsReducer/productsSlice";
import productReducer from "../features/productReducer/productSlice";
import userReducer from "../features/userReducer/userSlice";
import localUserReducer from "../features/localUserReducer/localUserSlice";
import searchResultsReducer from "../features/searchResultsReducer/searchResultsSlice";
import rootSaga from "../sagas";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const sagaMiddleware = createSagaMiddleware();

export const shoppingBagPersistConfig = {
    key: 'shoppingBag',
    storage: storage,
    blacklist: ['loading', 'error', 'loaded', 'log'],
};

export const userPersistConfig = {
    key: 'userState',
    storage: storage,
    blacklist: ['loading', 'error', 'loginCredentials'],
};

export const productsPersistConfig = {
    key: 'productsState',
    storage: storage,
    blacklist: ['loading', 'error', 'loaded'],
};

export const localUserPersistConfig = {
    key: 'localUserState',
    storage: storage,
    blacklist: ['timerStarted','loading', 'error', 'loaded'],
};


  
const persistedUserReducer = persistReducer(userPersistConfig, userReducer);
const persistedShoppingBagReducer = persistReducer(shoppingBagPersistConfig, shoppingBagReducer);
const persistedProductsReducer = persistReducer(productsPersistConfig, productsReducer);
const persistedLocalUserReducer = persistReducer(localUserPersistConfig, localUserReducer);

export const store = configureStore({
    reducer: {
        shoppingBag: persistedShoppingBagReducer,
        productsState: persistedProductsReducer,
        productState: productReducer,
        search: searchResultsReducer,
        userState: persistedUserReducer,
        localUserState: persistedLocalUserReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE', 'persist/PAUSE', 'persist/PURGE', 'persist/REGISTER'],
        },
    }).concat(sagaMiddleware),
});


sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;