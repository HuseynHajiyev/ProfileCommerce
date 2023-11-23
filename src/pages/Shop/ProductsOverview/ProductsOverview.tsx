import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app/store';
import ShopGrid from '../../../components/Shop/ShopGrid';
import ShopSkeletonGrid from '../../../components/Shop/ShopSkeletonGrid';

const ProductsOverview = () => {
    const products = useSelector((state: RootState) => state.productsState);
    return (
      <>
        <Box display={'flex'} flexDirection={'column'} paddingTop={'1%'}>
          <Box>
            <Box paddingY={'1%'}> 
              <Typography variant='h6'>
                {`${products.products.length} products`}
              </Typography>
            </Box>
            { products.loading ? (
              <Box display={'flex'} justifyContent={'center'} alignItems={'center'} height={'100vh'}>
                <ShopSkeletonGrid />
              </Box>
            ) : products.products.length == 0 ? (
              <Box display={'flex'} justifyContent={'center'} alignItems={'center'} height={'70vh'}>
                <Typography variant='h2'>
                  Sold out...
                  Check in later for more products
                </Typography>
              </Box>
            ) : (
              <Box display={'flex'} justifyContent={'center'} alignItems={'center'} height={'100vh'}>
                <ShopGrid products={products.products} />
              </Box>
            )}
          </Box>
        </Box>
      </>
    )
  }
  
  export default ProductsOverview;