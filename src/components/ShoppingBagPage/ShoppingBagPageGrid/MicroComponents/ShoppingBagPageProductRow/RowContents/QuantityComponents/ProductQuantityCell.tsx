// MUI imports
import { Grid } from '@mui/material';

// Component imports
import ShoppingBagPageQuantityInput from './QuantityInput';
import RemoveButton from './RemoveButton';
import AddButton from './AddButton';

// Interface imports
import { CartItemInterface } from '../../../../../../../types/CartiItemInterface';
import { useIsMobile } from '../../../../../../../hooks/useIsMobile';

const ProductQuantityCell = ({ cartItem } : {cartItem : CartItemInterface}) => {
    const isMobile = useIsMobile();
    return (
        <Grid container item md={12} lg={6} justifyContent='flex-start' spacing={1}>
            <Grid item xs={3} sm={3} md={4} lg={4} xl={5} display='flex' justifyContent='center'>
                <ShoppingBagPageQuantityInput cartItem={cartItem} />
            </Grid>
            <Grid item xs={4}sm={3} md={3} lg={3} xl={3} display='flex' justifyContent='center'>
                <RemoveButton cartItem={cartItem} />
            </Grid>
            <Grid item xs={4}sm={3} md={3} lg={3} xl={3} display='flex' justifyContent={isMobile? 'flex-start' :'center'}>
                <AddButton cartItem={cartItem} />
            </Grid>
        </Grid>

    )
}

export default ProductQuantityCell
