// Component Imports
import ProductQuantityCell from './QuantityComponents/ProductQuantityCell';
import { GridItemStyled } from '../../../../../StyledComponents/ShoppingBagPageStyled/ShoppingBagPageStyled';

// Interface Imports
import { CartItemInterface } from '../../../../../../types/CartiItemInterface';


const QuantityComponent = ({ cartItem } : { cartItem : CartItemInterface}) => (
    <>
        <ProductQuantityCell cartItem={cartItem} />
    </>
  );
  

export default QuantityComponent
