// React State
import { useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

// Redux Imports
import { useSelector } from 'react-redux';
// import { loadShoppingBag } from '../../../../../features/ShoppingBag/ShoppingBagSaga';

// MUI imports
import { Button, CircularProgress } from '@mui/material';


// React Imports
import { AiFillShopping } from "react-icons/ai";

// Component Imports
import { NavItemContainerRightStyled } from '../../../../StyledComponents/NavbarStyled/NavbarStyled';
import { BadgeContainerStyled } from '../../../../StyledComponents/NavbarStyled/BadgePopoverStyled';
import NavTypographyComponent from '../NavTypographyComponent';
import BadgePopover from './BadgePopoverComponent';

// Hooks
import { useIsMobile } from '../../../../../hooks/useIsMobile';
import { useDrawerToggle } from '../../../../../hooks/useDrawerToggle';
import { RootState } from '../../../../../app/store';

const BadgeComponent = () => {
  const isLargeDesktop = useIsMobile('largeDesktop');
  const isTablet = useIsMobile('tablet');
  const buttonRef = useRef(null)
  const bagItemsCount = useSelector((state: RootState) => state.shoppingBag.products.length);
  const shoppingBag = useSelector((state: RootState) => state.shoppingBag);
  const { openShoppingPopper } = useDrawerToggle();
  const navigate = useNavigate();
  const handleShoppingBagClick = () => {
    if(!isLargeDesktop) {
      navigate('/shopping-bag')
    } else {
      openShoppingPopper();
    }
  }
  const trimedItemsCount = useCallback(() => {
    if(bagItemsCount > 99) {
      return '99+';
    }
    return bagItemsCount;
  }, [bagItemsCount])
  return (
    <>
      <NavItemContainerRightStyled>
          <Button aria-label="cart" 
            sx={{textTransform: 'none', p: 0, width: '100%', justifyContent: !isLargeDesktop? 'flex-end' : 'inherit'}}
            onClick={ handleShoppingBagClick }
            onTouchEnd={(e: React.TouchEvent<HTMLButtonElement>) => {
              if(!isLargeDesktop) {
                  e.preventDefault() 
                  handleShoppingBagClick();
                }
              }
            }
            ref={ buttonRef }
          >
            <BadgeContainerStyled> 
              {
                shoppingBag.loading ? (
                  <CircularProgress size={!isLargeDesktop ? 25 : 30} color="inherit" />
                ) : shoppingBag.products.length === 0 ?( 
                  <NavTypographyComponent>
                    {!isLargeDesktop ? 'Bag' : 'Your Bag'}
                  </NavTypographyComponent>
                ) : (
                  <>
                      <NavTypographyComponent>
                        {`${trimedItemsCount()}${!isLargeDesktop ? '' : ' Items'}`}
                      </NavTypographyComponent>
                      <AiFillShopping size={!isLargeDesktop || isTablet ? 20 : 30} color="black" id='shopping-cart-icon'/>
                  </>

                )
              }  
              
            </BadgeContainerStyled>
          </Button>
      </NavItemContainerRightStyled>
      <BadgePopover buttonRef={buttonRef} />
    </>
  )
}

export default BadgeComponent
