import { useContext } from 'react';
import { DrawerToggleContext } from '../context/navbarContext/DrawerToggleContext';

export function useDrawerToggle() {
    const context = useContext(DrawerToggleContext);
    if (context === undefined) {
      throw new Error('useDrawerToggle must be used within a SearchDrawerProvider');
    }
    return context;
  }