import { Box, CircularProgress, Grid, Stack } from '@mui/material'
import { ProductInterface } from '../../models/ProductInterface'
import ShopPageProduct from '../ProductCard/ShopPageProduct/ShopPageProduct'
import ProductListCard from '../ProductCard/MicroComponents/ProductListCard';
import { useCallback, useEffect, useRef, useState } from 'react';
import ShopSkeletonGrid from './ShopSkeletonGrid';


interface ShopGridProps {
    products: ProductInterface[] | null;
    view: string;
}

const ShopGrid = ({products, view} : ShopGridProps) => {
    const [loadMore, setLoadMore] = useState<boolean>(false);
    const [hasMore, setHasMore] = useState<boolean>(true);
    const loader = useRef(null);

    const handleObserver = useCallback((entities: IntersectionObserverEntry[]) => {
        const target = entities[0];
        if (target.isIntersecting) {
            setLoadMore(true); // Start loading
      
          // Set a timer for 3 seconds to stop loading
          setTimeout(() => {
            setLoadMore(false);
            setHasMore(false);
          }, 1300);
        }
      },[]);

    useEffect(() => {
        const observer = new IntersectionObserver(handleObserver, {
          root: null,
          threshold: 1.0,
        });
        
        const currentLoader = loader.current;
        if (loader.current) {
          observer.observe(loader.current);
        }
      
        return () => {
          if (currentLoader) {
            observer.unobserve(currentLoader);
          }
        };
      }, [products, handleObserver]); // Re-run the effect when the products array changes
      

      
    return (
        <>
        {products ? (view.toLowerCase() === 'grid' ?(
                <Grid container spacing={6}>
                    {products.map((product: ProductInterface, index: number) => {
                    return (
                        <Grid item xs={12} sm={6} md={3} key={product.id} ref={index === products.length - 1 ? loader : null} >
                            <ShopPageProduct key={product.id} product={product} />
                        </Grid>
                    )
                    })}
                </Grid>
            ) : (<Stack spacing={5}>
                {products.map((product: ProductInterface, index: number) => {
                    return (
                        <Box key={product.id} ref={index === products.length - 1 ? loader : null}>
                            <ProductListCard product={product} />
                        </Box>
                    )
                })}
            </Stack>)) : (
                null
            )
        }
        {(loadMore && hasMore) && (
            <Grid item display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} height={'100%'} pt={2} >
                <ShopSkeletonGrid length={4}/>
                <Box>
                    <CircularProgress size={40} />
                </Box>
            </Grid>
        )}
        </> 
    )
}

export default ShopGrid
