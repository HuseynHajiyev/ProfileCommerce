import { memo, ReactNode } from 'react'

// MUI Imports
import { Paper } from '@mui/material'

interface MemorizedPaperProps {
    children: ReactNode;
}

const MemorizedPaper = memo(({children} : MemorizedPaperProps) => {
    return (
        <Paper style={{ maxHeight: '200px', overflow: 'auto' }}>
            {children}
        </Paper>
    )
})

export default MemorizedPaper
