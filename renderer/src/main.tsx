import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '@/App'
import '@/samples/electron-store'
import '@/samples/preload-module'
import GlobalStyle from '@/styles/GlobalStyle'
import { ThemeProvider } from 'styled-components'
import { theme } from '@/styles/themes'

const root = createRoot(document.getElementById('root')!)

root.render(
  <StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme['normal']}>
      <App />
    </ThemeProvider>
  </StrictMode>,
)

window.removeLoading()
