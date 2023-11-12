import { ShoppingBagInterface, ShoppingBagApiResponseInterface } from "../models/ShoppingBagInterface";
import { CartItemInterface, CartItemApiResponseInterface } from "../models/CartiItemInterface";

export const shoppingBagCalculateTotal = (cartItems: CartItemInterface[]): number => {
    return cartItems.reduce((total, cartItem) => total + cartItem.product.price * cartItem.quantity, 0);
}


export const ApiToShoppingBagConverter = (response: ShoppingBagApiResponseInterface, loadedProducts: CartItemInterface[]): {bag: ShoppingBagInterface, __v: number} => {
    const { __v, ...restOfResponse } = response;
    const loadedShoppingBag: ShoppingBagInterface = {
        ...restOfResponse, 
        products: loadedProducts, 
        loading: false, 
        error: null, 
        tempProducts: [],
        shipping: 0,
        subTotal: shoppingBagCalculateTotal(loadedProducts)
    }
    return {bag: loadedShoppingBag, __v: __v};
}

export const ShoppingBagToApiConverter = (bag: ShoppingBagInterface, __v: number): {apiShoppingBag: ShoppingBagApiResponseInterface, error: string | null, loading: boolean} => {
    const { loading, error, products, ...restOfBag } = bag;
    const apiProducts: CartItemApiResponseInterface[] = products.map((item: CartItemInterface) => {
        return {
            productId: item.product.id,
            quantity: item.quantity
        };
    });
    const apiShoppingBag: ShoppingBagApiResponseInterface = {...restOfBag, products: apiProducts, __v: __v};
    return {apiShoppingBag , error, loading};
}

