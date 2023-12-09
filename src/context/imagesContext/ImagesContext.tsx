// ImageLoadingContext.tsx
import { createContext, useState, ReactNode, useEffect, useCallback } from 'react';

export interface ImageLoadingContextProps {
  mainPageImages: string[];
  mainPageImagesFullyLoaded: boolean;
  mainPageSectionOneLoaded: boolean;
  mainPageSectionTwoLoaded: boolean;
  markImageAsLoaded: (imageSrc: string) => void;
  checkIfAnImageIsLoaded: (imageSrc: string) => boolean;  
  isSectionLoaded: (section: string) => boolean;
}

export const ImageLoadingContext = createContext<ImageLoadingContextProps | undefined>(undefined);

interface ImageLoadingProviderProps {
  children: ReactNode;
}

export const ImageLoadingProvider = ({ children }: ImageLoadingProviderProps) => {
  const [mainPageImages, setMainPageImages] = useState<string[]>([]);
  const [mainPageImagesFullyLoaded, setMainPageImagesFullyLoaded] = useState<boolean>(false); 
  const [mainPageSectionOneLoaded, setMainPageSectionOneLoaded] = useState<boolean>(false);
  const [mainPageSectionTwoLoaded, setMainPageSectionTwoLoaded] = useState<boolean>(false);

  const markImageAsLoaded = useCallback((imageSrc: string) => {
    setMainPageImages((prev) => [...prev, imageSrc]);
  }, []);

  const checkIfAnImageIsLoaded = useCallback((imageSrc: string) => {
    return mainPageImages.includes(imageSrc);
  }, [mainPageImages]);

  const isSectionLoaded = useCallback((section: string) => {
    switch (section) {
      case 'sectionOne':
        return mainPageSectionOneLoaded;
      case 'sectionTwo':
        return mainPageSectionTwoLoaded;
      case 'sectionThree':
        return mainPageImagesFullyLoaded;
      default:
        return false;
    }
  },[mainPageSectionOneLoaded, mainPageSectionTwoLoaded, mainPageImagesFullyLoaded]);

  useEffect(() => {
    if (mainPageImages.length >= 3) {
      setMainPageSectionOneLoaded(true);
    }
    if(mainPageImages.length >= 5) {
      setMainPageSectionTwoLoaded(true);
    }
    if (mainPageImages.length >= 9) {
      setMainPageImagesFullyLoaded(true);
    }
  }, [mainPageImages]);

  return (
    <ImageLoadingContext.Provider value={{ 
      mainPageImages, 
      mainPageImagesFullyLoaded,
      mainPageSectionOneLoaded,
      mainPageSectionTwoLoaded,
      markImageAsLoaded,
      checkIfAnImageIsLoaded,
      isSectionLoaded,
    }}>
      {children}
    </ImageLoadingContext.Provider>
  );
};