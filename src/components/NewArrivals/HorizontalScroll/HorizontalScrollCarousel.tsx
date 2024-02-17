import { Box } from '@mui/material'
import { useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { HorizontalStyled } from '../../StyledComponents/GalleryStyled/ColumnStyled';
import LocalCard from './LocalCard';

interface LocalCardInterface {
  image: string;
  title: string;
  id: number;
}

const cards: LocalCardInterface[] = [
  {
    image: 'participle/newArrivals/tpocohswpmnbhewxq7ha',
    title: 'One',
    id: 1,
  },
  {
    image: 'participle/newArrivals/s5hzflqwrxzq5vfo8smk',
    title: 'Two',
    id: 2,
  },
  {
    image: 'participle/newArrivals/wnwpuzytterdrugyulad',
    title: 'Three',
    id: 3,
  },
  {
    image: 'participle/newArrivals/lzsdhgiloadp3wgle7ne',
    title: 'Four',
    id: 4,
  },
  {
    image: 'participle/newArrivals/boz0yqb3xadqelbpfueo',
    title: 'Five',
    id: 5,
  }
]

const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['0 0', 'end end']
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);
  const width = useTransform(scrollYProgress, [0.7, 1], ['30vw', '100vw']);


  return (
    <Box component={'section'} ref={targetRef} sx={{
      position: 'relative',
      height: '200vh',
    }}>
      <Box sx={{
        position: 'sticky',
        top: '10dvh',
        display: 'flex',
        height: '100dvh',
        overflow: 'hidden',
      }}>
        <HorizontalStyled style={{x}}>
          {cards.map((card, index) => {
            const isLastCard = index === cards.length - 1;
            return (
              <LocalCard key={card.id} card={card} width={isLastCard ? width : null}/>
            )
          })}
        </HorizontalStyled>
      </Box>
    </Box>
  )
}

export default HorizontalScrollCarousel