import { Box } from '@mui/material'
import Column from './Column'
import { useRef } from 'react'
import { useScroll, useTransform } from 'framer-motion'
import { useDimension } from '../../hooks/useDimension'

const Gallery = () => {
  const images = [
    'participle/newArrivals/zkzrvw53lwvm0qql95xl',
    'participle/newArrivals/JournalThree_ll04z0',
    'participle/newArrivals/mlwwlv4ah4hvwqcankbk',
    'participle/newArrivals/j6ooqxkokoetkwi6fm6f',
    'participle/newArrivals/journalTwo_k6710e',
    'participle/newArrivals/xrlz4jgwymwp0vtfsgfb',
    'participle/newArrivals/za7kwibhbwwvtmciwvld',
    'participle/newArrivals/journalOne_p9hl7r',
    'participle/newArrivals/pfipbsvyv4fsv5vbhgf7',
    'participle/newArrivals/rrkoi6pakq35mrtmqcqc',
    'participle/newArrivals/journalFour_ggdrvl',
    'participle/newArrivals/lclzxeswx75kyhqjinsd',
  ]
  const galleryRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: galleryRef,
    offset: ['start end', 'end start']
  });
  const { height } = useDimension();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);
  return (
    <Box
      ref={galleryRef} 
      sx={{
        height: '175vh',
        background: 'rgb(45, 45, 45)',
        display: 'flex',
        flexDirection: 'row',
        gap: '2vw',
        padding: '2vw',
        boxSizing: 'border-box',
        overflow: 'hidden',
      }}
    >
      <Column images={images.slice(0, 3)} y={y1}/>
      <Column images={images.slice(3, 6)} y={y2}/>
      <Column images={images.slice(6, 9)} y={y3}/>
      <Column images={images.slice(9, 12)} y={y4}/>
    </Box>
  )
}

export default Gallery