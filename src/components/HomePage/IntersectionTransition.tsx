import { Box, Slide } from '@mui/material';
import { useRef, useEffect, useState, FC } from 'react';
import theme from '../../themes/theme';

interface IntersectionTransitionProps {
  children: (isVisible: boolean) => React.ReactNode;
}

const IntersectionTransition: FC<IntersectionTransitionProps> = ({ children }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const sectionRefCurrent = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
          setTimeout(() => {
            document.body.style.overflow = ''; // Unlock scroll after a second
            document.body.style.paddingRight = ''; // Reset paddingRight
          }, 1000);
        }
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRefCurrent) {
        observer.unobserve(sectionRefCurrent);
      }
    };
  }, [hasAnimated]);

  return (
    <Box ref={sectionRef} height={isVisible ? '100%' : '100vh'} sx={{ transition: 'height 100ms ease-out' }}>
      <Slide direction="up" in={isVisible} mountOnEnter unmountOnExit easing={{enter: theme.transitions.easing.easeIn }} timeout={{ enter: 1000, exit: 500 }}>
        <Box
          sx={{
            transition: 'opacity 2s ease-in-out', // Adjust the transition duration and easing function
          }}
        >
          {children(isVisible)}
        </Box>
      </Slide>
    </Box>
  );
};

export default IntersectionTransition;
