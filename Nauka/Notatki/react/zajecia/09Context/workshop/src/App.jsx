import { createContext } from 'react'
import { Header } from './components/Header'

export const ThemeContext = createContext()
export const App = () => {
  const themes = {
    light: {
      foreground: '#000000',
      background: '#eeeeee',
    },
    dark: {
      foreground: '#ffffff',
      background: '#222222',
    },
  }
  return (
    <ThemeContext.Provider value={themes}>
      <div>
        <Header />
      </div>
    </ThemeContext.Provider>
  )
}
