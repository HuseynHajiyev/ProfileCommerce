import { all, fork } from 'redux-saga/effects';
import { watchLoadProductsSaga, watchSetProductsSaga } from '../features/productsReducer/productsSaga';
import { watchAddToShoppingBag, watchDecreaseQuantity, watchLoadShoppingBag, watchRemoveFromShoppingBag, watchUpdateQuantity, watchResetShoppingBag } from '../features/shoppingBagReducer/shoppingBagSaga';
import { watchLoadProductSaga } from '../features/productReducer/productSaga';
import { watchLoadSearchResultsSaga } from '../features/searchResultsReducer/searchResultsSaga';
import { watchLoginSaga, watchLogoutSaga, watchAddOrderSaga, } from '../features/userReducer/userSaga';
import { watchIncrementLoginAttemptsSaga } from '../features/localUserReducer/localUserSaga';

export default function* rootSaga() {
    yield all([
        watchSetProductsSaga(),
        watchLoadShoppingBag(),
        watchLoadSearchResultsSaga(),
        watchResetShoppingBag(),
        watchAddOrderSaga(),
        fork(watchLoadProductsSaga),
        fork(watchLogoutSaga),
        fork(watchLoginSaga),
        fork(watchAddToShoppingBag),
        fork(watchRemoveFromShoppingBag),
        fork(watchUpdateQuantity),
        fork(watchDecreaseQuantity),
        fork(watchLoadProductSaga),
        fork(watchIncrementLoginAttemptsSaga),
    ])
}