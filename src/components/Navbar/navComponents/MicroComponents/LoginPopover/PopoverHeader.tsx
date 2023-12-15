import { Box, Typography } from "@mui/material";
import { AiOutlineHeart } from "react-icons/ai";


const PopoverHeader = () => {
  
  return (
    <>
      <Box display={'flex'} justifyContent={'center'} gap={1}>
        <Box component={'span'} display={'flex'} alignItems={'center'}>
          <AiOutlineHeart size={25}/>
        </Box>
        <Typography variant="h5" fontSize={'clamp(1.5rem, 5vw, 2.5rem)'} align="center" display={'flex'} justifyContent={'flex-start'} alignItems={'center'} sx={{textWrap: 'nowrap'}}> 
          Hi, keep track of your favorites!
        </Typography>
      </Box>
      <Box>
        <Typography variant="subtitle1" align="center" gutterBottom>Please sign in.</Typography>
      </Box>
    </>
  );
}

export default PopoverHeader;