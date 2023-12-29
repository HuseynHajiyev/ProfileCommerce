import { ProductInterface } from "../../models/ProductInterface"
import { Box, Grid, Typography } from "@mui/material"
import Suggestion from "./MicroComponents/Suggestion"

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

const SuggestionsSection = ({mainProducts} : SuggestionsSectionProps) => {
  return (
    <Box borderTop={'1px solid lightgray'}>
      <Box textAlign={'center'} paddingY={5}>
        <Typography variant={'h5'} fontFamily={'Mulish'}>
          FEATURED
        </Typography>
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Suggestion product={mainProducts.biylaclesen} imageUrl={'https://drive.google.com/uc?id=19M_wLKs8zSBRVAZwwZqYJNRkmGXWWa5S'} />
        </Grid>
        <Grid item xs={3}>
          <Suggestion product={mainProducts.opna} imageUrl={'https://drive.google.com/uc?id=1zQ6q7ynDDX0WeB80r5AQOTjdHMFCJrMZ'} />
        </Grid>
        <Grid item xs={3}>
          <Suggestion product={mainProducts.danvouy} imageUrl={'https://drive.google.com/uc?id=17zUUZbnFOgDwkNTI8A6g6nwCnVxCCdo_'} />
        </Grid>
        <Grid item xs={3}>
          <Suggestion product={mainProducts.rainJacket} imageUrl={'https://drive.google.com/uc?id=1U9xErIoeBLnLB1JaPG6ecO8ngDi_2bvL'} />
        </Grid>
      </Grid>
    </Box>
  )
}

export default SuggestionsSection