import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { applyTheme } from './theme-loader'

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add(theme)

    applyTheme(theme) // aqui a mágica acontece
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
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

        <button onClick={toggleTheme} style={{ marginTop: '1rem' }}>
          Toggle Theme (Current: {theme})
        </button>

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
