import {Box, styled} from '@mui/system'
import theme from '../../../themes/theme'

const PagesContainerStyled = styled(Box)(() => ({
    paddingTop: '1%',
    [theme.breakpoints.up('lg')]: {
        paddingLeft: '5%',
        paddingRight: '5%',
    },
    [theme.breakpoints.up('xl')]: {
        paddingLeft: '10%',
        paddingRight: '10%',
    },
}))

export default PagesContainerStyled