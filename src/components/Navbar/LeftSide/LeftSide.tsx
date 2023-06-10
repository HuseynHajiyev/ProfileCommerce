// MUI Imports
import { Stack } from '@mui/system'


// Custom Components
import NavLinkComponent from './LeftSideComponents/NavLinkComponent'

// Props
interface LeftSideProps {
    isMobile: boolean,
  }
  

const LeftSide = ({ isMobile } : LeftSideProps) => {
    return (
        <Stack direction={isMobile ? 'column' : 'row'} spacing={ isMobile ? 2 : 10 } sx={{ flex: isMobile ? 2 : 1 }}>
            <NavLinkComponent to='/' />
            <NavLinkComponent to='/about' />
            <NavLinkComponent to='/store' />
        </Stack>
    )
}

export default LeftSide
