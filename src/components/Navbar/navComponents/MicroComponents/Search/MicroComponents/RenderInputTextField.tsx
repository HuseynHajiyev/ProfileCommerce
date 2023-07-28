// React Imports
import { memo } from 'react';

// RenderInput.tsx
import { TextField, CircularProgress, AutocompleteRenderInputParams } from '@mui/material'
import { Fragment } from 'react'

interface RenderInputProps extends AutocompleteRenderInputParams {
  loading: boolean,
}

const RenderInputTextField = memo(({ loading, ...params }: RenderInputProps) => {
  return(
    <TextField
      {...params}
      label=""
      placeholder='Search..'
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
  )
});

export default RenderInputTextField;
