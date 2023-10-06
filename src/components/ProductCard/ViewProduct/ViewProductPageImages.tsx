import { useState } from 'react';
import { Box, CardMedia, Button, Grid } from '@mui/material';
import { ProductAvatarBoxStyled } from '../../StyledComponents/ShowProductStyled/ShowProductStyled';
import { useIsMobile } from '../../../hooks/useIsMobile';

const ViewProductPageImages = ({ imageUrl, repeatCount } : {imageUrl: string, repeatCount: number}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const isDesktop = useIsMobile('desktop');
  const isLargeDesktop = useIsMobile('largeDesktop');

  // create a new array with the same URL repeated 'repeatCount' times
  const imageUrls = Array(repeatCount)
  .fill(imageUrl)
  .map((url, index) => (index % 2 === 1 ? 'https://picsum.photos/150' : url));


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
                      <ProductAvatarBoxStyled
                          key={index}
                          src={imageUrl}
                          sx={{
                              height: `calc(50vh/${Math.min(repeatCount, 6)})`,
                              width: `calc(50vh/${Math.min(repeatCount, 6)})`,
                              borderRadius: '0',
                              cursor: 'pointer',
                              '& img': {
                                  objectFit: 'contain',
                                  position: 'absolute',
                                  height: `calc(50vh/${Math.min(repeatCount, 6)})`, 
                                  width: 'auto',
                              }
                          }}
                      />
                  </Button>
              </Box>
          ))}
      </Grid>
      <Grid item container xs={7} marginLeft={'2%'}>
        <Grid item position={'relative'} xs={12}>
          <CardMedia
            component="img" 
            image={imageUrls[activeIndex]}
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              height: '100%',
              width: '100%',
              objectFit: 'scale-down',
            }}
          />
        </Grid>
      </Grid>
    </Grid>
    {   
      (isDesktop || isLargeDesktop) ? (

        <Grid item container display="flex" height="70vh">
          <Grid item xs={3} width={'15%'}>

          </Grid>
          <Grid item xs={7} marginLeft={'2%'} position={'relative'}>
            <CardMedia
              component="img" 
              image={imageUrl}
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                height: '100%',
                width: '100%',
                objectFit: 'scale-down',
                transform: 'scaleX(-1)',
              }}
            />
          </Grid>
        </Grid>
      ) : (null)
    }
  </Grid>
  );
};

export default ViewProductPageImages;
