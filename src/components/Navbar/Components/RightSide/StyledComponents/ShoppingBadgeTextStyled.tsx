// MUI Imports
import { styled } from '@mui/system';

// Custom Components
import NavTypographyComponent from '../../../Components/NavTypographyComponent';


const ShoppingBadgeTextStyled = styled(NavTypographyComponent)({
    padding: '0 4px',
    '& span' : {
        backgroundColor: 'transparent',
        color: '#000',
        whiteSpace: 'nowrap',
        '@media (min-width:600px)': {
            fontSize: '1rem',
          },
          '@media (min-width:960px)': {
            fontSize: '1rem',
          },
    },
});


export default ShoppingBadgeTextStyled;

