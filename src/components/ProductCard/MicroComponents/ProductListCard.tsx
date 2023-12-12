import { Box, Card, CardContent, CardMedia, Grid, Stack, Typography, CardActionArea, Tooltip} from '@mui/material';
import { Link } from 'react-router-dom';
import { ProductInterface } from '../../../models/ProductInterface'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { StyledRating } from '../../StyledComponents/ProductCardStyled/ProductViewPageStyled';
import { trimTitle } from '../../../utilities/TrimTitle';

interface ProductListCardImageProps {
  product: ProductInterface;
}

const ProductListCardImage = ({product} : ProductListCardImageProps) => {
  return (
    <Card sx={{ display: 'flex', maxWidth: '60%', m: 'auto', p: '3%',minHeight: '350px'}}>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={6}>
          <CardActionArea component={Link} to={`/shop/view-all/${product.id}`}>
          <Box sx={{ aspectRatio: '1/1', width: '100%' }}>
            <CardMedia 
              component="img"
              sx={{ width: '100%', height: '100%', objectFit: 'contain' }}
              image={product.image}
              alt={product.title}
              aria-label='product image'
            />
          </Box>
          </CardActionArea>
        </Grid>
        <Grid item xs={12} sm={6}>
          <CardContent sx={{ flex: '1 0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
            <Box display={'flex'} justifyContent={'space-between'} flexDirection={'column'} height={'100%'}>
              <Stack spacing={4}>
                <Typography gutterBottom variant="h5" component="div" fontWeight={'600'}>
                  {product.title}
                </Typography>
                <Tooltip title={product.description} placement='top-start' aria-label="full-title">
                  <Typography variant="body1" color="text.secondary">
                    {trimTitle(product.description, 100)}
                  </Typography>
                </Tooltip>
              </Stack>
              <Box display={'flex'} justifyContent={'space-between'}>
                <Box>
                  <Typography variant="body1" color="text.primary" component={'span'}>
                    Price: {` `}
                  </Typography>
                  <Typography variant="body1" color="text.primary" fontWeight={'600'} component={'span'}>
                    ${product.price}
                  </Typography>
                </Box>
                <Box>
                <StyledRating
                  name="customized-color"
                  defaultValue={product.rating.rate}
                  getLabelText={(value: number) => `${value} Heart${value !== 1 ? 's' : ''}`}
                  precision={0.5}
                  icon={<FavoriteIcon fontSize="inherit" />}
                  emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                />
                </Box>
              </Box>
            </Box>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  )
}

export default ProductListCardImage