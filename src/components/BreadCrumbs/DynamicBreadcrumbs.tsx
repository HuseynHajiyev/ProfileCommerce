import { useLocation, Link as RouterLink } from 'react-router-dom';
import { Breadcrumbs, Link, Tooltip, Typography } from '@mui/material';
import { capitalize } from 'lodash';
import { ProductInterface } from '../../models/ProductInterface';
import { trimTitle } from '../../utilities/TrimTitle';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';

const findProductTitle = (value: string, products: ProductInterface[]) => {
  const product = products.find((product) => product.id === Number(value));
  return product ? trimTitle(product.title, 10) : '';
}

const DynamicBreadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);
  const isProductPage = pathnames[0] === 'shop' && pathnames[1] === 'view-all';
  const products: ProductInterface[] = useSelector((state: RootState) => state.products.products);
  const product = products.find((product) => product.id === Number(pathnames[2]));

  return (
    <Breadcrumbs separator="|" aria-label="breadcrumb">
      {pathnames.map((value, index) => {
        const isLast = index === pathnames.length - 1;
        const isFirst = index === 0;
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;

        return isLast ? isProductPage ? ( 
          <Tooltip title={product?.title} placement='top-start' aria-label="full-title" key={index}>
            <Link component={RouterLink} to={to} key={to}>
              <Typography fontSize={'1.05rem'}color="gray" key={to}>
                {capitalize(findProductTitle(value, products))}
              </Typography>
            </Link>
          </Tooltip>
        ) : (
          <Typography fontSize={'1.05rem'}color="gray" key={to}>
            {capitalize(value)}
          </Typography>
        ) : isFirst? (
          <Link component={RouterLink} to={`${to}/clothing`} key={to}>
             <Typography fontSize={'1.05rem'}color="black" key={to}>
                {capitalize('shop')}
              </Typography>
          </Link>
        ) : (
            <Typography fontSize={'1.05rem'}color="gray" key={to}>
              {capitalize(value)}
            </Typography>
        );
      })}
    </Breadcrumbs>
  );
};

export default DynamicBreadcrumbs;