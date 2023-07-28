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

const BagPageSummaryAccordion = () => {
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
      <ShoppingBagCheckoutButtonStyled>
        Proceed to Checkout
      </ShoppingBagCheckoutButtonStyled>
    </SummaryContainerBoxStyled>
  )
}

export default BagPageSummaryAccordion
