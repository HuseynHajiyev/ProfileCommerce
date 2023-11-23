import { useContext } from 'react';
import { MainScrollContext } from '../context/scrollContext/MainScrollContext';

export function useMainScroll() {
    const context = useContext(MainScrollContext);
    if (context === undefined) {
      throw new Error('useMainScroll must be used within a MainScrollProvider');
    }
    return context;
  }