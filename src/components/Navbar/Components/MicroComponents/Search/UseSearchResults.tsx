// useSearchResults.ts
import { useState, useEffect } from 'react';
import DummyQueryResult from '../../../DummyQueryResult';

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

interface SearchResultInterface {
    title: string;
  }
  


export const useSearchResults = () => {
  const [options, setOptions] = useState<SearchResultInterface[]>([]);
  const [open, setOpen] = useState(false);
  const loading = open && options.length === 0;

  useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      await sleep(1e3); // For demo purposes.

      if (active) {
        setOptions([...DummyQueryResult]);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  return { options, loading, open, setOpen };
};
