import { Box, Typography } from '@mui/material';

const Splash = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0', 
      }}
    >
      <Typography variant="h4">Welcome to Participle+!</Typography>
      <Typography variant="h6">Please use a larger screen to access the website</Typography>
      <Typography variant="h6">We recommend a screen size of at least 1024px</Typography>
      <Box sx={{ position: 'absolute', bottom: '10%' }}>
        <Typography variant="body2"> The figma I used did not have responsive design variations, check my other website for mobile-friendly designs</Typography>
      </Box>
    </Box>
  );
}

export default Splash;
