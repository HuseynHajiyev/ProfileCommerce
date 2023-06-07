
// React Imports
import { useRef, useState} from 'react';

// MUI Imports
import { InputAdornment, IconButton, Input, Box, Typography, useTheme, Theme} from '@mui/material';

// MUI Icons
import SearchIcon from '@mui/icons-material/Search';

const InputComponent = () => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  const theme = useTheme<Theme>();

  const handleFocus = () => {
    setIsFocused(true);
  }
  
  const handleBlur = () => { 
    setIsFocused(false);
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }


 
  return (
    <Box position='relative'>
      <Input
        id="input-with-placeholder"
        aria-label='Search'
        color='primary'
        inputProps={{ 'aria-label': 'Search' }}
        onFocus={ handleFocus }
        onBlur={ handleBlur }
        onChange={ handleChange }
        ref={ inputRef }
        sx={
          {
            zIndex: theme.zIndex.modal + 1,
            blackground: 'transparent',
            textAlign: 'right',
            '&::before': {
                borderBottom: 'none'
            },
            "&:hover:not(.Mui-disabled, .Mui-error):before": {
                borderBottom: 'none !important'
            },
          }
        }
        endAdornment={
          <InputAdornment 
            position="end"
            onClick ={ handleFocus }
          >

            <IconButton aria-label="search" edge="end">
                <SearchIcon />
            </IconButton>
          </InputAdornment>
        }
      />
      <Typography sx={{ position: 'absolute', top:'45%', right:'15%', transform: 'translateY(-50%)', color: 'black', zIndex: theme.zIndex.modal}}>
        { isFocused || !(value == '') ? '' : 'Search'}
      </Typography>
    </Box>
  )
}

export default InputComponent
