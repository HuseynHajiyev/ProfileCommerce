import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../app/store'; // adjust the import according to your folder structure
import { loadProduct } from '../../../features/productReducer/productSlice';
import { Box, Grid, Stack } from '@mui/material';
import ViewProductPageImages from '../../../components/ProductCard/ViewProduct/ViewProductPageImages';
import { useEffect } from 'react';
import NotFound404 from '../../NotFound404/NotFound404';
import { ProductInterface } from '../../../models/ProductInterface';
import ViewProductPageDetails from '../../../components/ProductCard/ViewProduct/ViewProductPageDetails';
import ViewProductSuggestions from '../../../components/ProductCard/ViewProduct/ViewProductSuggestions';

interface RouteParams {
  [key: string]: string | undefined;
}

const ViewProduct = () => {
  const dispatch = useDispatch();
  const { productId } = useParams<RouteParams>();
  const productState = useSelector((state: RootState) => state.product);
  const products: ProductInterface[] = useSelector((state: RootState) => state.products.products);
  const foundProduct: ProductInterface | undefined = products.find((product) => product.id.toString() === productId);
  
  useEffect(() => {
    if (!foundProduct && (!productState.product || productId !== productState.product.id.toString())) {
      dispatch(loadProduct(Number(productId)));
    }
  }, [dispatch, productId, productState.product, foundProduct]);

  const productToShow = foundProduct || productState.product;
  
  return productToShow && productToShow.id.toString() === productId ? (
    <Stack>
      <Grid container style={{ paddingTop: '2%' }} display={'flex'} justifyContent={'space-between'}>
        <Grid item xs={12} sm={12} md={12} lg={7} xl={7}>
          <ViewProductPageImages imageUrl={productToShow.image} repeatCount={6} />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
          <ViewProductPageDetails product={productToShow}/>
        </Grid>
      </Grid>
      <Grid item container xs={12}>
        <ViewProductSuggestions product={productToShow}/>
      </Grid>
    </Stack>
  ) : productState.loading || (productToShow && productToShow.id.toString() !== productId) ? (
    <Box>
      <h1>Loading...</h1>
    </Box>
  ) : (
    <Box>
      <NotFound404 />
    </Box>
  );
};

export default ViewProduct;
