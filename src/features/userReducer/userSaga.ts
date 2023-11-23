import { takeLatest, call, put } from 'redux-saga/effects';
import { loginSuccess, loginFailure, loginRequest, setUser, logoutUser, addOrder, removeOrder } from './userSlice';
import { AuthResultInterface, LoginCredentialsInterface } from '../../models/LoginCredentials';
import { PayloadAction } from '@reduxjs/toolkit';
import { getUsers, loginUser } from '../../api/userApi';
import { OrderInterface, UserInterface } from '../../models/UserInterface';
import Cookies from 'js-cookie';


import { findUserByEmailAndPassword } from '../../services/processUserResponse';
import { resetShoppingBag } from '../shoppingBagReducer/shoppingBagSlice';

function* loginSaga(action: PayloadAction<LoginCredentialsInterface>) {
  try {
    const users: UserInterface[] = yield call(getUsers);
    const matchedUser = findUserByEmailAndPassword(users, action.payload.username, action.payload.password);
    if (!matchedUser) {
      yield put(loginFailure({ error: 'Invalid credentials' }));
      return;
    }
    const authResult: AuthResultInterface | null = yield call(loginUser, action.payload);
    if (!authResult || !authResult.token) {
      yield put(loginFailure({ error: 'Login failed. Please try again.' }));
      return;
    }
    Cookies.set('authToken', authResult.token, { expires: 1 });
    yield put(setUser(matchedUser));
    yield put(loginSuccess({ token: authResult.token }));
  } catch (error: unknown) {
    if (error instanceof Error) {
      yield put(loginFailure({ error: error.message }));
    } else {
      yield put(loginFailure({ error: 'An unexpected error occurred' }));
    }
  }
}

function* logoutSaga() {
  yield Cookies.remove('authToken');
}

function* addOrderSaga() {
  const token = Cookies.get('authToken');
  if (!token) return;
  yield put(resetShoppingBag());
}

function* removeOrderSaga(action: PayloadAction<OrderInterface>) {
  const token = Cookies.get('authToken');
  if (!token) return;
  yield put(removeOrder(action.payload));
}




export function* watchLoginSaga() {
  yield takeLatest(loginRequest.type, loginSaga);
}

export function* watchLogoutSaga() {
  yield takeLatest(logoutUser.type, logoutSaga);
}

export function* watchAddOrderSaga() {
  yield takeLatest(addOrder.type, addOrderSaga);
}

export function* watchRemoveOrderSaga() {
  yield takeLatest(removeOrder.type, removeOrderSaga);
}
