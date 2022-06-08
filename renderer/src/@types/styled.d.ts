import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Record<'black' | 'dark' | 'primary' | 'white' | 'bright', string>
    fonts: Record<'title' | 'semititle' | 'content' | 'description', string>
  }
}
