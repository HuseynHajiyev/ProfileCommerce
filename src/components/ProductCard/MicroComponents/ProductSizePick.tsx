import { Typography } from '@mui/material'
import { ProductSizePickStyled, SquareButtonContainer } from '../../StyledComponents/ProductCardStyled/ProductViewPageStyled';
import { useProductQuantity } from '../../../hooks/useProductQuantity';
import { ProductInterface } from '../../../models/ProductInterface';
import { memo, useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app/store';

interface ProductSizePickProps {
  size: string;
  product: ProductInterface;
}

const ProductSizePick = memo(({ size, product }: ProductSizePickProps ) => {
  const {selectedSizes, addASelectedSize, removeASelectedSize ,getSizeAvailability, sizeIsSelected} = useProductQuantity();
  const sizeAvailability = useSelector((state: RootState) => {
   return state.products.products.find((productFromStore) => productFromStore.id === product.id)?.sizes[size]
  });
  const [sizeSelected, setSizeSelected] = useState(false);

  const handleClick = useCallback((product: ProductInterface, size: string) => {
    if(sizeSelected) {
      removeASelectedSize(size, product.id);
      setSizeSelected(false);
    } else {
      addASelectedSize(size, product.id);
      setSizeSelected(true);
    }
    console.log(sizeAvailability)
  },[sizeSelected, addASelectedSize, removeASelectedSize, sizeAvailability]);


  useEffect(() => {
    const isSelected = sizeIsSelected(size, product.id);
    const selectedSizesArr = selectedSizes(product.id);
    if (isSelected !== sizeSelected) {
      setSizeSelected(isSelected);
    }
    if(selectedSizesArr.length < 1) {
      setSizeSelected(false);
    }
  }, [sizeIsSelected, size, sizeSelected, selectedSizes, product.id, getSizeAvailability]);
  return (
      <SquareButtonContainer> 
        <ProductSizePickStyled 
            onClick={() => sizeAvailability && sizeAvailability > 0 ? handleClick(product, size) : null} variant="contained" fullWidth
            disabled={sizeAvailability && (sizeAvailability < 1) ? true : false }
            sx={{
              background: sizeSelected ? '#DDDDDD' : '#E8E8E8',
              border: sizeSelected ? '2px solid black' : 'none'
            }}
        >
          <Typography 
              sx={{
                fontSize: '0.7rem', 
                color: sizeAvailability && (sizeAvailability > 0) || sizeSelected ? 'black' : '#9E9E9E',
                fontWeight: sizeSelected ? 'bold' : 'normal',
                textDecoration: sizeAvailability && (sizeAvailability > 0) ? 'none' : 'line-through'
              }}>
            {size}
          </Typography>
        </ProductSizePickStyled>
      </SquareButtonContainer>
  )
})

export default ProductSizePick
