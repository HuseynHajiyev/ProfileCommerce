import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react'
import { Box } from '@mui/material';

interface RevealProductInfoTextProps { 
  children: React.ReactNode
  width?: 'fit-content' | '100%';
}

const RevealProductInfoText = ({ children, width = 'fit-content' } : RevealProductInfoTextProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const mainDivControls = useAnimation();
  const mainTextControls = useAnimation();

  useEffect(() => {
    mainDivControls.start('visible');
    mainTextControls.start('visible');
  }, [mainDivControls ,mainTextControls]);
  return (
    <Box ref={ref} sx={{position: 'relative', width, overflow: 'hidden'}}>
      <motion.div
        variants={{
          hidden: { opacity: 0, scale: 0 },
          visible: { opacity: 1, scale: 1 },
        }}
        initial={'hidden'}
        animate={mainTextControls}
        transition={{ duration: 0.2, delay: 0.15 }}
      >
        {children}
      </motion.div>
    </Box>
  );
};

export default RevealProductInfoText