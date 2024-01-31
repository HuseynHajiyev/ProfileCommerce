// Redux Imports
import { useSelector } from 'react-redux';

// Redux Actions

// MUI imports
import { Grid, Typography, Skeleton, Box, Stack } from '@mui/material';

// Component imports
import ShoppingBagProductCardComponent from './ShoppingBagProduct/ShoppingBagProductCardComponent';

// Type imports
import { RootState } from '../../../../../app/store';
import SubtotalComponent from './SubtotalComponent';
import { ShoppingBagInterface } from '../../../../../models/ShoppingBagInterface';
import { CartItemInterface } from '../../../../../models/CartiItemInterface';
import { BadgePopoverContentGridStyled } from '../../../../StyledComponents/NavbarStyled/BadgePopoverStyled';
import theme from '../../../../../themes/theme';

const ShoppingBagContents = () => {
  const loading = useSelector((state: RootState) => state.shoppingBag.loading);
  const shoppingBag: ShoppingBagInterface = useSelector((state: RootState) => state.shoppingBag);

  return (
    <BadgePopoverContentGridStyled  data-lenis-prevent>
      <Box>
        <Box sx={{p: '5%'}}>
          <Typography variant='h6'>
            Your bag {`(${shoppingBag.products.length})`}
          </Typography>
        </Box>
      </Box>
      <Box sx={{
        height: '100%',
        overflowY: 'scroll',
        maxHeight: '50vh',
        '&::-webkit-scrollbar': {
          width: theme.spacing(1.25),
        },
        '&::-webkit-scrollbar-track': {
          backgroundColor: theme.palette.grey[200],
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: theme.palette.grey[400],
          borderRadius: theme.shape.borderRadius,
        },
      }}>
        <Stack sx={{ padding: theme.spacing(0, 5),}}>
        { 
            loading ? (
              Array.from({ length: 6 }).map((_, index) => (
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
                    <ShoppingBagProductCardComponent key={index} cartItem={cartItem}/>
                ))
            )
          }
        </Stack>
      </Box>
      <Box>
        <SubtotalComponent />
      </Box>
    </BadgePopoverContentGridStyled>
  )
}

export default ShoppingBagContents
