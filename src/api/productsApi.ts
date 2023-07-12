
export const getProducts= (limit?: number) => {
    if(limit === undefined ) {
        return fetch(`https://fakestoreapi.com/products`).then(response => response.json());
    }
    
    return fetch(`https://fakestoreapi.com/users?limit=${limit}`).then(response => response.json());
}

export const getProduct = (productId: number) => {
    return fetch(`https://fakestoreapi.com/products/${productId}`).then(response => response.json());
}

export const getProductsInCategory = (categoryName: string) => {
    return fetch(`https://fakestoreapi.com/category/${categoryName}`).then(response => response.json());
}