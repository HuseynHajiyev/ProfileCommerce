// MUI imports
import {IconButton} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

// Component Imports
import ShoppingBadgeStyled from './StyledComponents/ShoppingBadgeStyled';
import NavItemContainerStyled from './StyledComponents/NavItemContainerStyled';


const BadgeComponent = () => {
  return (
    <NavItemContainerStyled>
        <IconButton aria-label="cart">
            <ShoppingBadgeStyled badgeContent={4} color="secondary">
                <ShoppingCartIcon />
            </ShoppingBadgeStyled>
        </IconButton>
    </NavItemContainerStyled>
  )
}

export default BadgeComponent
