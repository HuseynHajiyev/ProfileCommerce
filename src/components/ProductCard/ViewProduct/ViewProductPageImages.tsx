import { useState } from 'react';
import { Box, Button, Grid } from '@mui/material';
import { useIsMobile } from '../../../hooks/useIsMobile';
import { ProductInterface } from '../../../models/ProductInterface';
import MainImage from './MainImage';

const ViewProductPageImages = ({ product, repeatCount } : {product: ProductInterface, repeatCount: number}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const isDesktop = useIsMobile('desktop');
  const isLargeDesktop = useIsMobile('largeDesktop');

  // create a new array with the same URL repeated 'repeatCount' times
  const imageUrls = Array(repeatCount)
  .fill(product.image)


  return (
    <Grid container>
    <Grid item container display="flex" height="70vh" marginBottom={'5%'}>
      <Grid  item xs={3} width={'15%'}>
          {imageUrls.map((imageUrl, index) => (
              <Box 
                  key={index}
                  sx={{
                      height: `calc(100%/${repeatCount})`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'flex-start',
                      position: 'relative',
                  }}
              >
                  <Button
                      onClick={() => setActiveIndex(index)}
                      onTouchEnd={() => setActiveIndex(index)}
                      key={index}
                      sx={{
                          padding: 0,
                          width: 'fit-content',
                          height: '100%',
                          position: 'absolute',
                      }}
                  >
                    <Box 
                      sx={{ 
                        height: `calc(50vh/${Math.min(repeatCount, 6)})`,
                        width: `calc(50vh/${Math.min(repeatCount, 6)})`,
                        overflow: 'hidden', 
                        position: 'relative',
                        backgroundImage: `linear-gradient(45deg, #fffff, #ffff1)`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'top',
                        animation: 'pulse 1s infinite',
                      }}
                    >
                      <img
                          key={index}
                          src={imageUrl}
                          loading="lazy"
                          style={{
                            width: '100%', 
                            height: '100%', 
                            objectFit: 'contain', 
                            objectPosition: 'center',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            transition: 'opacity 0.5s ease-in-out',
                          }}
                      />
                    </Box>
                  </Button>
              </Box>
          ))}
      </Grid>
      <Grid item container xs={7} marginLeft={'2%'}>
        <Grid item position={'relative'} xs={12}>
          <MainImage image={imageUrls[activeIndex]} product={product} reverse={activeIndex % 2 === 1} />
        </Grid>
      </Grid>
    </Grid>
    {   
      (isDesktop || isLargeDesktop) ? (

        <Grid item container display="flex" height="70vh">
          <Grid item xs={3} width={'15%'}>

          </Grid>
          <Grid item xs={7} marginLeft={'2%'} position={'relative'}>
            <MainImage image={imageUrls[activeIndex]} product={product} reverse={true} />
          </Grid>
        </Grid>
      ) : (null)
    }
  </Grid>
  );
};

export default ViewProductPageImages;
