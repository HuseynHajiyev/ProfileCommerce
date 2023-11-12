import axios from "axios";
import { ENDPOINTS } from "../config";
import { LoginCredentialsInterface } from "../models/LoginCredentials";

const { LOGIN_USER, GET_USERS } = ENDPOINTS

export const loginUser = async (credentials: LoginCredentialsInterface) => {
    const response = await axios.post(`${LOGIN_USER}`, credentials);
    console.log('logging in with response', response);
    return response.data;
}

export const getUsers = async () => {
    const response = await axios.get(`${GET_USERS}`);
    return response.data;
}