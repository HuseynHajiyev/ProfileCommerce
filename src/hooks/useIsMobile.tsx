import { useContext } from 'react';
import { IsMobileContext } from '../context/IsMobileContext';

export const useIsMobile = (): boolean => {
    const isMobile = useContext(IsMobileContext);
    if(isMobile === undefined) {
      throw new Error('useIsMobile must be used within an IsMobileProvider component');
    }
    return isMobile;
  };