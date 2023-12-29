import { Box } from '@mui/material';
import { ReactNode, useEffect, useRef } from 'react'
import {motion, useInView, useAnimation } from 'framer-motion'

interface RevealHeaderProps { 
  children: ReactNode
  width?: 'fit-content' | '100%';
  hasLoaded?: boolean
}

const RevealHeader = ({ children, width = 'fit-content', hasLoaded = true } : RevealHeaderProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView( ref, { once: true});
  const mainTextControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if(isInView && hasLoaded) {
      mainTextControls.start('visible');
      slideControls.start('visible');
    }
  }, [isInView, mainTextControls, slideControls, hasLoaded]);
  return (
    <Box ref={ref} sx={{position: 'relative', width, overflow: 'hidden'}}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial={'hidden'}
        animate={mainTextControls}
        transition={{ duration: 0.5, delay: 0.35}}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: '100%' },
        }}
        initial={'hidden'}
        animate={slideControls}
        transition={{ duration: 0.5, delay: 0.3}}
        style={{
          position: 'absolute',
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: 'black',
          zIndex: 20,
        }}
      />
    </Box>
  )
}

export default RevealHeader