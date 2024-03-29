// MUI Imports
import { Stack } from '@mui/material';

// Component Imports
import LeftSide from './LeftSide';
import Center from './Center';
import RightSide from './RightSide';

// Styled Component Imports
import ToolbarStyled from '../../../StyledComponents/NavbarStyled/ToolBarStyled';
const ToolbarComponent = () => {
    return (
        <ToolbarStyled>
            <Stack direction="row" justifyContent='space-between' sx={{width:'100%'}}>
                <LeftSide />
                <Center />
                <RightSide />
            </Stack>   
        </ToolbarStyled>
    )
}

export default ToolbarComponent
