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
    const recommendations = productsStore.products.filter((item) => item.category === product.category)
    const filteredRecommendations = recommendations.filter((item) => item.id !== product.id);
    setCompleteOutfit(filteredRecommendations.length > 3 ? filteredRecommendations.slice(0,3) : filteredRecommendations);
  }, [product.category, productsStore.products, product.id])

  return (
      <Stack width={'100%'}>
        <Box>
          <Typography textAlign={'center'} fontSize={'1.2rem'}> COMPLETE YOUR OUTFIT </Typography>
        </Box>
        <Grid container paddingTop={'3%'} spacing={2}>
          {
            completeOutfit.map((item) => (
              <Grid item xs={12} sm={6} md={3} lg={4} key={item.id} position={'relative'} height={'40vh'}>
                <SuggestionImageCard product={item} />
              </Grid>
            ))
          }
        </Grid>
      </Stack>
  )
})

export default ViewProductSuggestions