import { Box, Typography } from '@mui/material'

const NotLoggedIn = () => {
  return (
    <Box paddingRight={'20%'}>
      <Typography variant='h5' fontFamily='Mulish'>
        Hello, Guest! please Log in or Register to view this page
      </Typography>
    </Box>
  )
}

export default NotLoggedIn