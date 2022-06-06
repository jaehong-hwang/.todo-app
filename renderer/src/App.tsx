import GlobalStyle from '@/styles/GlobalStyle'
import styled, { ThemeProvider } from 'styled-components'
import { theme } from '@/styles/themes'
import Button from '@/components/Button'
import Sidebar from '@/components/Layout/Sidebar'

const App = () => {
  return (
    <ThemeProvider theme={theme['normal']}>
      <GlobalStyle />
      <AppWrapper>
        <Sidebar />
        <AppBody>
          <header>1234</header>
          <Button>button test</Button>
        </AppBody>
      </AppWrapper>
    </ThemeProvider>
  )
}

const AppWrapper = styled.section`
  display: flex;
`

const AppBody = styled.article`
  flex: 1;
`

export default App
