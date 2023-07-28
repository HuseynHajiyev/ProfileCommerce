// Type Imports
import { CartItemInterface, CartItemApiResponseInterface } from '../types/CartiItemInterface';
import { ProductInterface } from '../types/ProductInterface';

export function processShoppingBagProducts(
    cartItems: CartItemApiResponseInterface[],
    products: ProductInterface[]
  ): CartItemInterface[] {
    const sizes = ["S", "M", "L", "XL"];
    const colors = ["Red", "Blue", "Green", "Black", "White"];
    
    const shoppingBagContents = cartItems.map((cartItem) => {
      const size = sizes[Math.floor(Math.random() * sizes.length)];
      const color = colors[Math.floor(Math.random() * colors.length)];
  
      const product = products.find((product) => product.id === cartItem.productId);
      
      if (!product) {
        throw new Error(`Product with id ${cartItem.productId} not found`);
      }
      return {
        product: {
          ...product,
          size,
          color
        },
        quantity: cartItem.quantity
      } as CartItemInterface;
      
    });
  
    const combinedProducts: { [id: number]: CartItemInterface } = {};
  
    for (const product of shoppingBagContents) {
      if (combinedProducts[product.product.id]) {
        combinedProducts[product.product.id].quantity += product.quantity;
      } else {
        combinedProducts[product.product.id] = product;
      }
    }
  
    return Object.values(combinedProducts);
}

export function combineProductQuantities(combinedProducts: { [id: number]: CartItemInterface }, shoppingBagContents: CartItemInterface[]) {
    for (const product of shoppingBagContents) {
        if (combinedProducts[product.product.id]) {
            combinedProducts[product.product.id].quantity += product.quantity;
        } else {
            combinedProducts[product.product.id] = product;
        }
    }
}


