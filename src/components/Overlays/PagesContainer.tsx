import { ReactNode, useEffect } from 'react'
import PagesContainerStyled from '../StyledComponents/AppFileStyled/PagesContainerStyled';
import { useLocation } from 'react-router-dom';

interface PagesContainerProps {
  children: ReactNode;
}

const PagesContainer = ({children} : PagesContainerProps) => {

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <PagesContainerStyled>
        {children}
    </PagesContainerStyled>
  )
}

export default PagesContainer