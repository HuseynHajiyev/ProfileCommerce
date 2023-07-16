import theme from '../themes/theme';
import { gridColumns }from './ShoppingBagGridConstants';

const { image, productName, price, quantity, subtotal, deleteItem } = gridColumns;

export const smallScreenGridColumns = {
    [theme.breakpoints.up('sm')]: {
        '&:nth-of-type(1)': {
          flexBasis: `calc(100%/12 * ${image.sm})`,
          minWidth: `calc(100%/12 * ${image.sm})`,
        },
        '&:nth-of-type(2)': {
          flexBasis: `calc(100%/12 * ${productName.sm})`,
          minWidth: `calc(100%/12 * ${productName.sm})`,
        },
        '&:nth-of-type(3)': {
          flexBasis: `calc(100%/12 * ${price.sm})`,
          minWidth: `calc(100%/12 * ${price.sm})`,
        },
        '&:nth-of-type(4)': {
          flexBasis: `calc(100%/12 * ${quantity.sm})`,
          minWidth: `calc(100%/12 * ${quantity.sm})`,
        },
        '&:nth-of-type(5)': {
          flexBasis: `calc(100%/12 * ${subtotal.sm})`,
          minWidth: `calc(100%/12 * ${subtotal.sm})`,
        },
        '&:nth-of-type(6)': {
          flexBasis: `calc(100%/12 * ${deleteItem.sm})`,
          minWidth: `calc(100%/12 * ${deleteItem.sm})`,
        },
      },
}


export const mediumScreenGridColumns = {
    [theme.breakpoints.up('md')]: {
        '&:nth-of-type(1)': {
            flexBasis: `calc(100%/12 * ${image.md})`,
            minWidth: `calc(100%/12 * ${image.md})`,
        },
        '&:nth-of-type(2)': {
            flexBasis: `calc(100%/12 * ${productName.md})`,
            minWidth: `calc(100%/12 * ${productName.md})`,
        },
        '&:nth-of-type(3)': {
            flexBasis: `calc(100%/12 * ${price.md})`,
            minWidth: `calc(100%/12 * ${price.md})`,
        },
        '&:nth-of-type(4)': {
            flexBasis: `calc(100%/12 * ${quantity.md})`,
            minWidth: `calc(100%/12 * ${quantity.md})`,
        },
        '&:nth-of-type(5)': {
            flexBasis: `calc(100%/12 * ${subtotal.md})`,
            minWidth: `calc(100%/12 * ${subtotal.md})`,
        },
        '&:nth-of-type(6)': {
            flexBasis: `calc(100%/12 * ${deleteItem.md})`,
            minWidth: `calc(100%/12 * ${deleteItem.md})`,
        },
    },
}


export const defaultColumns = {
  '&:nth-of-type(1)': {
    flexBasis: `calc(100%/12 * ${image.sm})`,
    minWidth: `calc(100%/12 * ${image.sm})`,
  },
  '&:nth-of-type(2)': {
      flexBasis: `calc(100%/12 * ${productName.sm})`,
      minWidth: `calc(100%/12 * ${productName.sm})`,
  },
  '&:nth-of-type(3)': {
      flexBasis: `calc(100%/12 * ${price.sm})`,
      minWidth: `calc(100%/12 * ${price.sm})`,
  },
  '&:nth-of-type(4)': {
      flexBasis: `calc(100%/12 * ${quantity.sm})`,
      minWidth: `calc(100%/12 * ${quantity.sm})`,
  },
  '&:nth-of-type(5)': {
      flexBasis: `calc(100%/12 * ${subtotal.sm})`,
      minWidth: `calc(100%/12 * ${subtotal.sm})`,
  },
  '&:nth-of-type(6)': {
      flexBasis: `calc(100%/12 * ${deleteItem.sm})`,
      minWidth: `calc(100%/12 * ${deleteItem.sm})`,
  },
}

