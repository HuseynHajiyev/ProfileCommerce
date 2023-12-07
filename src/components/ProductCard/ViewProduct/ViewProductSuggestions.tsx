import { Box, Grid, Stack, Typography } from '@mui/material'
import { ProductInterface } from '../../../models/ProductInterface'
import { memo, useEffect, useState } from 'react'
import { useProductQuantity } from '../../../hooks/useProductQuantity'
import SuggestionImageCard from '../MicroComponents/SuggestionImageCard'


interface SuggestionProps {
  product: ProductInterface
}
const ViewProductSuggestions = memo(({product}: SuggestionProps) => {
  const { productsStore }  = useProductQuantity();
  const [completeOutfit, setCompleteOutfit] = useState<ProductInterface[]>([]);
  

  useEffect(()=> {
    const recommendations = productsStore.products.filter((item: ProductInterface) => item.category === product.category)
    const filteredRecommendations = recommendations.filter((item: ProductInterface) => item.id !== product.id);
    setCompleteOutfit(filteredRecommendations.length > 3 ? filteredRecommendations.slice(0,3) : filteredRecommendations);
  }, [product.category, productsStore.products, product.id])

  return (
      <Stack width={'100%'} spacing={1}>
        <Box>
          <Typography textAlign={'center'} fontSize={'1.2rem'}> COMPLETE YOUR OUTFIT </Typography>
        </Box>
        <Grid container spacing={2}>
          {
            completeOutfit.map((item) => (
              <Grid item xs={4} key={item.id} position={'relative'}>
                <SuggestionImageCard product={item} />
              </Grid>
            ))
          }
        </Grid>
      </Stack>
  )
})

export default ViewProductSuggestions