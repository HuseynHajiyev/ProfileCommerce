import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      // During development, Vite will serve the file from `@fs` virtual module
      usePolling: true,
    }
  }
})
