import { all, fork } from 'redux-saga/effects';
import { watchLoadProductsSaga } from '../features/productsReducer/productsSaga';
import { watchAddToShoppingBag, watchDecreaseQuantity, watchLoadShoppingBag, watchRemoveFromShoppingBag, watchUpdateQuantity,  } from '../features/shoppingBagReducer/shoppingBagSaga';
import { watchLoadProductSaga } from '../features/productReducer/productSaga';
import { watchLoadSearchResultsSaga } from '../features/searchResultsReducer/searchResultsSaga';

export default function* rootSaga() {
    yield all([
        watchLoadProductsSaga(),
        watchLoadShoppingBag(),
        watchLoadSearchResultsSaga(),
        fork(watchAddToShoppingBag),
        fork(watchRemoveFromShoppingBag),
        fork(watchUpdateQuantity),
        fork(watchDecreaseQuantity),
        fork(watchLoadProductSaga)
    ])
}