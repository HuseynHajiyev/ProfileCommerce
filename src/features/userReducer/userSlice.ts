import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { LoginCredentials, UserInterface, UserStateInterface } from '../../models/UserInterface';
import { ProductInterface } from '../../models/ProductInterface';


const initialState: UserStateInterface = {
    user: null,
    userFavourites: [],
    token: null,
    loading: false,
    loggedIn: false,
    error: null,
    loginCredentials: {
      username: '',
      password: '',
    },
};

export const userSlice = createSlice({
  name: 'userState',
  initialState,
  reducers: {
    loginRequest: (state, action: PayloadAction<LoginCredentials>) => {
      state.loading = true;
      state.loginCredentials = action.payload;
    },
    loginSuccess: (state, action) => {
      state.loggedIn = true;
      state.loading = false;
      state.token = action.payload.token;
    },
    setUser: (state, action: PayloadAction<UserInterface>) => {
      state.loggedIn = true;
      state.user = action.payload;
      state.loading = false;
    },
    loginFailure: (state, action) => {
      state.loggedIn = false;
      state.error = action.payload.error;
      state.loading = false;
    },
    logoutUser: (state) => {
      state.token = null;
      state.user = null;
      state.loggedIn = false;
      state.loading = false;
      state.error = null;
      state.loginCredentials = {
        username: '',
        password: '',
      }
    },
    addFavourite: (state, action: PayloadAction<ProductInterface>) => {
      const product = state.userFavourites?.find((product) => product.id === action.payload.id);
      if (product) return;
      state.userFavourites?.push(action.payload);
    },
    removeFavourite: (state, action: PayloadAction<ProductInterface>) => {
      const favourite = state.userFavourites?.find((product) => product.id === action.payload.id);
      if (!state.userFavourites || !favourite) return;
      state.userFavourites = state.userFavourites?.filter((product) => product.id !== action.payload.id);
    },
  },
});

export const { loginRequest, loginSuccess, setUser, loginFailure, logoutUser } = userSlice.actions;

export default userSlice.reducer;
