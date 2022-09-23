import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Markdown from 'vite-plugin-md'
import { fileURLToPath } from 'url';
import { resolve, dirname } from 'path';
import svgPlugin from 'vite-plugin-svg';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => ({
  build: mode === 'lib' ? {
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'iamkey',
      fileName: (format) => `components.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // Add external deps here
        globals: {
          vue: 'Vue',
        },
      },
    },
  } : {},
  resolve:{
    alias:{
      '@/' : `${resolve(__dirname, 'src')}/`
    },
  },
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/], // <--
    }),
    Markdown(),
    svgPlugin()
  ]
}));
