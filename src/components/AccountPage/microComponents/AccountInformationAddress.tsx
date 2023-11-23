import { Box, Grid, Stack, Typography } from '@mui/material'
import { UserInterface } from '../../../models/UserInterface'
import { useRef } from 'react';
import { capitalizeEachWord } from '../../../utilities/stringManipulation';
import { useMainScroll } from '../../../hooks/useMainScroll';

interface AccountInformationAddressProps {
  user: UserInterface | null;
  handleActivePage: (pageNumber: number, scrollTo?: string) => void;
}

const AccountInformationAddress = ({user, handleActivePage}: AccountInformationAddressProps) => {
  const capitalizedCity = useRef<string>('');
  const capitalizedStreet = useRef<string>('');
  const {handleLinkScrolled} = useMainScroll();
  if(user) {
    capitalizedCity.current = capitalizeEachWord(user?.address.city);
    capitalizedStreet.current = capitalizeEachWord(user?.address.street);
  }

  const changeToEdit = (activePage: number, scrollTo: string) => {
    handleLinkScrolled(false);
    handleActivePage(activePage, scrollTo);
  }
  return (
  <Stack spacing={2}>
    <Stack spacing={4}>
      <Stack spacing={1}>
        <Box borderBottom={'2px solid #D9D9D9'} paddingY={2} display={'flex'} justifyContent={'space-between'}>
          <Typography variant={'h6'} fontFamily={'Mulish'}>
            Address Book
          </Typography>
          <Box onClick={() => handleActivePage(2, 'billing-address')} sx={{ cursor: 'pointer' }}>
            <Typography variant={'h6'} fontFamily={'Mulish'} color={'blue'}>
              Manage Addresses
            </Typography>
          </Box>
        </Box>
        <Grid container paddingY={2} display={'flex'} justifyContent={'space-between'}>
          <Grid item xs={6} width={'100%'} paddingRight={'1%'}>
            <Box sx={{background: '#F7F7F7'}} paddingX={3} paddingY={1} height={'100%'} display={'flex'} flexDirection={'column'} justifyContent={'space-between'}>
              <Stack spacing={1} padding={2}>
                <Box display={'flex'} justifyContent={'space-between'} borderBottom={'2px solid #D9D9D9'} paddingBottom={'3%'} height={'100%'}>
                  <Typography variant={'h6'} fontFamily={'Mulish'}>
                    Default billing address
                  </Typography>
                  <Box onClick={() => changeToEdit(2, 'billing-address')} sx={{ cursor: 'pointer' }}>
                    <Typography variant={'h6'} fontFamily={'Mulish'} color={'blue'} sx={{cursor: 'pointer'}}>
                      Edit
                    </Typography>
                  </Box>
                </Box>
                <Box paddingRight={'20%'}>
                  <Stack spacing={1} paddingTop={'3%'}>
                    <Box>
                      <Typography variant={'body2'} fontFamily={'Mulish'} fontSize={'0.95rem'} color={'#9C9C9C'}>
                        Country: USA
                      </Typography>
                      <Typography variant={'body2'} fontFamily={'Mulish'} fontSize={'0.95rem'} color={'#9C9C9C'}>
                        City: {capitalizedCity.current}
                      </Typography>
                      <Typography variant={'body2'} fontFamily={'Mulish'} fontSize={'0.95rem'} color={'#9C9C9C'}>
                        Address: {`${capitalizedStreet.current} ${user?.address.number} ${user?.address.zipcode}`}
                      </Typography>
                    </Box>
                    <Box>
                    </Box>
                  </Stack>
                </Box>
              </Stack>
              <Box padding={2}>
                  <Box onClick={() => changeToEdit(2, 'billing-address')} sx={{ cursor: 'pointer' }}>
                    <Typography variant={'h6'} fontFamily={'Mulish'} color={'blue'} sx={{cursor: 'pointer'}}>
                      Edit
                    </Typography>
                  </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6} paddingLeft={'1%'}>
            <Box sx={{background: '#F7F7F7'}} paddingX={3} paddingY={1} height={'100%'} display={'flex'} flexDirection={'column'} justifyContent={'space-between'}>
              <Stack spacing={1} padding={2}>
                <Box display={'flex'} justifyContent={'space-between'} borderBottom={'2px solid #D9D9D9'} paddingBottom={'3%'}>
                  <Typography variant={'h6'} fontFamily={'Mulish'}>
                    Default shipping address
                  </Typography>
                  <Box onClick={() => changeToEdit(2, 'shipping-address')} sx={{ cursor: 'pointer' }}>
                    <Typography variant={'h6'} fontFamily={'Mulish'} color={'blue'} sx={{cursor: 'pointer'}}>
                      Edit
                    </Typography>
                  </Box>
                </Box>
                <Box paddingRight={'20%'}>
                  <Typography variant={'body2'} fontFamily={'Mulish'} fontSize={'0.95rem'} color={'#9C9C9C'}>
                    You haven not set a default shipping address.
                  </Typography>
                </Box>
              </Stack>
              <Box padding={2}>
                <Box onClick={() => changeToEdit(2, 'shipping-address')} sx={{ cursor: 'pointer' }}>
                  <Typography variant={'h6'} fontFamily={'Mulish'} color={'blue'} sx={{cursor: 'pointer'}}>
                    Edit
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Stack>
    </Stack>
  </Stack>
  )
}

export default AccountInformationAddress