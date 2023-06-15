// MUI imports
import { Autocomplete, styled } from '@mui/material';

const AutocompleteStyled = styled(Autocomplete)({
  '& ul::-webkit-scrollbar': {
    width: '10px',
  },
  '& ul::-webkit-scrollbar-track': {
    backgroundColor: 'transparent',
    borderRadius: '15%',
  },
});


export default AutocompleteStyled;