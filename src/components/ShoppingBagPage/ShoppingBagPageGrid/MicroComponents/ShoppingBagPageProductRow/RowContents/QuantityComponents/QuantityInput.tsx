import { ChangeEvent, useState, useEffect, useCallback } from 'react';

// Interface imports
import { CartItemInterface } from '../../../../../../../models/CartiItemInterface';

// Styled Components imports
import { StyledNumberInput } from '../../../../../../StyledComponents/ShoppingBagPageStyled/ShoppingBagPageStyled';
import { useProductQuantity } from '../../../../../../../hooks/useProductQuantity';

interface ShoppingBagPageQuantityInputProps {
    cartItem: CartItemInterface;
}

const ShoppingBagPageQuantityInput = ({ cartItem } : ShoppingBagPageQuantityInputProps) => {
    const [value, setValue] = useState('1');
    const { updateProductQuantity, getSizeAvailability } = useProductQuantity();

    const sizeAvailability = getSizeAvailability(cartItem.product.id, cartItem.sizeSelected, cartItem.quantity);

    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        let inputValue = e.target.value;
        inputValue = inputValue.replace(/^0+/, '');
    
        let quantity = parseInt(inputValue, 10);
    
        if (!inputValue || isNaN(quantity)) {
            setValue('');
        } else if (quantity > sizeAvailability) {
            quantity = sizeAvailability;
            setValue(quantity.toString());
        } else {
            setValue(quantity.toString());
        }
    }, [sizeAvailability]);
    
    const handleBlur = useCallback(() => {
        if (value === '' || value === '0') {    
            setValue('1');
            updateProductQuantity({ ...cartItem, quantity: 1 });
        } else {
            updateProductQuantity({ ...cartItem, quantity: parseInt(value, 10) });
        }
    }, [value, cartItem, updateProductQuantity])
    
    
    
    
    useEffect(() => {
        setValue(cartItem.quantity > 0 ? cartItem.quantity.toString() : "1");
    }, [cartItem]);

    // useEffect(()=>{
    //     console.log('the value is: ', value);
    //     console.log('the size availability is: ', sizeAvailability);
    // },[value, sizeAvailability])

    return (
        <StyledNumberInput
            value={value}
            onInput={handleChange}
            onBlur={handleBlur}
            type="text"
            pattern="[1-9]*"
            aria-label='shopping-bag-item-quantity-input'
            sx={{
                color: 'black',
            }}
        />
    );
}

export default ShoppingBagPageQuantityInput
