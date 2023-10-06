
// MUI imports
import { Box, Grid } from '@mui/material'

// Component imports
import { ShoppingBagPageTitleStyled } from '../../components/StyledComponents/ShoppingBagPageStyled/ShoppingBagPageTypographyStyled'
import { ShoppingBagPageHeaderStyled } from '../../components/StyledComponents/ShoppingBagPageStyled/ShoppingBagPageStyled'
import BagPageGrid from '../../components/ShoppingBagPage/ShoppingBagPageGrid/BagPageGrid'
import theme from '../../themes/theme'
import BagPageSummaryAccordion from '../../components/ShoppingBagPage/ShoppingBagPageSummary/BagPageSummaryAccordion'

// Hooks
import { useIsMobile } from '../../hooks/useIsMobile'

const ShoppingBag = () => {
  const isMobile = useIsMobile();
  return (
    <Box>
        <Box>
            <ShoppingBagPageHeaderStyled container>
              <ShoppingBagPageTitleStyled>Your Shopping Bag</ShoppingBagPageTitleStyled>
            </ShoppingBagPageHeaderStyled>
            <Grid container direction='row'>
                <Grid item md={12} lg={8} minWidth={isMobile? '100%' : 0}>
                  <BagPageGrid />
                </Grid>
                <Grid item md={12} lg={4} height='80vh' paddingLeft={isMobile ? 0 : theme.spacing(3)} width='100%'>
                  <BagPageSummaryAccordion />
                </Grid> 
            </Grid>
        </Box>
    </Box>
  )
}

export default ShoppingBag
