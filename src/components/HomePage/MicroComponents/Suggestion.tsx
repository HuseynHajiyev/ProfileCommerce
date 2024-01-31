import { Box, Typography } from '@mui/material';
import BannerImage from './BannerImage';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import BannerProductInfo from '../BannerProductInfo';
import { ProductInterface } from '../../../models/ProductInterface';


export interface SuggestionsProps {
  product?: ProductInterface | undefined
  imageUrl: string
}


const Suggestion = ({ product, imageUrl }: SuggestionsProps) => {
  const [hovered, setHovered] = useState(false);
  const productTitleFirstWord = product?.title.split(' ')[0].toUpperCase();
  const bannerContent = {
    title: product?.title || '',
    description: product?.description || '',
    label: `Slide ${product?.id}`,
    product: product,
    link: `/shop/view-all/${product?.id}`,
  }
  return (
    <>
      <Box
        height={'50vh'}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        sx={{
          position: 'relative',
        }}
      >
        <BannerImage currentSlide={imageUrl} hovered={hovered} />
        <BannerProductInfo
          bannerContent={bannerContent}
          hovered={hovered}
          textSize={'small'}
          />

      </Box>
      <Box textAlign={'center'} paddingTop={3}>
        <Link to={`/shop/view-all/${product?.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <Typography variant={'h6'} fontFamily={'Mulish'}>{productTitleFirstWord}</Typography>
        </Link>
      </Box>
      <Box textAlign={'center'}>
        <Typography variant={'body2'} fontFamily={'Mulish'} color={'darkgray'} fontSize={'0.8rem'}>{`$${product?.price}`}</Typography>
      </Box>
    </>
  );
};

export default Suggestion;
