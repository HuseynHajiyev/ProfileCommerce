import { Accordion, AccordionDetails, AccordionSummary, Box, Grid, TextField, FormControlLabel, styled } from '@mui/material'
import theme from '../../../themes/theme'
import { smallScreenGridColumns, mediumScreenGridColumns, defaultColumns } from '../../../utilities/ShoppingBagPageGridCss'
import Checkbox from '@mui/material/Checkbox';
// Grid component

export const BagGridHeaderRowStyled = styled(Grid)({
    backgroundColor: '#F7F7F7',
    padding: '0.5rem 0',
    // position: 'sticky',
    top: 0,
    display: 'flex',
    position: 'sticky',
    zIndex: 1,
})

export const ShoppingBagPageHeaderStyled = styled(Grid)({
    paddingBottom: '0.9rem',
})

export const SetQuantityFieldStyled = styled(TextField)({
    borderColor: '#C4C4C4',
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
          border: '1px solid black',  // Set the border radius value here
      },
    },
    '& .MuiInputBase-root': {
      position: 'inherit',
      minHeight: '100%',
      maxWidth: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      padding:0,
    },
    '& input': {
      lineHeight: '0.8rem',
      textAlign: 'center',
      fontSize: 'clamp(0.4rem, 100%, 1rem)',
      backgroundColor: '#F9F9F9',
      height: '50%',
      padding: '0 0.1rem',
      maxWidth: '100%',
      minHeight: '100%',
      '&:focus': {
          backgroundColor: 'white',
      },
      },
      [theme.breakpoints.up('sm')]: {
        '& input': {
          padding: '0.2rem 0.2rem',
        },
      },
      [theme.breakpoints.up('md')]: {
        '& input': {
          padding: '0.4rem 0.4rem',
        },
      },
      [theme.breakpoints.up('lg')]: {
        '& input': {
          padding: '0.2rem 0.5rem',
          minHeight: '100%',
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

export const GridRowStyled = styled(Grid)({
  borderBottom: '1px solid #C4C4C4',
  padding: '1.5rem 0 1.5rem 0',
  maxWidth: '100%',
  minWidth: '100%',
  height: '100%',
  maxHeight: '100%',
})

export const GridItemStyled = styled(Grid)(() => ({
  alignItems: 'center',
  justifyContent: 'flex-start',
  minHeight: '100%',
  minWidth: '100%',
  ...defaultColumns,
  ...smallScreenGridColumns,
  ...mediumScreenGridColumns,
}));


export const GridCellStyled = styled(Grid)({
  maxWidth: '100%',
  minWidth: '100%',
  whiteSpace: 'initial',
  overflow:'auto',
  maxHeight: '100%',
  overflowWrap: 'break-word',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
})


export const GridContainerStyled = styled(Grid)({
  display: 'block',
  maxHeight: '70vh',
  flexWrap: 'wrap',
  overflowY: 'scroll',
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

export const SummaryContainerBoxStyled = styled(Box)({
  padding:'5% 7%',
  border: '1px solid black',
  width: '100%',
})

export const BagSummaryAccordionStyled = styled(Accordion)({
  boxShadow: 'none',
  width: '100%',
  '&:first-of-type': {
    borderBottom: '1px solid black',
  },
  '&:before': {
    display: 'none',
  },
  '&.Mui-expanded': {
    marginTop: '0',
  }
})

export const AccordDetailsStyled = styled(AccordionDetails)({
  padding: '0',
})

export const BagSummaryTextFieldStyled = styled(TextField)({
  padding: '0.4rem 0.3rem',
  backgroundColor: '#F7F7F7',
  '& input': {
    paddingLeft: '5%',
  },
  '& .MuiFormLabel-root': {
    left: '5%',
    top: '0',
    fontSize: '0.8rem',
  },
  '& label.Mui-focused': {
    color: '#C4C4C4',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'black',
  },
})

export const BagAccordionHeaderStyled = styled(AccordionSummary)({
  padding: '0',
  color: '#7B7B7B',
})

export const SummaryZipCheckboxStyled = styled(Checkbox)({
  color: 'black',
  '&.Mui-checked': {
    color: 'black',
  },
})

export const SummZipFormLabelStyled = styled(FormControlLabel)({
  '& .MuiFormControlLabel-label': {
    color: '#7B7B7B',
    fontSize: '0.8rem',
  },
})
