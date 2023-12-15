import { Box, TextField, Typography } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";

interface UsernameInputProps {
    login: string;
    loginValid: boolean;
    checkLoginIsValid: (e: React.ChangeEvent<HTMLInputElement>) => void;
    loginInputHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const UsernameInput = ({login, loginValid, loginInputHandler, checkLoginIsValid } : UsernameInputProps) => {
  const [isTouched, setIsTouched] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isTouched) setIsTouched(true);
    checkLoginIsValid(e as ChangeEvent<HTMLInputElement>);
    loginInputHandler(e as ChangeEvent<HTMLInputElement>);
  };

  const [showError, setShowError] = useState(isTouched && !loginValid);
  useEffect(() => {
    setShowError(isTouched && !loginValid);
  }, [isTouched, loginValid]);
  return (
    <Box>
      <Typography variant="body1" display="block">Username</Typography>
      <TextField
          fullWidth
          hiddenLabel
          margin="dense"
          placeholder="JonSmith"
          variant="filled"
          onChange={handleChange}
          error={showError}
          autoComplete="off"
          value={login}
          sx={{
            '& .MuiInputBase-input': {
              padding: '0.8em',
            },
          }}
      />
    </Box>
  );
}

export default UsernameInput;