import { Box } from '@mui/material';
import { useState } from 'react'
import BannerImage from './BannerImage';
import { ProductInterface } from '../../../models/ProductInterface';
import BannerProductInfo from '../BannerProductInfo';

interface ChoiceImageProps {
  bannerContent: {
    title: string;
    description: string;
    label: string;
    product: ProductInterface| undefined;
    image: string;
    link: string;
  }
  currentSlide: string;
  activeStep?: number;
  isSlider?: boolean;
  index?: number;
}

const ChoiceImage = ({bannerContent, currentSlide, activeStep, isSlider, index} : ChoiceImageProps) => {
  const [hovered, setHovered] = useState(false);

  const handleHover = (mouseIn: boolean) => {
    setHovered(mouseIn);
  }
  return (
    <Box 
      onMouseOver={() => {
        if (handleHover) {
          handleHover(true);
        }
      }}
      onMouseLeave={() => {
        if (handleHover) {
          handleHover(false);
        }
      }}
      sx={{ position: 'relative', width: '100%', height: '70vh', overflow: 'hidden' }}
      key={`${bannerContent.label}${index ? index : ''}`}
    >
      <BannerImage bannerContent={bannerContent} hovered={hovered} currentSlide={currentSlide} activeStep={activeStep} isSlider={isSlider}/> 
      <BannerProductInfo bannerContent={bannerContent} hovered={hovered} />
    </Box>
  )
}

export default ChoiceImage