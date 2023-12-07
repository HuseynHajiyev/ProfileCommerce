
import { Box, Grid, Stack, Typography } from '@mui/material';
import AutoScrollBanner from '../../components/HomePage/AutoScrollBanner ';
import BannerImage from '../../components/HomePage/BannerImage';
import { useSelector } from 'react-redux';
import { ProductInterface } from '../../models/ProductInterface';
import { Link } from 'react-router-dom';
import { RootState } from '../../app/store';

const Home = () => {
  const products = useSelector((state: RootState) => state.productsState.products);
  const cottonJacketId = products.find((product: ProductInterface) => product.title.includes('Cotton Jacket'))?.id;
  const slimFitId = products.find((product: ProductInterface) => product.title.includes('Mens Casual Slim Fit'))?.id;
  

  return (
    <Stack paddingY={5} >
      <AutoScrollBanner />
      <Box py={7} textAlign={'center'}>
        <Typography variant={'h5'} fontFamily={'Mulish'}>RONS AND SWANSONS</Typography>
        <Link to={'/shop/clothing'}>
          <Typography variant={'body2'} fontFamily={'Mulish'} color={'darkgray'} fontSize={'0.8rem'} sx={{textDecoration: 'underline'}}>SHOP NEW</Typography>
        </Link>
      </Box>
      <Grid container spacing={7} height={'100vh'}>
        <Grid item xs={6}>
          <BannerImage currentSlide={'../../../assets/images/MainPageChoiceOne.png'} />
          <Box textAlign={'center'} paddingTop={3}>
            <Typography variant={'h5'} fontFamily={'Mulish'}>LEANING IN</Typography>
          </Box>
          <Box textAlign={'center'}>
            <Link to={`/shop/view-all/${cottonJacketId}`}>
              <Typography variant={'body2'} fontFamily={'Mulish'} color={'darkgray'} fontSize={'0.8rem'} sx={{textDecoration: 'underline'}}>SHOP MEN'S CLOTHING</Typography>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <BannerImage currentSlide={'../../../assets/images/MainPageChoiceTwo.png'} />
          <Box textAlign={'center'} paddingTop={3}>
            <Typography variant={'h5'} fontFamily={'Mulish'}>ALL OVER VELVET</Typography>
          </Box>
          <Box textAlign={'center'}>
            <Link to={`/shop/view-all/${slimFitId}`}>
              <Typography variant={'body2'} fontFamily={'Mulish'} color={'darkgray'} fontSize={'0.8rem'} sx={{textDecoration: 'underline'}}>SHOP DRESSES</Typography>
            </Link>
          </Box>
        </Grid>
      </Grid >
    </Stack>
  )
}

export default Home
