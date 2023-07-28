import axios from "axios";
import { ENDPOINTS } from "../config";

const { GET_PRODUCTS } = ENDPOINTS;

export const getProduct = async (productId: number) => {
    const response = await axios.get(`${GET_PRODUCTS}/${productId}`);
    return response.data;
}