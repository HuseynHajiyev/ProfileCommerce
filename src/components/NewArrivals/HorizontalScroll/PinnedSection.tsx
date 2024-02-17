import { Box, Typography } from "@mui/material"
import HorizontalScroll from "./HorizontalScrollCarousel"
import BobbingCaret from "./BobbingCaret"



const PinnedSection = () => {
  return (
    <Box>
      <Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} paddingTop={'5dvh'}>
        <Box width={'100%'} flex={1} display={'flex'} justifyContent={'center'}>
          <Typography display={'block'} variant={'h1'} fontWeight={'700'} fontFamily={'"Bebas Neue", sans-serif'}>NEW ARRIVALS</Typography>
        </Box>
        <Box width={'100%'} flex={1} display={'flex'} justifyContent={'center'}>
          <BobbingCaret />
        </Box>
      </Box>
      <HorizontalScroll />
    </Box>
  )
}

export default PinnedSection