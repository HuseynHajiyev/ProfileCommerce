import { Box, Input, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app/store';
import ShopGrid from '../../../components/Shop/ShopGrid';
import ShopSkeletonGrid from '../../../components/Shop/ShopSkeletonGrid';
import { useEffect, useState } from 'react';
import { ProductInterface } from '../../../models/ProductInterface';

import { BsGrid3X3Gap } from "react-icons/bs";
import { BsList } from "react-icons/bs";
import { capitalizeEachWord, categoryUrlSwitch, urlCategorySwitch } from '../../../utilities/stringManipulation';
import { useNavigate, useParams } from 'react-router-dom';

const ShopClothing = () => {
    const products = useSelector((state: RootState) => state.productsState);
    const [displayedProducts, setDisplayedProducts] = useState<ProductInterface[] | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<string>('');
    const [categoryChoises, setCategoryChoises] = useState<string[]>(['All']);
    const [selectedView, setSelectedView] = useState<string>('');
    const viewChoises = ['Grid', 'List'];
    const categories = useSelector((state: RootState) => state.productsState.categories);

    const { category } = useParams<{category: string}>();
    const navigate = useNavigate();

    
    const handleCategoryChange = (e: SelectChangeEvent) => {
      setSelectedCategory(e.target.value);
      if(e.target.value === 'All') {
        navigate('/shop/clothing');
      } else {
        navigate(`/shop/clothing/${categoryUrlSwitch(e.target.value)}`);
      }
    }

    const handleViewChange = (e: SelectChangeEvent) => {
      setSelectedView(e.target.value);
    }

    useEffect(() => {
      if(categories.length > 0) {
        const capitalizedCategories = categories.map((category) => capitalizeEachWord(category));
        setCategoryChoises(capitalizedCategories);
        
        setSelectedCategory(category ? urlCategorySwitch(category) : 'All');
      }
    }, [categories, category]);

    useEffect(() => {
      if(selectedCategory !== 'All' && products.products.length > 0) {
        const categoryToLowerCase = selectedCategory.toLowerCase();
        const filteredProducts = products.products.filter((product) => product.category === categoryToLowerCase);
        setDisplayedProducts(filteredProducts);
      } else {
        setDisplayedProducts(products.products);
      }
    }, [selectedCategory, products.products])

    return (
      <>
        <Box display={'flex'} flexDirection={'column'} paddingTop={'1%'}>
            <Box paddingY={'1%'} display={'flex'} justifyContent={'space-between'}> 
              <Box display={'flex'} alignItems={'center'}>
                <Typography variant='h6'>
                  {`${displayedProducts ? displayedProducts.length : 0} products`}
                </Typography>
              </Box>
              <Box>

                {/* View */}
                <Select
                  displayEmpty
                  value={selectedView}
                  onChange={handleViewChange}
                  input={<Input disableUnderline />}
                  MenuProps={{ disableScrollLock: true }}
                  renderValue={(selected) => {
                    if (!selected) {
                      return <Typography fontFamily={'Mulish'} variant='h6'>View</Typography>;
                    }
                    return selected;
                  }}
                >
                 {viewChoises.map((view) => (
                    <MenuItem key={view} value={view}>
                      <Typography fontFamily={'Mulish'} variant='h6' display={'flex'} alignItems={'center'}>
                        {view === 'Grid' ? <BsGrid3X3Gap /> : <BsList />}
                        <span style={{ marginLeft: '8px' }}>{view}</span>
                      </Typography>
                    </MenuItem>
                  ))}
                </Select>

                {/* Categories */}
                <Select
                  displayEmpty
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                  input={<Input disableUnderline />}
                  MenuProps={{ disableScrollLock: true }}
                  renderValue={(selected) => {
                    if (!selected || selected === 'All') {
                      return <Typography fontFamily={'Mulish'} variant='h6'>Sort By</Typography>;
                    }
                    return selected;
                  }}
                >
                  <MenuItem value="All">
                    <Typography fontFamily={'Mulish'} variant='h6'>
                      All
                    </Typography>
                  </MenuItem>
                  {categoryChoises.map((category) => (
                    <MenuItem key={category} value={category}>
                      <Typography fontFamily={'Mulish'} variant='h6'>
                        {category}
                      </Typography>
                    </MenuItem>
                  ))}
                </Select>
              </Box>
            </Box>
            { products.loading ? (
              <Box display={'flex'} justifyContent={'center'} alignItems={'center'} height={'100vh'}>
                <ShopSkeletonGrid length={8} />
              </Box>
            ) : products.products.length == 0 ? (
              <Box display={'flex'} justifyContent={'center'} alignItems={'center'} height={'70vh'}>
                <Typography variant='h2'>
                  Sold out...
                  Check in later for more products
                </Typography>
              </Box>
            ) : (
              <Box display={'flex'} flexDirection={'column'} justifyContent={'center'}>
                <ShopGrid view={selectedView === '' ? 'Grid' : selectedView} products={displayedProducts} />
              </Box>
            )}
        </Box>
      </>
    )
  }
  
  export default ShopClothing;