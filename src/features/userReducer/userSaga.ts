import { takeLatest, call, put, throttle } from 'redux-saga/effects';
import { loginSuccess, loginFailure, loginRequest, setUser, logoutUser, addOrder } from './userSlice';
import { AuthResultInterface, LoginCredentialsInterface } from '../../models/LoginCredentials';
import { PayloadAction } from '@reduxjs/toolkit';
import { getUsers, loginUser } from '../../api/userApi';
import { UserInterface } from '../../models/UserInterface';
import Cookies from 'js-cookie';


import { findUserByEmailAndPassword } from '../../services/processUserResponse';
import { loadShoppingBag, resetShoppingBag } from '../shoppingBagReducer/shoppingBagSlice';
import { incrementLoginAttempts } from '../localUserReducer/localUserSlice';

function* loginSaga(action: PayloadAction<LoginCredentialsInterface>) {
  try {
    const users: UserInterface[] = yield call(getUsers);
    const matchedUser = findUserByEmailAndPassword(users, action.payload.username, action.payload.password);
    if (!matchedUser) {
      yield put(loginFailure({ error: 'Invalid credentials' }));
      yield put(incrementLoginAttempts());
      return;
    }
    const authResult: AuthResultInterface | null = yield call(loginUser, action.payload);
    if (!authResult || !authResult.token) {
      yield put(loginFailure({ error: 'Login failed. Please try again.' }));
      yield put(incrementLoginAttempts());
      return;
    }
    Cookies.set('authToken', authResult.token, { expires: 1 });
    yield put(setUser(matchedUser));
    yield put(loginSuccess({ token: authResult.token }));
    yield put(loadShoppingBag(matchedUser.id));
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





export function* watchLoginSaga() {
  yield throttle(1500, loginRequest.type, loginSaga);
}

export function* watchLogoutSaga() {
  yield takeLatest(logoutUser.type, logoutSaga);
}

export function* watchAddOrderSaga() {
  yield takeLatest(addOrder.type, addOrderSaga);
}

