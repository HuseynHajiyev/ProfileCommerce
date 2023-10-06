// MUI imports
import { CardMedia } from '@mui/material';

// Interface imports
import { ProductInterface } from '../../../../../../models/ProductInterface';
import { Link } from 'react-router-dom';

const CardMediaComponent = ({product} : {product: ProductInterface}) => {
  return (
    <Link to={`/shop/view-all/${product.id}`}>
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
    </Link>
  )
}

export default CardMediaComponent
