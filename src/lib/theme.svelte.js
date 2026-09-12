function getInitial() {
  try {
    return localStorage.getItem('theme') === 'dark'
  } catch {
    return false
  }
}

export const theme = $state({ dark: getInitial() })

export function toggleTheme() {
  theme.dark = !theme.dark
  try {
    localStorage.setItem('theme', theme.dark ? 'dark' : 'light')
  } catch {
    // ignore (private browsing, blocked storage, etc.)
  }
}
