import { Box } from "@mui/material"

// Hooks
import theme from "../../themes/theme";

const NavbarPlaceholder = () => {
    const isMobile = window.innerWidth <= 600;
    return (
        <>
            <Box width={'100%'} height={ isMobile ? '82px' : '94px'} sx={{backgroundColor: 'white', position: 'absolute', zIndex: theme.zIndex.drawer}}/>
        </>
    )
    }

export default NavbarPlaceholder
