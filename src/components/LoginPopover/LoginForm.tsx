import { Box, Button, TextField, Typography } from '@mui/material'
import { useState } from 'react'

const LoginForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
  return (
        <Box sx={{ padding: '20px' }}>
            <Typography variant="h6">Login</Typography>
            <form onSubmit={handleSubmit}>
                <div>
                    <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <TextField
                        label="Password"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>
                <div style={{ marginTop: '20px' }}>
                    <Button type="submit" variant="contained" color="primary">
                        Submit
                    </Button>
                </div>
            </form>
        </Box>
  )
}

export default LoginForm
