import { ReactNode } from 'react'; 
// MUI Imports
import { useTheme } from '@mui/material/styles';
import { Drawer } from '@mui/material';

interface DrawerComponentProps {
    children: ReactNode;
}

const DrawerComponent = ({children} : DrawerComponentProps) => {
    const theme = useTheme();
    return (
        <Drawer
                anchor={"top"}
                sx={{
                    width: '100%',  // Adjust width here
                    flexShrink: 0,            
                    '& .MuiDrawer-paper': {
                    [theme.breakpoints.up('xs')]: {
                        top: '5%',
                    },
                    [theme.breakpoints.up('sm')]: {
                        top: '6%',
                    },
                    [theme.breakpoints.up('md')]: {
                        top: '7.2%',
                    },
                    width: '100%',
                    paddingTop: "7%",
                    paddingBottom: "4%"
                    },
                }}
                >
                    {children}
        </Drawer>
    )
}

export default DrawerComponent



