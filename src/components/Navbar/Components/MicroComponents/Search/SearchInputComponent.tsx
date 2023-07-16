// SearchInputComponent.tsx
import { Box } from '@mui/material';

// Component imports
import RenderInputTextField from './components/RenderInputTextField';
import FormControllStyled from '../../../../StyledComponents/NavbarStyled/FormControlStyled';
import AutocompleteStyled from '../../../../StyledComponents/NavbarStyled/AutocompleteStyled';
import MemorizedPaper from './components/MemorizedPaper';

// Hooks 
import { useSearchResults } from '../../../../../hooks/useSearchResults';

interface SearchResultInterface {
  title: string;
}


const SearchInputComponent = () => {
  const { options, loading, open, setOpen } = useSearchResults();
  return (
    <FormControllStyled>
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
              <MemorizedPaper>{children}</MemorizedPaper>
            )}
            ListboxProps={{style: { overflow: 'hidden' } }}
            getOptionLabel={(option: unknown) =>
              typeof option === "string" ? option : (option as SearchResultInterface).title
              }
            options={options}
            loading={loading}
            placeholder="Search.."
            renderInput={(params) => <RenderInputTextField {...params} loading={loading} />}
          />
        </Box>
      </FormControllStyled>
  );     
}

export default SearchInputComponent;
