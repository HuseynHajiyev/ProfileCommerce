
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
  const biylaclesen = products.find((product: ProductInterface) => product.title.includes('BIYLACLESEN'));
  const danvouy = products.find((product: ProductInterface) => product.title.includes('DANVOUY'));
  const opna = products.find((product: ProductInterface) => product.title.includes('Opna'));
  const rainJacket = products.find((product: ProductInterface) => product.title.includes('Rain Jacket'));
  

  return (
    <Stack paddingY={5} >
      <AutoScrollBanner />
      <Box py={7} textAlign={'center'}>
        <Typography variant={'h5'} fontFamily={'Mulish'}>RONS AND SWANSONS</Typography>
        <Link to={'/shop/clothing'}>
          <Typography variant={'body2'} fontFamily={'Mulish'} color={'darkgray'} fontSize={'0.8rem'} sx={{textDecoration: 'underline'}}>SHOP NEW</Typography>
        </Link>
      </Box>
      <Grid container spacing={7} paddingBottom={5}>
        <Grid item xs={6}>
          <Box height={'85vh'}>
            <BannerImage currentSlide={'../../../assets/images/MainPageChoiceOne.png'} />
          </Box>
          <Box textAlign={'center'} paddingTop={3}>
            <Typography variant={'h5'} fontFamily={'Mulish'}>LEANING IN</Typography>
          </Box>
          <Box textAlign={'center'}>
            <Link to={`/shop/view-all/${cottonJacketId}`}>
              <Typography variant={'body2'} fontFamily={'Mulish'} color={'darkgray'} fontSize={'0.8rem'} sx={{textDecoration: 'underline'}}>SHOP COATS</Typography>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box height={'85vh'}>
            <BannerImage currentSlide={'../../../assets/images/MainPageChoiceTwo.png'} />
          </Box>
          <Box textAlign={'center'} paddingTop={3}>
            <Typography variant={'h5'} fontFamily={'Mulish'}>ALL OVER VELVET</Typography>
          </Box>
          <Box textAlign={'center'}>
            <Link to={`/shop/view-all/${slimFitId}`}>
              <Typography variant={'body2'} fontFamily={'Mulish'} color={'darkgray'} fontSize={'0.8rem'} sx={{textDecoration: 'underline'}}>SHOP SWEATERS</Typography>
            </Link>
          </Box>
        </Grid>
      </Grid>
      <Box borderTop={'1px solid lightgray'}>
        <Box textAlign={'center'} paddingY={5}>
          <Typography variant={'h5'} fontFamily={'Mulish'}>FEATURED</Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <Box height={'50vh'}>
              <BannerImage currentSlide={'../../../assets/images/SuggestionOne.png'} />
            </Box>
            <Box textAlign={'center'} paddingTop={3}>
              <Link to={`/shop/view-all/${opna?.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <Typography variant={'h6'} fontFamily={'Mulish'}>BIYLACLESEN</Typography>
              </Link>
            </Box>
            <Box textAlign={'center'}>
              <Typography variant={'body2'} fontFamily={'Mulish'} color={'darkgray'} fontSize={'0.8rem'}>{`$${biylaclesen?.price}`}</Typography>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box height={'50vh'}>
              <BannerImage currentSlide={'../../../assets/images/SuggestionTwo.png'} />
            </Box>
            <Box textAlign={'center'} paddingTop={3}>
              <Link to={`/shop/view-all/${opna?.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <Typography variant={'h6'} fontFamily={'Mulish'}>OPNA</Typography>
              </Link>
            </Box>
            <Box textAlign={'center'}>
              <Typography variant={'body2'} fontFamily={'Mulish'} color={'darkgray'} fontSize={'0.8rem'}>{`$${opna?.price}`}</Typography>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box height={'50vh'}>
              <BannerImage currentSlide={'../../../assets/images/SuggestionThree.png'} />
            </Box>
            <Box textAlign={'center'} paddingTop={3}>
              <Link to={`/shop/view-all/${danvouy?.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <Typography variant={'h6'} fontFamily={'Mulish'}>DANVOUY</Typography>
              </Link>
            </Box>
            <Box textAlign={'center'}>
              <Typography variant={'body2'} fontFamily={'Mulish'} color={'darkgray'} fontSize={'0.8rem'}>{`$${danvouy?.price}`}</Typography>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box height={'50vh'}>
              <BannerImage currentSlide={'../../../assets/images/SuggestionFour.png'} />
              <Box textAlign={'center'} paddingTop={3}>
                <Link to={`/shop/view-all/${rainJacket?.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <Typography variant={'h6'} fontFamily={'Mulish'}>RAIN JACKET</Typography>
                </Link>
              </Box>
              <Box textAlign={'center'}>
                <Typography variant={'body2'} fontFamily={'Mulish'} color={'darkgray'} fontSize={'0.8rem'}>{`$${rainJacket?.price}`}</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box>

      </Box>
    </Stack>
  )
}

export default Home
