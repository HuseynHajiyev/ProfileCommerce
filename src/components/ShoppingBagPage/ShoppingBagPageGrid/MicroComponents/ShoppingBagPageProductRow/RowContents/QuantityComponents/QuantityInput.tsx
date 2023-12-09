import { ChangeEvent, useState, useEffect, useRef, useCallback } from 'react';

// Interface imports
import { CartItemInterface } from '../../../../../../../models/CartiItemInterface';

// Styled Components imports
import { SetQuantityFieldStyled } from '../../../../../../StyledComponents/ShoppingBagPageStyled/ShoppingBagPageStyled';
import { useProductQuantity } from '../../../../../../../hooks/useProductQuantity';

const ShoppingBagPageQuantityInput = ({ cartItem } : {cartItem: CartItemInterface}) => {
    const [value, setValue] = useState(cartItem.quantity.toString());
    const { updateProductQuantity, getSizeAvailability } = useProductQuantity();

    const sizeAvailability = useRef(0);

    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        let quantity = parseInt(inputValue, 10);

        if (inputValue === "") {
            setValue("0");
            quantity = 0;
            const newCartItem = {
                ...cartItem,
                quantity: quantity,
            };
            updateProductQuantity(newCartItem);
        }
        
        if (/^\d+$/.test(inputValue)) {
            const newCartItem = {
                ...cartItem,
                quantity: 0,
            };
            if (quantity > sizeAvailability.current) {
                setValue(sizeAvailability.current.toString());
                quantity = sizeAvailability.current;
                newCartItem.quantity = sizeAvailability.current;
            } else {
                setValue(inputValue);
                newCartItem.quantity = quantity;
            }
            updateProductQuantity(newCartItem);
            }
        }, [cartItem, updateProductQuantity]);
    

    useEffect(() => {
        sizeAvailability.current = getSizeAvailability(cartItem.product.id, cartItem.sizeSelected)
        setValue(cartItem.quantity.toString());
    }, [cartItem.quantity, cartItem.product.id, cartItem.sizeSelected, getSizeAvailability]);

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
            sx={{
                color: parseInt(value, 10) > sizeAvailability.current ? 'red' : 'black',
            }}
        />
    );
}

export default ShoppingBagPageQuantityInput
