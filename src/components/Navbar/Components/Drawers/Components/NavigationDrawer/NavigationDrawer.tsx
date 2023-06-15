import { ReactNode } from 'react'; 
// MUI Imports

// Component Imports
import NavigationDrawerStyled from './StyledComponents/NavigationDrawerStyled';
import { useIsMobile } from '../../../../../../hooks/UseIsMobile';

// Props
interface NavigationDrawertProps {
    children: ReactNode;
}

const NavigationDrawer = ({ children } : NavigationDrawertProps) => {
    
    const isMobile = useIsMobile();

    return (
        <NavigationDrawerStyled>
                    {children}
        </NavigationDrawerStyled>
    )
}

export default NavigationDrawer



