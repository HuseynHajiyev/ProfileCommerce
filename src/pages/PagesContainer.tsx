import { ReactNode, useEffect } from 'react'
import PagesContainerStyled from '../components/StyledComponents/AppFileStyled/PagesContainerStyled';
import { useMainScroll } from '../hooks/useMainScroll';
import { useLocation } from 'react-router-dom';

interface PagesContainerProps {
  children: ReactNode;
}

const PagesContainer = ({children} : PagesContainerProps) => {
  const { mainRef } = useMainScroll();
  const location = useLocation();
  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.scrollTop = 0
    }
  }, [mainRef, location]);
  return (
    <PagesContainerStyled ref={mainRef}>
        {children}
    </PagesContainerStyled>
  )
}

export default PagesContainer