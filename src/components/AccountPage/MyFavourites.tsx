import { Box, Grid, Typography, Button } from "@mui/material"
import Header from "./microComponents/Header"
import { useSelector } from "react-redux"
import { RootState } from "../../app/store"
import { UserStateInterface } from "../../models/UserInterface"
import FavouritesProductCard from "./microComponents/FavouriteProductCard"
import { ProductInterface } from "../../models/ProductInterface"
import { useEffect, useRef, useState } from "react"
import { MdOutlineExpandMore } from "react-icons/md";
import { useNavigate } from "react-router-dom"


const MyFavourites = () => {
  const increment = useRef<number>(3);
  const gridRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState<number>(0);
  const [showMore, setShowMore] = useState<boolean>(false);
  const [displayedItems, setDisplayedItems] = useState<ProductInterface[]>([])
  const maxItems = useRef<number>(3)
  const userState: UserStateInterface = useSelector((state: RootState) => state.userState);
  const favourites: ProductInterface[] | null = userState.userFavourites;

  const navigate = useNavigate();


  const handleTakeMeShoppingClick = () => {
    navigate('/shop/view-all');
  }

  const handleExpandedClick = () => {
    if(favourites && favourites.length > maxItems.current) {
      maxItems.current += increment.current;
      setDisplayedItems(favourites.slice(0, maxItems.current));
    }
  }

  useEffect(()=>{
      if(favourites){
        setShowMore(favourites.length > maxItems.current && favourites.length > displayedItems.length);
        if(favourites.length > maxItems.current) {
          setDisplayedItems(favourites.slice(0, maxItems.current));
        } else {
          setDisplayedItems(favourites);
          maxItems.current = favourites.length;
        }
      } else {
        setDisplayedItems([]);
        setShowMore(false);
      }
  }, [favourites, displayedItems.length]);

  useEffect(()=>{
    if(gridRef.current) {
      setMaxHeight(gridRef.current.scrollHeight);
    }
  }, [favourites, displayedItems.length])
  return (
    <Box>

      <Box position={'relative'} borderBottom={'2px solid #D9D9D9'}>
        <Header headerText='My Favourites' />
        <Grid container ref={gridRef} spacing={2} paddingY={5} paddingX={1} sx={{
          maxHeight: `${maxHeight}px`, 
          overflow: 'hidden',
          transition: 'max-height 0.5s ease-in-out',
        }}>
        {
          userState.loggedIn && displayedItems.length > 0 ? (
            displayedItems.map((product: ProductInterface) => (
              <Grid item xs={4} key={product.id}>
                <FavouritesProductCard product={product} />
              </Grid>
            ))
          ) : (
            <Box>
              <Typography variant={'h5'} fontFamily={'Mulish'} fontSize={'1.5rem'} display={'flex'} justifyContent={'center'}>
                You have no Favourites selected
              </Typography>
            </Box>
          )
        }
        </Grid>
        {
          (showMore) ? (
            <Button onClick={handleExpandedClick} sx={{ 
              position: 'absolute',
              bottom:0,
              display: 'flex',
              justifyContent: 'center',
              borderRadius: '5%',
              width: '100%',
              height: 'fit-content',
              backgroundColor: 'rgb(230,230,230,0.3)', 
              backdropFilter: 'blur(5px)', 
            }}>
                <MdOutlineExpandMore size={40} />
            </Button>  
          ) : (null)
        }
      </Box>
      <Box paddingTop={5}>
        <Grid container width={'fit-content'} spacing={6}>
          <Grid item xs={5}>
            <Button
              onClick={handleTakeMeShoppingClick}
              sx={{
                height: '100%',
                textTransform: 'none',
                borderRadius: '0px',
                color: 'white',
                background: 'black',
                paddingY: '8px',
                paddingX: '16px',
                border: '1px solid black',
              }}
            >
              <Typography variant={'body2'} fontFamily={'Mulish'} whiteSpace={'nowrap'} >
                Take me shopping
              </Typography>
            </Button>
          </Grid>
          <Grid item xs={5}>
            <Button
              disabled
              sx={{
                textTransform: 'none',
                borderRadius: '0px',
                color: 'black',
                background: 'white',
                border: '1px solid black',
                paddingY: '8px',
                paddingX: '16px',
              }}
            >
              <Typography variant={'body2'} fontFamily={'Mulish'} whiteSpace={'nowrap'}>
                Share my favourites
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Box>

    </Box>
  )
}

export default MyFavourites