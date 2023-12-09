import { Box } from '@mui/material'

interface BannerImageProps {
  currentSlide: string
  objectPosition?: string
  placeholder?: string
}

const BannerImage = ({currentSlide, objectPosition, placeholder} : BannerImageProps) => {
  return (
    <Box 
      sx={{ 
        width: '100%', 
        height: '100%', 
        overflow: 'hidden', 
        position: 'relative',
        backgroundImage: `url(${placeholder})`,
        backgroundSize: 'cover',
        backgroundPosition: objectPosition || 'top',
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
          opacity: 0,
          transition: 'opacity 0.5s ease-in-out',
        }}
        onLoad={(e) => e.currentTarget.style.opacity = '1'}
      />
    </Box>
  )
}

export default BannerImage