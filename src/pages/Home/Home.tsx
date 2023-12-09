import { Box, Grid, Stack, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { ProductInterface } from '../../models/ProductInterface';
import { Link } from 'react-router-dom';
import { RootState } from '../../app/store';
import Choice from '../../components/HomePage/Choice';
import Suggestion from '../../components/HomePage/Suggestion';
import IntersectionTransition from '../../components/HomePage/IntersectionTransition';
import AutoScrollBanner from '../../components/HomePage/AutoScrollBanner ';

const Home = () => {
  const products = useSelector((state: RootState) => state.productsState.products);
  const mainProducts = {
    cottonJacket: products.find((product: ProductInterface) => product.title.includes('Cotton Jacket')),
    slimFit: products.find((product: ProductInterface) => product.title.includes('Mens Casual Slim Fit')),
    biylaclesen: products.find((product: ProductInterface) => product.title.includes('BIYLACLESEN')),
    danvouy: products.find((product: ProductInterface) => product.title.includes('DANVOUY')),
    opna: products.find((product: ProductInterface) => product.title.includes('Opna')),
    rainJacket: products.find((product: ProductInterface) => product.title.includes('Rain Jacket')),
  };

  const renderBannerSection = (isVisible: boolean) => (
    <>
      <AutoScrollBanner />
      <Box py={7} textAlign={'center'}>
        <Typography variant={'h5'} fontFamily={'Mulish'}>
          RONS AND SWANSONS
        </Typography>
        <Link to={'/shop/clothing'}>
          <Typography variant={'body2'} fontFamily={'Mulish'} color={'darkgray'} fontSize={'0.8rem'} sx={{ textDecoration: 'underline' }}>
            SHOP NEW
          </Typography>
        </Link>
      </Box>
    </>
  );

  const renderChoiceSection = (isVisible: boolean) => (
    <Grid container spacing={7} paddingBottom={5}>
      <Grid item xs={6}>
        <Choice product={mainProducts.cottonJacket} imageUrl={'../../../assets/images/mainPageChoiceOne.png'} placeholder={'../../../assets/placeholders/mainPageChoiceOne-small.jpg'} />
      </Grid>
      <Grid item xs={6}>
        <Choice product={mainProducts.slimFit} imageUrl={'../../../assets/images/mainPageChoiceTwo.png'} placeholder={'../../../assets/placeholders/mainPageChoiceTwo-small.jpg'} />
      </Grid>
    </Grid>
  );

  const renderSuggestionSection = (isVisible: boolean) => (
    <Box borderTop={'1px solid lightgray'}>
      <Box textAlign={'center'} paddingY={5}>
        <Typography variant={'h5'} fontFamily={'Mulish'}>
          FEATURED
        </Typography>
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Suggestion product={mainProducts.biylaclesen} imageUrl={'../../../assets/images/suggestionOne.png'} placeholder={'../../../assets/placeholders/suggestionOne-small.jpg'} />
        </Grid>
        <Grid item xs={3}>
          <Suggestion product={mainProducts.opna} imageUrl={'../../../assets/images/suggestionTwo.png'} placeholder={'../../../assets/placeholders/suggestionTwo-small.jpg'} />
        </Grid>
        <Grid item xs={3}>
          <Suggestion product={mainProducts.danvouy} imageUrl={'../../../assets/images/suggestionThree.png'} placeholder={'../../../assets/placeholders/suggestionThree-small.jpg'} />
        </Grid>
        <Grid item xs={3}>
          <Suggestion product={mainProducts.rainJacket} imageUrl={'../../../assets/images/suggestionFour.png'} placeholder={'../../../assets/placeholders/suggestionFour-small.jpg'} />
        </Grid>
      </Grid>
    </Box>
  );

  return (
    <Stack paddingY={5}>
      <IntersectionTransition>
        {renderBannerSection}
      </IntersectionTransition>
      <IntersectionTransition>
        {renderChoiceSection}
      </IntersectionTransition>
      <IntersectionTransition>
        {renderSuggestionSection}
      </IntersectionTransition>
    </Stack>
  );
};

export default Home;
