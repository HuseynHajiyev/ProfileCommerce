
// Icons imports
import { VscTrash } from 'react-icons/vsc'

// Components
import CardMediaComponent from './RowContents/CardMediaComponent'
import ProductDetail from './RowContents/ProductDetail'
import UnitPrice from './RowContents/UnitPrice'
import SubTotalPrice from './RowContents/SubtotalPrice'


// Redux imports
import { useDispatch } from 'react-redux'
import { removeFromShoppingBag } from '../../../../../features/shoppingBagReducer/shoppingBagSlice'

// Interface imports
import { CartItemInterface } from '../../../../../types/CartiItemInterface'
import { Button, Grid } from '@mui/material'
import { GridRowStyled, GridItemStyled } from '../../../../StyledComponents/ShoppingBagPageStyled/ShoppingBagPageStyled'
import QuantityComponent from './RowContents/QuantityComponent'

const ShoppingProductRow = ({ cartItem } : { cartItem: CartItemInterface }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(removeFromShoppingBag(cartItem));
  }
  return (
      <GridRowStyled item xs={12} container direction='row' minWidth='100%' spacing={0}>
        <GridItemStyled item xs={2} sx={{position: 'relative'}}>
          <CardMediaComponent product={cartItem.product}  />
        </GridItemStyled>
        <GridItemStyled item container xs={3} direction='column' padding={0} spacing={1}>
          <ProductDetail product={cartItem.product} />
        </GridItemStyled>
        <GridItemStyled container item xs={1}>
          <UnitPrice product={cartItem.product} />
        </GridItemStyled>
        <GridItemStyled container item xs={2}>
          <QuantityComponent cartItem={cartItem} />
        </GridItemStyled>
        <GridItemStyled container item xs={1}>
          <SubTotalPrice cartItem={ cartItem } />
        </GridItemStyled>
        <Grid item xs={2} sx={{alignItems: 'center', display: 'flex', justifyContent: 'center', width: '100%'}}>
          <Button sx={{p: 0, minWidth:'0'}} aria-label='remove-product-from-shopping-bag'>
            <VscTrash size={25} color='#C4C4C4' aria-label='remove-item-from-shopping-bag' sx={{cursor: 'pointer'}} onClick={()=> handleDelete()}/> 
          </Button>
        </Grid>
      </GridRowStyled>
  )
}

export default ShoppingProductRow
