import { createTheme, ThemeProvider } from '@mui/material/styles';

// create a theme instance
const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          // Your styles here
          color: '#011627', // text color
          backgroundColor: '#F6F7F8', // background color
          display: 'block', // display property
          margin: "0, auto", // margin property
          fontFamily: '"Palanquin Dark" sans-serif', // font family
        },
      },
    },
  },
});

export default theme;