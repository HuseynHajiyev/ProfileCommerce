import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItemInterface } from "../../types/CartiItemInterface";
import { ShoppingBagInterface } from "../../types/ShoppingBagInterface";

const initialState: ShoppingBagInterface = {
    id: 0,
    userId: 0,
    date: "",
    loading: false,
    products:[],
    error: null,
    subTotal: 0,
    shipping: 0,
};

const shoppingBagSlice = createSlice({
    name: "shoppingBag",
    initialState,
    reducers: {
        loadShoppingBag: (state, action: PayloadAction<number>) => {
            state.loading = true;
            state.error = null;
        },
        setShoppingBag: (state, action: PayloadAction<ShoppingBagInterface>) => {
            const { id, userId, date, products, subTotal } = action.payload;
            state.id = id;
            state.userId = userId;
            state.date = date;
            state.products = products;
            state.error = null;
            state.loading = false;
            state.subTotal = Number(subTotal.toFixed(2));
            state.shipping = 0;
        },
        loadShoppingBagFailed: (state, action: PayloadAction<string>) =>{
            state.loading = false;
            state.error = action.payload;
        },
        addToShoppingBag: (state, action: PayloadAction<CartItemInterface>) => {
            const index = state.products.findIndex((item) => item.product.id === action.payload.product.id);
            if (index !== -1) {
                state.products[index].quantity += 1;
                state.subTotal = Number((state.subTotal + state.products[index].product.price).toFixed(2));
            } else {
                action.payload.quantity = 1;
                state.products.push(action.payload);
            }
        },
        removeFromShoppingBag: (state, action: PayloadAction<CartItemInterface>) => {
            state.products = state.products.filter(
                (item) => item.product.id !== action.payload.product.id
            )
            state.subTotal = Number((state.subTotal - action.payload.product.price * action.payload.quantity).toFixed(2));
        },
        updateQuantity: (state, action: PayloadAction<CartItemInterface>) => {
            const index = state.products.findIndex((item) => item.product.id === action.payload.product.id)
            if(index !== -1) {
                state.products[index].quantity = action.payload.quantity;
                state.subTotal = Number(state.products.reduce((acc, item) => acc + item.product.price * item.quantity, 0).toFixed(2));
            } else {
                state.products.push(action.payload); // if the product isn't already in the cart, add it
            }
        },

        decreaseQuantity: (state, action: PayloadAction<CartItemInterface>) => {
            const productIndex = state.products.findIndex(
                (item) => item.product.id === action.payload.product.id
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
         
        
    }
});

export const { loadShoppingBag, setShoppingBag, loadShoppingBagFailed, addToShoppingBag, removeFromShoppingBag, updateQuantity, decreaseQuantity } = shoppingBagSlice.actions;

export default shoppingBagSlice.reducer;
