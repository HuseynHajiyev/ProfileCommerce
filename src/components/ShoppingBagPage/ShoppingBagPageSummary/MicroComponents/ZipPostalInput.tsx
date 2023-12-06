import {BagAccordionHeaderStyled, BagSummaryTextFieldStyled } from '../../../StyledComponents/ShoppingBagPageStyled/ShoppingBagPageStyled'

const ZipPostalInput = () => {
  return (
    <>
        <BagAccordionHeaderStyled>
            Zip/Postal Code
        </BagAccordionHeaderStyled>
        <BagSummaryTextFieldStyled 
            label="Zip/Postal Code" 
            variant="standard"
            value={'12345'}
            fullWidth
            autoComplete="new-password"
        />
    </>
  )
}

export default ZipPostalInput
