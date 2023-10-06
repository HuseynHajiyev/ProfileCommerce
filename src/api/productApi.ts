import axios from "axios";
import { ENDPOINTS } from "../config";

const { GET_PRODUCT } = ENDPOINTS;

export const getProduct = async (productId: number) => {
    const response = await axios.get(`${GET_PRODUCT}${productId}`);
    return response.data;
}

export const getCategories = async () => {
    const response = await axios.get(ENDPOINTS.GET_CATEGORIES);
    return response.data;
}