import { Box, Stack, Typography } from "@mui/material"

const AdressBankHeader = () => {
  return (
    <Box paddingRight={'20%'} paddingBottom={'3%'}>
      <Box paddingBottom={'2%'}>
        <Typography variant={'h5'} fontFamily={'Mulish'} fontWeight={500} fontSize={'1.5rem'}>
          Address Bank
        </Typography>
      </Box>
      <Stack spacing={2}>
        <Box>
          <Typography variant={'h6'} fontFamily={'Mulish'} fontWeight={600}>
            You can find your registered addresses here:
          </Typography>
        </Box>
      </Stack>
    </Box>
  )
}

export default AdressBankHeader