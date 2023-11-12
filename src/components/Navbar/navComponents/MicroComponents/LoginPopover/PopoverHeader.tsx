import { Typography } from "@mui/material";
import { AiOutlineHeart } from "react-icons/ai";


const PopoverHeader = () => {
  return (
      <>
          <Typography variant="h5" align="center" display={'flex'} justifyContent={'center'} alignItems={'center'}> 
            <AiOutlineHeart size={25}/>
            Hi, keep track of your favorites!
           </Typography>
          <Typography variant="subtitle1" align="center" gutterBottom>Please sign in.</Typography>
      </>
  );
}

export default PopoverHeader;