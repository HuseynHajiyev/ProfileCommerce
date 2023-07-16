import { Box, Grid, Typography } from '@mui/material'

// Redux Imports
import { useSelector } from 'react-redux';
import { RootState } from '../../../../app/store';
import { BagAccordionHeaderStyled } from '../../../StyledComponents/ShoppingBagPageStyled/ShoppingBagPageStyled';

const SubtotalSummary = () => {
    const subTotal = useSelector((state: RootState) => state.shoppingBag.subTotal);
    const shipping = useSelector((state: RootState) => state.shoppingBag.shipping);
    const total = shipping + subTotal;
    return (
        <Box sx={{borderBottom: '2px solid black', padding: '5% 0'}}>
            <Grid container direction={'column'} justifyContent={'space-between'} paddingBottom={'5%'} sx={{paddingBottom: '2px solid black'}}>
                <Grid item container xs={9}>
                    <Grid item container xs={12} justifyContent={'space-between'}>
                        <Grid item xs={9}>
                            <Typography variant='subtitle2' color={'#7B7B7B'}>
                                Subtotal
                            </Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant='subtitle2' color={'#7B7B7B'} display={'flex'} justifyContent={'flex-end'}>
                                {`$${subTotal}`}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item container xs={12}></Grid>
                    <Grid item container xs={12} justifyContent={'space-between'} paddingTop='3%'>
                        <Grid item xs={9}>
                            <Typography variant='subtitle2' color={'#7B7B7B'}>
                                {`Shipping (In-Store Pickup - Brooklyn, NY, (198 Smith Street))`}
                            </Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant='subtitle2' color={'#7B7B7B'} display={'flex'} justifyContent={'flex-end'}>
                                {`$${Number(shipping).toFixed(2)}`}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item container xs={12} paddingTop='5%'>
                        <Grid item xs={9}>
                            <Typography variant='subtitle2' color={'#7B7B7B'}>
                                Order Total
                            </Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant='subtitle2' fontWeight={600} color={'black'} display={'flex'} justifyContent={'flex-end'}>
                                {`$${total == 0 ? '0.00' : Number(total).toFixed(2)}`}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default SubtotalSummary
