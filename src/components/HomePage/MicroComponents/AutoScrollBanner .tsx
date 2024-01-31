import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material'
import { Box, Button, MobileStepper } from '@mui/material'
import { useCallback, useEffect, useState } from 'react'
import BannerImage from './BannerImage';
import { Link } from 'react-router-dom';
import BannerProductInfo from '../BannerProductInfo';
import { useProduct } from '../../../hooks/useProduct';

const AutoScrollBanner  = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [hovered, setIsHovered] = useState(false);
  const maxSteps = 3;
  const {findProductById} = useProduct();
  const bannerContent = [
    {
      title: 'STEP INTO STYLE',
      description: 'Discover Our Latest Collection',
      label: 'Slide 1',
      product: findProductById(2),
      image: 'participle/homePage/wzkj60boh5keuuyiuhls',
      link: '/shop/view-all/2',
    },
    {
      title: 'ELEVATE YOUR WARDOBE',
      description: 'Shop Our Trendy Fashion',
      label: 'Slide 2',
      product: findProductById(16),
      image: 'participle/homePage/xzxopqpheuqn7soley8o',
      link: 'shop/view-all/16',
    },
    {
      title: 'UNLEASH ELEGANCE',
      description: 'Find Your Signature Look',
      label: 'Slide 3',
      product: findProductById(1),
      image: 'participle/homePage/gupddrz5c8we1kf2c3co',
      link: '/shop/view-all/1',
    },
  ];

  const handleHover = (mouseIn: boolean) => {
    setIsHovered(mouseIn);
  };

  const handleNext = useCallback((button?: boolean) => {
    if(button) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1 >= maxSteps ? 0 : prevActiveStep + 1);
    } else {
      if(!hovered) {
        setActiveStep((prevActiveStep) => prevActiveStep + 1 >= maxSteps ? 0 : prevActiveStep + 1);
      }
    }
  }, [hovered]);

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1 < 0 ? maxSteps - 1 : prevActiveStep - 1);
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [handleNext]);
  return (
    <Box position={'relative'}>
      <Box 
        onMouseOver={() => {
          if (handleHover) {
            handleHover(true);
          }
        }}
        onMouseLeave={() => {
          if (handleHover) {
            handleHover(false);
          }
        }}
        sx={{ position: 'relative', width: '100%', height: '70vh', overflow: 'hidden' }}
      >
      {bannerContent.map((content, index) => (
          <Box
            key={index}
            sx={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              transition: 'transform 0.8s ease',
              transform: `translateX(${index - activeStep}00%)`,
            }}
          >
            <BannerImage 
              bannerContent={content} 
              currentSlide={content.image}
              isSlider={true} 
              hovered={hovered} 
              activeStep={activeStep}
              index={index}
            />
            <BannerProductInfo 
              bannerContent={content}
              hovered={hovered}
              index={index}
              isSlider={true}
            />
          </Box>
        ))}
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
        </Box>
      <Box>
        <MobileStepper
          variant="dots"
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button size="small" onClick={()=> handleNext(true)}>
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
