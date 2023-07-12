import {call, put, takeEvery } from 'redux-saga/effects';
import { getProducts } from '../../api/productsApi';
import { setProducts } from './productsSlice';
import { ProductInterface } from '../../types/ProductInterface';

function* fetchProductsSaga() {
    try {
        const products: ProductInterface[] = yield call(getProducts);
        yield put(setProducts(products));
    } catch(e) {
        console.log(e)
    }
}


export function* watchFetchProductsSaga() {
    yield takeEvery('product/fetchProducts', fetchProductsSaga);
}

