import { Grid } from '@mui/material'
import { ProductInterface } from '../../models/ProductInterface'
import NotFound404 from '../../pages/NotFound404/NotFound404'
import ShopPageProduct from '../ProductCard/ShopPageProduct/ShopPageProduct'


const ShopGrid = ({products} : {products: ProductInterface[] | null}) => {
        
    return (
        <>
        {products ? (
            <Grid container spacing={6} maxHeight={'100vh'}>
                {products.map((product: ProductInterface) => {
                return (
                    <Grid item xs={12} sm={6} md={3} key={product.id}>
                        <ShopPageProduct key={product.id} product={product} />
                    </Grid>
                )
                })}
            </Grid>
        ) : (
            <NotFound404 />
        )
        }
        </> 
    )
}

export default ShopGrid
