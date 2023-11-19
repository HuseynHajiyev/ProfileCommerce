// Components
import { useDrawerToggle } from '../../../../../hooks/useDrawerToggle';
import { useLogin } from '../../../../../hooks/useLogin';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../app/store';
import { Box, Button, Grid, Typography } from '@mui/material';
import { useIsMobile } from '../../../../../hooks/useIsMobile';
import { RiLogoutBoxLine } from "react-icons/ri";

const PopoverSignOutLink = () => {
  const { loginPopoverOpen, closeLoginPopover, handleloginAttempted } = useDrawerToggle();
  const { logoutUser } = useLogin();
  const isDesktop = useIsMobile('desktop');
  const isLargeDesktop = useIsMobile('largeDesktop');
  const isLoggedIn = useSelector((state: RootState) => state.userState.loggedIn);
  const handleClick = () => {
    if(loginPopoverOpen) {
      closeLoginPopover();
    }
    if(isLoggedIn) {
      logoutUser();
      handleloginAttempted(false);
    }
  };
  return (
    <Box display={'flex'} alignItems={'center'}>
      <Button onClick={handleClick} variant={'text'} sx={{ textTransform: 'none', width:'100%' }}>
        <Grid container width={'100%'} display={'flex'} alignItems={'center'}>
          <Grid item xs={4} display={'flex'} alignItems={'center'}>
              <RiLogoutBoxLine size={20}/>
          </Grid>
          <Grid item xs={8} display={'flex'} alignItems={'center'}>    
            <Typography variant='body2' fontFamily='Mulish' fontSize={!isDesktop && !isLargeDesktop ? '0.8rem' : 'inherit'}>
                    Sign Out
            </Typography>
          </Grid>
        </Grid>
      </Button>
    </Box>
  )
}

export default PopoverSignOutLink
