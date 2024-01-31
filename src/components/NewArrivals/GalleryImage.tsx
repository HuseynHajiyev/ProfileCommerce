import { useCloud } from '../../hooks/useCloud';
import { AdvancedImage } from '@cloudinary/react';

interface GalleryImageProps {
  image: string;
}

const GalleryImage = ({image} : GalleryImageProps) => {
  const { cld } = useCloud();
  const imageStyles = {
    height: '100%',
    width: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
  }
  const img = cld.image(image);
  return (
    <AdvancedImage 
      cldImg={img}
      style={imageStyles}
    />
  )
}

export default GalleryImage