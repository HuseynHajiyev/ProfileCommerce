import { AddToBagButtonStyled } from '../../StyledComponents/ProductCardStyled/ProductViewPageStyled'
import { Box, Typography } from '@mui/material'
import { useProductQuantity } from '../../../hooks/useProductQuantity'
import { ProductInterface } from '../../../models/ProductInterface';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app/store';
import { useDrawerToggle } from '../../../hooks/useDrawerToggle';

const CommitAllSizeButton = ({product} : {product: ProductInterface}) => {
  const { commitAllSelections } = useProductQuantity();
  const userState = useSelector((state: RootState) => state.userState);
  const { openLoginPopover } = useDrawerToggle();
  const handleClick = () => {
    if(userState.loggedIn){
      commitAllSelections(product.id);
    } else {
      openLoginPopover();
    }
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