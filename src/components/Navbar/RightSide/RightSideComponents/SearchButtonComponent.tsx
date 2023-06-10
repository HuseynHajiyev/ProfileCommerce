//MUI imports
import { GoSearch } from "react-icons/go";

// Component Imports
import NavItemContainerStyled from '../../NavbarComponents/StyledComponents/NavItemContainerStyled'
import { Button, Stack } from '@mui/material';
import NavTypographyComponent from "../../NavbarComponents/NavTypographyComponent";

// Props
interface SearchButtonComponentProps {
  isMobile: boolean,
}


const SearchButtonComponent = ({isMobile}: SearchButtonComponentProps) => {
  return (
    <NavItemContainerStyled justifyContent={isMobile ? 'center' : 'inherit'}>
        <Button aria-label='open-search-bar' sx={{ textTransform: 'none' }}>
          <Stack direction={'row'} spacing={1} alignItems={'center'}>
            <NavTypographyComponent>
              {
                isMobile ? '' : 'Search'
              }
            </NavTypographyComponent>
            <GoSearch size={isMobile ? 40 : 20} />
          </Stack>
        </Button>
    </NavItemContainerStyled>
  )
}

export default SearchButtonComponent
