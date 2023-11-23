import { Box, Stack, Typography } from "@mui/material"
import Header from "./Header"

const AdressBankHeader = () => {
  return (
    <Box paddingRight={'20%'} paddingBottom={'3%'}>
      <Header headerText={'Address Bank'} />
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