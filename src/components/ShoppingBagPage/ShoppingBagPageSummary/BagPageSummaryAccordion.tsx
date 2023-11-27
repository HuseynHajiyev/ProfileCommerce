import { Box, Typography } from '@mui/material'
import { SummaryTitleTypographyStyled } from '../../StyledComponents/ShoppingBagPageStyled/ShoppingBagPageTypographyStyled'
import { BagSummaryAccordionStyled, BagAccordionHeaderStyled, SummaryContainerBoxStyled, AccordDetailsStyled } from '../../StyledComponents/ShoppingBagPageStyled/ShoppingBagPageStyled'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ShippingAndTaxInput from './MicroComponents/ShippingAndTaxInput';
import StateProvinceInput from './MicroComponents/StateProvinceInput';
import ZipPostalInput from './MicroComponents/ZipPostalInput';
import ZipPostalRadio from './MicroComponents/ZipPostalRadio';
import SubtotalSummary from './MicroComponents/SubtotalSummary';
import DiscountCodeInput from './MicroComponents/DiscountCodeInput';
import { ShoppingBagCheckoutButtonStyled } from '../../StyledComponents/NavbarStyled/ShoppingBagStyled';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../app/store';
import { useDrawerToggle } from '../../../hooks/useDrawerToggle';
import { addOrder } from '../../../features/userReducer/userSlice';
import { OrderInterface } from '../../../models/UserInterface';

const BagPageSummaryAccordion = () => {
  const dispatch = useDispatch();
  const {openLoginPopover} = useDrawerToggle();
  const userState = useSelector((state: RootState) => state.userState);
  const shoppingBagState = useSelector((state: RootState) => state.shoppingBag);
  const handleAddOrder = () => {

    if(userState && userState.loggedIn && userState.userOrders && userState.user && shoppingBagState.products.length > 0) {
      const order: OrderInterface =  {
        id: -1,
        products: shoppingBagState.products,
        userId: userState.user.id,
        total: shoppingBagState.subTotal,
        shipping: 0,
        status: 'pending',
        date: new Date().toISOString().split('T')[0]
      }
      dispatch(addOrder(order));
    } else {
      openLoginPopover();
    }
  }
  return (
    <SummaryContainerBoxStyled>
      <Box paddingY={'5%'} borderBottom={'2px solid #ECECEC'}>
        <SummaryTitleTypographyStyled>Summary</SummaryTitleTypographyStyled>
      </Box>
      <BagSummaryAccordionStyled sx={{borderBottom: '2px solid #ECECEC'}}>
        <BagAccordionHeaderStyled
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{padding: '5% 0 5% 0'}}
        >
          <Typography color={'black'}>Estimate Shipping and Tax</Typography>
        </BagAccordionHeaderStyled>
        <AccordDetailsStyled>
          <ShippingAndTaxInput />
          <StateProvinceInput />
          <ZipPostalInput />
          <ZipPostalRadio />
        </AccordDetailsStyled>
      </BagSummaryAccordionStyled>
      <SubtotalSummary />
      <BagSummaryAccordionStyled sx={{paddingBottom: '5%'}}>
        <BagAccordionHeaderStyled
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          sx={{paddingTop: '5%'}}
        >
          <Typography color={'black'}>Apply Discount Code</Typography>
        </BagAccordionHeaderStyled>
        <AccordDetailsStyled>
          <DiscountCodeInput />
        </AccordDetailsStyled>
      </BagSummaryAccordionStyled>
      <ShoppingBagCheckoutButtonStyled onClick={handleAddOrder}>
        Proceed to Checkout
      </ShoppingBagCheckoutButtonStyled>
    </SummaryContainerBoxStyled>
  )
}

export default BagPageSummaryAccordion
