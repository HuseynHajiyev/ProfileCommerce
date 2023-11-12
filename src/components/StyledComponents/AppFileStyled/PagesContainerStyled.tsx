import { Box, styled } from '@mui/material'
import theme from '../../../themes/theme'

const PagesContainerStyled = styled(Box)(() => ({
    paddingLeft: '5%',
    paddingRight: '5%',
    overflow: 'auto',
    overflowY: 'scroll',
    maxHeight: '100vh',
    minHeight: '100vh',
    [theme.breakpoints.up('lg')]: {
        paddingLeft: '5%',
        paddingRight: '5%',
    },
    [theme.breakpoints.up('xl')]: {
        paddingLeft: '11%',
        paddingRight: '11%',
    },
}))

export default PagesContainerStyled