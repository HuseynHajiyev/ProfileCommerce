import { Box } from '@mui/material'
import { useImageLoading } from '../../hooks/useImageLoading'
import { useCallback, useEffect, useState } from 'react'

interface BannerImageProps {
  currentSlide: string
  objectPosition?: string
}

const BannerImage = ({currentSlide, objectPosition} : BannerImageProps) => {
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
        width: '100%', 
        height: '100%', 
        overflow: 'hidden', 
        position: 'relative',
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
          transition: 'opacity 0.8s ease',
        }}
        onLoad={handleImageLoaded}
      />
    </Box>
  )
}

export default BannerImage