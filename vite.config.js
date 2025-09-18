import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/khaledsaap-portfolio/', // ← مهم: اسم الريبو مع شرطة في البداية والنهاية
  root: '.',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        portfolio: resolve(__dirname, 'portfolio.html'),
        clients: resolve(__dirname, 'clients.html'),
        experience: resolve(__dirname, 'experience.html'),
        contact: resolve(__dirname, 'contact.html'),
        // Case studies
        'palma-identity': resolve(__dirname, 'case-studies/palma-identity.html'),
        'aljazira-bank': resolve(__dirname, 'case-studies/aljazira-bank.html'),
        'mitsubishi-50th': resolve(__dirname, 'case-studies/mitsubishi-50th.html'),
        'zain-telecom': resolve(__dirname, 'case-studies/zain-telecom.html'),
        'omo-fmcg': resolve(__dirname, 'case-studies/omo-fmcg.html'),
        'cpc-construction': resolve(__dirname, 'case-studies/cpc-construction.html')
      }
    }
  },
  server: {
    port: 3000,
    open: true
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
})
