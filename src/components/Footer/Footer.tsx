import { Box, Button, Grid, Input, Stack, Typography } from '@mui/material'

const Footer = () => {
  return (
    <footer style={{
     width: '100%',
    }}>
      <Box
        position={'relative'}
      >
        <Grid container py={'2%'} px={'9%'} sx={{
          zIndex: '2000',
          background: '#F7F7F7', 
          '& .MuiTypography-root': { 
            lineHeight: '4vh',
          },
        }}>
          <Grid item xs={2}>
            <Stack>
              <Box>
                <Stack>
                  <Box py={'3%'}>
                    <Box pb={'5%'}>
                      <Typography variant={'body1'} fontWeight={500}>Participle+</Typography>
                    </Box>
                    <Box paddingRight={'30%'}>
                      <Typography variant={'body2'} color={'#666666'}>132 Smith Street, Brooklyn, NY 14231</Typography>
                    </Box>
                  </Box>
                  <Box pt={'10%'}>
                    <Typography variant={'body1'} fontWeight={500} sx={{textDecoration: 'underline'}}>
                      Contact Us
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            </Stack>
          </Grid>
          <Grid item xs={2}>
            <Stack>
              <Box py={'3%'}>
                <Box pb={'5%'}>
                  <Typography variant={'body1'} fontWeight={500}>CUSTOMER CARE</Typography>
                </Box>
                <Box>
                  <Typography variant={'body2'} color={'#666666'}>FAQs</Typography>
                </Box>
                <Box>
                  <Typography variant={'body2'} color={'#666666'}>Orders & Returns </Typography>
                </Box>
                <Box>
                  <Typography variant={'body2'} color={'#666666'}>Account</Typography>
                </Box>
                <Box>
                  <Typography variant={'body2'} color={'#666666'}>About Us</Typography>
                </Box>
              </Box>
            </Stack>
          </Grid>
          <Grid item xs={2}>
            <Stack>
            <Box py={'3%'}>
                <Box pb={'5%'}>
                  <Typography variant={'body1'} fontWeight={500}>CONNECT</Typography>
                </Box>
                <Box>
                  <Typography variant={'body2'} color={'#666666'}>Instagram</Typography>
                </Box>
                <Box>
                  <Typography variant={'body2'} color={'#666666'}>Facebook</Typography>
                </Box>
                <Box>
                  <Typography variant={'body2'} color={'#666666'}>Twitter</Typography>
                </Box>
                <Box>
                  <Typography variant={'body2'} color={'#666666'}>Pinterest</Typography>
                </Box>
              </Box>
            </Stack>
          </Grid>
          <Grid item container xs={6} gap={6}>
            <Grid item xs={7}>
              <Box
                component="form"
                sx={{
                  '& > :not(style)': { m: 1 },
                }}
                noValidate
                autoComplete="off"
              >
                <Input defaultValue="Email" fullWidth />
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box>
                <Button 
                  variant="contained" 
                  fullWidth
                  size="large" 
                  sx={{
                      background: 'black', 
                      color: 'white', 
                      borderRadius: 0, 
                      textTransform: 'none',
                      fontWeight: 'bold',
                      padding: 'clamp(8px, 2vw, 7px)',
                      fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)'
                  }}
                >
                    Sign Up!
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </footer>
  )
}

export default Footer