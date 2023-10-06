// Type Imports
import { CartItemInterface, CartItemApiResponseInterface } from '../models/CartiItemInterface';
import { ProductInterface } from '../models/ProductInterface';
import { ShoppingBagApiResponseInterface } from '../models/ShoppingBagInterface';
import { pickRandomAvailableSize } from './processProductResponse';



export const processShoppingBagProducts = (
    products: ProductInterface[],
    cartItemsApi: CartItemApiResponseInterface[]
  ): CartItemInterface[] => {

    const cartItems: CartItemInterface[] = [];
    for (const cartItemApi of cartItemsApi) {
      const product = products.find((product) => product.id === cartItemApi.productId);
      const size = pickRandomAvailableSize(product?.sizes);
      if (product) {
        const item: CartItemInterface = {
          product: product,
          quantity: product.sizes[size] >= cartItemApi.quantity ? cartItemApi.quantity : product.sizes[size],
          sizeSelected: size,
          cartPrice: getCartPrice(cartItems),
        } 
        cartItems.push(item);
      }
    }
    return cartItems;
}

export function getCartPrice(cartItems: CartItemInterface[]): number {
  let cartPrice = 0;
  for (const cartItem of cartItems) {
      cartPrice += cartItem.product.price * cartItem.quantity;
  }
  return cartPrice;
} 



export function combineProductQuantities(combinedProducts: CartItemApiResponseInterface[], shoppingBagContents: CartItemApiResponseInterface[]) {
  for (const product of shoppingBagContents) {
      const existingProduct = combinedProducts.find(item => item.productId === product.productId);
      if (existingProduct) {
          existingProduct.quantity += product.quantity;
      } else {
          combinedProducts.push(product);
      }
  }
}

export const combineShoppingBags = (response: ShoppingBagApiResponseInterface[]): ShoppingBagApiResponseInterface => {
  const combinedProducts: CartItemApiResponseInterface[] = [];
  for (const shoppingBag of response) {
      combineProductQuantities(combinedProducts, shoppingBag.products);
  }
  return {
      ...response[0],
      products: combinedProducts,
  };
}



export const getSizeAvailabilityForShoppingBag = (productId: number, size: string, products: ProductInterface[]): number => {
  const product = findProduct(productId, products);
  if(!product) return 0;
  const sizeAvailability = product.sizes[size];
  return sizeAvailability;
};

const findProduct = (id: number, products: ProductInterface[]) => {
  return products.find(product => product.id === id);
}