import { Box } from '@mui/material';
import { styled } from '@mui/system';

const BadgeContainerStyled = styled(Box)({
    width: '100%',
    display: 'flex', 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-around',
    border: '1px solid black',
    padding: '10%',
    '& *': {
        position: 'static',
        zIndex: 0   ,
    },
});


export default BadgeContainerStyled;