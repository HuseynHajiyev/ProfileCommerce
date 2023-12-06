import { FormControl } from '@mui/material'
import {BagAccordionHeaderStyled, BagSummaryTextFieldStyled } from '../../../StyledComponents/ShoppingBagPageStyled/ShoppingBagPageStyled'

const StateProvinceInput = () => {
  return (
    <>
      <FormControl fullWidth>
          <BagAccordionHeaderStyled>
              State/Province
          </BagAccordionHeaderStyled>
          <BagSummaryTextFieldStyled 
              label="State/Province" 
              variant="standard"
              type='text'
              autoComplete="new-password"
              fullWidth
          />
      </FormControl>
    </>
  )
}

export default StateProvinceInput
