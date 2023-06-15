// React State
import { useState } from 'react';

// MUI imports
import { Button, Box, Stack } from '@mui/material';


// React Imports
import { AiFillShopping } from "react-icons/ai";

// Component Imports
import NavItemContainerStyled from '../../../StyledComponents/NavItemContainerStyled';
import BadgeContainerStyled from '../StyledComponents/BadgeContainerStyled';
import NavTypographyComponent from '../../../Components/NavTypographyComponent';
import { useIsMobile } from '../../../../../hooks/UseIsMobile';

const BadgeComponent = () => {
  const isMobile = useIsMobile();
  const [bagItems, setBagItems] = useState<number>(14);
  return (
    <NavItemContainerStyled>
        <Button aria-label="cart" sx={{textTransform: 'none', p: 0, width: '100%'}}>
          <BadgeContainerStyled>
            <Stack direction={'row'} spacing={1} alignItems={'center'}>
              <NavTypographyComponent>
                {`${bagItems}${isMobile ? '' : ' Items'}`}
              </NavTypographyComponent>
              <AiFillShopping size={isMobile ? 25 : 30} color="black" id='shopping-cart-icon'/>
            </Stack>
          </BadgeContainerStyled>
        </Button>
    </NavItemContainerStyled>
  )
}

export default BadgeComponent
