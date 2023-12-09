import { Box } from '@mui/material'
import { useImageLoading } from '../../hooks/useImageLoading'
import { useEffect, useState } from 'react'

interface BannerImageProps {
  currentSlide: string
  objectPosition?: string
}

const BannerImage = ({currentSlide, objectPosition} : BannerImageProps) => {
  const { markImageAsLoaded, checkIfAnImageIsLoaded } = useImageLoading();
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const handleImageLoaded = () => {
    markImageAsLoaded(currentSlide);
  };
  useEffect(() => {
    if (checkIfAnImageIsLoaded(currentSlide)) {
      setIsLoaded(true);
    }
  }, [currentSlide, checkIfAnImageIsLoaded]);
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
          transition: 'opacity 0.5s ease-in-out',
        }}
        onLoad={handleImageLoaded}
      />
    </Box>
  )
}

export default BannerImage