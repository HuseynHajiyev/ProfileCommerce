// Component Imports
import SearchInputComponent from '../MicroComponents/Search/SearchInputComponent';
import SearchDrawerStyled from '../../../StyledComponents/NavbarStyled/SearchDrawerStyled';

// Context Imports
import { useDrawerToggle } from '../../../../hooks/useDrawerToggle';

const SearchBarDrawer = () => {
    const { searchIsOpen } = useDrawerToggle();
    const { closeSearchBarDrawer } = useDrawerToggle();
    return (
        <SearchDrawerStyled
            anchor='top'
            variant='temporary'
            disableScrollLock={ true }
            open={ searchIsOpen }
            onClose={(_, reason) => {
                if (reason === 'backdropClick' || reason === 'escapeKeyDown') {
                  closeSearchBarDrawer();
                }
              }}
        >
            <SearchInputComponent />
        </SearchDrawerStyled>
    );
};

export default SearchBarDrawer;
