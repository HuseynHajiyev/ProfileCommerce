import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductInterface } from "../../types/ProductInterface";

interface ProductsState {
    products: ProductInterface[];
    loading: boolean;
    error: string | null;
}

const initialState: ProductsState = {
    products: [],
    loading: false,
    error: null,
};

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        loadProducts: (state, actions: PayloadAction<number>) => {
            state.loading = true;
            state.error = null;
        },
        setProducts: (state, actions: PayloadAction<ProductInterface[]>) => {
            state.products = actions.payload;
            state.loading = false;
            state.error = null;
        },
        loadProductsFailed: (state, actions: PayloadAction<string>) => {
            state.loading = false;
            state.error = actions.payload;
        },
    },
});

export const { loadProducts, setProducts, loadProductsFailed} = productsSlice.actions;

export default productsSlice.reducer;
