// Components
import { useDrawerToggle } from '../../../../../hooks/useDrawerToggle';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../app/store';
import { Box, Button, Grid, Typography } from '@mui/material';
import { useIsMobile } from '../../../../../hooks/useIsMobile';
import { FaUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const PopoverAccountPageLink = () => {
  const { loginPopoverOpen, closeLoginPopover, closeAccountPopover } = useDrawerToggle();
  const navigate = useNavigate();
  const isDesktop = useIsMobile('desktop');
  const isLargeDesktop = useIsMobile('largeDesktop');
  const isLoggedIn = useSelector((state: RootState) => state.userState.loggedIn);
  const handleClick = () => {
    if(loginPopoverOpen) {
      closeLoginPopover();
      closeAccountPopover();
    }
    if(isLoggedIn) {
      navigate('/account');
      
    }
  };
  return (
    <Box display={'flex'} alignItems={'center'}>
      <Button onClick={handleClick} variant={'text'} sx={{ textTransform: 'none', width:'100%' }}>
        <Grid container width={'100%'} display={'flex'} alignItems={'center'}>
          <Grid item xs={4} display={'flex'} alignItems={'center'}>
              <FaUserCircle size={20}/>
          </Grid>
          <Grid item xs={8} display={'flex'} alignItems={'center'}>    
            <Typography variant='body2' fontFamily='Mulish' fontSize={!isDesktop && !isLargeDesktop ? '0.8rem' : 'inherit'} sx={{
              whiteSpace: 'nowrap',
              width: '100%',
              display: 'block',
              textAlign: 'left',
            }}>
              My Account
            </Typography>
          </Grid>
        </Grid>
      </Button>
    </Box>
  )
}

export default PopoverAccountPageLink
