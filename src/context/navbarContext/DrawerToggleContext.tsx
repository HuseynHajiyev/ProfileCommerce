import { createContext, useState, ReactNode, useEffect, useCallback } from 'react';


  // create a context
  export const DrawerToggleContext = createContext<DrawerState | undefined>(undefined);

  // Drawer State
  interface DrawerState {
    searchIsOpen: boolean;
    navigationIsOpen: boolean;
    shoppingBagIsOpen: boolean;
    loginPopoverOpen: boolean;
    accountPopoverOpen: boolean;
    loginSuccessSnackbarOpen: boolean;
    loginAttempted: boolean;
    openShoppingPopper: () => void;
    closeShoppingPopper: () => void;
    openSearchBarDrawer: () => void;
    closeSearchBarDrawer: () => void;
    openNavigationDrawer: () => void;
    closeNavigationDrawer: () => void;
    openLoginPopover: () => void;
    closeLoginPopover: () => void;
    openAccountPopover: () => void;
    closeAccountPopover: () => void;
    openSuccessSnackbar: () => void;
    closeSuccessSnackbar: () => void;
    handleSuccessSnackbar: () => void;
    handleloginAttempted: (tf: boolean) => void;
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
    const [accountPopoverOpen, setAccountPopoverOpen] = useState<boolean>(false);
    const [loginSuccessSnackbarOpen, setLoginSuccessSnackbarOpen] = useState<boolean>(false);
    const [loginAttempted, setLoginAttempted] = useState<boolean>(false);


    // Navigation drawer
    const [drawerRef, setDrawerRef] = useState<null | HTMLDivElement>(null);
    const [drawerButtonRef, setdrawerButtonRef] = useState<null | HTMLDivElement>(null);


    const openShoppingPopper = () => {
      if(navigationIsOpen || searchIsOpen || accountPopoverOpen || loginPopoverOpen){
        setSearchIsOpen(false);
        setNavigationIsOpen(false);
        setAccountPopoverOpen(false);
        setLoginPopoverOpen(false);
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
      if(searchIsOpen || shoppingBagIsOpen || navigationIsOpen || accountPopoverOpen){
        setShoppingBagIsOpen(false);
        setSearchIsOpen(false);
        setAccountPopoverOpen(false);
        setLoginPopoverOpen(false);
      }
      setNavigationIsOpen(true);
    };
    

    const closeNavigationDrawer = useCallback(() => {
      setNavigationIsOpen(false);
    }, [setNavigationIsOpen]);

    // Login Popover
    const openLoginPopover = useCallback(() => {
      if(searchIsOpen || shoppingBagIsOpen || navigationIsOpen || accountPopoverOpen){
        setShoppingBagIsOpen(false);
        setSearchIsOpen(false);
        setNavigationIsOpen(false);
        setAccountPopoverOpen(false);
      }
      setLoginPopoverOpen(true);
    },[ accountPopoverOpen ,searchIsOpen, shoppingBagIsOpen, navigationIsOpen, setShoppingBagIsOpen, setSearchIsOpen, setNavigationIsOpen, setLoginPopoverOpen, setAccountPopoverOpen]);

    const closeLoginPopover = useCallback(() => {
      setLoginPopoverOpen(false);
    }, [setLoginPopoverOpen]);
    // Account Popover

    const openAccountPopover = useCallback(() => {
      if(searchIsOpen || shoppingBagIsOpen || navigationIsOpen || loginPopoverOpen){
        setShoppingBagIsOpen(false);
        setSearchIsOpen(false);
        setNavigationIsOpen(false);
        setLoginPopoverOpen(false);
      }
      setAccountPopoverOpen(true);
    }, [searchIsOpen, shoppingBagIsOpen, navigationIsOpen, loginPopoverOpen, setShoppingBagIsOpen, setSearchIsOpen, setNavigationIsOpen, setLoginPopoverOpen, setAccountPopoverOpen]);

    
    const closeAccountPopover = useCallback(() => {
      setAccountPopoverOpen(false);
    }, [setAccountPopoverOpen]);
   
    // Snackbars 

    const openSuccessSnackbar = useCallback(() => {
      setLoginSuccessSnackbarOpen(true);
    }, [setLoginSuccessSnackbarOpen]);

    const closeSuccessSnackbar = useCallback(() => {
      setLoginSuccessSnackbarOpen(false);
    },[setLoginSuccessSnackbarOpen])

    const handleSuccessSnackbar = useCallback(() => {
      setLoginSuccessSnackbarOpen(true);
      setTimeout(() => {
        setLoginSuccessSnackbarOpen(false);
      }, 3000);
    },[])


    // login attempt

    const handleloginAttempted = useCallback((tf: boolean) => {
      setLoginAttempted(tf);
    },[setLoginAttempted]);
    
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
        { searchIsOpen, navigationIsOpen, shoppingBagIsOpen, loginPopoverOpen,accountPopoverOpen,loginSuccessSnackbarOpen,
          loginAttempted,
          openShoppingPopper, closeShoppingPopper, openSearchBarDrawer, closeSearchBarDrawer, 
          openLoginPopover, closeLoginPopover, openAccountPopover, closeAccountPopover, openSuccessSnackbar, closeSuccessSnackbar,
          handleloginAttempted, handleSuccessSnackbar, closeAllDrawers,
          openNavigationDrawer, closeNavigationDrawer, assignNavigationDrawerRef, assignNavigationButtonRef,
        }}>
        {children}
      </DrawerToggleContext.Provider>
    );
  }
