import { Box, Typography } from '@mui/material'
import RevealBannerProductInfo from './Motion/RevealBannerProductInfo'
import RevealProductInfoText from './Motion/RevealProductInfoText'
import { Link } from 'react-router-dom';
import { ProductInterface } from '../../models/ProductInterface';

interface BannerProductInfoProps {
  bannerContent: {
    title: string;
    description: string;
    label: string;
    product: ProductInterface| undefined;
    link: string;
  },
  hovered: boolean;
  index?: number;
  isSlider?: boolean;
  textSize?: string;
}

const BannerProductInfo = ({bannerContent, hovered, index, isSlider, textSize} : BannerProductInfoProps) => {
  return (
    <Box sx={{
      position: 'absolute', 
      left: 0, 
      bottom: 0, 
      padding:'5%',
      height: 'fit-content',
      width: isSlider? '50%' : '100%',
    }}>
      <RevealBannerProductInfo hovered={hovered} key={`${bannerContent.label}${index ? index : ''}`}>
        <RevealProductInfoText>
          <Box py={2}>
            <Link to={bannerContent.link} style={{textDecoration: 'none'}}>
              <Typography variant={textSize === 'small'? 'body1' : 'h5'} fontFamily={'Mulish'} color={'white'} fontWeight={600}>
                {bannerContent.product?.title}
              </Typography>
            </Link>
          </Box>
        </RevealProductInfoText>
        {
          textSize === 'small' ? null : (
          <RevealProductInfoText>
            <Box>
                <Typography variant={'body2'} fontFamily={'Mulish'} color={'white'} fontSize={'0.8rem'}>
                  {bannerContent.product?.description}
                </Typography>
            </Box>
          </RevealProductInfoText>
          )
        }
      </RevealBannerProductInfo>    
    </Box>
  )
}

export default BannerProductInfo