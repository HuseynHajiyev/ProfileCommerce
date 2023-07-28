import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../app/store'; // adjust the import according to your folder structure
import DynamicBreadcrumbs from '../../../components/BreadCrumbs/DynamicBreadcrumbs';
import { loadProduct } from '../../../features/productReducer/productSlice';
import { Box } from '@mui/material';

interface RouteParams {
  [key: string]: string | undefined;
}

const ViewProduct = () => {
  const dispatch = useDispatch();
  const { productId } = useParams<RouteParams>();
  const products = useSelector((state: RootState) => state.products.products);
  if(products.length === 0) dispatch(loadProduct(Number(productId)));
  const product = products.find((product) => product.id === Number(productId));
  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
    </>
  );
};

export default ViewProduct;
