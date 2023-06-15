import { useContext } from 'react';
import { SearchDrawerToggleContext } from '../context/navbarContext/searchDrawerToggleContext';

export function useSearchDrawerToggle() {
    const context = useContext(SearchDrawerToggleContext);
    // console.log(context);
    if (context === undefined) {
      throw new Error('useSearchDrawer must be used within a SearchDrawerProvider');
    }
    return context;
  }