import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from './contexts/ThemeContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <ThemeProvider>
          <App />
        </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
