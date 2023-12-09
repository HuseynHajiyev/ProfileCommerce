// MUI imports
import { CardMedia, Box, CircularProgress } from '@mui/material'

// Interface imports
import { ProductInterface } from '../../../models/ProductInterface'
import { useState } from 'react';

interface ProductCardImageProps {
  product: ProductInterface
}

const ProductCardImage= ({product} : ProductCardImageProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoaded = () => {
    setImageLoaded(true);
  }
  return (
    <Box sx={{ aspectRatio: '1/1', width: '100%', position: 'relative' }}>
      <CardMedia 
        component="img"
        sx={{ 
          width: '100%', 
          height: '100%', 
          objectFit: 'contain', 
          display: imageLoaded ? 'block' : 'none' // Hide the image initially
        }}
        image={product.image}
        alt={product.title}
        aria-label='product image'
        onLoad={handleImageLoaded}
      />
      {!imageLoaded && (
        <CircularProgress sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
      )}
    </Box>
  )
}

export default ProductCardImage
