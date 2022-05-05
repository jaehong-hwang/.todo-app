import { DefaultTheme } from 'styled-components'

const NormalTheme: DefaultTheme = {
  colors: {
    black: '#011410',
    dark: '#222222',
    bright: '#efeff5',
    primary: '#af46ff',
    white: '#ffffff',
  },
  fonts: {
    title: '64px',
    semititle: '36px',
    content: '16px',
    description: '14px',
  },
}

export const theme = {
  normal: NormalTheme,
}
