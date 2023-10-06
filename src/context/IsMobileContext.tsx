import { createContext, useContext, ReactNode } from 'react';
import { useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

interface IsMobileContextProps {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isLargeDesktop: boolean;
}

const IsMobileContext = createContext<IsMobileContextProps | undefined>(undefined);

interface IsMobileProviderProps {
  children: ReactNode;
}

export const IsMobileProvider = ({ children }: IsMobileProviderProps): JSX.Element => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isLargeDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <IsMobileContext.Provider value={{ isMobile, isTablet, isDesktop, isLargeDesktop }}>
      {children}
    </IsMobileContext.Provider>
  );
};

export default IsMobileContext;
