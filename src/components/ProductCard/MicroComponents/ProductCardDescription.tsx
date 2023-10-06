// MUI imports
import { CardContent, Grid, Typography } from "@mui/material"

// Interface imports
import { ProductInterface } from "../../../models/ProductInterface"
import { useIsMobile } from "../../../hooks/useIsMobile"

interface ProductCardDescriptionProps {
    product: ProductInterface
}
const ProductCardDescription = ({ product } : ProductCardDescriptionProps) => {
  const isMobile = useIsMobile()
  return (
    <CardContent
      sx={{
        borderRadius: '0px',
      }}
    >
      <Grid container direction={'column'} spacing={1}>
        <Grid item xs={12} display={'flex'} justifyContent={'center'}>
          <Typography variant='body1' sx={{fontSize: isMobile ? '2rem' :'inherit'}}>
            {product.title}
          </Typography>
        </Grid>
        <Grid item xs={12} display={'flex'} justifyContent={'center'}>
          <Typography variant='body1' sx={{fontSize: isMobile ? '2rem' :'inherit'}}>
            {`$${product.price}`}
          </Typography>
        </Grid>
      </Grid>
    </CardContent>
  )
}

export default ProductCardDescription
