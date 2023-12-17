import { memo } from 'react'

// MUI imports
import { CardMedia } from '@mui/material';

// Interface imports
import { ProductInterface } from '../../../../../../models/ProductInterface';

const ProductCardMediaComponent = memo(({product}: {product: ProductInterface})  => {
  return (
    <CardMedia
    component="img"
    sx={{ 
      position: 'absolute', 
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      height: '100%',
      width: '100%',
      objectFit: 'contain',
    }}
    image={product.image}
    alt={product.title}
    aria-label='product image'
  />
  )
})


export default ProductCardMediaComponent
