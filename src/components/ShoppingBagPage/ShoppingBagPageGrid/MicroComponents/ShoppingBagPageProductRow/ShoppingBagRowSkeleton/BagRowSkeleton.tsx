// MUI imports
import { Grid } from '@mui/material'

// Component imports
import { GridRowStyled } from '../../../../../StyledComponents/ShoppingBagPageStyled/ShoppingBagPageStyled'
import ProductNameSkeleton from './components/ProductNameSkeleton'
import UnitPriceSkeleton from './components/UnitPriceSkeleton'
import BaseSkeleton from './components/BaseSkeleton'
import { gridColumns } from '../../../../../../utilities/ShoppingBagGridConstants'

const ShoppingBagRowSkeleton = () => {
  const {image, productName, price, quantity, subtotal, deleteItem } = gridColumns
  return (
    <GridRowStyled item xs={12} container direction='row' spacing={1} minHeight='15vh'>
        <Grid item sm={image.sm} md={image.md}>
            <BaseSkeleton/>
        </Grid>
        <Grid item sm={productName.sm} md={productName.md} container direction='column' padding={0}>
          <ProductNameSkeleton />
        </Grid>
        <Grid container item sm={price.sm} md={price.md}>
          <UnitPriceSkeleton />
        </Grid>
        <Grid container item sm={quantity.sm} md={quantity.md}>
          <BaseSkeleton />
        </Grid>
        <Grid item sm={subtotal.sm} md={subtotal.md} sx={{alignItems: 'center', display: 'flex', justifyContent: 'center', width: '100%'}}>
          <BaseSkeleton />
        </Grid>
        <Grid item sm={deleteItem.sm} md={deleteItem.md} sx={{alignItems: 'center', display: 'flex', justifyContent: 'center', width: '100%'}}>
          <BaseSkeleton />
        </Grid>
    </GridRowStyled>
  )
}

export default ShoppingBagRowSkeleton
