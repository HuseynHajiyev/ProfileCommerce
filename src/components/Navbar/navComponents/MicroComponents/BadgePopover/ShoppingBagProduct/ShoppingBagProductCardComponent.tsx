// MUI imports
import { Grid } from '@mui/material';

// Component imports
import ProductCardMediaComponent from './ProductCardMediaComponent'; 
import ProductCardContentComponent from './ProductCardContentComponent';

// Styled Components imports
import { ShoppingBagProductCardStyled }from '../../../../../StyledComponents/NavbarStyled/ShoppingBagStyled';

// Interface imports
import { CartItemInterface } from '../../../../../../models/CartiItemInterface';
import { Link } from 'react-router-dom';



const ShoppingBagProductCard = ({cartItem}: {cartItem: CartItemInterface}) => { 
    if (!cartItem || !cartItem.product) {
        return null; 
    }
    return (
        <ShoppingBagProductCardStyled>
            <Grid container>
                <Grid item xs={3} sx={{position: 'relative', width: '100%', backgroundColor: '#ffffff'}}>
                    <Link to={`/shop/view-all/${cartItem.product.id}`}>
                        <ProductCardMediaComponent product={cartItem.product} />
                    </Link>
                </Grid>
                <Grid item xs={9} paddingLeft={2}>
                    <ProductCardContentComponent cartItem={cartItem} />
                </Grid>
            </Grid>
        </ShoppingBagProductCardStyled>
  )
}

export default ShoppingBagProductCard
