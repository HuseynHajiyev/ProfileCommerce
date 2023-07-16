import { CartItemInterface, CartItemApiResponseInterface } from "./CartiItemInterface";

export interface ShoppingBagInterface {
  id: number;
  userId: number;
  date: string;
  products: CartItemInterface[];
  loading: boolean;
  error: string | null;
  subTotal: number;
  shipping: 0,
}

export interface ShoppingBagApiResponseInterface {
  id: number;
  userId: number;
  date: string;
  products: CartItemApiResponseInterface[];
  __v: number;
}
export interface AddProductToBagProps {
  userId: number;
  date: string;
  products: CartItemApiResponseInterface[];
}

export interface UpdateShoppingBagProps {
  cartId: number;
  userId: number;
  date: string;
  products: CartItemApiResponseInterface[];
}