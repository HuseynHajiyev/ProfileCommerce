import Grid from '@mui/material/Unstable_Grid2';
import ProductSizePick from './ProductSizePick';
import { ProductInterface } from '../../../models/ProductInterface';


const ProductSizePicks = ({product} : {product: ProductInterface}) => {
  return (
    <Grid container xs={12} spacing={1}>
          {
            Object.keys(product.sizes).map((size, index) => (
              <Grid xs={1.5} key={index}>
                <ProductSizePick key={index} size={size} product={product} />
              </Grid>
            ))
          }
        </Grid>
  )
}

export default ProductSizePicks