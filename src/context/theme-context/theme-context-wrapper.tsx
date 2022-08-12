import { useState, useEffect, FC, ReactNode } from 'react'
import ThemeContext from './theme-context'

const ThemeContextWrapper: FC<{ children: ReactNode }> = ({ children }) => {
  const browserDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
  const defaultMode = localStorage.getItem('theme') || browserDarkMode ? 'dark' : 'light'

  const [theme, setTheme] = useState(defaultMode)

  const changeCurrentTheme = (newTheme: 'light' | 'dark') => {
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.remove('dark')
    } else {
      document.documentElement.classList.add('dark')
    }
  }, [theme])

  return (
    <ThemeContext.Provider value={{ currentTheme: theme, changeCurrentTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextWrapper
