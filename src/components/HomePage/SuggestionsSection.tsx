import { ProductInterface } from "../../models/ProductInterface"
import { Box, Grid, Typography } from "@mui/material"
import Suggestion from "./MicroComponents/Suggestion"
import { memo } from "react"

interface SuggestionsSectionProps {
  mainProducts: {
    cottonJacket: ProductInterface | undefined
    slimFit: ProductInterface | undefined
    biylaclesen: ProductInterface | undefined
    danvouy: ProductInterface | undefined
    opna: ProductInterface | undefined
    rainJacket: ProductInterface | undefined
  }
}

const SuggestionsSection = memo(({mainProducts} : SuggestionsSectionProps) => {
  return (
    <Box borderTop={'1px solid lightgray'}>
      <Box textAlign={'center'} paddingY={5}>
        <Typography variant={'h5'} fontFamily={'Mulish'}>
          FEATURED
        </Typography>
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Suggestion product={mainProducts.biylaclesen} imageUrl={'participle/homePage/bstvjafwcwr3k5thmxc2'} />
        </Grid>
        <Grid item xs={3}>
          <Suggestion product={mainProducts.opna} imageUrl={'participle/homePage/qbchr4ljkrctodu2c8zy'} />
        </Grid>
        <Grid item xs={3}>
          <Suggestion product={mainProducts.danvouy} imageUrl={'participle/homePage/ed8lnrlobh0ki6evqy6m'} />
        </Grid>
        <Grid item xs={3}>
          <Suggestion product={mainProducts.rainJacket} imageUrl={'participle/homePage/qkqky0vizoeleygzuhmc'} />
        </Grid>
      </Grid>
    </Box>
  )
})

export default SuggestionsSection