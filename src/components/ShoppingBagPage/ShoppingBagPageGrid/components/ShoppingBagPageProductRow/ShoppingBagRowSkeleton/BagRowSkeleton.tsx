// MUI imports
import { Grid } from '@mui/material'

// Component imports
import { GridRowStyled, GridItemStyled } from '../../../../../StyledComponents/ShoppingBagPageStyled/ShoppingBagPageStyled'
import ProductNameSkeleton from './components/ProductNameSkeleton'
import UnitPriceSkeleton from './components/UnitPriceSkeleton'
import BaseSkeleton from './components/BaseSkeleton'

const ShoppingBagRowSkeleton = () => {
  return (
    <GridRowStyled item xs={12} container direction='row' spacing={1} minHeight='15vh'>
        <GridItemStyled item xs={2}>
            <BaseSkeleton/>
        </GridItemStyled>
        <GridItemStyled item container xs={3} direction='column' padding={0}>
          <ProductNameSkeleton />
        </GridItemStyled>
        <GridItemStyled container item xs={1}>
          <UnitPriceSkeleton />
        </GridItemStyled>
        <GridItemStyled container item xs={2}>
          <BaseSkeleton />
        </GridItemStyled>
        <Grid item xs={2} sx={{alignItems: 'center', display: 'flex', justifyContent: 'center', width: '100%'}}>
          <BaseSkeleton />
        </Grid>
        <Grid item xs={1} sx={{alignItems: 'center', display: 'flex', justifyContent: 'center', width: '100%'}}>
          <BaseSkeleton />
        </Grid>
    </GridRowStyled>
  )
}

export default ShoppingBagRowSkeleton
