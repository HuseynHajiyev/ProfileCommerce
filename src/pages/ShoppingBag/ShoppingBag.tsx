
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
import { useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import { useEffect } from 'react'
import { useDrawerToggle } from '../../hooks/useDrawerToggle'

const ShoppingBag = () => {
  const isMobile = useIsMobile();
  const userState = useSelector((state: RootState) => state.userState);
  const { openLoginPopover } = useDrawerToggle();

  useEffect(() => {
    if(!userState.loggedIn || !userState.user) {
      openLoginPopover();
    }
  }, [userState.loggedIn, userState.user, openLoginPopover]);
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
