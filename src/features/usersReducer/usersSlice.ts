import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { UserInterface } from '../../models/UserInterface';

interface initialStateInterface {
  users: UserInterface[] | null;
  loading: boolean;
  error: string | null;
  loaded: boolean;
  actionLog: string | null;
} 



const initialState: initialStateInterface = {
    users: null,
    loading: false,
    error: null,
    loaded: false,
    actionLog: null
};

export const usersSlice = createSlice({
  name: "usersState",
  initialState,
  reducers: {
    loadUsers: (state) => {
      state.loading = true;
      state.error = null;
      state.loaded = false;
      state.actionLog = `loadUsers action dispatched at ${new Date().toISOString()}`;
    },
    setUsers: (state, actions: PayloadAction<UserInterface[]>) => {
      state.users = actions.payload;
      state.loading = false;
      state.loaded = true;
      state.error = null;
      state.actionLog = `setUsers action dispatched at ${new Date().toISOString()}`;
    },
    loadUsersSuccess: (state: initialStateInterface) => {
      state.loading = false;
      state.error = null;
      state.loaded = true;
      state.actionLog = `loadUsersSuccess action dispatched at ${new Date().toISOString()}`;
    },
    loadUsersFailed: (state: initialStateInterface, actions: PayloadAction<string>) => {
      state.loading = false;
      state.error = actions.payload;
      state.loaded = false;
      state.actionLog = `loadUsersFailed action dispatched at ${new Date().toISOString()}`;
    },
  },

});

export const { loadUsers, setUsers, loadUsersSuccess, loadUsersFailed } = usersSlice.actions;

export default usersSlice.reducer;