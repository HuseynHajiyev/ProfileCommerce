import { Box, Typography } from '@mui/material'
import BannerImage from './BannerImage'
import { ProductInterface } from '../../models/ProductInterface'
import { Link } from 'react-router-dom'

interface ChoiceProps {
  product?: ProductInterface | undefined
  imageUrl: string
  choiceTitle?: string
  choiceLinkText?: string
}

const Choice = ({product, imageUrl, choiceTitle, choiceLinkText} : ChoiceProps) => {
  return (
    <>
      <Box height={'85vh'}>
        <BannerImage currentSlide={imageUrl} />
      </Box>
      <Box textAlign={'center'} paddingTop={3}>
        <Typography variant={'h5'} fontFamily={'Mulish'}>{choiceTitle}</Typography>
      </Box>
      <Box textAlign={'center'}>
        <Link to={`/shop/view-all/${product?.id}`}>
          <Typography variant={'body2'} fontFamily={'Mulish'} color={'darkgray'} fontSize={'0.8rem'} sx={{textDecoration: 'underline'}}>{choiceLinkText}</Typography>
        </Link>
      </Box>
    </>
  )
}

export default Choice