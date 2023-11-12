// React imports
import { GoSearch } from "react-icons/go";
import { memo } from 'react';

//MUI imports
import { Box, Button, Stack } from '@mui/material';

// Component Imports
import { NavItemContainerRightStyled } from '../../../StyledComponents/NavbarStyled/NavbarStyled'
import NavTypographyComponent from './NavTypographyComponent';

// Hook Imports
import { useIsMobile } from "../../../../hooks/useIsMobile";
import { useDrawerToggle } from "../../../../hooks/useDrawerToggle";

const SearchButtonComponent = memo(() => {
  const { openSearchBarDrawer, searchIsOpen, closeSearchBarDrawer} = useDrawerToggle();
  const isMobile = useIsMobile('mobile');
  const isTablet = useIsMobile('tablet');
  return (
    <NavItemContainerRightStyled sx={{ justifyContent: isMobile || isTablet ? 'center' : 'inherit' }}>
      <Box>
        <Button aria-label='open-search-bar' 
            sx={{ textTransform: 'none'}}
            onClick={ ()=>{ searchIsOpen ? closeSearchBarDrawer() : openSearchBarDrawer() } } 
          >
          <Stack direction={ 'row' } alignItems={ 'center' } spacing={ isMobile || isTablet ? 0 : 1 }>
            <NavTypographyComponent>
              {
                isMobile || isTablet ? '' : 'Search'
              }
            </NavTypographyComponent>
            <GoSearch size={ isMobile || isTablet ? 20 : 20 } />
          </Stack>
        </Button>
      </Box>
    </NavItemContainerRightStyled>
  )
})

export default SearchButtonComponent
