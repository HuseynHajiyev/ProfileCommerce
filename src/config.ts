export const API_URL = 'https://fakestoreapi.com';

export const ENDPOINTS = {
  GET_SHOPPING_BAG: `${API_URL}/carts/user/`,
  UPDATE_SHOPPING_BAG: `${API_URL}/carts/`,
  ADD_PRODUCT_TO_BAG: `${API_URL}/carts`,
  GET_PRODUCTS: `${API_URL}/products`,
  GET_PRODUCTS_LIMIT: `${API_URL}/products?limit=`,
  GET_PRODUCTS_IN_CATEGORY: `${API_URL}/products/category/`,
  GET_PRODUCT: `${API_URL}/products/`,
  GET_CATEGORIES: `${API_URL}/products/categories`,
  GET_IN_CATEGORY: `${API_URL}/products/category/`,
  LOGIN_USER: `${API_URL}/auth/login`,
  GET_USERS: `${API_URL}/users`,
};
