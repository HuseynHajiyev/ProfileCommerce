// MUI components
import { Stack } from '@mui/material';
import { useMediaQuery, useTheme, Theme } from '@mui/material';

// NavbarComponents
import FormControlStyled from '../NavbarComponents/StyledComponents/FormControlStyled';
import SearchInputComponent from '../NavbarComponents/SearchInputComponent';
import SignInLinkComponent from '../NavbarComponents/SignInLinkComponent';
import BadgeComponent from '../NavbarComponents/BadgeComponent';


const RightSide = () => {
  const theme = useTheme<Theme>();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Stack direction='row' spacing={isMobile ? 2 : 10} justifyContent='flex-end' sx={{flex: 1}}>
        <FormControlStyled variant="standard">
            <SearchInputComponent />
        </FormControlStyled>
      <SignInLinkComponent />
      <BadgeComponent />
    </Stack>
  )
}

export default RightSide
