import { call, put, all, takeLeading, debounce, select } from 'redux-saga/effects';


import { PayloadAction } from '@reduxjs/toolkit';

// Action Imports
import { loadShoppingBag, setShoppingBag, loadShoppingBagFailed, addToShoppingBag, removeFromShoppingBag, updateQuantity, decreaseQuantity } from './shoppingBagSlice';

// API Imports
import { addProductToBag, getShoppingBag, updateShoppingBag } from '../../api/shoppingBagApi';
import { getProduct } from '../../api/productsApi';

// Type Imports
import  { ShoppingBagInterface, ShoppingBagApiResponseInterface, AddProductToBagProps, UpdateShoppingBagProps } from '../../types/ShoppingBagInterface';
import { CartItemInterface, CartItemApiResponseInterface } from '../../types/CartiItemInterface';

import { ProductInterface } from '../../types/ProductInterface';

// Service Imports
import { ApiToShoppingBagConverter, ShoppingBagToApiConverter } from '../../services/shoppingBagConverter';
import { processShoppingBagProducts, combineProductQuantities } from '../../services/processShoppingBagResponse';

function* loadShoppingBagSaga(action: PayloadAction<number>) {
  try {
      const responses: ShoppingBagApiResponseInterface[] = yield call(getShoppingBag, action.payload);
      
      const combinedProducts: { [id: number]: CartItemInterface } = {};

      for (const response of responses) {
          const productDetails: ProductInterface[] = yield all(
              response.products.map((product: CartItemApiResponseInterface) =>
                  call(getProduct, product.productId)
              ));

          const shoppingBagContents: CartItemInterface[] = processShoppingBagProducts(response.products, productDetails);
          combineProductQuantities(combinedProducts, shoppingBagContents);
      }

      const loadedShoppingBag = ApiToShoppingBagConverter(responses[0], Object.values(combinedProducts)).bag;
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
  } catch (error) {
    yield put(loadShoppingBagFailed((error as TypeError).message));
    console.log(error)
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