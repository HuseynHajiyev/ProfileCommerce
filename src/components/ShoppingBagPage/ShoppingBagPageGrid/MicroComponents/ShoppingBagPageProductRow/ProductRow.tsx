
// Icons imports
import { VscTrash } from 'react-icons/vsc'

// Components
import CardMediaComponent from './RowContents/CardMediaComponent'
import ProductDetail from './RowContents/ProductDetail'
import UnitPrice from './RowContents/UnitPrice'
import SubTotalPrice from './RowContents/SubtotalPrice'


// Interface imports
import { CartItemInterface } from '../../../../../models/CartiItemInterface'
import { Button } from '@mui/material'
import { GridRowStyled, GridItemStyled } from '../../../../StyledComponents/ShoppingBagPageStyled/ShoppingBagPageStyled'
import QuantityComponent from './RowContents/QuantityComponent'
import { useProductQuantity } from '../../../../../hooks/useProductQuantity'

const ShoppingProductRow = ({ cartItem } : { cartItem: CartItemInterface }) => {
    const { removeProductFromShoppingBag } = useProductQuantity();
    const handleDelete = () => {
      removeProductFromShoppingBag(cartItem);
  }
  return (
      <GridRowStyled item xs={12} container direction='row' minWidth='100%' spacing={0}>
        <GridItemStyled item sx={{position: 'relative'}}>
          <CardMediaComponent product={cartItem.product}  />
        </GridItemStyled>
        <GridItemStyled item container justifyContent={'flex-start'} padding={0}>
          <ProductDetail cartItem={cartItem} />
        </GridItemStyled>
        <GridItemStyled item container>
          <UnitPrice product={cartItem.product} />
        </GridItemStyled>
        <GridItemStyled item container>
          <QuantityComponent cartItem={cartItem} />
        </GridItemStyled>
        <GridItemStyled item container>
          <SubTotalPrice cartItem={ cartItem } />
        </GridItemStyled>
        <GridItemStyled item container>
          <Button sx={{p: 0, minWidth:'0'}} aria-label='remove-product-from-shopping-bag'>
            <VscTrash size={25} color='#C4C4C4' aria-label='remove-item-from-shopping-bag' sx={{cursor: 'pointer'}} onClick={()=> handleDelete()}/> 
          </Button>
        </GridItemStyled>
      </GridRowStyled>
  )
}

export default ShoppingProductRow
