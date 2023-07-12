import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductInterface } from "../../types/ProductInterface";

type ProductsState = ProductInterface[];

const initialState: { productsList: ProductsState } = {
    productsList: [],
};

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setProducts: (state, action: PayloadAction<ProductInterface[]>) => {
            state.productsList = action.payload;
        },
    },
});

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;
