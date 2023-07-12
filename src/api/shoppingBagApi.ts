import axios from 'axios';
import { AddProductToBagProps, UpdateShoppingBagProps } from "../types/ShoppingBagInterface";

const API_URL = 'https://fakestoreapi.com';

export const getShoppingBag = async (userId: number) => {
    const response = await axios.get(`${API_URL}/carts/user/${userId}`);
    return response.data;
};

export const updateShoppingBag = async (props: UpdateShoppingBagProps) => {
    const response = await axios.put(`${API_URL}/carts/${props.cartId}`, {
        userId: props.userId,
        date: props.date,
        products: props.products,
    });
    console.log(response.data);
    return response.data;
};

export const addProductToBag = async (props: AddProductToBagProps) => {
    const response = await axios.post(`${API_URL}/carts`, {
        userId: props.userId,
        date: props.date,
        products: props.products,
    });
    return response.data;
};
