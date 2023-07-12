// MUI imports
import { CardMedia } from '@mui/material';

// Interface imports
import { ProductInterface } from '../../../../../../types/ProductInterface';

const CardMediaComponent = ({product} : {product: ProductInterface}) => {
  return (
      <CardMedia
          component="img"
          sx={
              { 
                position: 'absolute', 
                top: 0,
                left: 0,
                height: '100%',
                objectFit: 'contain',
              }
            }
          image={product.image}
          alt={product.title}
          aria-label='product-image'
        />
  )
}

export default CardMediaComponent
