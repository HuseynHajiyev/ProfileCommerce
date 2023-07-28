// MUI imports
import { CardContent, Grid, Typography } from "@mui/material"

// Interface imports
import { ProductInterface } from "../../../types/ProductInterface"

interface ProductCardDescriptionProps {
    product: ProductInterface
}
const ProductCardDescription = ({ product } : ProductCardDescriptionProps) => {
  return (
    <CardContent
      sx={{
        borderRadius: '0px',
      }}
    >
      <Grid container direction={'column'} spacing={1}>
        <Grid item xs={12} display={'flex'} justifyContent={'center'}>
          <Typography variant='body1'>
            {product.title}
          </Typography>
        </Grid>
        <Grid item xs={12} display={'flex'} justifyContent={'center'}>
          <Typography variant='body1'>
            {`$${product.price}`}
          </Typography>
        </Grid>
      </Grid>
    </CardContent>
  )
}

export default ProductCardDescription
