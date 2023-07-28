// MUI imports
// Component imports
import { GridCellStyled } from "../../../../../../StyledComponents/ShoppingBagPageStyled/ShoppingBagPageStyled"
import BaseSkeleton from "./BaseSkeleton"


const ProductNameSkeleton = () => {
  return (
    <>
      <GridCellStyled xs={9} item aria-label='product-title' maxWidth={'100%'}>
        <BaseSkeleton />
      </GridCellStyled>
      <GridCellStyled xs={3} item aria-label='product-size'>
        <BaseSkeleton />
        <BaseSkeleton />
      </GridCellStyled>
    </>
  )
}

export default ProductNameSkeleton
