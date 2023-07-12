// MUI imports
import { Box } from '@mui/material';

// Component imports
import ShoppingBagPageQuantityInput from './QuantityInput';
import RemoveButton from './RemoveButton';
import AddButton from './AddButton';

// Interface imports
import { CartItemInterface } from '../../../../../../../types/CartiItemInterface';

const ProductQuantityCell = ({ cartItem } : {cartItem : CartItemInterface}) => {
    return (
        <Box display='flex' justifyContent='flex-start'>
            <Box width='20%' display='flex' alignItems='center'>
                <ShoppingBagPageQuantityInput cartItem={cartItem} />
            </Box>
            <Box paddingLeft='3%'>
               <RemoveButton cartItem={cartItem} />
            </Box>
            <Box paddingLeft='3%'>
                <AddButton cartItem={cartItem} />
            </Box>
        </Box>
    )
}

export default ProductQuantityCell
