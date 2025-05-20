import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import App from './App'
import './styles.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </HelmetProvider>
)
