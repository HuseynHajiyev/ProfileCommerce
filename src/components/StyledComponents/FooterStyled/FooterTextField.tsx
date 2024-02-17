import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

// Create a styled TextField with custom styles
const FooterInput = styled(TextField)({
  '& label.Mui-focused': {
    color: 'black', // label color when focused
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'black', // underline color when focused
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'grey', // default border color
    },
    '&:hover fieldset': {
      borderColor: 'black', // border color on hover
    },
    '&.Mui-focused fieldset': {
      borderColor: 'black', // border color when focused
    },
  },
});

export default FooterInput;