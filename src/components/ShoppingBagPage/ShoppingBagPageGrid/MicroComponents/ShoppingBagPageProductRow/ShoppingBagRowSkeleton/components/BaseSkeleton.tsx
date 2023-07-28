import { Skeleton } from '@mui/material'

const BaseSkeleton = () => {
  return (
    <Skeleton variant="rectangular" component="div" sx={{ height: '100%', width: '100%' }}/>
  )
}

export default BaseSkeleton
