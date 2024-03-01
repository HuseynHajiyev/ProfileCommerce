import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItemInterface } from "../../models/CartiItemInterface";
import { ShoppingBagInterface } from "../../models/ShoppingBagInterface";


interface InitialStateInterface extends ShoppingBagInterface {
    actionLog: string | null;
}

const initialState: InitialStateInterface = {
    id: 0,
    userId: 0,
    date: "",
    loading: false,
    loaded: false,
    products:[],
    tempProducts: [],
    error: null,
    subTotal: 0,
    shipping: 0,
    actionLog: null,
};

const shoppingBagSlice = createSlice({
    name: "shoppingBag",
    initialState,
    reducers: {
        loadShoppingBag: (state, action: PayloadAction<number>) => {
            state.loading = true;
            state.error = null;
            state.actionLog = action.type;
        },
        setShoppingBag: (state, action: PayloadAction<ShoppingBagInterface>) => {
            const { id, userId, date, products, subTotal } = action.payload;
            state.id = id;
            state.userId = userId;
            state.date = date;
            state.products = products;
            state.error = null;
            state.loading = false;
            state.loaded = true;
            state.subTotal = Number(subTotal.toFixed(2));
            state.shipping = 0;
        },
        loadShoppingBagFailed: (state, action: PayloadAction<string>) =>{
            state.loading = false;
            state.error = action.payload;
            state.loaded = false;
        },
        loadShoppingBagSuccess: (state) => {
            state.loading = false;
            state.loaded = true;
            state.error = null;
        },
        addToShoppingBag: (state, action: PayloadAction<CartItemInterface>) => {
            const index = state.products.findIndex((item) => item.product.id === action.payload.product.id && item.sizeSelected === action.payload.sizeSelected);
            if (index !== -1 && state.products[index].sizeSelected === action.payload.sizeSelected) {
                state.products[index].quantity += 1;
                state.subTotal = Number((state.subTotal + state.products[index].product.price).toFixed(2));
            } else{
                action.payload.quantity = 1;
                state.products.push(action.payload);
                state.subTotal = Number((state.subTotal + action.payload.product.price).toFixed(2));
            }
        },
        removeFromShoppingBag: (state, action: PayloadAction<CartItemInterface>) => {
            const index = state.products.findIndex((item) => item.product.id === action.payload.product.id && item.sizeSelected === action.payload.sizeSelected);
            if(index === -1) return;
            state.products.splice(index, 1);
            state.subTotal = Number((state.subTotal - action.payload.product.price * action.payload.quantity).toFixed(2));
        },
        updateQuantity: (state, action: PayloadAction<CartItemInterface>) => {
            const index = state.products.findIndex((item) => item.product.id === action.payload.product.id)
            if(index !== -1) {
                state.products[index].quantity = action.payload.quantity;
                state.subTotal = Number(state.products.reduce((acc, item) => acc + item.product.price * item.quantity, 0).toFixed(2));
            } else {
                state.products.push(action.payload);
            }
        },

        decreaseQuantity: (state, action: PayloadAction<CartItemInterface>) => {
            const productIndex = state.products.findIndex(
                (item) => item.product.id === action.payload.product.id && item.sizeSelected === action.payload.sizeSelected
            );
        
            if (productIndex !== -1) {
                if (state.products[productIndex].quantity > 1) {
                    state.products[productIndex].quantity -= 1;
                    state.subTotal = Number(
                        (
                            state.subTotal -
                            state.products[productIndex].product.price
                        ).toFixed(2)
                    );
                } else {
                    state.products = state.products.filter(
                        (item) => item.product.id !== action.payload.product.id
                    );
                }
            }
        },
        addTempSizeSelection: (state, action: PayloadAction<{productId: number, size: string}>) => {
            const indexOfTempProduct = state.tempProducts.findIndex((item) => item.productId === action.payload.productId && item.size === action.payload.size);
            if(indexOfTempProduct === -1) {
            state.tempProducts.push({productId: action.payload.productId, size: action.payload.size});
            }
        },
        removeTempSizeSelection: (state, action: PayloadAction<{productId: number, size: string}>) => {
            const indexOfTempProduct = state.tempProducts.findIndex((item) => item.productId === action.payload.productId && item.size === action.payload.size);
            if(indexOfTempProduct !== -1) {
                state.tempProducts.splice(indexOfTempProduct, 1);
            }
        },
        removeTempProductSelection: (state, action: PayloadAction<number>) => {
            state.tempProducts = state.tempProducts.filter((item) => item.productId !== action.payload);
        },
        resetShoppingBag: () => {
            return {
                ...initialState,
                loaded: true,
            }
        }
    }
});

export const { 
    loadShoppingBag,
    setShoppingBag,
    loadShoppingBagFailed,
    loadShoppingBagSuccess,
    addToShoppingBag,
    removeFromShoppingBag,
    updateQuantity, 
    decreaseQuantity,
    addTempSizeSelection,
    removeTempSizeSelection,
    removeTempProductSelection,
    resetShoppingBag
 } = shoppingBagSlice.actions;

export default shoppingBagSlice.reducer;
