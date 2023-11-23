import { all, fork } from 'redux-saga/effects';
import { watchLoadProductsSaga, watchSetProductsSaga } from '../features/productsReducer/productsSaga';
import { watchAddToShoppingBag, watchDecreaseQuantity, watchLoadShoppingBag, watchRemoveFromShoppingBag, watchUpdateQuantity, watchResetShoppingBag } from '../features/shoppingBagReducer/shoppingBagSaga';
import { watchLoadProductSaga } from '../features/productReducer/productSaga';
import { watchLoadSearchResultsSaga } from '../features/searchResultsReducer/searchResultsSaga';
import { watchLoginSaga, watchLogoutSaga, watchAddOrderSaga, watchRemoveOrderSaga } from '../features/userReducer/userSaga';

export default function* rootSaga() {
    yield all([
        watchSetProductsSaga(),
        watchLoadShoppingBag(),
        watchLoadSearchResultsSaga(),
        watchResetShoppingBag(),
        watchAddOrderSaga(),
        watchRemoveOrderSaga(),
        fork(watchLoadProductsSaga),
        fork(watchLogoutSaga),
        fork(watchLoginSaga),
        fork(watchAddToShoppingBag),
        fork(watchRemoveFromShoppingBag),
        fork(watchUpdateQuantity),
        fork(watchDecreaseQuantity),
        fork(watchLoadProductSaga),
    ])
}