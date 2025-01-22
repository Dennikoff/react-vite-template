import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './static/style/index.css'
import App from './app/App/App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
