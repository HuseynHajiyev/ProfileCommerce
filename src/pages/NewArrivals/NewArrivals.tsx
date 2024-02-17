// MUI Imports
import { Box } from '@mui/material'
import Gallery from '../../components/NewArrivals/ParallaxGallery/Gallery'
import PinnedSection from '../../components/NewArrivals/HorizontalScroll/PinnedSection'

const NewArrivals = () => {
  
  return (
    <Box>
      <PinnedSection />
      <Gallery />
      <Box sx={{height: '30vh'}} />
    </Box>
  )
}

export default NewArrivals
