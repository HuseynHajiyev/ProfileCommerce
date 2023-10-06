// MUI imports
import { CardMedia, Box } from '@mui/material'

// Interface imports
import { ProductInterface } from '../../../models/ProductInterface'

interface ProductCardImageProps {
  product: ProductInterface
}

const ProductCardImage= ({product} : ProductCardImageProps) => {
  return (
    <Box sx={{ aspectRatio: '1/1', width: '100%' }}>
      <CardMedia 
        component="img"
        sx={{ width: '100%', height: '100%', objectFit: 'contain' }}
        image={product.image}
        alt={product.title}
        aria-label='product image'
      />
    </Box>
  )
}

export default ProductCardImage
