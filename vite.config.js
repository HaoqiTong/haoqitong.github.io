import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  plugins: [react()],
  // For a user site (username.github.io), base stays '/'
  base: '/',
})
