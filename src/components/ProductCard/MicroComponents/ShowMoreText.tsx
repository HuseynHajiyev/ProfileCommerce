import { useState } from 'react';
import { styled } from '@mui/material';
import { BodyTypographyStyled } from '../../StyledComponents/ProductCardStyled/ProductViewPageStyled';
import { useIsMobile } from '../../../hooks/useIsMobile';

const Ellipsis = styled('span')({
  padding: '0',
  cursor: 'pointer',
  color: 'inherit',
  textDecoration: 'none',
  textShadow: '1px 1px 1px rgba(0, 0, 0, 0.4)',
  backgroundFilter: 'blur(20px)',
});

interface ShowMoreTextPropsInterface {
  text: string
  maxLength: number
}

const ShowMoreText = ({ text, maxLength }: ShowMoreTextPropsInterface) => {
  const [showFullText, setShowFullText] = useState(false);
  const isTablet = useIsMobile('tablet');
  const isDesktop = useIsMobile('desktop');
  const isLargeDesktop = useIsMobile('largeDesktop');
  const shouldTruncate = text.length > maxLength;
  const displayText = shouldTruncate && !showFullText ? text.slice(0, maxLength) : text;

  return (
    <>
      <BodyTypographyStyled fontSize={(isTablet ? '0.9rem' : (isDesktop || isLargeDesktop ? '0.9rem' : '1rem'))}>
        {shouldTruncate && !showFullText ? `${displayText}` : displayText}
        {shouldTruncate && (
          <Ellipsis onClick={() => setShowFullText(!showFullText)} sx={{cursor: 'pointer'}}>
            {showFullText ? '←' : '...'}
          </Ellipsis>
        )}
      </BodyTypographyStyled>
    </>
  );
};

export default ShowMoreText;
