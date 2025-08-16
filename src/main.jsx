import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import IuuZinZin from './IuuZinZin.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <IuuZinZin />
  </StrictMode>,
)
