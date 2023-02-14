import { useContext } from 'react'
import { ThemeContext } from '../App'

export const Button = () => {
  const themes = useContext(ThemeContext)
  return (
    <div>
      <button
        style={{
          backgroundColor: themes.light.background,
          color: themes.light.foreground,
        }}
      >
        Jestem w trybie jasnym 😎
      </button>
      <button
        style={{
          backgroundColor: themes.dark.background,
          color: themes.dark.foreground,
        }}
      >
        Jestem w trybie ciemnym 🌙
      </button>
    </div>
  )
}
