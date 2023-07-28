import axios from "axios";

import { ENDPOINTS } from "../config";

const { GET_PRODUCTS, GET_PRODUCTS_LIMIT } = ENDPOINTS;

export const getProducts= async (limit?: number) => {
    if(limit === 0 ) {
        const response = await axios.get(`${GET_PRODUCTS}`);
        return response.data;
    }
    const response = await axios.get(`${GET_PRODUCTS_LIMIT}${limit}`);
    return response.data;
}

export const getProductsInCategory = async (categoryName: string) => {
   const response = await axios.get(`${GET_PRODUCTS}/${categoryName}`);
    return response.data;
}