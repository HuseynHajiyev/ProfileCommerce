import { Stack } from '@mui/material';
import { useSelector } from 'react-redux';
import { ProductInterface } from '../../models/ProductInterface';
import { RootState } from '../../app/store';

import ChoisesSection from '../../components/HomePage/ChoicesSection.tsx';
import IntersectionTransition from '../../components/HomePage/Motion/IntersectionTransition';
import BannerSection from '../../components/HomePage/BannerSection';
import SuggestionsSection from '../../components/HomePage/SuggestionsSection';

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
      <BannerSection />
    </>
  );

  const renderChoiceSection = () => (
    <>
      <ChoisesSection mainProducts={mainProducts} />
    </>
  );

  const renderSuggestionSection = () => (
    <>
      <SuggestionsSection mainProducts={mainProducts} />
    </>
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
