// Styled Components imports
import { BagGridHeaderRowStyled, GridItemStyled } from "../../../StyledComponents/ShoppingBagPageStyled/ShoppingBagPageStyled";
import { GridHeaderRowTypographyStyled } from "../../../StyledComponents/ShoppingBagPageStyled/ShoppingBagPageTypographyStyled";

const BagPageGridHeader = () => {
    return (
        <BagGridHeaderRowStyled container item xs={12}>
            <GridItemStyled item>
                <GridHeaderRowTypographyStyled>

                </GridHeaderRowTypographyStyled>
            </GridItemStyled>
            <GridItemStyled item > 
                <GridHeaderRowTypographyStyled>
                    Product Name
                </GridHeaderRowTypographyStyled>
            </GridItemStyled>
            <GridItemStyled item>
                <GridHeaderRowTypographyStyled>
                    Unit Price
                </GridHeaderRowTypographyStyled>
            </GridItemStyled>
            <GridItemStyled item>
                <GridHeaderRowTypographyStyled>
                    Qty
                </GridHeaderRowTypographyStyled>
            </GridItemStyled>
            <GridItemStyled item>
                <GridHeaderRowTypographyStyled>
                    Subtotal
                </GridHeaderRowTypographyStyled>
            </GridItemStyled>
            <GridItemStyled item>
                <GridHeaderRowTypographyStyled>

                </GridHeaderRowTypographyStyled>
            </GridItemStyled>
        </BagGridHeaderRowStyled>
    )
}

export default BagPageGridHeader
