import { Grid, Skeleton } from '@mui/material'

const ShopPageProductSkeleton = () => {
    return (
        <Grid container direction={'column'}>
            <Grid item xs={9} height={'100%'} minHeight={'100%'} minWidth={'100%'}>
                <Skeleton variant='rectangular' height={'100%'} width={'100%'} sx={{paddingTop: '100%'}}/>
            </Grid>
            <Grid item xs={3} height={'100%'} minHeight={'100%'} minWidth={'100%'}>
                <Skeleton variant='text' height={'100%'} width={'100%'} sx={{paddingTop: '100%'}}/>
            </Grid>
        </Grid>
    )
}

export default ShopPageProductSkeleton
