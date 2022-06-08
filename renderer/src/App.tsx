import GlobalStyle from '@/styles/GlobalStyle'
import { ThemeProvider } from 'styled-components'
import { theme } from '@/styles/themes'
import Button from '@/components/Button'

const App = () => {
  return (
    <ThemeProvider theme={theme['normal']}>
      <GlobalStyle />
      <section>
        <header>1234</header>
        <Button>button test</Button>
      </section>
    </ThemeProvider>
  )
}

export default App
