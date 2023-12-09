import { Box, CardMedia, CircularProgress } from '@mui/material'
import { useState } from 'react'
import { ProductInterface } from '../../../models/ProductInterface'

interface MainImageProps {
  image: string
  product: ProductInterface
  reverse?: boolean
}

const MainImage = ({image, product, reverse } : MainImageProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoaded = () => {
    setImageLoaded(true);
  }
  return (
    <Box sx={{ aspectRatio: '1/1', width: '100%', height: '100%', position: 'relative' }}>
    <CardMedia 
      component="img"
      sx={{ 
        width: '100%', 
        height: '100%', 
        objectFit: 'contain', 
        display: imageLoaded ? 'block' : 'none', // Hide the image initially
        transform: reverse? 'scaleX(-1)' : 'none',
      }}
      image={image}
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

export default MainImage