import { Box, TextField, Typography, MenuItem } from "@mui/material";
import { useEffect, useState } from "react";
import { UserInterface } from "../../../../../models/UserInterface";

interface UsernameInputProps {
  login: string;
  loginValid: boolean;
  checkLoginIsValid: (e: React.ChangeEvent<HTMLInputElement>) => void;
  loginInputHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  pickUser: (id: number) => void;
  options: UserInterface[] | null;
}

const UsernameInput = ({
  login,
  loginValid,
  loginInputHandler,
  checkLoginIsValid,
  pickUser,
  options
}: UsernameInputProps) => {
  const [isTouched, setIsTouched] = useState(false);
  const [showError, setShowError] = useState(isTouched && !loginValid);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [users, setUsers] = useState<UserInterface[]>([]);


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!isTouched) setIsTouched(true);
    checkLoginIsValid(event);
    loginInputHandler(event);
  };

  const handleClick = (id: number) => {
    pickUser(id);
  }

  useEffect(() => {
    setShowError(isTouched && !loginValid);
  }, [isTouched, loginValid]);

  useEffect(() => {
    if(!options){
      setUsers([]);
    } else {
      setUsers(options);
    }
  }, [options]);
  return (
    <Box>
      <Typography variant="body1" display="block">Username or Email</Typography>
        <TextField
          select
          fullWidth
          margin="dense"
          variant= "outlined"
          value={login}
          placeholder="Username or Email"
          onChange={handleChange}
          error={showError}
          autoComplete="off"
          SelectProps={{
            open: dropdownOpen,
            onOpen: () => setDropdownOpen(true),
            onClose: () => setDropdownOpen(false),
            MenuProps: {
              PaperProps: {
                'data-lenis-prevent': true,
                style: {
                  zIndex: 2000,
                  maxHeight: '30dvh',
                  overscrollBehavior: 'contain',
                }
              }
            }
          }}
          sx={{
            '& .MuiInputBase-input': {
              padding: '0.8em',
            },
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: 'rgba(0, 0, 0, 0.23)',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: 'primary.main',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: 'primary.main',
            },
          }}
        >
          {users.map((user) => (
            <MenuItem key={user.id} value={user.username} sx={{zIndex: 2000}} onClick={() => handleClick(user.id)}>
              {user.username}
            </MenuItem>
          ))}
        </TextField>
    </Box>
  );
}

export default UsernameInput;


