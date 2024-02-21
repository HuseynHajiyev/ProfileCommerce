import { Box, CircularProgress } from "@mui/material"

const LoadingSpalsh = () => {
  return (
    <Box minHeight={'100dvh'} minWidth={'100dvw'} position={'relative'}>
       <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}
       >
        <CircularProgress size={100} />
       </Box>
    </Box>
  )
}

export default LoadingSpalsh