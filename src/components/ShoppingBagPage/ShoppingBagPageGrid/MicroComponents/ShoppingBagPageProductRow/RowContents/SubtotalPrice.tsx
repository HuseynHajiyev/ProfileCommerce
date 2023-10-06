// Component imports
import { ShoppingBagPageTypographyStyled } from "../../../../../StyledComponents/ShoppingBagPageStyled/ShoppingBagPageTypographyStyled";
import { GridCellStyled } from "../../../../../StyledComponents/ShoppingBagPageStyled/ShoppingBagPageStyled";

// Interface imports
import { CartItemInterface } from "../../../../../../models/CartiItemInterface";

// Utility imports
import { roundNumberToFixed } from "../../../../../../utilities/roundNumber";

const SubtotalPrice = ({ cartItem } : { cartItem : CartItemInterface}) => (
      <GridCellStyled item>
        <ShoppingBagPageTypographyStyled>
          ${roundNumberToFixed(cartItem.product.price * cartItem.quantity, 2)}
        </ShoppingBagPageTypographyStyled>
      </GridCellStyled>
  );
  

export default SubtotalPrice
