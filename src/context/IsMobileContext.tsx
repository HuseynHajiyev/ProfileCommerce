// React imports
import { createContext, ReactNode } from 'react';

// MUI Imports
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

// Context declaration
export const IsMobileContext = createContext<boolean | undefined>(undefined);

// Provider Component
interface IsMobileProviderProps {
  children: ReactNode;
}

export const IsMobileProvider = ({ children }: IsMobileProviderProps): JSX.Element => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <IsMobileContext.Provider value={isMobile}>
      {children}
    </IsMobileContext.Provider>
  );
};
