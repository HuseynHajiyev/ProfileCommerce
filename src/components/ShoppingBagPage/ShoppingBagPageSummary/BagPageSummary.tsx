import { Box, Stack } from '@mui/material'
import { SummaryTitleTypographyStyled } from '../../StyledComponents/ShoppingBagPageStyled/ShoppingBagPageTypographyStyled'
import { ContainerBorderBottomStyled, SummaryContainerStackStyled } from '../../StyledComponents/ShoppingBagPageStyled/ShoppingBagPageStyled'

const BagPageSummary = () => {
  return (
    <SummaryContainerStackStyled spacing={1}>
      <ContainerBorderBottomStyled>
        <SummaryTitleTypographyStyled>
          Summary
        </SummaryTitleTypographyStyled>
      </ContainerBorderBottomStyled>
      <ContainerBorderBottomStyled aria-label="Shipping details">
        
      </ContainerBorderBottomStyled>
      <ContainerBorderBottomStyled aria-label="Order summary">

      </ContainerBorderBottomStyled>
      <ContainerBorderBottomStyled aria-label="Discount code">

      </ContainerBorderBottomStyled>
    </SummaryContainerStackStyled>
  )
}

export default BagPageSummary
