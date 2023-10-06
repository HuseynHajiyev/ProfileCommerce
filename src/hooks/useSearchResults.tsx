import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { SearchResutProduct } from '../models/ProductInterface';  


export const useSearchResults = () => {
  const products = useSelector((state: RootState) => state.search.searchResults);
  const [query, setQuery] = useState('');
  const [productOptions, setProductOptions] = useState<SearchResutProduct[]>([]);
  const [open, setOpen] = useState(false);
  const loading = open && productOptions.length === 0;
  useEffect(() => {
    let active = true;
    if (!loading) {
      return undefined;
    }
    (async () => {
      if (active) {
        setProductOptions([...products]);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading, productOptions, products]);

  return { productOptions, loading, open, query, setOpen, setQuery };
};