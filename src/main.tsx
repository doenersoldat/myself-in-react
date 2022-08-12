import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ThemeContextWrapper from './context/theme-context/theme-context-wrapper'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeContextWrapper>
      <App />
    </ThemeContextWrapper>
  </React.StrictMode>,
)
