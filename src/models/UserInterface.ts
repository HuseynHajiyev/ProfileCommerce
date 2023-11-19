import { ProductInterface } from "./ProductInterface";

export interface UserInterface {
    address: {
        geolocation: {
            lat: string,
            long: string,
        },
        city: string,
        street: string,
        number: number,
        zipcode: string,
    },
    id: number,
    email: string,
    username: string,
    password: string,
    name: {
        firstname: string,
        lastname: string,
    },
    phone: string,
    __v: number,
}

export interface LoggedInPayloadInterface {
    user: UserInterface,
    token: string,
}

export interface LoginCredentials {
    username: string,
    password: string,
}

export interface logginSuccessPayload {
    user: UserInterface,
    token: string,
}

export interface UserStateInterface {
    token: string | null,
    user: UserInterface | null,
    userFavourites: ProductInterface[] | null,
    loading: boolean,
    loggedIn: boolean,
    error: string | null,
    loginCredentials: LoginCredentials,
}