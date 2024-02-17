import { Box } from '@mui/material'
import GalleryImage from './GalleryImage';
import { MotionValue } from 'framer-motion';
import { ColumnStyled } from '../../StyledComponents/GalleryStyled/ColumnStyled';

interface ColumnProps {
  images: string[];
  y: MotionValue<number>;
}

const Column = ({ images, y }: ColumnProps) => {
  const yVal = y ? y : 0;
  return (
    <ColumnStyled
      style={{
        y: yVal,
      }}
    >
      {images.map((image, index) => (
        <Box
          sx={{
            width: '100%',
            height: '100%',
            position: 'relative',
            borderRadius: '1vw',
            overflow: 'hidden',
          }}
          key={`image ${index}`}
        >
         <GalleryImage image={image} />
        </Box>
      ))}
    </ColumnStyled>
  )
}

export default Column