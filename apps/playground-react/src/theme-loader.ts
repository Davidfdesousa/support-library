export function applyTheme(theme: 'light' | 'dark' | 'contrast') {
  const existingLink = document.getElementById('theme-stylesheet') as HTMLLinkElement | null

  const href = `https://cdnexamples.blob.core.windows.net/storybook/cdn/tokens/css/variables.${theme}.css`

  if (existingLink) {
    existingLink.href = href
  } else {
    const link = document.createElement('link')
    link.id = 'theme-stylesheet'
    link.rel = 'stylesheet'
    link.href = href
    document.head.appendChild(link)
  }
}