// MUI components
import { Stack } from '@mui/material';

// NavbarComponents
import SignInLinkComponent from './RightSideComponents/SignInLinkComponent';
import BadgeComponent from './RightSideComponents/BadgeComponent';
import SearchButtonComponent from './RightSideComponents/SearchButtonComponent';

// Props
interface RightSideProps {
  isMobile: boolean,
}


const RightSide = ({ isMobile }: RightSideProps) => {

  return (
    <Stack direction='row' justifyContent='space-between' sx={{flex: 1}}>
      <SearchButtonComponent isMobile={ isMobile }/> 
      {isMobile ? null : <SignInLinkComponent />}
      <BadgeComponent isMobile={ isMobile }/>
    </Stack>
  )
}

export default RightSide
