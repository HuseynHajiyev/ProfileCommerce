import {call, put, takeLatest } from 'redux-saga/effects';
import { loadSearchResultsFailed, setSearchCategories, setSearchResults } from './searchResultsSlice';
import { ProductApiResponseInterface, ProductInterface, SearchResutProduct } from '../../models/ProductInterface';
import { PayloadAction } from '@reduxjs/toolkit';
import { findSearchProducts, findSearchProductsByCategory, isCategory } from '../../services/searchHelpers';
import { getProducts } from '../../api/productsApi';
import { serializeProductsForSearch } from '../../services/processProductResponse';
import { getCategories } from '../../api/productApi';

// There is no search endpoint in the FakeStoreAPI, so I'm using the 
// products endpoint and serializing the data to only include the data I need
// The DTO for the actual search endpoint would be different and will not warrent me to do a pseudo serialization and search
function* loadSearchResultsSaga(action: PayloadAction<string>) {
    try {
        const productsResponse: ProductApiResponseInterface[] = yield call(getProducts, 0);
        if (productsResponse.length === 0) {
            yield put(loadSearchResultsFailed("No results found"));
            return;
        }
        const categories: string[] = yield call(getCategories);
        yield put(setSearchCategories(categories));
        const serializedResponse: SearchResutProduct[] = serializeProductsForSearch(productsResponse);
        const query = action.payload;
        const searchableProducts: SearchResutProduct[] = findSearchProducts(query, serializedResponse);
        let searchCategory: SearchResutProduct[];
        if(isCategory(query, categories)) {
            searchCategory = findSearchProductsByCategory(query, searchableProducts);
        } else {
            searchCategory = [];
        }
        if(searchableProducts.length === 0 && searchCategory.length === 0) { 
            yield put(loadSearchResultsFailed("No results found"));
            return;
        } else {
            yield put(setSearchResults(searchableProducts));
        }
    } catch(e) {
        console.log(e)
        yield put(loadSearchResultsFailed);
    }
}

export function* watchLoadSearchResultsSaga() {
    yield takeLatest('searchResults/loadSearchResults', loadSearchResultsSaga);
}
