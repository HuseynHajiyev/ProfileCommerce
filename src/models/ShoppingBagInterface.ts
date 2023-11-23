import { CartItemInterface, CartItemApiResponseInterface } from "./CartiItemInterface";

export interface ShoppingBagInterface {
  id: number;
  userId: number;
  date: string;
  products: CartItemInterface[];
  tempProducts: TempProductInterface[];
  loading: boolean;
  loaded: boolean;
  error: string | null;
  subTotal: number;
  shipping: 0,
}

export interface TempProductSelection {
  productId: number;
  size: string;
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

export interface TempProductInterface {
  productId: number;
  size: string;
}