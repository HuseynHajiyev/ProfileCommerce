// MUI imports
import { Grid } from "@mui/material";

// Styled Components imports
import { BagGridHeaderCellStyled, BagGridHeaderRowStyled } from "../../../StyledComponents/ShoppingBagPageStyled/ShoppingBagPageStyled";
import { GridHeaderRowTypographyStyled } from "../../../StyledComponents/ShoppingBagPageStyled/ShoppingBagPageTypographyStyled";

const BagPageGridHeader = () => {
    return (
        <BagGridHeaderRowStyled container item xs={12} spacing={2}>
            <Grid container>
                <Grid item xs={2}></Grid>
                <BagGridHeaderCellStyled item xs={3}> 
                    <GridHeaderRowTypographyStyled>
                        Product Name
                    </GridHeaderRowTypographyStyled>
                </BagGridHeaderCellStyled>
                <BagGridHeaderCellStyled item xs={1}>
                    <GridHeaderRowTypographyStyled>
                        Unit Price
                    </GridHeaderRowTypographyStyled>
                </BagGridHeaderCellStyled>
                <BagGridHeaderCellStyled item xs={2}>
                    <GridHeaderRowTypographyStyled>
                        Qty
                    </GridHeaderRowTypographyStyled>
                </BagGridHeaderCellStyled>
                <BagGridHeaderCellStyled item xs={2}>
                    <GridHeaderRowTypographyStyled>
                        Subtotal
                    </GridHeaderRowTypographyStyled>
                </BagGridHeaderCellStyled>
                <BagGridHeaderCellStyled item xs={1}></BagGridHeaderCellStyled>
            </Grid>
        </BagGridHeaderRowStyled>
    )
}

export default BagPageGridHeader
