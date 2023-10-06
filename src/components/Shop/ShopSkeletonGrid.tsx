import { Grid } from '@mui/material'
import ShopPageProductSkeleton from '../ProductCard/ShopPageProduct/ShopPageProductSkeleton'

const ShopSkeletonGrid = () => {
  return (
    <Grid container spacing={6} maxHeight={'100vh'}>
    {Array.from({length: 20}).map((value, index) => {
    return (
        <Grid item xs={12} sm={6} md={3} key={index}>
           <ShopPageProductSkeleton />
        </Grid>
    )
    })}
</Grid>
  )
}

export default ShopSkeletonGrid
