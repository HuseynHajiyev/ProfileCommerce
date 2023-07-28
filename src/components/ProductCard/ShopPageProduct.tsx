import { ProductInterface } from '../../types/ProductInterface'
import { Card, Grid } from '@mui/material';
import ProductCardImage from './MicroComponents/ProductCardImage';
import ProductCardDescription from './MicroComponents/ProductCardDescription';
import { Link } from 'react-router-dom';

interface ProductProps {
    product: ProductInterface;
}

const ShopPageProduct = ({ product }:ProductProps) => {
  return (
    <Card sx={{ maxWidth: '100%', position: 'relative', maxHeight: '100%', minHeight:'100%'}}>
      <Grid container direction={'column'}>
        <Grid item xs={9} position={'relative'} minHeight={'100%'} minWidth={'100%'}>
          <Link to={`/shop/view-all/${product.id}`} aria-label={`link-to-${product.title}`}>
            <ProductCardImage product={product} />
          </Link>
        </Grid>
        <Grid item xs={3}>
          <ProductCardDescription product={product} />
        </Grid>
      </Grid>
    </Card>
  )
}

export default ShopPageProduct
