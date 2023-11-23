import {call, put, select, takeLatest } from 'redux-saga/effects';
import { getProducts } from '../../api/productsApi';
import { loadProducts, loadProductsFailed, loadProductsSuccess, setCategories, setProducts } from './productsSlice';
import { setSearchCategories, setSearchResults } from '../searchResultsReducer/searchResultsSlice';
import { ProductApiResponseInterface, ProductInterface } from '../../models/ProductInterface';
import { PayloadAction } from '@reduxjs/toolkit';
import { getProductCategories, processProductResponse, replaceDuplicateProduct, serializeProductsForSearch } from '../../services/processProductResponse';
import { RootState } from '../../app/store';

function* loadProductsSaga(action: PayloadAction<number>) {
    try {
        const stateProduct: ProductInterface | null = yield select((state: RootState): ProductInterface | null => state.productState.product as ProductInterface | null);
        const productsResponse: ProductApiResponseInterface[] = yield call(getProducts, action.payload);
        if(productsResponse.length === 0 || productsResponse === null || productsResponse === undefined) { 
            yield put(loadProductsFailed('No products found'));
            return;
        }
        let processedProducts: ProductInterface[] = productsResponse.map((product: ProductApiResponseInterface) => processProductResponse(product));
        if(stateProduct) {
            const index = processedProducts.findIndex((product) => product.id === stateProduct?.id);
            if(index !== -1) {
                processedProducts = replaceDuplicateProduct(processedProducts, stateProduct);
            }
        }
        const searchableProducts = serializeProductsForSearch(productsResponse);
        const categories = getProductCategories(processedProducts);
        yield put(setProducts(processedProducts));
        yield put(setCategories(categories));
        yield put(loadProductsSuccess());

        // Is here for simplicity purposes and to reduce unnecessary requests
        yield put(setSearchResults(searchableProducts));
        yield put(setSearchCategories(categories));
    } catch(e) {
        console.log(e)
        yield put(loadProductsFailed('Failed to load products'));
    }
}

function* setProductsSaga(action: PayloadAction<ProductInterface[]>) {
    try {
        const searchableProducts = serializeProductsForSearch(action.payload);
        const categories = getProductCategories(action.payload);
        yield put(setSearchResults(searchableProducts));
        yield put(setSearchCategories(categories));
    } catch(e) {
        console.log(e)
    }
}


export function* watchLoadProductsSaga() {
    yield takeLatest(loadProducts.type, loadProductsSaga);
}

export function* watchSetProductsSaga() {
    yield takeLatest(setProducts.type, setProductsSaga);
}

