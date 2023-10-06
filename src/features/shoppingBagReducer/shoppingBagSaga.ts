import { call, put, takeLeading, debounce, select } from 'redux-saga/effects';


import { PayloadAction } from '@reduxjs/toolkit';

// Action Imports
import { loadShoppingBag, setShoppingBag, loadShoppingBagFailed, addToShoppingBag, removeFromShoppingBag, updateQuantity, decreaseQuantity } from './shoppingBagSlice';

// API Imports
import { addProductToBag, getShoppingBag, updateShoppingBag } from '../../api/shoppingBagApi';

// Type Imports
import  { ShoppingBagInterface, ShoppingBagApiResponseInterface, AddProductToBagProps, UpdateShoppingBagProps } from '../../models/ShoppingBagInterface';
import { CartItemInterface } from '../../models/CartiItemInterface';

import { ProductApiResponseInterface, ProductInterface } from '../../models/ProductInterface';

// Service Imports
import { ApiToShoppingBagConverter, ShoppingBagToApiConverter } from '../../services/shoppingBagConverter';
import { processShoppingBagProducts, combineShoppingBags } from '../../services/processShoppingBagResponse';
import { getProduct } from '../../api/productApi';
import { processProductResponse } from '../../services/processProductResponse';



function* loadShoppingBagSaga(action: PayloadAction<number>) {
  try {
      const response: ShoppingBagApiResponseInterface[] = yield call(getShoppingBag, action.payload);
      const responseBag: ShoppingBagApiResponseInterface = combineShoppingBags(response);
      const cartProducts: ProductInterface[] = [];
      for (const product of responseBag.products) {
        const retrievedProduct: ProductApiResponseInterface = yield call(getProduct, product.productId);
        const cartProduct: ProductInterface = processProductResponse(retrievedProduct);
        cartProducts.push(cartProduct);
      }
      const  convertedCartItems: CartItemInterface[]= processShoppingBagProducts(cartProducts, responseBag.products);
      const loadedShoppingBag: ShoppingBagInterface = ApiToShoppingBagConverter(responseBag, convertedCartItems).bag;
      yield put(setShoppingBag(loadedShoppingBag));
  } catch (error) {
      yield put(loadShoppingBagFailed((error as TypeError).message));
  }
}




function* addToShoppingBagSaga() {
  try {
    const currentShoppingBag: ShoppingBagInterface = yield select((state) => state.shoppingBag);
    const apiShoppingBag = ShoppingBagToApiConverter(currentShoppingBag, 0).apiShoppingBag;
    const addProductProps: AddProductToBagProps = {userId: apiShoppingBag.userId, date: apiShoppingBag.date, products: apiShoppingBag.products};
    yield call(addProductToBag, addProductProps);
  } catch (error) {
    yield put(loadShoppingBagFailed((error as TypeError).message));
  }
}

function* removeFromShoppingBagSaga() {
  try {
    const currentShoppingBag: ShoppingBagInterface = yield select((state) => state.shoppingBag);

    const apiShoppingBag = ShoppingBagToApiConverter(currentShoppingBag, 0).apiShoppingBag;
    const updateProductProps: UpdateShoppingBagProps = {cartId: apiShoppingBag.id, userId: apiShoppingBag.userId, date: apiShoppingBag.date, products: apiShoppingBag.products};

    yield call(updateShoppingBag, updateProductProps);
  } catch (error) {
    yield put(loadShoppingBagFailed((error as TypeError).message));
  }
}


function* updateQuantitySaga() {
  try {
    const currentShoppingBag: ShoppingBagInterface = yield select((state) => state.shoppingBag);
    const apiShoppingBag = ShoppingBagToApiConverter(currentShoppingBag, 0).apiShoppingBag;
    const updateProductProps: UpdateShoppingBagProps = {cartId: apiShoppingBag.id, userId: apiShoppingBag.userId, date: apiShoppingBag.date, products: apiShoppingBag.products};
    yield call(updateShoppingBag, updateProductProps);
  } catch (error) {
    yield put(loadShoppingBagFailed((error as TypeError).message));
  }
}

function* decreaseQuantitySaga() {
  try {
    const currentShoppingBag: ShoppingBagInterface = yield select((state) => state.shoppingBag);
    const apiShoppingBag = ShoppingBagToApiConverter(currentShoppingBag, 0).apiShoppingBag;
    const updateProductProps: UpdateShoppingBagProps = {cartId: apiShoppingBag.id, userId: apiShoppingBag.userId, date: apiShoppingBag.date, products: apiShoppingBag.products};
    yield call(updateShoppingBag, updateProductProps);
  } catch (e) {
    yield put(loadShoppingBagFailed((e as TypeError).message));
    console.log(e)
  }
}




function* watchLoadShoppingBag() {
    yield takeLeading(loadShoppingBag.type, loadShoppingBagSaga);
}

function* watchAddToShoppingBag() {
    yield debounce(4000 ,addToShoppingBag.type, addToShoppingBagSaga);
}

function* watchRemoveFromShoppingBag() {
    yield debounce(4000 ,removeFromShoppingBag.type, removeFromShoppingBagSaga);
}

function* watchUpdateQuantity() {
    yield debounce(4000,updateQuantity.type, updateQuantitySaga);
}

function* watchDecreaseQuantity() {
    yield debounce(4000, decreaseQuantity.type, decreaseQuantitySaga);
}

export {
    watchLoadShoppingBag,
    watchAddToShoppingBag,
    watchRemoveFromShoppingBag,
    watchUpdateQuantity,
    watchDecreaseQuantity
};