// RenderInput.tsx
import { TextField, CircularProgress, AutocompleteRenderInputParams } from '@mui/material'
import { Fragment, RefObject } from 'react'

interface RenderInputProps extends AutocompleteRenderInputParams {
  loading: boolean,
}

const RenderInput = ({ loading, ...params }: RenderInputProps) => (
  <TextField
    {...params}
    label=""
    placeholder='Search..'
    sx={{'& input':{borderRadius: '1rem',}}}
    InputProps={{ 
      ...params.InputProps,
      endAdornment: (
        <Fragment>
          {loading ? <CircularProgress color="inherit" size={20} /> : null}
          {params.InputProps.endAdornment}
        </Fragment>
      ),
    }}
  />
);

export default RenderInput;
