import {call, put, select, takeLatest } from 'redux-saga/effects';
import { getProducts } from '../../api/productsApi';
import { loadProductsFailed, setCategories, setProducts } from './productsSlice';
import { setSearchCategories, setSearchResults } from '../searchResultsReducer/searchResultsSlice';
import { ProductApiResponseInterface, ProductInterface } from '../../models/ProductInterface';
import { PayloadAction } from '@reduxjs/toolkit';
import { getProductCategories, processProductResponse, replaceDuplicateProduct, serializeProductsForSearch } from '../../services/processProductResponse';
import { RootState } from '../../app/store';

function* loadProductsSaga(action: PayloadAction<number>): Generator<any, void, ProductApiResponseInterface[]> {
    try {
        const productsResponse: ProductApiResponseInterface[] = yield call(getProducts, action.payload);
        if(productsResponse.length === 0 || productsResponse === null || productsResponse === undefined) { 
            yield put(loadProductsFailed("No products found"));
            return;
        }
        const stateProduct: ProductInterface | null = yield select((state: RootState): ProductInterface | null => state.product.product);
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

        // Is here for simplicity purposes and to reduce unnecessary requests
        yield put(setSearchResults(searchableProducts));
        yield put(setSearchCategories(categories));
    } catch(e) {
        console.log(e)
        yield put(loadProductsFailed);
    }
}


export function* watchLoadProductsSaga() {
    yield takeLatest('products/loadProducts', loadProductsSaga);
}

