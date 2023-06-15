// React imports
import { GoSearch } from "react-icons/go";

//MUI imports
import { Button, Stack } from '@mui/material';

// Component Imports
import NavItemContainerStyled from '../../../StyledComponents/NavItemContainerStyled'
import NavTypographyComponent from '../../../Components/NavTypographyComponent';
import { useIsMobile } from "../../../../../hooks/UseIsMobile";
import { useSearchDrawerToggle } from "../../../../../hooks/UseSearchDrawerToggle";

const SearchButtonComponent = () => {
  const { isOpen, toggleSearchBarDrawer } = useSearchDrawerToggle();
  const isMobile = useIsMobile();
  return (
    <NavItemContainerStyled sx={{justifyContent: isMobile ? 'space-around' : 'inherit'}}>
        <Button aria-label='open-search-bar' 
            sx={{ textTransform: 'none'}}
            onMouseDown={ (e)=>{
                e.preventDefault();
                toggleSearchBarDrawer();
              } 
            } 
          >
          <Stack direction={'row'} alignItems={'center'}>
            <NavTypographyComponent>
              {
                isMobile ? '' : 'Search'
              }
            </NavTypographyComponent>
            <GoSearch size={isMobile ? 25 : 20} />
          </Stack>
        </Button>
    </NavItemContainerStyled>
  )
}

export default SearchButtonComponent
