import { DefaultTheme } from 'styled-components'

const fonts: DefaultTheme['fonts'] = {
  title: '64px',
  semititle: '36px',
  content: '16px',
  description: '14px',
}

const NormalTheme: DefaultTheme = {
  colors: {
    black: '#011410',
    dark: '#222222',
    bright: '#efeff5',
    white: '#ffffff',
    primary: '#af46ff',
  },
  fonts,
}

const DarkTheme: DefaultTheme = {
  colors: {
    black: '#ffffff',
    dark: '#efeff5',
    bright: '#222222',
    white: '#011410',
    primary: '#af46ff',
  },
  fonts,
}

export const theme = {
  normal: NormalTheme,
  dark: DarkTheme,
}
