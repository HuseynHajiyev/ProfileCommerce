import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductInterface } from '../../types/ProductInterface';
import { setProducts } from '../productsReducer/productsSlice';

interface ProductState {
  product: ProductInterface | null;
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  product: null,
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    loadProduct(state, action: PayloadAction<number>) {
      state.loading = true;
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
    // TODO: Add your updateProduct, addProduct, deleteProduct here
  },
});

export const { loadProduct, setProduct, loadProductFailed } = productSlice.actions;

export default productSlice.reducer;
