// MUI Imports
import { createTheme, ThemeProvider } from '@mui/material/styles';

// MUI Icons
import NavItemContainerStyled from './StyledComponents/NavItemContainerStyled';
import InputComponent from './InputComponent';

const theme = createTheme({
    palette: {
      primary: {
        main: '#27374D',
      },
      secondary: {
        main: '#000000',
      },
    },
  });


const SearchInputComponent = () => {


  return (
    <ThemeProvider theme={theme}>
        <NavItemContainerStyled>
           <InputComponent />
        </NavItemContainerStyled>
    </ThemeProvider>
  )
}

export default SearchInputComponent
