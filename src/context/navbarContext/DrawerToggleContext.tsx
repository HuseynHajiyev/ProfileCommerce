import { createContext, useState, ReactNode, useEffect, useCallback, useRef } from 'react';
import { useLocation } from 'react-router-dom';


  // create a context
  export const DrawerToggleContext = createContext<DrawerState | undefined>(undefined);

  // Drawer State
  interface DrawerState {
    searchIsOpen: boolean;
    navigationIsOpen: boolean;
    shoppingBagIsOpen: boolean;
    loginPopoverOpen: boolean;
    openShoppingPopper: () => void;
    closeShoppingPopper: () => void;
    openSearchBarDrawer: () => void;
    closeSearchBarDrawer: () => void;
    openNavigationDrawer: () => void;
    closeNavigationDrawer: () => void;
    openLoginPopover: () => void;
    closeLoginPopover: () => void;
    closeAllDrawers: () => void;
    assignNavigationDrawerRef : (node: HTMLDivElement) => void;
    assignNavigationButtonRef : (node: HTMLDivElement) => void;
  }

  // Provider Component
  interface DrawerToggleProviderProps {
      children: ReactNode;
    }

  // create a provider
  export function DrawerToggleProvider({ children } : DrawerToggleProviderProps) {
    const [searchIsOpen, setSearchIsOpen] = useState<boolean>(false);
    const [navigationIsOpen, setNavigationIsOpen] = useState<boolean>(false);
    const [shoppingBagIsOpen, setShoppingBagIsOpen] = useState<boolean>(false);
    const [loginPopoverOpen, setLoginPopoverOpen] = useState<boolean>(false);

    // Navigation drawer
    const [drawerRef, setDrawerRef] = useState<null | HTMLDivElement>(null);
    const [drawerButtonRef, setdrawerButtonRef] = useState<null | HTMLDivElement>(null);


    const openShoppingPopper = () => {
      if(navigationIsOpen || searchIsOpen){
        setSearchIsOpen(false);
        setNavigationIsOpen(false);
      }
      setShoppingBagIsOpen(prevState => !prevState);
    };

    const closeShoppingPopper = useCallback(() => {
      setShoppingBagIsOpen(false);
    }, [setShoppingBagIsOpen]);


    // Search bar drawer
    const openSearchBarDrawer = useCallback(() => {
      if(navigationIsOpen || shoppingBagIsOpen){
        setShoppingBagIsOpen(false);
        setNavigationIsOpen(false);
      }
      setSearchIsOpen(true);
    }, [navigationIsOpen,shoppingBagIsOpen ,setSearchIsOpen, setNavigationIsOpen, setShoppingBagIsOpen]);
    
    const closeSearchBarDrawer = useCallback(() => {
      setSearchIsOpen(false);
    }, [setSearchIsOpen]);

    
    // Mobile Navigation drawer
    
    const assignNavigationDrawerRef = (node: HTMLDivElement) => {
      setDrawerRef(node);
    }
    const assignNavigationButtonRef = (node: HTMLDivElement) => {
      setdrawerButtonRef(node);
    }
    
    const openNavigationDrawer = ( ) => {
      if(searchIsOpen || shoppingBagIsOpen){
        setShoppingBagIsOpen(false);
        setSearchIsOpen(false);
      }
      setNavigationIsOpen(true);
    };
    

    const closeNavigationDrawer = useCallback(() => {
      setNavigationIsOpen(false);
    }, [setNavigationIsOpen]);

    // Login Popover
    const openLoginPopover = useCallback(() => {
      if(searchIsOpen || shoppingBagIsOpen || navigationIsOpen){
        setShoppingBagIsOpen(false);
        setSearchIsOpen(false);
        setNavigationIsOpen(false);
      }
      setLoginPopoverOpen(true);
    },[searchIsOpen, shoppingBagIsOpen, navigationIsOpen, setShoppingBagIsOpen, setSearchIsOpen, setNavigationIsOpen, setLoginPopoverOpen]);

    const closeLoginPopover = useCallback(() => {
      setLoginPopoverOpen(false);
    }, [setLoginPopoverOpen]);

    // all drawers
    
    const closeAllDrawers = useCallback(() => {
      closeSearchBarDrawer();
      closeNavigationDrawer();
      closeShoppingPopper();
      closeLoginPopover();
    }, [closeSearchBarDrawer, closeNavigationDrawer, closeShoppingPopper, closeLoginPopover]);

    // url

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (drawerRef && !drawerRef.contains(event.target as Node)
            && drawerButtonRef && !drawerButtonRef.contains(event.target as Node)
        ) {
          closeNavigationDrawer();
        }
      }
    
      document.addEventListener("mousedown", handleClickOutside);
      
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [drawerRef, closeNavigationDrawer, drawerButtonRef]);


    return (
      <DrawerToggleContext.Provider value={
        { searchIsOpen, navigationIsOpen, shoppingBagIsOpen, loginPopoverOpen,
          openShoppingPopper, closeShoppingPopper, openSearchBarDrawer, closeSearchBarDrawer, 
          openLoginPopover, closeLoginPopover,
          closeAllDrawers,
          openNavigationDrawer, closeNavigationDrawer, assignNavigationDrawerRef, assignNavigationButtonRef,
        }}>
        {children}
      </DrawerToggleContext.Provider>
    );
  }
