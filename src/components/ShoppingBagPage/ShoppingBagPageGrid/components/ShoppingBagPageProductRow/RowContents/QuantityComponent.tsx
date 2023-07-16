// Component Imports
import ProductQuantityCell from './QuantityComponents/ProductQuantityCell';
// Interface Imports
import { CartItemInterface } from '../../../../../../types/CartiItemInterface';


const QuantityComponent = ({ cartItem } : { cartItem : CartItemInterface}) => (
    <>
        <ProductQuantityCell cartItem={cartItem} />
    </>
  );
  

export default QuantityComponent
