import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductInterface, ProductStateInterface } from '../../models/ProductInterface';

const initialState: ProductStateInterface = {
  product: null,
  loading: false,
  error: null,
  log: [],
};

const productSlice = createSlice({
  name: 'productState',
  initialState,
  reducers: {
    loadProduct(state, action: PayloadAction<number>) {
      state.loading = true;
      state.error = null;
      state.log.push(
        `loadProduct action dispatched at ${new Date().toISOString()} with payload ${action.payload}`
      );
    },
    setProduct(state, action: PayloadAction<ProductInterface>) {
      state.product = action.payload;
      state.loading = false;
      state.error = null;
    },
    loadProductFailed(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    }, 
  },
});

export const { loadProduct, setProduct, loadProductFailed } = productSlice.actions;

export default productSlice.reducer;
