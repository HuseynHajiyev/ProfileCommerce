import { call, put, takeLeading, debounce, select } from 'redux-saga/effects';
import Cookies from 'js-cookie';


import { PayloadAction } from '@reduxjs/toolkit';

// Action Imports
import { loadShoppingBag, setShoppingBag, loadShoppingBagFailed, addToShoppingBag, removeFromShoppingBag, updateQuantity, decreaseQuantity, resetShoppingBag, loadShoppingBagSuccess } from './shoppingBagSlice';

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
import { UserInterface } from '../../models/UserInterface';
import { RootState } from '../../app/store';



function* loadShoppingBagSaga(action: PayloadAction<number>) {
  try {
      const token: string = yield Cookies.get('authToken') || '';
      const user: UserInterface = yield select((state: RootState) => state.userState.user);
      if(!token || !user){
        throw new TypeError('Not logged in');
      }
      const localShoppingBag: ShoppingBagInterface = yield select((state: RootState) => state.shoppingBag);
      if(localShoppingBag.id !== 0 && localShoppingBag.userId === user.id){
        yield put(setShoppingBag(localShoppingBag));
        yield call(loadShoppingBagSuccess);
        return;
      }
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
      yield call(loadShoppingBagSuccess);
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
    yield call(loadShoppingBagSuccess);
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
    yield call(loadShoppingBagSuccess);
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
    yield call(loadShoppingBagSuccess);
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
    yield call(loadShoppingBagSuccess);
  } catch (e) {
    yield put(loadShoppingBagFailed((e as TypeError).message));
    console.log(e)
  }
}

function* resetShoppingBagSaga() {
  try {
    console.log('resetting shopping bag')
    yield call(loadShoppingBagSuccess);
  } catch (e) {
    yield put(loadShoppingBagFailed((e as TypeError).message));
    console.log(e)
  }
}
  




function* watchLoadShoppingBag() {
    yield takeLeading(loadShoppingBag.type, loadShoppingBagSaga);
}

function* watchAddToShoppingBag() {
    yield debounce(1800000 ,addToShoppingBag.type, addToShoppingBagSaga);
}

function* watchRemoveFromShoppingBag() {
    yield debounce(1800000 ,removeFromShoppingBag.type, removeFromShoppingBagSaga);
}

function* watchUpdateQuantity() {
    yield debounce(1800000,updateQuantity.type, updateQuantitySaga);
}

function* watchDecreaseQuantity() {
    yield debounce(1800000, decreaseQuantity.type, decreaseQuantitySaga);
}

function* watchResetShoppingBag() {
    yield takeLeading(resetShoppingBag.type, resetShoppingBagSaga);
}

export {
    watchLoadShoppingBag,
    watchAddToShoppingBag,
    watchRemoveFromShoppingBag,
    watchUpdateQuantity,
    watchDecreaseQuantity,
    watchResetShoppingBag,
};