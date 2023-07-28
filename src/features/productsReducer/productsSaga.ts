import {call, put, takeLatest } from 'redux-saga/effects';
import { getProducts } from '../../api/productsApi';
import { loadProductsFailed, setProducts } from './productsSlice';
import { ProductInterface } from '../../types/ProductInterface';
import { PayloadAction } from '@reduxjs/toolkit';

function* loadProductsSaga(action: PayloadAction<number>) {
    try {
        const products: ProductInterface[] = yield call(getProducts, action.payload);
        yield put(setProducts(products));
    } catch(e) {
        console.log(e)
        yield put(loadProductsFailed);
    }
}


export function* watchLoadProductsSaga() {
    yield takeLatest('products/loadProducts', loadProductsSaga);
}

