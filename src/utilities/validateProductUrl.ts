import { matchPath } from 'react-router-dom';

export const validateProductUrl = (url: string) => {
    const match = matchPath({
        path: '/shop/view-all/:id'
    }, url );

    if (!match) {
        return '';
    }

    const productId = match.params.id;

    if (productId && isNaN(parseInt(productId))) {
    return '';
    }
  return productId === undefined ? '' : `${productId}`;
}
