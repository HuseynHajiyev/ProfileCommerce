// Redux Imports
import { useSelector } from 'react-redux'
import { RootState } from '../../../app/store'

// Component imports
import ProductRow from './MicroComponents/ShoppingBagPageProductRow/ProductRow';
import BagPageGridHeader from './MicroComponents/BagPageGridHeader';

// Interface imports
import { CartItemInterface } from '../../../models/CartiItemInterface';
import { BagEmptyContainer, GridContainerStyled } from '../../StyledComponents/ShoppingBagPageStyled/ShoppingBagPageStyled';
import { BagEmptyTypographyStyled } from '../../StyledComponents/ShoppingBagPageStyled/ShoppingBagPageTypographyStyled';
import ShoppingBagRowSkeleton from './MicroComponents/ShoppingBagPageProductRow/ShoppingBagRowSkeleton/BagRowSkeleton';

const BagPageGrid = () => {
    const shoppingBag = useSelector((state: RootState) => state.shoppingBag);
    return (
        <GridContainerStyled item container direction='column' maxHeight='100vh' overflow='scroll'>
            <BagPageGridHeader />
            {
                shoppingBag.loading ? (
                    Array.from({ length: 4 }).map((item, index) => (
                        <ShoppingBagRowSkeleton key={index} />
                     ))
                ) : shoppingBag.products.length == 0 ? (
                    <BagEmptyContainer>
                        <BagEmptyTypographyStyled>
                            Your shopping bag is empty
                        </BagEmptyTypographyStyled>
                    </BagEmptyContainer>
                ):(
                shoppingBag.products.map((cartItem: CartItemInterface) => {
                    return <ProductRow key={cartItem.product.id} cartItem={cartItem} />
                }))
            }
        </GridContainerStyled>
    )
}

export default BagPageGrid
