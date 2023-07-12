
// MUI imports
import { Box, Grid } from '@mui/material'

// Component imports
import { ShoppingBagPageTitleStyled } from '../../components/StyledComponents/ShoppingBagPageStyled/ShoppingBagPageTypographyStyled'
import { ShoppingBagPageHeaderStyled } from '../../components/StyledComponents/ShoppingBagPageStyled/ShoppingBagPageStyled'
import BagPageGrid from '../../components/ShoppingBagPage/ShoppingBagPageGrid/BagPageGrid'
import theme from '../../themes/theme'
import BagPageSummary from '../../components/ShoppingBagPage/ShoppingBagPageSummary/BagPageSummary'

const ShoppingBag = () => {
  return (
    <Box>
        <Box>
            <ShoppingBagPageHeaderStyled container>
              <ShoppingBagPageTitleStyled>Your Shopping Bag</ShoppingBagPageTitleStyled>
            </ShoppingBagPageHeaderStyled>
            <Grid container direction='row'>
                <Grid item lg={12} xl={8}>
                  <BagPageGrid />
                </Grid>
                <Grid item lg={12} xl={4} height='80vh' paddingLeft={theme.spacing(3)}>
                  <Box height='100%' border='2px solid black'>
                      <BagPageSummary />
                  </Box>
                </Grid> 
            </Grid>
        </Box>
    </Box>
  )
}

export default ShoppingBag
