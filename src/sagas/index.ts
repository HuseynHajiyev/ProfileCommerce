import { all, fork } from 'redux-saga/effects';
import { watchFetchProductsSaga } from '../features/productsReducer/productsSaga';
import { watchAddToShoppingBag, watchDecreaseQuantity, watchLoadShoppingBag, watchRemoveFromShoppingBag, watchUpdateQuantity,  } from '../features/shoppingBagReducer/shoppingBagSaga';

export default function* rootSaga() {
    yield all([
        watchFetchProductsSaga(),
        watchLoadShoppingBag(),
        fork(watchAddToShoppingBag),
        fork(watchRemoveFromShoppingBag),
        fork(watchUpdateQuantity),
        fork(watchDecreaseQuantity)
        
    ])
}