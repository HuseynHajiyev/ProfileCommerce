import { useState } from 'react'

// React Imports
import { AiFillPlusSquare, AiFillMinusSquare, AiOutlineMinusSquare, AiOutlinePlusSquare } from "react-icons/ai";

// Styled Components imports
import { ShoppingBagAddRemoveStyled } from '../../../../../StyledComponents/NavbarStyled/ShoppingBagStyled';
import { CartItemInterface } from '../../../../../../models/CartiItemInterface';
import { useIsMobile } from '../../../../../../hooks/useIsMobile';
import { useProductQuantity } from '../../../../../../hooks/useProductQuantity';




const ProductAddRemove = ({ cartItem } : {cartItem: CartItemInterface}) => {
    const [plusHover, setPlusHover] = useState(false);
    const [minusHover, setMinusHover] = useState(false);
    const { addProductToShoppingBag, decreaseShoppingBagProductQuantity } = useProductQuantity();
    const isMobile = useIsMobile()

    const handleAdd = () => {
        addProductToShoppingBag(cartItem.product, cartItem.sizeSelected, 0)
    }
    const handleRemove = () => {
        if(cartItem.quantity > 1) {
            decreaseShoppingBagProductQuantity(cartItem);
        }
    }
    return (
        <div>
            <ShoppingBagAddRemoveStyled aria-label="decrease-item-quantity"
                style={{ backgroundColor: plusHover ? '#00000' : '#fffff' }} 
                onMouseEnter={() => setMinusHover(true)} 
                onMouseLeave={() => setMinusHover(false)}
                onTouchStart={() => setMinusHover(true)}
                onTouchEnd={() => setMinusHover(false)}
                onClick={() => handleRemove()}
            >
                {
                    minusHover ? <AiOutlineMinusSquare size={isMobile ? 40 : 20} color='black' /> : <AiFillMinusSquare size={isMobile ? 40 : 20} color='black' />
                }
            </ShoppingBagAddRemoveStyled>
            <ShoppingBagAddRemoveStyled aria-label="increase-item-quantity"
                onMouseEnter={() => setPlusHover(true)} 
                onMouseLeave={() => setPlusHover(false)}
                onTouchStart={() => setPlusHover(true)}
                onTouchEnd={() => setPlusHover(false)}
                onClick={() => handleAdd()}
            >
                {
                    plusHover ? <AiOutlinePlusSquare size={isMobile ? 40 : 20} color='black' /> : <AiFillPlusSquare size={isMobile ? 40 : 20} color='black' />
                }
            </ShoppingBagAddRemoveStyled>
        </div>
    )
}

export default ProductAddRemove
