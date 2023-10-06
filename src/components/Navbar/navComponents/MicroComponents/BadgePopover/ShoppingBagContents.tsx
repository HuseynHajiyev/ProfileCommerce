// Redux Imports
import { useSelector } from 'react-redux';

// Redux Actions

// MUI imports
import { Grid, Typography, Skeleton, Box } from '@mui/material';

// Component imports
import ShoppingBagProductCardComponent from './ShoppingBagProduct/ShoppingBagProductCardComponent';

// Type imports
import { RootState } from '../../../../../app/store';
import SubtotalComponent from './SubtotalComponent';
import { ShoppingBagInterface } from '../../../../../models/ShoppingBagInterface';
import { CartItemInterface } from '../../../../../models/CartiItemInterface';
import { BadgePopoverContentGridStyled } from '../../../../StyledComponents/NavbarStyled/BadgePopoverStyled';
import { ProductsGridStyled } from '../../../../StyledComponents/NavbarStyled/ShoppingBagStyled';
import { useIsMobile } from '../../../../../hooks/useIsMobile';

const ShoppingBagContents = () => {
  const loading = useSelector((state: RootState) => state.shoppingBag.loading);
  const shoppingBag: ShoppingBagInterface = useSelector((state: RootState) => state.shoppingBag);
  const isMobile = useIsMobile();
  return (
    <BadgePopoverContentGridStyled container direction='column' sx={{ height: '100vh' }}>
      <Grid item sx={{ height: isMobile? 'calc(100vh * 0.7 / 12)' : 'calc(100vh * 1 / 12)'}}>
        <Box sx={{p: '5% 5% 5% 5%'}}>
          <Typography variant='h6'>
            Your bag {`(${shoppingBag.products.length})`}
          </Typography>
        </Box>
      </Grid>
      <ProductsGridStyled item container spacing={1}>
      { 
          loading ? (
            Array.from({ length: 6 }).map((item, index) => (
              <Grid container item xs={12} spacing={1} sx={{ height: '13vh' }} key={index}>
                  <Grid item xs={3}>
                      <Skeleton variant="rectangular" sx={{ height: '100%', width: '100%' }}/>
                  </Grid>
                  <Grid item xs={9}>
                      <Skeleton variant="rectangular" sx={{ height: '100%', width: '100%' }}/>
                  </Grid>
              </Grid>
            ))
          ) : shoppingBag.products.length === 0 ? (
              <Box sx={{ width: '100%',height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <Typography variant="h6">Your bag is empty</Typography>
              </Box>
          ) : (
              shoppingBag.products.map((cartItem: CartItemInterface, index: number) => (
                  <Grid item xs={12} key={index} sx={{minWidth:'100%'}}>
                    <ShoppingBagProductCardComponent cartItem={cartItem}/>
                  </Grid>
              ))
          )
        }
      </ProductsGridStyled>
      <Grid item sx={{ height: 'calc(100vh * 2/ 12)' }}>
        <SubtotalComponent />
      </Grid>
    </BadgePopoverContentGridStyled>
  )
}

export default ShoppingBagContents
