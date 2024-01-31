import { useEffect, useState } from "react";

interface Dimension {
  width: number;
  height: number;
}

export const useDimension = () => {
  const [dimension, setDimension] = useState<Dimension>({width: 0, height: 0});
  const updateDimension = () => {
    const { innerWidth, innerHeight } = window;
    setDimension({width: innerWidth, height: innerHeight});
  }
  useEffect(() => {
    updateDimension();
    window.addEventListener('resize', updateDimension);
    return () => window.removeEventListener('resize', updateDimension);
  }, []);
  return dimension;
};
