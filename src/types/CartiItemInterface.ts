import { ProductInterface } from "./ProductInterface";

export interface CartItemInterface {
    product: ProductInterface,
    quantity: number,
}

export interface CartItemApiResponseInterface {
    productId: number,
    quantity: number,
}