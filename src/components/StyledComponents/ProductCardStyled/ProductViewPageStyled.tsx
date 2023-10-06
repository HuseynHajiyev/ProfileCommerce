import { Box, Button, Typography, styled } from "@mui/material";


export const ProductSizePickStyled = styled(Button)({
    borderRadius: '0',
    height: '100%',
    width: '100%',
    minWidth: '0',
    minHeight: '0',
    padding: '0',
    backgroundColor: '#F7F7F7',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    '&:hover': {
        backgroundColor: '#E8E8E8',
    },
})

export const SquareButtonContainer = styled(Box)({
    position: 'relative',
    width: '100%',
    paddingBottom: '100%',
    '& > button': {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      width: '100%',
      height: '100%',
    }
  });

  export const AddToBagButtonStyled = styled(Button)({
    display: 'inline-block',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#000000',
    color: '#ffffff',
    padding: '3%',
    fontSize: '0.8rem',
    textTransform: 'none',
    fontWeight: 'bold',
    '&:hover': {
      background: '#3F4240'
    },
})

export const BodyTypographyStyled = styled(Typography)({
  color: '#A3A3A3',
})