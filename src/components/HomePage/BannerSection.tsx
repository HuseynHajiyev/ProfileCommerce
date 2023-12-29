import AutoScrollBanner from './MicroComponents/AutoScrollBanner '
import { Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const BannerSection = () => {
  return (
    <>
      <AutoScrollBanner />
      <Box py={7} textAlign={'center'}>
        <Typography variant={'h5'} fontFamily={'Mulish'}>
          RONS AND SWANSONS
        </Typography>
        <Link to={'/shop/clothing'}>
          <Typography variant={'body2'} fontFamily={'Mulish'} color={'darkgray'} fontSize={'0.8rem'} sx={{ textDecoration: 'underline' }}>
            SHOP NEW
          </Typography>
        </Link>
      </Box>
  </>
  )
}

export default BannerSection