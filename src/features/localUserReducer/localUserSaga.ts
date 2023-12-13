import { LocalUserInterface } from "../../models/UserInterface";
import { incrementLoginAttempts, lockUser } from "./localUserSlice";
import { call, select, takeLatest } from 'redux-saga/effects';


function* incrementLoginAttemptsSaga() {
  const localUser: LocalUserInterface = yield select((state) => state.localUserState);
  if (localUser.loginAttempts >= localUser.maxLoginAttempts) {
    yield call(lockUser);
  } 
}

export function* watchIncrementLoginAttemptsSaga() {
  yield takeLatest(incrementLoginAttempts.type, incrementLoginAttemptsSaga);
}
