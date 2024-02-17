import { Box } from "@mui/material";
import { PiCaretDoubleDownDuotone } from "react-icons/pi";



const BobbingCaret = () => {

  return (
    <Box sx={{
      transform: 'translateX(-50%)',
      '@keyframes bobbing': {
        '0%, 100%': { transform: 'translateY(0)' },
        '50%': { transform: 'translateY(-15px)' },
      },
    }}>
      <Box position={'relative'} minHeight={100} sx={{
        animation: 'bobbing 2s ease-in-out infinite',
      }}>
        <Box position={'absolute'} top={20}
          sx={{
            left: '50%',
            transform: 'translateX(-50%)',
            height: 'fit-content',
            width: 'fit-content',
          }}
        >
          <PiCaretDoubleDownDuotone size={50} />
        </Box>
      </Box>
    </Box>
  )
}

export default BobbingCaret