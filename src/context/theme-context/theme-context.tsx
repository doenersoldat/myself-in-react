import { createContext } from 'react'

const defaultValue = {
  currentTheme: 'light',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  changeCurrentTheme: (newTheme: 'light' | 'dark') => {},
}

const ThemeContext = createContext(defaultValue)

export default ThemeContext
