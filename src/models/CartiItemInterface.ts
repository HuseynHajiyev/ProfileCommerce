import { ProductInterface } from "./ProductInterface";

export interface CartItemInterface {
    product: ProductInterface;
    cartPrice: number;
    quantity: number;
    sizeSelected: string;
}


export interface CartItemApiResponseInterface {
    productId: number,
    quantity: number,
}