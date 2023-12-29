import { Box } from '@mui/material'
import { useImageLoading } from '../../../hooks/useImageLoading'
import { useCallback, useEffect, useState } from 'react'
import BannerHeader from './BannerHeader'
import BannerHeaderMotion from '../Motion/BannerHeaderMotion'

interface BannerImageProps {
  bannerContent?: {
    title: string;
    description: string;
    label: string;
    image: string;
  }
  currentSlide: string;
  objectPosition?: string;
  activeStep?: number;
  isSlider?: boolean;
  hovered?: boolean;
  index?: number;
}

const BannerImage = ({bannerContent, currentSlide, objectPosition, index, activeStep, isSlider, hovered} : BannerImageProps) => {
  const { markImageAsLoaded } = useImageLoading();
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const handleImageLoaded = useCallback(() => {
    markImageAsLoaded(currentSlide);
  }, [currentSlide, markImageAsLoaded]);

  useEffect(() => {
    const image = new Image();
    image.src = currentSlide;
    image.onload = () => {
      setIsLoaded(true);
      if (handleImageLoaded) {
        handleImageLoaded();
      }
    };

    image.onerror = () => {
      setIsLoaded(true);
    };

    return () => {
      image.onload = null;
      image.onerror = null;
    };
  }, [currentSlide, handleImageLoaded]);
  return (
    <Box
    sx={{
      position: 'relative',
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      backgroundImage: `linear-gradient(45deg, #f3e5ab, #e1c17a)`,
      backgroundSize: 'cover',
      backgroundPosition: objectPosition || 'top',
      animation: isLoaded ? 'pulse 1s infinite' : 'none',
    }}
  >
    <img
      src={currentSlide}
      alt="product image"
      loading="lazy"
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: objectPosition || 'top',
        position: 'absolute',
        top: 0,
        left: 0,
        opacity: isLoaded ? 1 : 0,
        transition: 'opacity 0.8s ease, transform 0.4s ease-in-out',
        transform: hovered ? 'scale(1.05)' : 'scale(1)',
      }}
      onLoad={handleImageLoaded}
    />
      {
        (hovered) && (
          <Box
           sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0));',
            transition: 'opacity 0.4s ease',
           }}
          />
        )
      }
      {
        (isSlider && bannerContent) && (
          <Box sx={{
            opacity: hovered && isLoaded ? 0 : 1,
            position: 'absolute', 
            top: '50%', 
            left: '50%',  
            transform: 'translate(-50%, -50%)',
            transition: 'opacity 0.4s ease',
            textAlign: 'center',
            zIndex: 10,
          }}>
            <BannerHeaderMotion isActive={index === activeStep}>
              <BannerHeader bannerContent={bannerContent} />
            </BannerHeaderMotion>
          </Box>
        )
      }
    </Box>
  )
}

export default BannerImage