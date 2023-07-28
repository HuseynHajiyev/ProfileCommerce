import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'
import DynamicBreadcrumbs from '../../components/BreadCrumbs/DynamicBreadcrumbs'


const Shop = () => {
  return (
    <>
      <Box justifyContent={'center'} display={'flex'} paddingTop={'1%'}>
        <DynamicBreadcrumbs />
      </Box>
      <Outlet />
    </>
  )
}


export default Shop
