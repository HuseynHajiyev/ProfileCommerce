// RenderInput.tsx
import { TextField, CircularProgress, AutocompleteRenderInputParams } from '@mui/material'
import { Fragment } from 'react'

// Hooks
import { useDrawerToggle } from '../../../../../hooks/useDrawerToggle';

interface RenderInputProps extends AutocompleteRenderInputParams {
  loading: boolean,
}

const RenderInput = ({ loading, ...params }: RenderInputProps) => {

  const { closeSearchBarDrawer } = useDrawerToggle();
  return(
    <TextField
      {...params}
      label=""
      placeholder='Search..'
      onBlur={ closeSearchBarDrawer }
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
};

export default RenderInput;
