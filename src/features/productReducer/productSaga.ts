import {call, put, select, takeLatest } from 'redux-saga/effects';
import { getProduct } from '../../api/productApi';
import { loadProductFailed, setProduct } from './productSlice';
import { ProductInterface } from '../../models/ProductInterface';
import { PayloadAction } from '@reduxjs/toolkit';
import { processProductResponse } from '../../services/processProductResponse';
import { addProduct } from '../productsReducer/productsSlice';
import { RootState } from '../../app/store';

function* loadProductSaga(action: PayloadAction<number>) {
    try {
        const products: ProductInterface[] = yield select((state: RootState): ProductInterface[] => state.productsState.products);
        const storeProduct: ProductInterface | undefined = products.find((product) => product.id === action.payload);
        if(storeProduct) {
            yield put(setProduct(storeProduct));
            return;
        }
        const productResponse: ProductInterface = yield call(getProduct, action.payload);
        const product: ProductInterface = processProductResponse(productResponse);
        yield put(setProduct(product));
        yield put(addProduct(product));
    } catch(e) {
        console.log(e)
        yield put(loadProductFailed((e as Error).message));
    }
}


export function* watchLoadProductSaga() {
    yield takeLatest('productState/loadProduct', loadProductSaga);
}
