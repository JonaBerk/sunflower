import { useEffect, useState } from 'react'

function currentTheme() {
  const set = document.documentElement.dataset.theme
  if (set === 'light' || set === 'dark') return set
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

/** Half-filled circle. Switches between light and dark and remembers the choice. */
export default function ThemeToggle() {
  const [theme, setTheme] = useState(currentTheme)

  useEffect(() => {
    setTheme(currentTheme())
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = () => setTheme(currentTheme())
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.dataset.theme = next
    try {
      localStorage.setItem('theme', next)
    } catch {
      /* storage unavailable, the choice lasts for this visit */
    }
    setTheme(next)
    window.dispatchEvent(new Event('themechange'))
  }

  const label = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'

  return (
    <button type="button" className="theme-toggle" onClick={toggle} aria-label={label} title={label}>
      <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true">
        <circle cx="10" cy="10" r="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 2 A8 8 0 0 1 10 18 Z" fill="currentColor" />
      </svg>
    </button>
  )
}
