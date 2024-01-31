import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'
import DynamicBreadcrumbs from '../../components/BreadCrumbs/DynamicBreadcrumbs'
import { useIsMobile } from '../../hooks/useIsMobile'


const Shop = () => {
  const isMobile = useIsMobile()
  return (
    <>
      <Box justifyContent={'center'} display={'flex'} paddingY={isMobile? '2%' :'1%'}>
        <DynamicBreadcrumbs />
      </Box>
      <Outlet />
    </>
  )
}


export default Shop
