// React Imports 
import { memo } from 'react';

// MUI imports
import { CardContent, Box, Grid, Button, Tooltip } from '@mui/material';

// Icon imports
import { VscTrash } from "react-icons/vsc";

// Component imports
import { ProductDescriptionStyled, ProductPriceStyled, ProductTitleStyled } from '../../../../../StyledComponents/NavbarStyled/ShoppingCardTypographyStyled';
import ProductAddRemove from './ProductAddRemoveComponent';

// Interface imports
import { CartItemInterface } from '../../../../../../models/CartiItemInterface'

// Utilities
import { trimTitle } from '../../../../../../utilities/TrimTitle';
import { mapNumericToAlphabeticSizes } from '../../../../../../utilities/mapProductSizes';
import { useProductQuantity } from '../../../../../../hooks/useProductQuantity';


const ProductCardContentComponent = memo(({cartItem}: { cartItem: CartItemInterface}) => {
    const {removeProductFromShoppingBag} = useProductQuantity();
    const handleDelete = () => {
        removeProductFromShoppingBag(cartItem);
    }

    return (
        <CardContent sx={{padding:'0',  width: '100%' , '&:last-of-type': { padding: '0'}}} aria-label='shopping-bag-item-content'>
            <Grid container direction='column' spacing={1}>
                <Grid item>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <Tooltip title={cartItem.product.title} placement='top-start' aria-label="full-title">
                            <ProductTitleStyled aria-label='product-title'>
                                {`${trimTitle(cartItem.product.title, 15)}`}
                            </ProductTitleStyled>
                        </Tooltip>
                        <ProductPriceStyled aria-label='product-price'>
                            {`$${cartItem.product.price}`}
                        </ProductPriceStyled>
                    </Box>
                </Grid>
                <Grid item>
                    <Box >
                        <ProductDescriptionStyled variant="body2" color="text.secondary" aria-label='product-color'>
                            {`Color: ${cartItem.product.color}`}
                        </ProductDescriptionStyled>
                    </Box>
                    <Box aria-label='Details' sx={{ display: 'flex', alignItems: 'center'}}>
                        <ProductDescriptionStyled aria-label='product-color' variant="body2" color="text.secondary" sx={{marginRight: '2px'}}>
                            {`Size: ${mapNumericToAlphabeticSizes(parseInt(cartItem.sizeSelected))}`}
                        </ProductDescriptionStyled>
                        <ProductDescriptionStyled variant="body2" color="text.secondary" aria-label='product-bag-quantity'>
                            {`Quantity: ${cartItem.quantity}`}
                        </ProductDescriptionStyled>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                        <ProductAddRemove cartItem={cartItem} />
                        <Button sx={{p: 0, minWidth:'0'}} aria-label='remove-product-from-shopping-bag'>
                            <VscTrash size={20} color="gray" sx={{cursor: 'pointer'}} onClick={()=> handleDelete()}/>
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </CardContent>
    )
})

export default ProductCardContentComponent
