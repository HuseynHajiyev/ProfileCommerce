import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, IconButton, InputAdornment, TextField, Typography } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";


interface PasswordInputProps {
    password: string;
    showPassword: boolean;
    passwordValid: boolean;
    togglePasswordVisibility: () => void;
    checkPasswordIsValid: (e: React.ChangeEvent<HTMLInputElement>) => void;
    passwordInputHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PasswordInput = ({ password, showPassword, passwordValid, togglePasswordVisibility, checkPasswordIsValid , passwordInputHandler } : PasswordInputProps) => {
    const [isTouched, setIsTouched] = useState(false);
    const handleChange = (e: ChangeEvent) => {
        if (!isTouched) setIsTouched(true);
        checkPasswordIsValid(e as ChangeEvent<HTMLInputElement>);
        passwordInputHandler(e as ChangeEvent<HTMLInputElement>);
    };
    const [showError, setShowError] = useState(isTouched && !passwordValid);

    useEffect(() => {
        setShowError(isTouched && !passwordValid);
    }, [isTouched, passwordValid]);

    return (
        <Box>
            <Typography variant="body1" display="block">Password</Typography>
            <TextField
                fullWidth
                margin="dense"
                hiddenLabel
                variant="filled"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={handleChange}
                error={showError}
                sx={{
                    '& .MuiInputBase-input': {
                      padding: '0.8em',
                    },
                  }}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton onMouseDown={togglePasswordVisibility} onMouseUp={togglePasswordVisibility}>
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
            <Box pt={1} sx={{display: 'flex', justifyContent: 'flex-end', '& a:visited': {color: 'inherit'}}}>
                <Link to="https://youtu.be/37zAeB_x2EM?t=37&autoplay=1" target="_blank" style={{textDecoration: 'none', color: 'inherit', display: 'inline-block'}}>
                    <Typography variant="subtitle2" >
                        Forgot password? 
                    </Typography>
                </Link>
            </Box>
        </Box>
    );
}


export default PasswordInput;