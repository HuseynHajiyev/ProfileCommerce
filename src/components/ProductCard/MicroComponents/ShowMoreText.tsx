import { useState } from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import { BodyTypographyStyled } from '../../StyledComponents/ProductCardStyled/ProductViewPageStyled';
import { useIsMobile } from '../../../hooks/useIsMobile';

const Ellipsis = styled('div')({
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
        {shouldTruncate && !showFullText ? `${displayText}...` : displayText}
      </BodyTypographyStyled>
        {shouldTruncate && (
          <Box display="flex" ml={1} alignItems={'flex-start'} paddingTop={'1%'}>
            <Ellipsis onClick={() => setShowFullText(!showFullText)}>
              {showFullText ? 'Show Less' : 'Show More'}
            </Ellipsis>
          </Box>
        )}
    </>
  );
};

export default ShowMoreText;
