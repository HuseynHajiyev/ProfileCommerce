import { matchPath } from 'react-router-dom';

// This function checks if the given URL matches the expected pattern and has a valid product ID
export const validateProductUrl = (url: string) => {
    // Check if the URL matches the expected pattern (and extract the product ID if it does)
    const match = matchPath({
        path: '/shop/view-all/:id'
    }, url );

    // If the URL didn't match the expected pattern, return null
    if (!match) {
        return '';
    }

    // Extract the product ID from the URL
    const productId = match.params.id;

  // Check if the product ID is a number
    if (productId && isNaN(parseInt(productId))) {
    return '';
    }

  // If we made it here, the URL matches the expected pattern and has a valid product ID
  return productId === undefined ? '' : `${productId}`;
}
