//React imports
import { useEffect, useRef, useImperativeHandle, forwardRef } from 'react';

// Component Imports
import SearchInputComponent from './Components/SearchInputComponent';
import DrawerStyled from '../../StyledComponents/DrawerStyled';

// Context Imports
import { useSearchDrawerToggle } from '../../../../../../hooks/UseSearchDrawerToggle';

const SearchBarDrawer = () => {
    const { isOpen, toggleSearchBarDrawer } = useSearchDrawerToggle();
    return (
        <>
            <DrawerStyled
                anchor='top'
                variant='temporary'
                open={ isOpen }          
            >
                <SearchInputComponent />
            </DrawerStyled>
        </>
    );
};

export default SearchBarDrawer;
