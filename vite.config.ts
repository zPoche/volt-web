import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// relative base → funktioniert auf Plesk auch in Unterordnern / ohne Rewrite-Tricks
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
});
