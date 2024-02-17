import { Box } from '@mui/material';
import { useCloud } from '../../../hooks/useCloud';
import { AdvancedImage } from '@cloudinary/react';
import { MotionValue, motion } from 'framer-motion';

interface LocalCardInterface {
  image: string;
  title: string;
  id: number;
}

interface LocalCardProps {
  card: LocalCardInterface;
  width?: MotionValue<string> | null;
}

const transition = {
  type: "spring",
  stiffness: 300,
  damping: 20, 
  duration: 0.5,
};

const aspectRatioStyle = {
  position: 'relative',
  width: '100%', 
  paddingTop: '100%',
}

const LocalCard = ({ card, width } : LocalCardProps) => {
  const { cld } = useCloud();
  const img = cld.image(card.image);

  return (
    <Box
      key={card.id}
      sx={{
        borderRadius: '0.5vw',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: '30vw', 
        position: 'relative',
      }}
    >
      <motion.div 
        style={{
          width: width || '30vw',
          minWidth: '100%', 
          height: '100vh', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          transformOrigin: 'center center',
        }}
        transition={transition}
      >
        <Box sx={aspectRatioStyle}>
          <AdvancedImage
            cldImg={img}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              transition: 'transform 300ms',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'top top',
              borderRadius: '0.5vw',
            }}
          />
        </Box>
      </motion.div>
    </Box>

  )
}

export default LocalCard