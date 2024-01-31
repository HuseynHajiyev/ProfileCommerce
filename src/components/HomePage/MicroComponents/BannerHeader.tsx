import { Stack, Typography } from '@mui/material'
import RevealHeader from '../Motion/RevealHeader';


interface BannerHeaderProps {
  bannerContent: {
    title: string;
    description: string;
    label: string;
  },
  hovered: boolean | undefined;
}

const BannerHeader = ({ bannerContent, hovered}: BannerHeaderProps) => {
  return (
    <Stack spacing={3} sx={{opacity: hovered ? '0' : '1', transition: 'opacity ease-in-out'}}> 
      <RevealHeader width='100%'>
        <Typography variant='h3' fontFamily={'Mulish'} color={'white'} sx={{textShadow: '0px 0px 5px rgba(0,0,0,0.61)'}}>
          {bannerContent.title}
        </Typography>
      </RevealHeader>
      <RevealHeader width='100%'>
        <Typography variant='h6' fontFamily={'Mulish'} color={'white'} sx={{textShadow: '0px 0px 5px rgba(0,0,0,0.61)'}}>
          {bannerContent.description}
        </Typography>
      </RevealHeader>
    </Stack>
  )
}

export default BannerHeader