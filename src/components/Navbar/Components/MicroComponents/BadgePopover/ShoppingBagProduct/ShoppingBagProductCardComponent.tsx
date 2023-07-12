// MUI imports
import { Grid } from '@mui/material';

// Component imports
import ProductCardMediaComponent from './ProductCardMediaComponent'; 
import ProductCardContentComponent from './ProductCardContentComponent';

// Styled Components imports
import { ShoppingBagProductCardStyled }from '../../../../../StyledComponents/NavbarStyled/ShoppingBagStyled';

// Interface imports
import { CartItemInterface } from '../../../../../../types/CartiItemInterface';



const ProductCard = ({cartItem}: {cartItem: CartItemInterface}) => { 
    if (!cartItem || !cartItem.product) {
        console.log('cartItem or cartItem.product is undefined!', cartItem);
        return null; 
    }
    return (
        <ShoppingBagProductCardStyled>
            <Grid container direction='row' spacing={1} sx={{ paddingY: '5%', '& .MuiCardContent-root': { p:0 }}}>
                <Grid item xs={3} sx={{position: 'relative', width: '100%', paddingTop: '100%', backgroundColor: '#ffffff'}}>
                    <ProductCardMediaComponent product={cartItem.product} />
                </Grid>
                <Grid item xs={9}>
                    <ProductCardContentComponent cartItem={cartItem} />
                </Grid>
            </Grid>
        </ShoppingBagProductCardStyled>
  )
}

export default ProductCard
