import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const PopoverFooter = () => {
  return (
      <Box sx={{ '& a:visited': { color: 'inherit' } }}>
        <Link to="#">
          <Typography variant="body2" display="block" align="center" textTransform={'none'}>
            Create an Account
          </Typography>
        </Link>
      </Box>
  );
}

export default PopoverFooter;