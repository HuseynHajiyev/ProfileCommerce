import { responsiveFontSizes } from '@mui/material/styles';
import { createTheme } from '@mui/material';

// create a theme instance
let theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#ffffff',
    },
    background: {
      default: '#ffffff',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '@global': {
          // Existing styles
          '@keyframes rotate': {
            '0%': {
              transform: 'rotate(0deg)',
            },
            '100%': {
              transform: 'rotate(360deg)',
            },
          },
          body: {
            color: '#011627',
            backgroundColor: '#ffffff',
            display: 'block',
            margin: "0 auto",
            fontFamily: '"Palanquin Dark", sans-serif',
            overflowY: 'scroll',
            scrollBehavior: 'smooth',
          },

          // Adding your styles here
          '.lenis': {
            height: 'auto',
          },
          '.lenis.lenis-smooth': {
            scrollBehavior: 'auto !important',
          },
          '.lenis.lenis-smooth [data-lenis-prevent]': {
            overscrollBehavior: 'contain',
          },
          '.lenis.lenis-stopped': {
            overflow: 'hidden',
          },
          '.lenis.lenis-scrolling iframe': {
            pointerEvents: 'none',
          },
        },
      },
    },
    // ... other component overrides
  },
  // ... other theme options
});

theme = responsiveFontSizes(theme);

export default theme;
