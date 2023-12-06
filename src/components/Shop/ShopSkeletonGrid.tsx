import { Grid } from '@mui/material'
import ShopPageProductSkeleton from '../ProductCard/ShopPageProduct/ShopPageProductSkeleton'

interface ShopSkeletonGridProps {
   length: number 
}

const ShopSkeletonGrid = ({length} : ShopSkeletonGridProps) => {
  return (
    <Grid container spacing={6} maxHeight={'100vh'}>
    {Array.from({length}).map((_, index) => {
      return (
          <Grid item xs={3} key={index}>
            <ShopPageProductSkeleton />
          </Grid>
      )
    })}
</Grid>
  )
}

export default ShopSkeletonGrid
