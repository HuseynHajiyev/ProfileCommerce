import { useContext } from "react";
import { ImageLoadingContext, ImageLoadingContextProps } from "../context/imagesContext/ImagesContext";

export const useImageLoading = (): ImageLoadingContextProps => {
  const context = useContext(ImageLoadingContext);
  if (!context) {
    throw new Error('useImageLoading must be used within an ImageLoadingProvider');
  }
  return context;
};
