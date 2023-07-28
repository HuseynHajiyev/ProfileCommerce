import { call, put, all, takeLeading, debounce, select } from 'redux-saga/effects';


import { PayloadAction } from '@reduxjs/toolkit';

// Action Imports
import { loadShoppingBag, setShoppingBag, loadShoppingBagFailed, addToShoppingBag, removeFromShoppingBag, updateQuantity, decreaseQuantity } from './shoppingBagSlice';

// API Imports
import { addProductToBag, getShoppingBag, updateShoppingBag } from '../../api/shoppingBagApi';
import { getProduct } from '../../api/productApi';

// Type Imports
import  { ShoppingBagInterface, ShoppingBagApiResponseInterface, AddProductToBagProps, UpdateShoppingBagProps } from '../../types/ShoppingBagInterface';
import { CartItemInterface, CartItemApiResponseInterface } from '../../types/CartiItemInterface';

import { ProductInterface } from '../../types/ProductInterface';

// Service Imports
import { ApiToShoppingBagConverter, ShoppingBagToApiConverter } from '../../services/shoppingBagConverter';
import { processShoppingBagProducts, combineProductQuantities } from '../../services/processShoppingBagResponse';
import { RootState } from '../../app/store';

function* loadShoppingBagSaga(action: PayloadAction<number>) {
  try {
      const responses: ShoppingBagApiResponseInterface[] = yield call(getShoppingBag, action.payload);

      const productsState: ProductInterface[] = yield select((state: RootState) => state.products.products);
      const combinedProducts: { [id: number]: CartItemInterface } = {};

      for (const response of responses) {
          const products: ProductInterface[] = yield all(
              response.products.map((product: CartItemApiResponseInterface) => {
                // Check if the product is already in the state
                let existingProduct: ProductInterface | undefined;
                try {
                    existingProduct = productsState.find(p => p.id === product.productId);
                } catch(e) {
                    console.log(e)
                }
                if (existingProduct) {
                    // Wrap existing product with call to keep consistency
                    return call(() => existingProduct); 
                }
                // If not in state, fetch it from server
                return call(getProduct, product.productId);
            })
          );
          console.log('I am also here')
            try {
              const shoppingBagContents: CartItemInterface[] = processShoppingBagProducts(response.products, products);
              combineProductQuantities(combinedProducts, shoppingBagContents);

            } catch(e) {
                console.log(e)
            }
          console.log('end of the for loop')
      }

      console.log('Here 3')
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