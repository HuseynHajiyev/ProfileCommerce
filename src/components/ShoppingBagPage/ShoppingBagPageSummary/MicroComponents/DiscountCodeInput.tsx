import { Button, FormControl, InputAdornment } from '@mui/material'
import { BagAccordionHeaderStyled, BagSummaryTextFieldStyled } from '../../../StyledComponents/ShoppingBagPageStyled/ShoppingBagPageStyled'

const DiscountCodeInput = () => {
  return (
    <FormControl fullWidth>
        <BagAccordionHeaderStyled>
            Enter discount code
        </BagAccordionHeaderStyled>
        <BagSummaryTextFieldStyled 
            id="outlined-basic" 
            label="Enter discount code" 
            variant="standard"
            fullWidth
            autoComplete="new-password"
            InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Button>Apply</Button>
                  </InputAdornment>
                ),
              }}
        />
    </FormControl>
  )
}

export default DiscountCodeInput
