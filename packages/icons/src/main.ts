import './style.css'
import selection from './assets/icomoon/selection.json'

interface Glyph {
  properties: {
    name: string
    code: number
    tags?: string[]
  }
}

// monta grid de ícones
const grid = document.getElementById('grid')!
const searchInput = document.getElementById('search') as HTMLInputElement
const toastEl = document.getElementById('toast')!

const glyphs = (selection as any).icons as Glyph[]

function render(filter = '') {
  grid.innerHTML = ''
  const term = filter.toLowerCase()

  glyphs
    .filter(g => {
      const keywords = [g.properties.name, ...(g.properties.tags ?? [])]
      return keywords.some(t => t.toLowerCase().includes(term))
    })
    .forEach(g => {
      const card = document.createElement('div')
      card.className = 'icon-card'
      card.innerHTML = `
        <i class="icon icomoon icon-${g.properties.name}"></i>
        <div class="details">
          <span class="label">${g.properties.name}</span>
          <span class="code">U+${g.properties.code.toString(16).toUpperCase()}</span>
        </div>
      `
      card.onclick = () => {
        const snippet = `<i class="icon icomoon icon-${g.properties.name}"></i>`
        navigator.clipboard.writeText(snippet).then(() => showToast(`Copiado: icon-${g.properties.name}`))
      }
      grid.appendChild(card)
    })
}

function showToast(msg: string) {
  toastEl.textContent = msg
  toastEl.hidden = false
  setTimeout(() => (toastEl.hidden = true), 2000)
}

// eventos
searchInput.addEventListener('input', () => render(searchInput.value))

// render inicial
render()
