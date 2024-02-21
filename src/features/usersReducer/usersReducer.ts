import { call, put, takeLatest } from "redux-saga/effects";
import { loadUsers, loadUsersFailed, loadUsersSuccess, setUsers } from "./usersSlice";
import { UserInterface } from "../../models/UserInterface";
import { getUsers } from "../../api/userApi";



function* loadUsersSaga() {
  try {
    const users: UserInterface[] | null = yield call(getUsers);
    if(users !== null) {
      yield put(setUsers(users));
      yield put(loadUsersSuccess());
    } else {
      yield put(loadUsersFailed('No users found'));
    }
  } catch (e) {
    yield put(loadUsersFailed(e as string));
  }
}

export function* watchLoadUsersSaga() {
  yield takeLatest(loadUsers.type, loadUsersSaga);
}