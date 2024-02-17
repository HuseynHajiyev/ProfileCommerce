import { styled } from '@mui/material';
import { motion } from 'framer-motion';

export const ColumnStyled = styled(motion.div)(() => ({
  width: '25%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  minWidth: '250px',
  gap: '1vw',
  position: 'relative',
  '&:nth-of-type(1)': {
    top: '-45%',
  },
  '&:nth-of-type(2)': {
    top: '-100%',
  },
  '&:nth-of-type(3)': {
    top: '-35%',
  },
  '&:nth-of-type(4)': {
    top: '-100%',
  },
}));


export const HorizontalStyled = styled(motion.div)(() => ({
  display: 'flex',
  gap: 4,
}));