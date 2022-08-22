import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Unocss from 'unocss/vite'
// https://vitejs.dev/config/
export default defineConfig({
  server:{
    port:8080,
  },
  plugins: [react(), Unocss(),]
})
