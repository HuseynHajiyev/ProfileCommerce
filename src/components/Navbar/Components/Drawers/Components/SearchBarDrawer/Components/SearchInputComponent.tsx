// React Imports
import { RefObject } from 'react';

// SearchInputComponent.tsx
import { Box } from '@mui/material';
import { useSearchResults } from './UseSearchResults';

// Component imports
import RenderInput from './RenderInput';
import FormConteolStyled from '../StyledComponents/FormControlStyled';
import AutocompleteStyled from '../StyledComponents/AutocompleteStyled';
import { useSearchDrawerToggle } from '../../../../../../../hooks/UseSearchDrawerToggle';

interface SearchResultInterface {
  title: string;
}


const SearchInputComponent = () => {
  const { options, loading, open, setOpen } = useSearchResults();
  const { isOpen, toggleSearchBarDrawer } = useSearchDrawerToggle(); 
  return (
    <FormConteolStyled>
      <Box sx={{ display: 'flex', justifyContent: 'center', paddingY: '0.5%' }} >
        <AutocompleteStyled
          id="async-autocomplete"
          sx={{ width: '33%' }}
          freeSolo
          open={open}
          onOpen={() => {
            setOpen(true);
          }}
          onClose={() => {
            setOpen(false);
          }}
          isOptionEqualToValue={(
            option: unknown,
            value: unknown
          ) => (option as SearchResultInterface).title === (value as SearchResultInterface).title}
          
          getOptionLabel={(option: unknown) =>
            typeof option === "string" ? option : (option as SearchResultInterface).title
            }
          options={options}
          loading={loading}
          onBlur={ (e) =>{
            e.preventDefault();
            toggleSearchBarDrawer();
           }
          }
          placeholder="Search.."
          renderInput={(params) => <RenderInput {...params} loading={loading} />}
        />
      </Box>
    </FormConteolStyled>
  );     
}

export default SearchInputComponent;
