// React Imports
import React from 'react';
import { useState, useEffect } from 'react';


// MUI Imports
import { Stack } from '@mui/system'
import { useTheme, Theme } from '@mui/material/styles';

// MUI Media Query
import { useMediaQuery } from '@mui/material'

// Custom Components
import NavLinkComponent from '../NavbarComponents/NavLinkComponent'

const LeftSide = () => {
    const [row, setRow] = useState<"row" | "column">('row');
    const theme = useTheme<Theme>();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    useEffect(() => {
        if (isMobile) {
            setRow('column');
        } else {
            setRow('row');  
        }
    }, [isMobile])

    return (
        <Stack direction={row} spacing={ isMobile ? 2 : 10 } sx={{ flex: 1 }}>
            <NavLinkComponent to='/' />
            <NavLinkComponent to='/about' />
            <NavLinkComponent to='/store' />
        </Stack>
    )
}

export default LeftSide
