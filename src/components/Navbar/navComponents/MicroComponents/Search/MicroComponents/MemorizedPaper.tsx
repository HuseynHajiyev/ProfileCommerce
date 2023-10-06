import { memo, ReactNode, useRef } from 'react'

// MUI Imports
import { Paper } from '@mui/material'

interface MemorizedPaperProps {
    children: ReactNode;
}

const MemorizedPaper = memo(({children} : MemorizedPaperProps) => {
    const paperRef = useRef<HTMLDivElement>(null);
    return (
        <Paper ref={paperRef}>
            {children}
        </Paper>
    )
})

export default MemorizedPaper
