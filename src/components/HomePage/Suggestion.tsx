import { Box, Typography } from '@mui/material'
import BannerImage from './BannerImage'
import { Link } from 'react-router-dom'
import { ProductInterface } from '../../models/ProductInterface'

interface SuggestionsProps {
  product?: ProductInterface | undefined
  imageUrl: string
  placeholder: string
}

const Suggestion = ({product, imageUrl, placeholder} : SuggestionsProps) => {
 
  return (
    <>
      <Box height={'50vh'}>
        <BannerImage currentSlide={imageUrl} placeholder={placeholder}/>
      </Box>
      <Box textAlign={'center'} paddingTop={3}>
        <Link to={`/shop/view-all/${product?.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <Typography variant={'h6'} fontFamily={'Mulish'}>BIYLACLESEN</Typography>
        </Link>
      </Box>
      <Box textAlign={'center'}>
        <Typography variant={'body2'} fontFamily={'Mulish'} color={'darkgray'} fontSize={'0.8rem'}>{`$${product?.price}`}</Typography>
      </Box>
    </>
  )
}

export default Suggestion