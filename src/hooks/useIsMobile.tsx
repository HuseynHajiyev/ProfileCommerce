import { useContext } from 'react';
import IsMobileContext from '../context/IsMobileContext';

export const useIsMobile = (deviceType?: string): boolean => {
  const context = useContext(IsMobileContext);

  if (context === undefined) {
    throw new Error('useIsMobile must be used within an IsMobileProvider component');
  }

  if (!deviceType) {
    return context.isMobile; // Default behavior for backward compatibility
  }

  switch (deviceType.toLowerCase()) {
    case 'mobile':
      return context.isMobile;
    case 'tablet':
      return context.isTablet;
    case 'desktop':
      return context.isDesktop;
    case 'largedesktop':
      return context.isLargeDesktop;
    default:
      throw new Error(`Invalid deviceType argument: ${deviceType}`);
  }
};
