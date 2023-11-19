import { Box, Stack, Typography } from "@mui/material"

const NewsletterSubscriptions = () => {
  return (
    <Box paddingRight={'20%'} paddingBottom={'4%'}>
      <Box paddingBottom={'2%'} borderBottom={'2px solid #D9D9D9'}>
        <Box paddingBottom={'2%'}>
          <Typography variant={'h5'} fontFamily={'Mulish'} fontWeight={500} fontSize={'1.5rem'}>
            Your newsletter subscriptions
          </Typography>
        </Box>
      </Box>
      <Stack spacing={2} paddingTop={2}>
        <Box>
          <Typography variant={'h5'} fontFamily={'Mulish'} fontSize={'1.5rem'} display={'flex'} justifyContent={'center'}>
            You have no Newsletter Subscriptions
          </Typography>
        </Box>
      </Stack>
    </Box>
  )
}

export default NewsletterSubscriptions