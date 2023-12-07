// MUI imports
import { CardContent, Grid, Tooltip, Typography } from "@mui/material"

// Interface imports
import { ProductInterface } from "../../../models/ProductInterface"
import { useIsMobile } from "../../../hooks/useIsMobile"
import { trimTitle } from "../../../utilities/TrimTitle"

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
          <Tooltip title={product.title} placement='top-start' aria-label="full-title">
            <Typography variant='body1' sx={{fontSize: isMobile ? '2rem' :'inherit'}}>
              {trimTitle(product.title, 23)}
            </Typography>
          </Tooltip>
        </Grid>
        <Grid container item xs={12} display={'flex'} justifyContent={'center'}>
          <Grid container item xs={12} display={"flex"} justifyContent={'center'} spacing={2}>
            <Grid item>
              <Typography variant='body1' sx={{fontSize: isMobile ? '2rem' :'inherit'}}>
                {`$${product.price}`}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant='body1' sx={{fontSize: isMobile ? '2rem' :'inherit'}}>
                Rating: {product.rating.rate}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </CardContent>
  )
}

export default ProductCardDescription
