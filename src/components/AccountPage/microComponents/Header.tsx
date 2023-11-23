import { Box, Typography } from '@mui/material'

const Header = ({headerText}: {headerText: string}) => {
  return (
    <Box paddingBottom={'2%'}>
      <Typography variant={'h5'} fontFamily={'Mulish'} fontWeight={500} fontSize={'1.5rem'}>
        {headerText}
      </Typography>
    </Box>
  )
}

export default Header