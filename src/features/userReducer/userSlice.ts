import { createSlice } from '@reduxjs/toolkit';
import { ProductInterface } from '../../models/ProductInterface';

const initialState = {
    token: null,
    user: null,
    loading: false,
    error: null,
    favorites: [] as ProductInterface[],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginRequest: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
    },
    logoutUser: (state) => {
      state.token = null;
      state.user = null;
      state.favorites = [];
    },
    addFavorite: (state, action) => {
     state.favorites = [...state.favorites, action.payload]
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter((product) => product.id !== action.payload.id)
    }
  },
});

export const { loginRequest, loginSuccess, loginFailure, addFavorite } = userSlice.actions;

export default userSlice.reducer;
