import { Box, CardMedia } from '@mui/material'

interface BannerImageProps {
  currentSlide: string
  objectPosition?: string
}

const BannerImage = ({currentSlide, objectPosition} : BannerImageProps) => {
  return (
    <Box sx={{ width: '100%', overflow: 'hidden', position: 'relative', height: '100%'}}>
      <CardMedia 
        component="img"
        sx={{ 
          width: '100%', 
          height: '100%', 
          objectFit: 'cover', 
          objectPosition: objectPosition ? objectPosition : 'top',
          position: 'absolute',
          top: 0,
          left: 0,
        }}
        image={currentSlide}
        aria-label='product image'
      />
    </Box>
  )
}

export default BannerImage