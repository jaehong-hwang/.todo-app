import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import '@/samples/electron-store'
import '@/samples/preload-module'
import GlobalStyle from '@/styles/GlobalStyle'

const root = createRoot(document.getElementById('root')!)

root.render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>,
)

window.removeLoading()
