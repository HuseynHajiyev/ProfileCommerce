import { motion, useAnimation } from 'framer-motion'
import React, { useEffect, useRef } from 'react'
import { Box } from '@mui/material'

interface RevealBannerProductInfoProps {
  children: React.ReactNode
  width?: 'fit-content' | '100%';
  hovered: boolean;
}

const RevealBannerProductInfo = ({children, width = 'fit-content', hovered} : RevealBannerProductInfoProps ) => {
  const ref = useRef<HTMLDivElement>(null);
  const mainBoxControls = useAnimation();

  useEffect(() => {
    if(hovered) {
      mainBoxControls.start('visible');
    } else {
      mainBoxControls.start('hidden');
    }
  }, [hovered, mainBoxControls]);

  return (
    <Box ref={ref} sx={{
      position: 'relative', 
      width, 
      overflow: 'hidden', 
    }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0},
        }}
        initial={'hidden'}
        animate={mainBoxControls}
        transition={{ duration: 0.3, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </Box>
  )
}

export default RevealBannerProductInfo