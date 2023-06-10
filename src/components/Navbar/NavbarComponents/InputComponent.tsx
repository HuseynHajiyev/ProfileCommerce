
// React Imports
import { useRef, useState} from 'react';

// MUI Imports
import { useTheme, Theme} from '@mui/material';

// Theme imports
import NavItemContainerStyled from './StyledComponents/NavItemContainerStyled';

const InputComponent = () => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [value, setValue] = useState<string>('Search');
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
    <NavItemContainerStyled position='relative'>
    </NavItemContainerStyled>
  )
}

export default InputComponent
