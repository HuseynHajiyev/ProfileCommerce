import axios from "axios";
import { ENDPOINTS } from "../config";
import { LoginCredentialsInterface } from "../models/LoginCredentials";

const { LOGIN_USER } = ENDPOINTS

export const loginUser = async (credentials: LoginCredentialsInterface) => {
    const response = await axios.post(`${LOGIN_USER}`, credentials);
    return response.data;
}

export const getUsers = async () => {
    const response = await axios.get(`${LOGIN_USER}`);
    return response.data;
}