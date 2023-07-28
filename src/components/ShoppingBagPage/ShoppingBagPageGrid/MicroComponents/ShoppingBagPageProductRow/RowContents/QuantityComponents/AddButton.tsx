// React Imports
import { useState } from 'react'
import { AiFillPlusSquare, AiOutlinePlusSquare } from 'react-icons/ai';

// Redux imports
import { useDispatch } from 'react-redux';
import { addToShoppingBag } from '../../../../../../../features/shoppingBagReducer/shoppingBagSlice';

// Styled components
import { ShoppingBagAddRemoveStyled } from '../../../../../../StyledComponents/NavbarStyled/ShoppingBagStyled';

// Interface imports
import { CartItemInterface } from '../../../../../../../types/CartiItemInterface';
import { iconSize } from '../../../../../../../utilities/ShoppingBagPageIconSize';

// Hooks
import { useIsMobile } from '../../../../../../../hooks/useIsMobile';


const AddButton = ({ cartItem } : { cartItem : CartItemInterface}) => {
    const isMobile = useIsMobile();
    const [plusHover, setPlusHover] = useState(false);
    const dispatch = useDispatch();
    const iconsSize = iconSize(isMobile);
    const handleAdd = () => {
        dispatch(addToShoppingBag(cartItem));
    }
    return (
        <ShoppingBagAddRemoveStyled aria-label="increase-item-quantity"
            onMouseEnter={() => setPlusHover(true)}
            onMouseLeave={() =>  setPlusHover(false)}
            onTouchStart={() => setPlusHover(true)}
            onTouchEnd={() => setPlusHover(false)}
            sx={{
                '&:hover': {backgroundColor: 'transparent'},
                alignItems: 'center',
            }}

            onClick={() => handleAdd()}
        >
            {
                plusHover ? <AiOutlinePlusSquare size={ iconsSize } color='black' /> : <AiFillPlusSquare size={ iconsSize } color='black' />
            }
        </ShoppingBagAddRemoveStyled>
    )
}

export default AddButton
