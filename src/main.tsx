import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
// Supports weights 400-700
import '@fontsource-variable/lora/wght.css';
import "@fontsource/roboto/400.css";
import "@fontsource/poppins/600.css";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
