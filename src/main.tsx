import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { QueryClientProvider } from '@tanstack/react-query'
import { jttfQueryClient } from './tanstack/tanstack-query.ts'
import { BrowserRouter, Route, Routes } from "react-router";
import ProductPage from './products/productPage.tsx'
import ProductsPage from './products/productsPage.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={jttfQueryClient}>

      <BrowserRouter>

        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="product/:productId" element={<ProductPage />} />

        </Routes>

      </BrowserRouter>

    </QueryClientProvider>

  </StrictMode >,
)
