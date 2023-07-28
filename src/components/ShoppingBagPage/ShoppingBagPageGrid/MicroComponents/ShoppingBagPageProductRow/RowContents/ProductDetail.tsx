// Components
import { ShoppingBagPageTypographyStyled, ShoppingBagProductContentTypographyStyled } from "../../../../../StyledComponents/ShoppingBagPageStyled/ShoppingBagPageTypographyStyled";



// Interface imports
import { ProductInterface } from "../../../../../../types/ProductInterface";
import { useIsMobile } from "../../../../../../hooks/useIsMobile";
import { Grid, Tooltip } from "@mui/material";

// Utilities
import { trimTitle } from "../../../../../../utilities/TrimTitle";




const ProductDetail = ({ product } : {product : ProductInterface}) => {
  const isMobile = useIsMobile();
  const descrExpectedLength = isMobile ? 30 : 30;

  return (
    <Grid item container xs={8} direction={'column'} justifyContent={'space-between'}>
      <Grid container xs={9} item aria-label='product-title' justifyContent={'flex-start'} direction={'row'}>
        <Tooltip title={product.title} placement='top-start' aria-label="full-title">
          <ShoppingBagProductContentTypographyStyled>
              {trimTitle(product.title, descrExpectedLength)}
          </ShoppingBagProductContentTypographyStyled>
        </Tooltip>
      </Grid>
      <Grid item xs={3} container aria-label='product-size' justifyContent='flex-start' direction={'row'}>
        <Grid item xs={6} lg={3} aria-label='product-size'>
          <ShoppingBagPageTypographyStyled sx={{alignItems:'flex-end', display: 'flex' }}>
              Size:
          </ShoppingBagPageTypographyStyled>
        </Grid>
        <Grid item xs={6} lg={2}>
          <ShoppingBagProductContentTypographyStyled sx={{alignItems:'flex-end', display: 'flex' }}>
              {product.size}
          </ShoppingBagProductContentTypographyStyled>
        </Grid>
      </Grid>
    </Grid>
  );
};

  

export default ProductDetail
