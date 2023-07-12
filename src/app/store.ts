import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import shoppingBagReducer from "../features/shoppingBagReducer/shoppingBagSlice";
import productsReducer from "../features/productsReducer/productsSlice";
import rootSaga from "../sagas";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        shoppingBag: shoppingBagReducer,
        products: productsReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;