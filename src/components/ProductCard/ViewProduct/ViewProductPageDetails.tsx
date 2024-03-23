import { Box, Button, Grid, Link, Stack, Typography } from "@mui/material";
import { ProductInterface } from "../../../models/ProductInterface";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { faker } from "@faker-js/faker";
import { useIsMobile } from "../../../hooks/useIsMobile";
import { memo, useEffect, useState } from "react";
import { BsBoxSeam } from "react-icons/bs";
import CommitAllSizeButton from "../MicroComponents/CommitAllSizeButton";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import ShowMoreText from "../MicroComponents/ShowMoreText";
import ProductSizePicks from "../MicroComponents/ProductSizePickContainer";
import { BodyTypographyStyled } from "../../StyledComponents/ProductCardStyled/ProductViewPageStyled";
import {
  addFavourite,
  removeFavourite,
} from "../../../features/userReducer/userSlice";
import { useDrawerToggle } from "../../../hooks/useDrawerToggle";

const ViewProductPageDetails = memo(
  ({ product }: { product: ProductInterface }) => {
    // hooks
    const dispatch = useDispatch();
    const userState = useSelector((state: RootState) => state.userState);
    const isMobile = useIsMobile();
    const isTablet = useIsMobile("tablet");
    const isDesktop = useIsMobile("desktop");
    const isLargeDesktop = useIsMobile("largeDesktop");
    const { openLoginPopover } = useDrawerToggle();

    // state and variables
    const productsStore = useSelector(
      (store: RootState) => store.productsState
    );
    const [isFavourite, setIsFavourite] = useState<boolean>(false);
    const [foundProduct, setFoundProduct] = useState<ProductInterface | null>(
      null
    );
    const [adjectives] = useState<string[]>(() =>
      Array.from({ length: 3 }).map(() => faker.commerce.productAdjective())
    );
    const [feel] = useState<string>(
      () => `${faker.commerce.productDescription().split(".")[0]}.`
    );

    const handleFavourite = () => {
      if (userState && userState.loggedIn && userState.userFavourites) {
        if (isFavourite) {
          dispatch(removeFavourite(product));
        } else {
          dispatch(addFavourite(product));
        }
      } else {
        openLoginPopover();
      }
    };

    useEffect(() => {
      if (userState && userState.loggedIn && userState.userFavourites) {
        if (
          userState.userFavourites.find(
            (favourite) => favourite.id === product.id
          )
        ) {
          setIsFavourite(true);
        } else {
          setIsFavourite(false);
        }
      } else {
        setIsFavourite(false);
      }
    }, [userState, product.id]);

    useEffect(() => {
      const productFromStore = productsStore.products.find(
        (productFromStore) => productFromStore.id === product.id
      );
      if (productFromStore) {
        setFoundProduct(productFromStore);
      } else {
        setFoundProduct(product);
      }
    }, [productsStore.products, product, product.id]);
    return (
      <Grid container item direction={"column"} paddingTop={"1%"}>
        <Grid
          container
          item
          pb={"3%"}
          display={"flex"}
          justifyContent={"space-between"}
          sx={{ borderBottom: "2px solid #E8E8E8" }}
        >
          <Grid item container xs={8}>
            <Grid item xs={2}>
              <Button
                onClick={handleFavourite}
                sx={{
                  display: "inherit",
                  minWidth: "inherit",
                  width: "inherit",
                  height: "inherit",
                  p: "0",
                }}
              >
                {isFavourite ? (
                  <AiFillHeart color={"red"} size={isMobile ? 25 : 30} />
                ) : (
                  <AiOutlineHeart color={"black"} size={isMobile ? 25 : 30} />
                )}
              </Button>
            </Grid>
            <Grid item xs={10}>
              <Typography
                variant="body1"
                sx={{
                  fontSize: isTablet
                    ? "0.7 rem"
                    : isDesktop || isLargeDesktop
                    ? "1.1rem"
                    : "0.9rem",
                  whiteSpace: "pre-wrap",
                }}
              >
                {product.title}
              </Typography>
              <Grid item xs={12} display={"flex"} justifyContent={"flex-start"}>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "0.9rem",
                    whiteSpace: "pre-wrap",
                    color: "#A3A3A3",
                  }}
                >
                  {foundProduct?.totalSizeInventory} left in stock
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item container xs={2} direction={"column"}>
            <Stack>
              <Typography
                variant="body1"
                sx={{
                  display: "block",
                  textAlign: "right",
                  fontSize: isTablet
                    ? "0.9rem"
                    : isDesktop || isLargeDesktop
                    ? "1.1rem"
                    : "1rem",
                  color: "red",
                }}
              >
                {`$${product.price.toFixed(2)}`}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  display: "block",
                  textAlign: "right",
                  fontSize: isTablet
                    ? "0.8rem"
                    : isDesktop || isLargeDesktop
                    ? "0.9rem"
                    : "0.8rem",
                  textDecoration: "line-through",
                  whiteSpace: "pre-wrap",
                  color: "#A3A3A3",
                }}
              >
                {`$${(product.price / 0.7).toFixed(2)}`}
              </Typography>
            </Stack>
          </Grid>
        </Grid>
        <Grid item container py={"3%"}>
          <Grid item xs={12} paddingX={"1%"}>
            <ShowMoreText
              text={foundProduct?.description || ""}
              maxLength={isMobile ? 70 : isTablet ? 100 : isDesktop ? 180 : 250}
            />
          </Grid>
        </Grid>
        <Grid item container>
          <Box
            component="ul"
            style={{
              listStyleType: "disc",
              paddingInlineStart: "40px",
              marginBlockStart: "0",
              marginBlockEnd: "1rem",
            }}
          >
            {adjectives.map((adjective, index) => (
              <Box key={index} component="li" paddingY={"2%"} color={"#A3A3A3"}>
                <BodyTypographyStyled
                  sx={{
                    fontSize: isTablet
                      ? "0.9rem"
                      : isDesktop || isLargeDesktop
                      ? "0.9rem"
                      : "1rem",
                    whiteSpace: "pre-wrap",
                  }}
                >
                  {adjective}
                </BodyTypographyStyled>
              </Box>
            ))}
          </Box>
        </Grid>
        <Grid item container>
          <BodyTypographyStyled
            variant="body1"
            sx={{
              display: "block",
              fontSize: isTablet
                ? "0.9rem"
                : isDesktop || isLargeDesktop
                ? "0.9rem"
                : "1rem",
            }}
          >
            Color: {product.color}
          </BodyTypographyStyled>
          <BodyTypographyStyled
            variant="body1"
            sx={{
              display: "block",
              fontSize: isTablet
                ? "0.9rem"
                : isDesktop || isLargeDesktop
                ? "0.9rem"
                : "1rem",
            }}
          >
            Feel: {feel}
          </BodyTypographyStyled>
        </Grid>
        <Grid item container paddingBottom={1} paddingTop={2}>
          <Typography
            fontWeight={"600"}
            sx={{
              fontSize: isTablet
                ? "0.9rem"
                : isDesktop || isLargeDesktop
                ? "0.9rem"
                : "1rem",
            }}
          >
            Size
          </Typography>
          <Typography
            fontWeight={"bold"}
            color={"red"}
            fontSize={
              isTablet
                ? "0.9rem"
                : isDesktop || isLargeDesktop
                ? "0.9rem"
                : "0.9rem"
            }
          >
            *
          </Typography>
        </Grid>
        <Grid item container>
          <ProductSizePicks product={product} />
          <Grid item container>
            <Grid item xs={12} paddingTop={"5%"}>
              <Typography variant="body2" color={"red"}>
                30% off the original price
              </Typography>
            </Grid>
            <Grid item xs={12} paddingTop={"2%"}>
              <Grid item container display={"flex"} alignItems={"center"}>
                <BsBoxSeam size={isMobile ? 15 : 17} />
                <Typography
                  variant="body2"
                  component={"span"}
                  paddingLeft={"1%"}
                >
                  Free Shipping On All US Orders{" "}
                  <Link
                    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ textDecoration: "none" }}
                    color={"inherit"}
                  >
                    Details...
                  </Link>
                </Typography>
              </Grid>
            </Grid>
            <CommitAllSizeButton product={product} />
          </Grid>
        </Grid>
      </Grid>
    );
  }
);

export default ViewProductPageDetails;
