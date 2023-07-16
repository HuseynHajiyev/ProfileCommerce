import { Box, FormControl } from '@mui/material'
import { BagSummaryTextFieldStyled } from '../../../StyledComponents/ShoppingBagPageStyled/ShoppingBagPageStyled'
const ShippingAndTaxInput = () => {
  return (
    <>
      <FormControl fullWidth>
        <Box></Box>
          <BagSummaryTextFieldStyled 
              id="outlined-basic" 
              label="Enter you destination to get a shipping estimate" 
              variant="standard"
              fullWidth
              autoComplete="new-password"
              sx={{
                  backgroundColor: '#E0EEFF',
              }}
          />
      </FormControl>
    </>
  )
}

export default ShippingAndTaxInput
