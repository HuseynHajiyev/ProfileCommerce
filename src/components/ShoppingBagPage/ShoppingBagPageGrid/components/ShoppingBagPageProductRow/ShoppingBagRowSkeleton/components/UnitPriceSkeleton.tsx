// Component imports
import { GridCellStyled } from "../../../../../../StyledComponents/ShoppingBagPageStyled/ShoppingBagPageStyled"
import BaseSkeleton from "./BaseSkeleton"

const UnitPriceSkeleton = () => {
  return (
    <GridCellStyled item height='100%'>
        <BaseSkeleton />
    </GridCellStyled>
  )
}

export default UnitPriceSkeleton
