import { Box, Grid, Stack, Typography } from '@mui/material'
import { UserInterface } from '../../../models/UserInterface';

interface AccountInformationBodyProps {
  nameAndSurnameCapitalized: string;
  user: UserInterface | null;
}
const AccountInformationBody = ({nameAndSurnameCapitalized, user}: AccountInformationBodyProps) => {
  return (
    <Stack spacing={2}>
        <Stack spacing={4}>
          <Stack spacing={1}>
            <Box borderBottom={'2px solid #D9D9D9'} paddingBottom={1}>
              <Typography variant={'h6'} fontFamily={'Mulish'}>
                Account Information
              </Typography>
            </Box>
            <Grid container paddingY={2} display={'flex'} justifyContent={'space-between'}>
              <Grid item xs={6} width={'100%'} paddingRight={'1%'}>
                <Box sx={{background: '#F7F7F7'}} paddingX={3} paddingY={1} height={'100%'} display={'flex'} flexDirection={'column'} justifyContent={'space-between'}>
                  <Stack spacing={1} padding={2}>
                    <Box display={'flex'} justifyContent={'space-between'} borderBottom={'2px solid #D9D9D9'} paddingBottom={'3%'}>
                      <Typography variant={'h6'} fontFamily={'Mulish'}>
                        Contact Information
                      </Typography>
                      <Typography variant={'h6'} fontFamily={'Mulish'} color={'blue'} sx={{cursor: 'pointer'}}>
                        Edit
                      </Typography>
                    </Box>
                    <Box paddingRight={'20%'}>
                      <Stack spacing={1} paddingTop={'3%'}>
                        <Box>
                          <Typography variant={'body2'} fontFamily={'Mulish'} fontSize={'0.95rem'} color={'#9C9C9C'}>
                            {nameAndSurnameCapitalized}
                          </Typography>
                        </Box>
                        <Box>
                          <Typography variant={'body2'} fontFamily={'Mulish'} fontSize={'0.95rem'} color={'#9C9C9C'}>
                            {user?.email}
                          </Typography>
                        </Box>
                      </Stack>
                    </Box>
                  </Stack>
                  <Box padding={2}>
                    <Typography variant={'body2'} fontFamily={'Mulish'} fontSize={'0.95rem'} color={'blue'} sx={{textDecoration: 'underline', cursor: 'pointer'}}>
                      Change Password
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={6} paddingLeft={'1%'}>
                <Box sx={{background: '#F7F7F7'}} paddingX={3} paddingY={1} height={'100%'}>
                  <Stack spacing={1} padding={2}>
                    <Box display={'flex'} justifyContent={'space-between'} borderBottom={'2px solid #D9D9D9'} paddingBottom={'3%'}>
                      <Typography variant={'h6'} fontFamily={'Mulish'}>
                        Newsletters
                      </Typography>
                      <Typography variant={'h6'} fontFamily={'Mulish'} color={'blue'} sx={{cursor: 'pointer'}}>
                        Edit
                      </Typography>
                    </Box>
                    <Box paddingRight={'20%'}>
                      <Typography variant={'body2'} fontFamily={'Mulish'} fontSize={'0.95rem'} color={'#9C9C9C'}>
                        You aren't subscribed to our newsletter.
                      </Typography>
                    </Box>
                  </Stack>
                </Box>
              </Grid>
            </Grid>
          </Stack>
        </Stack>
      </Stack>
  )
}

export default AccountInformationBody