// MUI components
import { Stack } from '@mui/material';

// Components
import SignInLinkComponent from '../MicroComponents/SignInLinkComponent';
import BadgeComponent from '../MicroComponents/BadgePopover/BadgeComponent';
import SearchButtonComponent from '../MicroComponents/SearchButtonComponent';
import { useIsMobile } from '../../../../hooks/useIsMobile';

const RightSide = () => {
  const isMobile = useIsMobile();
  return (
    <Stack direction='row' justifyContent='space-between' spacing={ isMobile ? 2 : 6 } sx={{ flex: '1 1 0px;', width: 0 }}>
      <SearchButtonComponent /> 
        {isMobile ? null : <SignInLinkComponent />}
      <BadgeComponent />
    </Stack>
  )
}

export default RightSide
