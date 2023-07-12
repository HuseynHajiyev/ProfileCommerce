// SearchInputComponent.tsx
import { Box, Paper, ClickAwayListener } from '@mui/material';
import { useSearchResults } from './UseSearchResults';

// Component imports
import RenderInput from './RenderInput';
import FormConteolStyled from '../../../../StyledComponents/NavbarStyled/FormControlStyled';
import AutocompleteStyled from '../../../../StyledComponents/NavbarStyled/AutocompleteStyled';

// Hook imports
import { useDrawerToggle } from '../../../../../hooks/useDrawerToggle';

interface SearchResultInterface {
  title: string;
}


const SearchInputComponent = () => {
  const { options, loading, open, setOpen } = useSearchResults();
  const { closeSearchBarDrawer } = useDrawerToggle();
  return (
    <ClickAwayListener onClickAway={ closeSearchBarDrawer }>
      <FormConteolStyled >
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
            PaperComponent={({ children }) => (
              <Paper style={{ maxHeight: '200px', overflow: 'auto' }}>{children}</Paper>
            )}
            ListboxProps={{ style: { overflow: 'hidden' } }}
            getOptionLabel={(option: unknown) =>
              typeof option === "string" ? option : (option as SearchResultInterface).title
              }
            options={options}
            loading={loading}
            placeholder="Search.."
            renderInput={(params) => <RenderInput {...params} loading={loading} />}
          />
        </Box>
      </FormConteolStyled>
    </ClickAwayListener>
  );     
}

export default SearchInputComponent;
