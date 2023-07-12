// React Imports
import React from 'react';

// Redux Imports'
import { ProductInterface } from '../../types/ProductInterface';

// Component Imports
import ProductCard from './ProductCard';

// MUI imports
import Grid from '@mui/material/Grid';

const Products = (products: ProductInterface[]) => {
  return (
   <Grid container spacing={3}>
      {products.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
          <ProductCard />
        </Grid>
      ))}
    </Grid>
  )
}

export default Products
