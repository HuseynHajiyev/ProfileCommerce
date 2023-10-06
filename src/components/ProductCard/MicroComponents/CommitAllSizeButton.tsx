import { AddToBagButtonStyled } from '../../StyledComponents/ProductCardStyled/ProductViewPageStyled'
import { Box, Typography } from '@mui/material'
import { useProductQuantity } from '../../../hooks/useProductQuantity'
import { ProductInterface } from '../../../models/ProductInterface';

const CommitAllSizeButton = ({product} : {product: ProductInterface}) => {
  const { commitAllSelections } = useProductQuantity();
  const handleClick = () => {
    commitAllSelections(product.id);
  }
  return (
    <Box width={'100%'} display={'flex'} justifyContent={'center'} sx={{
      paddingTop: '5%',
    }}>
      <AddToBagButtonStyled onClick={handleClick}>
        <Typography variant='body1' color={'white'}>
          Add To Bag
        </Typography>
      </AddToBagButtonStyled>
    </Box>
  )
}

export default CommitAllSizeButton