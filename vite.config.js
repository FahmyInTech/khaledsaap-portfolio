import { defineConfig } from 'vite'
import { resolve } from 'path'
import { glob } from 'glob'

// Function to automatically discover all HTML files
function getHtmlFiles() {
  const htmlFiles = glob.sync('**/*.html', { 
    ignore: ['node_modules/**', 'dist/**'] 
  })
  
  const input = {}
  htmlFiles.forEach(file => {
    // Create a key from the file path (replace slashes and dots with hyphens)
    const key = file.replace(/[\/\\]/g, '-').replace('.html', '')
    input[key] = resolve(__dirname, file)
  })
  
  return input
}

export default defineConfig({
  base: '/', 
  root: '.',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: getHtmlFiles()
    },
    // Add this to handle assets better
    assetsInlineLimit: 0
  },
  server: {
    port: 3000,
    open: true
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@assets': resolve(__dirname, 'src/assets')
    }
  }
,
  // Add this to handle different file types
  assetsInclude: ['**/*.svg', '**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif']
})