// Component imports
import { ProductInterface } from '../../../../../../types/ProductInterface';
import { ShoppingBagPageTypographyStyled } from '../../../../../StyledComponents/ShoppingBagPageStyled/ShoppingBagPageTypographyStyled';
import { GridCellStyled } from '../../../../../StyledComponents/ShoppingBagPageStyled/ShoppingBagPageStyled';

const UnitPrice = ({ product } : { product : ProductInterface}) => (
      <GridCellStyled item>
        <ShoppingBagPageTypographyStyled>
          ${product.price}
        </ShoppingBagPageTypographyStyled>
      </GridCellStyled>
  );
  

export default UnitPrice
