import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { applyTheme } from './theme-loader'

type Theme = 'light' | 'dark' | 'contrast'

function App() {
  const [theme, setTheme] = useState<Theme>('light')

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark', 'contrast')
    document.documentElement.classList.add(theme)
    applyTheme(theme)
  }, [theme])

  const handleThemeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTheme(e.target.value as Theme)
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>

      <div className="card">
        {/* @ts-ignore */}
        <ui-button variant="primary" size="md">Web Component</ui-button>

        <fieldset className="theme-toggle">
          <legend>Escolha o tema:</legend>
          <label>
            <input
              type="radio"
              name="theme"
              value="light"
              checked={theme === 'light'}
              onChange={handleThemeChange}
            />
            Tema Light
          </label>
          <label>
            <input
              type="radio"
              name="theme"
              value="dark"
              checked={theme === 'dark'}
              onChange={handleThemeChange}
            />
            Tema Dark
          </label>
          <label>
            <input
              type="radio"
              name="theme"
              value="contrast"
              checked={theme === 'contrast'}
              onChange={handleThemeChange}
            />
            Tema Contraste
          </label>
        </fieldset>

        <p>
          Edit <code>src/app/app.component.html</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
