// Component Imports
import SearchInputComponent from '../MicroComponents/Search/SearchInputComponent';
import SearchDrawerStyled from '../../../StyledComponents/NavbarStyled/SearchDrawerStyled';

// Context Imports
import { useDrawerToggle } from '../../../../hooks/useDrawerToggle';

const SearchBarDrawer = () => {
    const { searchIsOpen } = useDrawerToggle();
    return (
        <>
            <SearchDrawerStyled
                anchor='top'
                variant='temporary'
                open={ searchIsOpen }          
            >
                <SearchInputComponent />
            </SearchDrawerStyled>
        </>
    );
};

export default SearchBarDrawer;
