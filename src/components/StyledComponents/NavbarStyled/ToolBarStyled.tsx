import { Toolbar, styled } from '@mui/material';

const ToolbarStyled = styled(Toolbar)(() => (
    {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        backgroundColor: '#fff',
        padding: '0',
        '&.MuiToolbar-root': {
            paddingLeft: '10%',
            paddingRight: '10%',
            paddingBottom: '0.5rem',
        },
        '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '90%',
            borderBottom: '1px solid rgba(0, 0, 0, 0.3 )',
        },
    }
));

export default ToolbarStyled;