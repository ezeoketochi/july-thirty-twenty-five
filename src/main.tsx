import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { QueryClientProvider } from '@tanstack/react-query'
import { jttfQueryClient } from './tanstack/tanstack-query.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={jttfQueryClient}>
      <App />

    </QueryClientProvider>
  </StrictMode>,
)
