import { RefObject, createContext, useRef, useState } from "react";

interface MainScrollContextProps {
  children: React.ReactNode;
}

interface MainScrollState {
  scrollSection: string | null;
  mainRef: RefObject<HTMLDivElement>;
  linkScrolled: boolean;
  handleScrollSection: (scrollSection: string) => void;
  handleLinkScrolled: (scrolled: boolean) => void;
}



export const MainScrollContext = createContext<MainScrollState | undefined>(undefined);


export function MainScrollProvider({ children } : MainScrollContextProps) {
  const [scrollSection, setScrollSection] = useState<string | null>(null);
  const [linkScrolled, setLinkScrolled] = useState<boolean>(false);
  
  const mainRef = useRef<HTMLDivElement>(null);

  const handleScrollSection = (scrollSection: string) => {
    setScrollSection(scrollSection);
  };

  const handleLinkScrolled = (scrolled: boolean) => {
    setLinkScrolled(scrolled);
  }

  return (
    <MainScrollContext.Provider value={{scrollSection, mainRef, linkScrolled,  handleScrollSection, handleLinkScrolled}}>
      {children}
    </MainScrollContext.Provider>
  );
}