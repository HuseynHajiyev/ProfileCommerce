// React Imports
import { useState } from 'react'
import { AiFillPlusSquare, AiOutlinePlusSquare } from 'react-icons/ai';
import { ShoppingBagAddRemoveStyled } from '../../../../../../StyledComponents/NavbarStyled/ShoppingBagStyled';

// Interface imports
import { CartItemInterface } from '../../../../../../../models/CartiItemInterface';
import { iconSize } from '../../../../../../../utilities/ShoppingBagPageIconSize';

// Hooks
import { useIsMobile } from '../../../../../../../hooks/useIsMobile';
import { useProductQuantity } from '../../../../../../../hooks/useProductQuantity';


const AddButton = ({ cartItem } : { cartItem : CartItemInterface}) => {
    const isMobile = useIsMobile();
    const [plusHover, setPlusHover] = useState(false);
    const { addProductToShoppingBag } = useProductQuantity();
    const iconsSize = iconSize(isMobile);
    const handleAdd = () => {
        addProductToShoppingBag(cartItem.product, cartItem.sizeSelected, 0);
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
