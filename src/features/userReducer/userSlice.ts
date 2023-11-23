import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { LoginCredentials, OrderInterface, UserInterface, UserStateInterface } from '../../models/UserInterface';
import { ProductInterface } from '../../models/ProductInterface';


const initialState: UserStateInterface = {
    user: null,
    userFavourites: [],
    userOrders: [],
    token: null,
    loading: false,
    loggedIn: false,
    error: null,
};

export const userSlice = createSlice({
  name: 'userState',
  initialState,
  reducers: {
    loginRequest: (state, action: PayloadAction<LoginCredentials>) => {
      state.loading = true;
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
    logoutUser: () => {
      return {
        ...initialState,
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
    addOrder: (state, action: PayloadAction<OrderInterface>) => {
      let lastOrderId = -1;
      if(state.userOrders && state.userOrders.length > 0) {
        lastOrderId = state.userOrders[state.userOrders.length - 1].id;
      }
      if (lastOrderId === -1){
        const order = {
          ...action.payload,
          id: 0,
        };
        state.userOrders?.push(order);
        return;
      } else {
        const order = {
          ...action.payload,
          id: lastOrderId + 1,
        };
        state.userOrders?.push(order);
      }
    },
    removeOrder: (state, action: PayloadAction<OrderInterface>) => {
      const order = state.userOrders?.find((order) => order.id === action.payload.id);
      if (!state.userOrders || !order) return;
      state.userOrders = state.userOrders?.filter((order) => order.id !== action.payload.id);
      state.userOrders?.forEach((order, index) => {
        order.id = index;
      });
    },
  },
});

export const { loginRequest, loginSuccess, setUser, loginFailure, logoutUser, addFavourite, removeFavourite, addOrder, removeOrder } = userSlice.actions;

export default userSlice.reducer;
