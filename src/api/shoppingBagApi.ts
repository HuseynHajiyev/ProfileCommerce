import axios from 'axios';
import { AddProductToBagProps, UpdateShoppingBagProps } from "../types/ShoppingBagInterface";
import { ENDPOINTS} from '../config';

const { GET_SHOPPING_BAG, UPDATE_SHOPPING_BAG, ADD_PRODUCT_TO_BAG } = ENDPOINTS;

export const getShoppingBag = async (userId: number) => {
    const response = await axios.get(`${GET_SHOPPING_BAG}${userId}`);
    return response.data;
};

export const updateShoppingBag = async (props: UpdateShoppingBagProps) => {
    const response = await axios.put(`${UPDATE_SHOPPING_BAG}${props.cartId}`, {
        userId: props.userId,
        date: props.date,
        products: props.products,
    });
    return response.data;
};

export const addProductToBag = async (props: AddProductToBagProps) => {
    const response = await axios.post(`${ADD_PRODUCT_TO_BAG}`, {
        userId: props.userId,
        date: props.date,
        products: props.products,
    });
    return response.data;
};
