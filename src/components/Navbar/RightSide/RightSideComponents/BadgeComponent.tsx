// React State
import { useState } from 'react';

// MUI imports
import { Button } from '@mui/material';


// React Imports
import { AiFillShopping } from "react-icons/ai";

// Component Imports
import NavItemContainerStyled from '../../NavbarComponents/StyledComponents/NavItemContainerStyled';
import BadgeContainerStyled from '../StyledComponents/BadgeContainerStyled';
import NavTypographyComponent from '../../NavbarComponents/NavTypographyComponent';

// Props
interface BadgeComponentProps {
  isMobile: boolean,
}

const BadgeComponent = ( { isMobile }: BadgeComponentProps ) => {
  const [bagItems, setBagItems] = useState<number>(14);
  return (
    <NavItemContainerStyled>
        <Button aria-label="cart" sx={{textTransform: 'none', width: '100%', p: 0}}>
          <BadgeContainerStyled>
              <NavTypographyComponent>
                {`${bagItems}${isMobile ? '' : ' Items'}`}
              </NavTypographyComponent>
              <AiFillShopping size={30} color="black" id='shopping-cart-icon'/>
            </BadgeContainerStyled>
        </Button>
    </NavItemContainerStyled>
  )
}

export default BadgeComponent
