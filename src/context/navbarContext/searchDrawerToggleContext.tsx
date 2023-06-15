import { createContext, useState, ReactNode } from 'react';

// Search Drawer State
interface SearchDrawerState {
  isOpen: boolean;
  toggleSearchBarDrawer: () => void;
}

// create a context
export const SearchDrawerToggleContext = createContext<SearchDrawerState | undefined>(undefined);


// Provider Component
interface SearchDrawerToggleProviderProps {
    children: ReactNode;
  }
  

// create a provider
export function SearchDrawerToggleProvider({ children } : SearchDrawerToggleProviderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSearchBarDrawer = () => setIsOpen(prev => !prev);

  return (
    <SearchDrawerToggleContext.Provider value={{ isOpen, toggleSearchBarDrawer }}>
      {children}
    </SearchDrawerToggleContext.Provider>
  );
}