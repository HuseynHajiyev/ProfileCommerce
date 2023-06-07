
import { Toolbar } from '@mui/material';
import { styled} from '@mui/system';

const ToolbarStyled = styled(Toolbar)(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 !important',
    width: '100%',
    '&::after': {
        content: '""',
        position: 'absolute',
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100%',
        borderBottom: '1px solid rgba(0, 0, 0, 0.3 )',
    },
    })
);

export default ToolbarStyled;