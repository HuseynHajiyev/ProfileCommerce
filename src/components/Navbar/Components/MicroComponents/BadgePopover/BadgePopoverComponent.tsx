// React imports
import { RefObject, useEffect } from 'react';

// Hooks
import { useDrawerToggle } from "../../../../../hooks/useDrawerToggle";
import { useIsMobile } from '../../../../../hooks/useIsMobile';

// Component imports
import { BadgePopoverStyled } from '../../../../StyledComponents/NavbarStyled/BadgePopoverStyled';
import ShoppingBagContents from './ShoppingBagContents';

// Popper props
interface PopperProps {
    buttonRef: RefObject<HTMLButtonElement>;
}

const BadgePopover = ({ buttonRef } : PopperProps) => {
    const { shoppingBagIsOpen, closeShoppingPopper } = useDrawerToggle();
    const isMobile = useIsMobile();
    useEffect(() => {
        if(isMobile) {
            closeShoppingPopper();
        }
    }, [isMobile, closeShoppingPopper])

    return (
        <BadgePopoverStyled
            id={shoppingBagIsOpen ? 'simple-popover' : undefined}
            open={ shoppingBagIsOpen }
            anchorEl={ buttonRef.current }
            onClose={ closeShoppingPopper }
            disableScrollLock={ true }
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            slotProps={{
                paper: { style: 
                    { 
                        marginTop: '2%',
                    } 
                } // adjust the value as needed
            }}
        >   
            <div className="popoverArrow" />
            <ShoppingBagContents />
        </BadgePopoverStyled>
    )
}

export default BadgePopover
