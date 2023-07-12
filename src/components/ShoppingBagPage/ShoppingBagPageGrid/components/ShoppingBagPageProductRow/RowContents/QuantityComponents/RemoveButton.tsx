import { useState } from 'react';
import { AiFillMinusSquare, AiOutlineMinusSquare } from 'react-icons/ai';

// Redux imports
import { useDispatch } from 'react-redux';
import { decreaseQuantity } from '../../../../../../../features/shoppingBagReducer/shoppingBagSlice';

// Styled components
import { ShoppingBagAddRemoveStyled } from '../../../../../../StyledComponents/NavbarStyled/ShoppingBagStyled';

// Inteface imports
import { CartItemInterface } from '../../../../../../../types/CartiItemInterface';

// Utils
import { iconSize } from '../../../../../../../utilities/ShoppingBagPageIconSize';

// Hooks
import { useIsMobile } from '../../../../../../../hooks/useIsMobile';


const RemoveButton = ({ cartItem } : {cartItem : CartItemInterface}) => {
  const [minusHover, setMinusHover] = useState(false);
  const dispatch = useDispatch();
  const isMobile = useIsMobile();
  const iconsSize = iconSize(isMobile);
  const handleRemove = () => {
    if(cartItem.quantity > 1) {
        dispatch(decreaseQuantity(cartItem));
    }
}

  return (
    <ShoppingBagAddRemoveStyled aria-label="decrease-item-quantity"
        style={{ backgroundColor: minusHover ? '#00000' : '#fffff' }} 
        onMouseEnter={() => setMinusHover(true)} 
        onMouseLeave={() => setMinusHover(false)}
        onTouchStart={() => setMinusHover(true)}
        onTouchEnd={() => setMinusHover(false)}
        sx={{'&:hover': {backgroundColor: 'transparent'}}}
        onClick={() => handleRemove()}
    >
    {
        minusHover ? <AiOutlineMinusSquare size={ iconsSize } color='black' /> : <AiFillMinusSquare size={ iconsSize } color='black' />
    }
    </ShoppingBagAddRemoveStyled>
  )
}

export default RemoveButton
