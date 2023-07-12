// Components
import { ShoppingBagPageTypographyStyled, ShoppingBagProductContentTypographyStyled } from "../../../../../StyledComponents/ShoppingBagPageStyled/ShoppingBagPageTypographyStyled";



// Interface imports
import { ProductInterface } from "../../../../../../types/ProductInterface";
import { GridCellStyled } from "../../../../../StyledComponents/ShoppingBagPageStyled/ShoppingBagPageStyled";
import { useIsMobile } from "../../../../../../hooks/useIsMobile";
import { Tooltip } from "@mui/material";




const ProductDetail = ({ product } : {product : ProductInterface}) => {
  const isMobile = useIsMobile();
  const descrExpectedLength = isMobile ? 40 : 70;
  const trimTitle = (title : string, descrExpectedLength: number) => {
    if (title.length > descrExpectedLength) {
      return title.slice(0, descrExpectedLength) + '...';
    }
    return title;
  };
  return (
    <>
      <GridCellStyled item aria-label='product-title' maxWidth={'100%'} paddingRight='15%'>
        <Tooltip title={product.title} placement='top-start' aria-label="full-title">
          <ShoppingBagProductContentTypographyStyled>
              {trimTitle(product.title, descrExpectedLength)}
          </ShoppingBagProductContentTypographyStyled>
        </Tooltip>
      </GridCellStyled>
      <GridCellStyled item aria-label='product-size'>
          <ShoppingBagPageTypographyStyled>
              Size:
          </ShoppingBagPageTypographyStyled>
          <ShoppingBagProductContentTypographyStyled sx={{paddingLeft: '2%'}}>
              {product.size}
          </ShoppingBagProductContentTypographyStyled>
      </GridCellStyled>
    </>
  );
};

  

export default ProductDetail
