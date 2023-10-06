import { Box, Popover, Typography } from '@mui/material'
import { useState }from 'react'
import { LoginPopoverStyled } from '../StyledComponents/LoginPopoverStyled/LoginPopoverStyled'

const LoginPopover = ({isOpen, handleClose}: {isOpen: boolean, handleClose: () => void}) => {
    return (
        <LoginPopoverStyled
            open={isOpen}
            onClose={handleClose}
        >  
            <Box>
                <Typography variant="h6" component="div">
                    Login Form
                </Typography>
                
            </Box>
        </LoginPopoverStyled>
    )
}

export default LoginPopover
