import { createTheme, responsiveFontSizes  } from '@mui/material/styles';

// create a theme instance
let theme = createTheme({
  palette: {
    primary: {
      main: '#black',
    },
    secondary: {
      main: '#000000',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          color: '#011627', // text color
          backgroundColor: '#fff', // background color
          display: 'block', // display property
          margin: "0, auto", // margin property
          fontFamily: '"Palanquin Dark" sans-serif', // font family
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',
          color: '#011627',
          fontFamily: '"Palanquin Dark" sans-serif',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: 'Mulish',
          color: '#011627',
        },
      },
    },
    MuiBadge: {
      styleOverrides: {
        badge: {
          fontSize: '1rem',
          whiteSpace: 'nowrap',
          '@media (min-width:600px)': {
            fontSize: '2rem',
          },
          '@media (min-width:960px)': {
            fontSize: '1.8rem',
          },
          '@media (min-width:1280px)': {
            fontSize: '1rem',
          },
        },
      },
    },
  },
  typography: {
    fontFamily: 'Mulish',
    h6: {
      fontSize: '1rem',
      whiteSpace: 'nowrap',
      '@media (min-width:600px)': {
        fontSize: '2rem',
      },
      '@media (min-width:960px)': {
        fontSize: '1.8rem',
      },
      '@media (min-width:1280px)': {
        fontSize: '1rem',
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;