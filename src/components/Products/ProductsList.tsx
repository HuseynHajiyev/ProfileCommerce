import React from 'react';
import { ProductInterface } from '../../types/ProductInterface';
import { Box } from '@mui/material';

function ProductList({ products } : { products: ProductInterface[]}) {
  return (
    <Box>
      {products.map((product) => (
        <Box key={product.id}>{product.title}</Box>
      ))}
    </Box>
  );
}

export default ProductList;
