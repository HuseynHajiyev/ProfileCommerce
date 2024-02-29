import { Button, CircularProgress, Grid, Typography } from "@mui/material";
import { FaFacebook } from "react-icons/fa";
import { AiFillGoogleCircle } from "react-icons/ai";
import { useDrawerToggle } from "../../../../../hooks/useDrawerToggle";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../app/store";
import { useEffect } from "react";

interface AuthButtonsProps {
    loginValid: boolean;
    passwordValid: boolean;
    loginAttempted: boolean;
    submitLogin: () => void;
}

const AuthButtons = ({loginValid, passwordValid, loginAttempted, submitLogin}: AuthButtonsProps) => {
    const {loading, error, loggedIn } = useSelector((state: RootState) => state.userState);
    const { handleloginAttempted, closeLoginPopover } = useDrawerToggle();
    const handleSubmit = () => {
        if(loginValid && passwordValid) {
            submitLogin();
            handleloginAttempted(true);
        }
    }

    useEffect(() => {
        if(!loading && !error && loggedIn && loginAttempted) {
            closeLoginPopover();
        }
    }, [loading, error, loggedIn, loginAttempted, closeLoginPopover]);


    return (
        <>
            <Grid container spacing={2} pt={1}>
                <Grid item xs={12}>
                    <Button 
                        variant="contained" 
                        fullWidth size="large" 
                        onClick={handleSubmit}
                        endIcon={loading ? <CircularProgress size={20} color="inherit" /> : null}
                        sx={{
                            background: 'black', 
                            color: 'white', 
                            borderRadius: 0, 
                            padding: 'clamp(8px, 2vw, 12px)',
                            fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)'
                        }}
                    >
                        Sign In
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body2" display="block" align="center" textTransform={'none'}>
                        Or continue with
                    </Typography>
                </Grid>
                <Grid item container xs={12} spacing={5} justifyContent={'space-between'}>
                    <Grid item xs={6}>
                        <Button
                            variant="contained"
                            fullWidth
                            startIcon={<FaFacebook />}
                            size="large"
                            href="https://www.facebook.com/"
                            target="_blank"
                            sx={{ 
                                backgroundColor: "#3b5998", 
                                color: "white", 
                                borderRadius: 0 , 
                                padding: 'clamp(8px, 2vw, 12px)',
                                fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)'
                            }}
                        />
                    </Grid> 
                    <Grid item xs={6}>
                        <Button
                            variant="contained"
                            fullWidth
                            startIcon={<AiFillGoogleCircle />}
                            size="large"
                            href="https://www.google.com/"
                            target="_blank"
                            sx={{ 
                                backgroundColor: "#DB4437",
                                color: "white",
                                borderRadius: 0,
                                padding: 'clamp(8px, 2vw, 12px)',
                                fontSize: 'clamp(0.75rem, 2vw, 0.875rem)',
                            }}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </>
  );
}

export default AuthButtons;