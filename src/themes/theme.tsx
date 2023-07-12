import { responsiveFontSizes } from '@mui/material/styles';
import { createTheme } from '@mui/material';



// create a theme instance
let theme = createTheme({
  palette: {
    primary: {
      main: '#fff',
    },
    secondary: {
      main: '#fff',
    },
    background: {
      default: '#fff',
    }
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
          fontFamily: '"Palanquin Dark" sans-serif',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: '#011627',
          fontFamily: 'Mulish',
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
        fontSize: '1.5rem',
      },
      '@media (min-width:960px)': {
        fontSize: '1.8rem',
      },
      '@media (min-width:1280px)': {
        fontSize: '1rem',
      },
      '@media (min-width:1496px)': {
        fontSize: '1rem',
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;