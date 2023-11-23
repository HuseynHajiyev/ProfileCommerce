import { Box, Card, CardContent, CardMedia, Grid, Tooltip, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { ProductInterface } from '../../../models/ProductInterface'
import { memo } from 'react'
import { useIsMobile } from '../../../hooks/useIsMobile'

interface FavouritesProductCardProps {
  product: ProductInterface
} 

const FavouritesProductCard = memo(({product} : FavouritesProductCardProps) => {
  const isMobile = useIsMobile('mobile');
  return (
    <Card sx={{ 
      maxWidth: '100%',
      position: 'relative',
      minHeight:'100%', 
      borderRadius: '0px',
      border: 'none',
    }}>
      <Grid container direction={'column'}>
        <Grid item xs={9} position={'relative'} minHeight={'100%'} minWidth={'100%'}>
          <Link to={`/shop/view-all/${product.id}`} aria-label={`link-to-${product.title}`}>
            <Box sx={{ width: '100%' }}>
              <CardMedia 
                component="img"
                sx={{ width: '100%', minHeight: '35vh', maxHeight: '35vh', objectFit: 'contain' }}
                image={product.image}
                alt={product.title}
                aria-label='product image'
              />
            </Box>
          </Link>
        </Grid>
        <Grid item xs={3}>
          <CardContent
            sx={{
              borderRadius: '0px',
            }}
          >
            <Grid container direction={'column'} spacing={1}>
              <Grid item xs={12} display={'flex'} justifyContent={'center'}>
                <Tooltip title={product.title} placement='top-start' aria-label="full-title">
                  <Typography variant='body1' sx={{fontSize: isMobile ? '2rem' :'inherit'}}>
                    {product.title.length > 30 ? product.title.slice(0,33) + '...': product.title}
                  </Typography>
                </Tooltip>
              </Grid>
              <Grid item xs={12} display={'flex'} justifyContent={'center'}>
                  <Typography variant='body1' sx={{fontSize: isMobile ? '2rem' :'inherit'}} zIndex={'500'}>
                      {`$${product.price}`}
                  </Typography>
              </Grid>
            </Grid>
          </CardContent>        
        </Grid>
      </Grid>
    </Card>
  )
})

export default FavouritesProductCard