// SearchInputComponent.tsx
import { Box, ListItemIcon, ListItemText } from '@mui/material';

// Component imports
import RenderInputTextField from './MicroComponents/RenderInputTextField';
import FormControllStyled from '../../../../StyledComponents/NavbarStyled/FormControlStyled';
import AutocompleteStyled, { NavSearchLinkStyled } from '../../../../StyledComponents/NavbarStyled/AutocompleteStyled';
import MemorizedPaper from './MicroComponents/MemorizedPaper';

// Hooks 
import { useSearchResults } from '../../../../../hooks/useSearchResults';
import { SearchResutProductInterface } from '../../../../../models/ProductInterface';
import { HTMLAttributes, useRef } from 'react';
import { useDrawerToggle } from '../../../../../hooks/useDrawerToggle';


const SearchInputComponent = () => {
  const { productOptions, loading, open, setOpen, setQuery } = useSearchResults();
  const { closeSearchBarDrawer } = useDrawerToggle();
  const autocompleteRef = useRef<HTMLInputElement>(null);
  return (
    <FormControllStyled>
        <Box sx={{ display: 'flex', justifyContent: 'center', paddingY: '0.5%' }} >
          <AutocompleteStyled
            id="async-autocomplete"
            sx={{ width: '33%' }}
            ref = {autocompleteRef}
            open={open}
            onOpen={() => {
              setOpen(true);
              setQuery('');
            }}
            onClose={() => {
              setOpen(false);
            }}
            isOptionEqualToValue={(
              option: unknown,
              value: unknown,
            ) => (option as SearchResutProductInterface).title === (value as SearchResutProductInterface).title}
            PaperComponent={({ children }) => (
              <MemorizedPaper>{children}</MemorizedPaper>
            )}
            ListboxProps={{style: { paddingLeft: '2%', paddingRight: '2%'} }}
            onInputChange={(_, value) => {
              setQuery(value);
            }}
            getOptionLabel={(option: unknown) =>
              typeof option === "string" ? option : (option as SearchResutProductInterface).title
            }
            groupBy={(option: unknown) => (option as SearchResutProductInterface).category}
            options={productOptions}
            loading={loading}
            renderInput={(params) => <RenderInputTextField {...params} loading={loading} />}
            renderOption={(params: HTMLAttributes<HTMLLIElement>, option) => {
              const typedOption = option as SearchResutProductInterface;
              return (
                  <NavSearchLinkStyled to={`/shop/view-all/${typedOption.id}`} onClick={() => { autocompleteRef.current?.blur(); }} key={typedOption.id}>
                    <li {...params} onClick={() => closeSearchBarDrawer()}>
                        <ListItemIcon>
                          <img src={typedOption.img} alt={typedOption.title} style={{ width: 40, height: 40, objectFit: 'contain' }} />
                        </ListItemIcon>
                        <ListItemText primary={typedOption.title} />
                    </li>
                  </NavSearchLinkStyled>
            )}}
            noOptionsText="No products found"
            freeSolo
          />
        </Box>
      </FormControllStyled>
  );     
}

export default SearchInputComponent;
