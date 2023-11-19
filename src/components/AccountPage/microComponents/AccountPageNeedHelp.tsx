import { Box, Button, Stack, Typography } from "@mui/material"

const AccountPageNeedHelp = () => {
  return (
    <Box paddingX={3} border={'2px solid #D9D9D9'} display={'flex'} flexDirection={'column'} justifyContent={'space-between'}>
      <Stack spacing={3} paddingY={3}>
        <Box aria-label={'Need Help?'} borderBottom={'2px solid #D9D9D9'} paddingBottom={2}>
          <Typography variant="body2" fontFamily={'Mulish'} fontWeight={500} fontSize={'1.2rem'}>
            Need Help?
          </Typography>
        </Box>
        <Box>
          <Typography variant={'body2'} fontFamily={'Mulish'} fontSize={'0.95rem'} color={'#9C9C9C'}>
            Please contact us with any questions you might have. All messages will be answered within 24 hrs.
          </Typography>
        </Box>
      </Stack>
      <Box paddingY={3}>
        <Button fullWidth sx={{border: '2px solid black', borderRadius: 'inherit'}}>
          Leave Message
        </Button>
      </Box>
    </Box>
  )
}

export default AccountPageNeedHelp