import { Box, Typography } from '@mui/material'

// Styled Components
import { TotalStyled, ShippingStyled, ViewBagStyled, ViewBagLinkStyled } from '../../../../StyledComponents/NavbarStyled/ShoppingCardTypographyStyled'
import { ShoppingBagCheckoutButtonStyled, ShoppingBagSubtotalStyled } from '../../../../StyledComponents/NavbarStyled/ShoppingBagStyled';

// Redux
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../app/store';
import { useDrawerToggle } from '../../../../../hooks/useDrawerToggle';

const SubtotalComponent = () => {
    const subTotal = useSelector((state: RootState) => state.shoppingBag.subTotal);
    const shipping = Number((subTotal*0.05).toFixed(2))
    const { closeShoppingPopper } = useDrawerToggle();
    return (
        <ShoppingBagSubtotalStyled>
            <Box display='flex' justifyContent='space-between'>
                <Box>
                    <TotalStyled>
                        Total: 
                    </TotalStyled>
                    <ShippingStyled>
                        Shipping:
                    </ShippingStyled>
                </Box>
                <Box>
                    <TotalStyled>
                        {
                            `$${subTotal}`
                        }
                    </TotalStyled>
                    <ShippingStyled>
                        {
                            shipping === 0 ? 'Free' : `$${shipping}`
                        }
                    </ShippingStyled>
                </Box>
            </Box>
            <Box display='flex' justifyContent='center'>
                <ViewBagLinkStyled to='/shopping-bag' style={{textDecoration: 'none'}} onClick={()=> closeShoppingPopper()}>
                    <ViewBagStyled>
                        View Bag
                    </ViewBagStyled>
                </ViewBagLinkStyled>
            </Box>
            <Box>
                <ShoppingBagCheckoutButtonStyled onClick={() => closeShoppingPopper()}>
                    <Typography variant='h6'>
                        Go To Checkout 
                    </Typography>
                </ShoppingBagCheckoutButtonStyled>
            </Box>
        </ShoppingBagSubtotalStyled>
    )
}

export default SubtotalComponent
