import { Popover, styled } from "@mui/material";
import theme from "../../../themes/theme";

export const LoginPopoverStyled = styled(Popover)({
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    '& paper': {
        padding: theme.spacing(2),
    },
})