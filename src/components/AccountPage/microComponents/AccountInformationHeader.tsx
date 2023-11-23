import { Box, Stack, Typography } from '@mui/material'
import Header from './Header';

interface AccountInformationHeaderProps {
  nameAndSurnameCapitalized: string;
}

const AccountInformationHeader = ({nameAndSurnameCapitalized}: AccountInformationHeaderProps) => {
  return (
    <Box paddingRight={'20%'} paddingBottom={'3%'}>
      <Header headerText='Account Information' />
      <Stack spacing={2}>
        <Box>
          <Typography variant={'h6'} fontFamily={'Mulish'} fontWeight={600}>
            Hello, {nameAndSurnameCapitalized}!
          </Typography>
        </Box>
        <Box>
          <Typography variant={'body2'} fontFamily={'Mulish'} fontSize={'0.95rem'}>
            From your Account Dashboard you have the ability to view a snapshot of your recent account activity and update your account information. Select a link below to view or edit information.
          </Typography>
        </Box>
      </Stack>
    </Box>
  )
}

export default AccountInformationHeader