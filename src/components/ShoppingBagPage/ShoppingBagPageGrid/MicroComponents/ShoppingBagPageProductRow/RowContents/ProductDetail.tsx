// Components
import { ShoppingBagPageTypographyStyled, ShoppingBagProductContentTypographyStyled } from "../../../../../StyledComponents/ShoppingBagPageStyled/ShoppingBagPageTypographyStyled";



// Interface imports
import { useIsMobile } from "../../../../../../hooks/useIsMobile";
import { Grid, Tooltip } from "@mui/material";

// Utilities
import { trimTitle } from "../../../../../../utilities/TrimTitle";
import { CartItemInterface } from "../../../../../../models/CartiItemInterface";
import { mapNumericToAlphabeticSizes } from "../../../../../../utilities/mapProductSizes";




const ProductDetail = ({ cartItem } : {cartItem : CartItemInterface}) => {
  const isMobile = useIsMobile();
  const descrExpectedLength = isMobile ? 30 : 30;

  return (
    <Grid item container xs={8} direction={'column'} justifyContent={'space-between'}>
      <Grid container xs={9} item aria-label='product-title' justifyContent={'flex-start'} direction={'row'}>
        <Tooltip title={cartItem.product.title} placement='top-start' aria-label="full-title">
          <ShoppingBagProductContentTypographyStyled>
              {trimTitle(cartItem.product.title, descrExpectedLength)}
          </ShoppingBagProductContentTypographyStyled>
        </Tooltip>
      </Grid>
      <Grid item xs={3} container aria-label='product-size' justifyContent='flex-start' direction={'row'}>
        <Grid item xs={6} lg={3} aria-label='product-size'>
          <ShoppingBagPageTypographyStyled sx={{alignItems:'flex-end', display: 'flex' }}>
              Size:
          </ShoppingBagPageTypographyStyled>
        </Grid>
        <Grid item xs={6} lg={3}>
          <ShoppingBagProductContentTypographyStyled sx={{alignItems:'flex-end', display: 'flex' }}>
              {mapNumericToAlphabeticSizes(parseInt(cartItem.sizeSelected))}
          </ShoppingBagProductContentTypographyStyled>
        </Grid>
      </Grid>
    </Grid>
  );
};

  

export default ProductDetail
