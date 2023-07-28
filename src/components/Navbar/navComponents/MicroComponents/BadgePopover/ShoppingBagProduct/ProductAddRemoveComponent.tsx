import { useState } from 'react'

// Redux Imports
import { useDispatch } from 'react-redux';
import { decreaseQuantity, addToShoppingBag } from '../../../../../../features/shoppingBagReducer/shoppingBagSlice';

// React Imports
import { AiFillPlusSquare, AiFillMinusSquare, AiOutlineMinusSquare, AiOutlinePlusSquare } from "react-icons/ai";

// Styled Components imports
import { ShoppingBagAddRemoveStyled } from '../../../../../StyledComponents/NavbarStyled/ShoppingBagStyled';
import { CartItemInterface } from '../../../../../../types/CartiItemInterface';
import { useIsMobile } from '../../../../../../hooks/useIsMobile';




const ProductAddRemove = ({ cartItem } : {cartItem: CartItemInterface}) => {
    const [plusHover, setPlusHover] = useState(false);
    const [minusHover, setMinusHover] = useState(false);
    const dispatch = useDispatch();
    const isMobile = useIsMobile()

    const handleAdd = () => {
        dispatch(addToShoppingBag(cartItem));
    }
    const handleRemove = () => {
        if(cartItem.quantity > 1) {
            dispatch(decreaseQuantity(cartItem));
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
