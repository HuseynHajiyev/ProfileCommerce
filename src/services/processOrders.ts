import { ShoppingBagInterface } from "../models/ShoppingBagInterface";
import { OrderInterface } from "../models/UserInterface";



export const convertCartToOrder = (cart: ShoppingBagInterface): OrderInterface => {
  const order: OrderInterface = {
    id: cart.id,
    products: cart.products,
    user: cart.userId,
    total: cart.subTotal,
    shipping: cart.shipping,
    date: new Date(),
  };
  return order;
};