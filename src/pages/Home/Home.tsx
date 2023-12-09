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

  const renderBannerSection = () => (
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

  const renderChoiceSection = () => (
    <Grid container spacing={7} paddingBottom={5}>
      <Grid item xs={6}>
        <Choice product={mainProducts.cottonJacket} imageUrl={'https://drive.google.com/uc?id=1Ir6ShI1HChuj2blKZkYcaIhNpNZTFRVU'} />
      </Grid>
      <Grid item xs={6}>
        <Choice product={mainProducts.slimFit} imageUrl={'https://drive.google.com/uc?id=1Oefhffi9k4oRo4ipw-GaPsS4V9NDph-s'} />
      </Grid>
    </Grid>
  );

  const renderSuggestionSection = () => (
    <Box borderTop={'1px solid lightgray'}>
      <Box textAlign={'center'} paddingY={5}>
        <Typography variant={'h5'} fontFamily={'Mulish'}>
          FEATURED
        </Typography>
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Suggestion product={mainProducts.biylaclesen} imageUrl={'https://drive.google.com/uc?id=19M_wLKs8zSBRVAZwwZqYJNRkmGXWWa5S'} />
        </Grid>
        <Grid item xs={3}>
          <Suggestion product={mainProducts.opna} imageUrl={'https://drive.google.com/uc?id=1zQ6q7ynDDX0WeB80r5AQOTjdHMFCJrMZ'} />
        </Grid>
        <Grid item xs={3}>
          <Suggestion product={mainProducts.danvouy} imageUrl={'https://drive.google.com/uc?id=17zUUZbnFOgDwkNTI8A6g6nwCnVxCCdo_'} />
        </Grid>
        <Grid item xs={3}>
          <Suggestion product={mainProducts.rainJacket} imageUrl={'https://drive.google.com/uc?id=1U9xErIoeBLnLB1JaPG6ecO8ngDi_2bvL'} />
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
