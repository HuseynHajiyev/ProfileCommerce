import { Grid } from "@mui/material"
import Choice from "./Choice"
import { ProductInterface } from "../../models/ProductInterface"

interface ChoiceSectionProps {
  mainProducts: {
      cottonJacket: ProductInterface | undefined
      slimFit: ProductInterface | undefined
      biylaclesen: ProductInterface | undefined
      danvouy: ProductInterface | undefined
      opna: ProductInterface | undefined
      rainJacket: ProductInterface | undefined
  }
}

const ChoicesSection = ({mainProducts} : ChoiceSectionProps) => {
  return (
    <Grid container spacing={7} paddingBottom={5}>
      <Grid item xs={6}>
        <Choice 
          product={mainProducts.cottonJacket} 
          imageUrl={'https://drive.google.com/uc?id=1Ir6ShI1HChuj2blKZkYcaIhNpNZTFRVU'}
          choiceTitle={'ALL OVER BEIGE'}
          choiceLinkText={'SHOP OVERCOATS'}
        />
      </Grid>
      <Grid item xs={6}>
        <Choice 
          product={mainProducts.slimFit} 
          imageUrl={'https://drive.google.com/uc?id=1Oefhffi9k4oRo4ipw-GaPsS4V9NDph-s'}
          choiceTitle={'LEANING IN'}
          choiceLinkText={'SHOP SWEATERS'}
        />
      </Grid>
    </Grid>  )
}

export default ChoicesSection