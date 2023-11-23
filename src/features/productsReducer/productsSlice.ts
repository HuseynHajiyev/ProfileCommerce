import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductInterface, ProductsStateInterface } from "../../models/ProductInterface";
import { getProductCategories } from "../../services/processProductResponse";

const initialState: ProductsStateInterface = {
    products: [],
    categories: [],
    loaded: false,
    loading: false,
    error: null,
    log: [],
};

const productsSlice = createSlice({
    name: "productsState",
    initialState,
    reducers: {
        loadProducts: (state, actions: PayloadAction<number>) => {
            state.loading = true;
            state.error = null;
            state.log.push(`loadProducts action dispatched at ${new Date().toISOString()} with payload ${actions.payload}`)
        },
        setProducts: (state, actions: PayloadAction<ProductInterface[]>) => {
            state.products = actions.payload;
            state.categories = getProductCategories(actions.payload).filter((category) => !state.categories.includes(category));
            state.loading = false;
            state.error = null;
        },
        loadProductsSuccess: (state) => {
            state.loaded = true;
            state.loading = false;
            state.error = null;
        },
        loadProductsFailed: (state, actions: PayloadAction<string>) => {
            state.loading = false;
            state.error = actions.payload;
            state.loaded = false;
        },
        addProduct: (state, actions: PayloadAction<ProductInterface>) => {
            if(state.products.find((product) => product.id === actions.payload.id)) {
                return;
            }
            state.products.push(actions.payload);
        },
        increaseProductInSize: (state, actions: PayloadAction<{productId: number, size: string}>) => {
            const index = state.products.findIndex((product) => product.id === actions.payload.productId);
            if(index !== -1) {
                const sizeExists = Object.prototype.hasOwnProperty.call(state.products[index].sizes, actions.payload.size);
                if(sizeExists) {
                    state.products[index].sizes[actions.payload.size]++;
                    state.products[index].totalSizeInventory++;
                } else {
                    console.warn(`Size ${actions.payload.size} does not exist in product ${actions.payload.productId}`);
                }
            }
        },          
        decreaseProductInSize: (state, actions: PayloadAction<{productId: number, size: string}>) => {
            const index = state.products.findIndex((product) => product.id === actions.payload.productId);
            if(index !== -1) {
                const sizeExists = Object.prototype.hasOwnProperty.call(state.products[index].sizes, actions.payload.size);
                if(sizeExists) {
                    if(state.products[index].sizes[actions.payload.size] > 0) {
                        state.products[index].sizes[actions.payload.size]--;
                        state.products[index].totalSizeInventory--;
                    }
                } else {
                    console.warn(`Size ${actions.payload.size} does not exist in product ${actions.payload.productId}`);
                }
            }
        },
        updateProductInSize: (state, actions: PayloadAction<{productId: number, size: string, quantity: number}>) => {
            const index = state.products.findIndex((product) => product.id === actions.payload.productId);
            if(index !== -1) {
                const sizeExists = Object.prototype.hasOwnProperty.call(state.products[index].sizes, actions.payload.size);
                if(sizeExists && actions.payload.quantity >= state.products[index].sizes[actions.payload.size]) {
                    state.products[index].sizes[actions.payload.size] = actions.payload.quantity;
                } else {
                    console.warn(`Size ${actions.payload.size} does not exist in product ${actions.payload.productId}`);
                }
            }
        },
        loadCategories: (state, actions: PayloadAction<string[]>) => {
            state.categories = actions.payload;
            state.loading = false;
            state.error = null;
        },
        setCategories: (state, actions: PayloadAction<string[]>) => {
            state.categories = actions.payload;
            state.loading = false;
            state.error = null;
        },
        loadCategoriesFailed: (state, actions: PayloadAction<string>) => {
            state.loading = false;
            state.error = actions.payload;
        },
    },
});

export const { 
    loadProducts,
    setProducts,
    loadProductsSuccess,
    addProduct,
    increaseProductInSize,
    decreaseProductInSize,
    updateProductInSize,
    loadProductsFailed,
    loadCategories,
    setCategories,
    loadCategoriesFailed, 
} = productsSlice.actions;

export default productsSlice.reducer;
