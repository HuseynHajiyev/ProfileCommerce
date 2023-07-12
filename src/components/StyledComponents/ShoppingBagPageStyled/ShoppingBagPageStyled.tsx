import { Box, Grid, Stack, TextField, styled } from '@mui/material'
import theme from '../../../themes/theme'

// Grid component

export const BagGridHeaderRowStyled = styled(Grid)({
    backgroundColor: '#F7F7F7',
    padding: '1rem 0',
    alignItems: 'center',
    justifyContent: 'flex-start',
    position: 'sticky',
    top: 0,
})

export const BagGridHeaderCellStyled = styled(Grid)(({ theme }) =>({
  justifyContent: 'flex-start',
  marginLeft: theme.spacing(2),
  paddingLeft: theme.spacing(2),
}))
export const ShoppingBagPageHeaderStyled = styled(Grid)({
    paddingBottom: '0.9rem',
})

export const SetQuantityFieldStyled = styled(TextField)({
    borderColor: '#C4C4C4',
    maxWidth: '100%',
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
          border: '1px solid black',  // Set the border radius value here
      },
    },
    '& input': {
      lineHeight: '0.8rem',
      textAlign: 'center',
      backgroundColor: '#F9F9F9',
      '&:focus': {
          backgroundColor: 'white',
      },
      },
      [theme.breakpoints.up('sm')]: {
        '& input': {
          fontSize: '1.6rem',
          padding: '0.5rem 0.5rem',
        },
      },
      [theme.breakpoints.up('md')]: {
        '& input': {
          fontSize: '1.2rem',
          padding: '0.4rem 0.4rem',
        },
      },
      [theme.breakpoints.up('lg')]: {
        '& input': {
          padding: '0.2rem 0.2rem',
        fontSize: '0.8rem',
        },
      },
    'input[type=number]::-webkit-inner-spin-button': {
      'WebkitAppearance': 'none',
      margin: 0,
    },
    'input[type=number]::-webkit-outer-spin-button': {
        'WebkitAppearance': 'none',
        margin: 0,
    },
    'input[type=number]': {
        'MozAppearance': 'textfield'
    }
})

export const GridItemStyled = styled(Grid)(({ theme }) => ({
  alignItems: 'center',
  justifyContent: 'flex-start',
  '&:not(:first-of-type)': {
    marginLeft: theme.spacing(2),
  },
}));

export const GridCellStyled = styled(Grid)({
  maxWidth: '100%',
  minWidth: '100%',
  whiteSpace: 'initial',
  overflowWrap: 'break-word',
  display: 'flex',
  alignItems: 'center',
})

export const GridRowStyled = styled(Grid)({
  borderBottom: '1px solid #C4C4C4',
  padding: '1.5rem 0 2rem 0',
  maxWidth: '100%',
  minWidth: '100%',
  height: '100%',
})

export const GridContainerStyled = styled(Grid)({
  maxHeight: '100vh',
  overflowY: 'auto',
  overflowX: 'hidden',
  minHeight: '10vh',
  '&::-webkit-scrollbar': {
    width: 10,
  },
  '&::-webkit-scrollbar-track': {
      backgroundColor: '#F1F1F1',
  },
  '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#C4C4C4',
      borderRadius: 2,
  },

})

export const BagEmptyContainer = styled(Box)({
  height: '30vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

// Summary component

export const SummaryContainerStackStyled = styled(Stack)({
  padding:'0 7%'
})

export const ContainerBorderBottomStyled = styled(Box)({
  padding: '5% 0',
  borderBottom: '1px solid #C4C4C4',
})