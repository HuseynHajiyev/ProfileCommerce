import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material'
import { Box, Button, MobileStepper, Stack, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import BannerImage from './BannerImage';
import { Link } from 'react-router-dom';

const AutoScrollBanner  = () => {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = 3;
  const bannerContent = [
    {
      title: 'STEP INTO STYLE',
      description: 'Discover Our Latest Collection',
      label: 'Slide 1',
      image: '../../../assets/images/bannerOne.png'
    },
    {
      title: 'ELEVATE YOUR WARDOBE',
      description: 'Shop Our Trendy Fashion',
      label: 'Slide 2',
      image: '../../../assets/images/bannerTwo.png'
    },
    {
      title: 'UNLEASH ELEGANCE',
      description: 'Find Your Signature Look',
      label: 'Slide 3',
      image: '../../../assets/images/bannerThree.png'
    },
    // ... other slides
  ];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1 >= maxSteps ? 0 : prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1 < 0 ? maxSteps - 1 : prevActiveStep - 1);
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 5000); // Change slides every 3 seconds
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <Box position={'relative'}>
      <Box sx={{ position: 'relative', width: '100%', height: '70vh', overflow: 'hidden' }}>
      {bannerContent.map((content, index) => (
          <Box
            key={index}
            sx={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              transition: 'transform 0.8s ease',
              transform: `translateX(${index - activeStep}00%)`, // Create sliding effect
            }}
          >
            <BannerImage currentSlide={content.image} />
          </Box>
        ))}
          <Typography variant="h3">{bannerContent[activeStep].label}</Typography>
          <Typography>{bannerContent[activeStep].description}</Typography>
          <Link to='/shop/clothing'>
            <Button variant="contained" sx={{
              position:'absolute',
              top: '50%',
              right: 30,
              borderRadius: '0',
              background: 'black',
              color: 'white',
            }}>
              Go To Catalog
            </Button>
          </Link>
          <Box sx={{
            position: 'absolute', 
            top: '50%', 
            left: '50%',  
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
          }}> 
          <Stack spacing={3}> 
            <Typography variant='h3' fontFamily={'Mulish'} color={'white'} sx={{textShadow: '0px 0px 5px rgba(0,0,0,0.61)'}}>{bannerContent[activeStep].title}</Typography>
            <Typography variant='h6' fontFamily={'Mulish'} color={'white'} sx={{textShadow: '0px 0px 5px rgba(0,0,0,0.61)'}}>{bannerContent[activeStep].description}</Typography>
          </Stack>
          </Box>
        </Box>
      <Box>
        <MobileStepper
          variant="dots"
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button size="small" onClick={handleNext}>
              <KeyboardArrowRight />
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack}>
              <KeyboardArrowLeft />
            </Button>
          }
          sx={{
            position: 'absolute',
            bottom: 12,
            right: 12,
            background: 'none',
            color: 'white',
          }}
        />
        </Box>
    </Box>
  )
}

export default AutoScrollBanner 
