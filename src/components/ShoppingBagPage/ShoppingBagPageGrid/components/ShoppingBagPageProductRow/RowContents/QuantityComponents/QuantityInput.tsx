// React imports
import { ChangeEvent, useState, useEffect } from 'react';

// Redux imports
import { useDispatch } from 'react-redux';
import { updateQuantity } from '../../../../../../../features/shoppingBagReducer/shoppingBagSlice';

// Interface imports
import { CartItemInterface } from '../../../../../../../types/CartiItemInterface';

// Styled Components imports
import { SetQuantityFieldStyled } from '../../../../../../StyledComponents/ShoppingBagPageStyled/ShoppingBagPageStyled';

const ShoppingBagPageQuantityInput = ({ cartItem } : {cartItem: CartItemInterface}) => {
    const [value, setValue] = useState(cartItem.quantity.toString());
    const dispatch = useDispatch();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        if (/^\d+$/.test(newValue)) {
            setValue(newValue);
            const newCartItem = {
                ...cartItem,
                quantity: parseInt(newValue, 10),
            };
            dispatch(updateQuantity(newCartItem));
        }
    };

    useEffect(() => {
        setValue(cartItem.quantity.toString());
    }, [cartItem.quantity]);

    return (
        <SetQuantityFieldStyled
            value={value}
            onChange={handleChange}
            type="text"
            fullWidth
            inputProps={{
                inputMode: "numeric",
                pattern: "[0-9]*",
            }}
            InputProps={{
                style: { borderRadius: '0px' }
            }}
            aria-label='shopping-bag-item-quantity-input'
        />
    );
}

export default ShoppingBagPageQuantityInput
