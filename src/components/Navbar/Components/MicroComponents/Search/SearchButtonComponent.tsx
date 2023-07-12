// React imports
import { GoSearch } from "react-icons/go";

//MUI imports
import { Button, Stack } from '@mui/material';

// Component Imports
import { NavItemContainerRightStyled } from '../../../../StyledComponents/NavbarStyled/NavbarStyled'
import NavTypographyComponent from '../NavTypographyComponent';

// Hook Imports
import { useIsMobile } from "../../../../../hooks/useIsMobile";
import { useDrawerToggle } from "../../../../../hooks/useDrawerToggle";

const SearchButtonComponent = () => {
  const { openSearchBarDrawer } = useDrawerToggle();
  const isMobile = useIsMobile();
  return (
    <NavItemContainerRightStyled sx={{ justifyContent: isMobile ? 'space-around' : 'inherit' }}>
          <Button aria-label='open-search-bar' 
              sx={{ textTransform: 'none'}}
              onClick={ openSearchBarDrawer } 
              onTouchEnd={(e: React.TouchEvent<HTMLButtonElement>) => { 
                if(isMobile) {
                  e.preventDefault(); 
                  openSearchBarDrawer();
                }
              }}
            >
            <Stack direction={ 'row' } alignItems={ 'center' } spacing={ isMobile ? 0 : 1 }>
              <NavTypographyComponent>
                {
                  isMobile ? '' : 'Search'
                }
              </NavTypographyComponent>
              <GoSearch size={ isMobile ? 25 : 20 } />
            </Stack>
          </Button>
    </NavItemContainerRightStyled>
  )
}

export default SearchButtonComponent
