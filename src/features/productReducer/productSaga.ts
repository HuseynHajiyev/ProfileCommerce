import {call, put, select, takeLatest } from 'redux-saga/effects';
import { getProduct } from '../../api/productApi';
import { loadProductFailed, setProduct } from './productSlice';
import { ProductInterface } from '../../types/ProductInterface';
import { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { setProducts } from '../productsReducer/productsSlice';

const selectProductById = (state: RootState, productId: number) => state.products.products[productId];
const getProducts = (state: RootState) => state.products.products;

function* loadProductSaga(action: PayloadAction<number>) {
    const productId = action.payload;
    const product: ProductInterface | undefined = yield select(selectProductById, productId);
    const products : ProductInterface[] = yield select(getProducts);
    if (product) {
        return;
    }
    try {
        const product: ProductInterface = yield call(getProduct, action.payload);
        yield put(setProduct(product));
        yield put (setProducts([...products, product]));
    } catch(e) {
        console.log(e)
        yield put(loadProductFailed((e as Error).message));
    }
    
}


export function* watchLoadProductSaga() {
    yield takeLatest('product/loadProduct', loadProductSaga);
}
