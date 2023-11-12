// MUI components
import { Stack } from '@mui/material';

// Components
import SignInLinkComponent from '../MicroComponents/SignInLinkComponent';
import BadgeComponent from '../MicroComponents/BadgePopover/BadgeComponent';
import SearchButtonComponent from '../MicroComponents/SearchButtonComponent';
import { useIsMobile } from '../../../../hooks/useIsMobile';
import SignOutLinkComponent from '../MicroComponents/SignOutLinkComponent';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../app/store';

const RightSide = () => {
  const isLargeDesktop = useIsMobile('largeDesktop');
  const isLoggedİn = useSelector((state: RootState) => state.userState.loggedIn);
  return (
    <Stack direction='row' justifyContent='space-between' spacing={ !isLargeDesktop ? 2 : 6 } sx={{ flex: '1 1 0px;', width: 0 }}>
      <SearchButtonComponent /> 
      {isLoggedİn ? <SignOutLinkComponent /> : <SignInLinkComponent />}
      <BadgeComponent />
    </Stack>
  )
}

export default RightSide
