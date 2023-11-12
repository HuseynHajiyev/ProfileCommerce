import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import shoppingBagReducer from "../features/shoppingBagReducer/shoppingBagSlice";
import productsReducer from "../features/productsReducer/productsSlice";
import productReducer from "../features/productReducer/productSlice";
import userReducer from "../features/userReducer/userSlice";
import searchResultsReducer from "../features/searchResultsReducer/searchResultsSlice";
import rootSaga from "../sagas";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const sagaMiddleware = createSagaMiddleware();

export const shoppingBagPersistConfig = {
    key: 'shoppingBag',
    storage: storage,
    whitelist: ['shoppingBag']
};

export const userPersistConfig = {
    key: 'user',
    storage: storage,
    whitelist: ['user']
};

const persistedUserReducer = persistReducer(userPersistConfig, userReducer);
const persistedShoppingBagReducer = persistReducer(shoppingBagPersistConfig, shoppingBagReducer);

export const store = configureStore({
    reducer: {
        shoppingBag: persistedShoppingBagReducer,
        products: productsReducer,
        product: productReducer,
        search: searchResultsReducer,
        userState: persistedUserReducer,
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