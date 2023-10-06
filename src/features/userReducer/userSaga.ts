import { takeLatest, call, put } from 'redux-saga/effects';
import { loginSuccess, loginFailure } from './userSlice';
import { AuthResultInterface, LoginCredentialsInterface } from '../../models/LoginCredentials';
import { PayloadAction } from '@reduxjs/toolkit';
import { getUsers, loginUser } from '../../api/userApi';
import { UserInterface } from '../../models/UserInterface';

function* handleLogin(action: PayloadAction<LoginCredentialsInterface>) {
  try {
    const result: AuthResultInterface | null | undefined = yield call(loginUser, action.payload);
    if (!result) {
      yield put(loginFailure({ error: 'Login Failure' }));
      return;
    }
    const users: UserInterface[] = yield call(getUsers);
    const user: UserInterface | undefined = users.find((user) => user.username === action.payload.username);
    if (!user) {
      yield put(loginFailure({ error: 'User not found' }));
      return;
    }
    if (result.token) {
      yield put(loginSuccess({ token: result.token, user }));
    } else {
      yield put(loginFailure({ error: 'Invalid credentials' }));
    }
  } catch (error: any) {
    if (error instanceof Error) {
      yield put(loginFailure({ error: error.message }));
    } else {
      yield put(loginFailure({ error: 'An unexpected error occurred' }));
    }
  }    
}

export function* watchLoginSaga() {
  yield takeLatest('user/loginRequest', handleLogin);
}
