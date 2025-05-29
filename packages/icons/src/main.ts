import './style.css'
import selection from './assets/icomoon/selection.json'

interface Glyph {
  icon: {
    tags?: string[]        // array de keywords
  }
  properties: {
    name: string
    code: number
    ligatures?: string     // string de ligatures (vírgula-separada)
  }
}

// helper para remover acentos e normalizar
function normalizeText(str: string): string {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
}

// referências no DOM
const grid = document.getElementById('grid')!
const searchInput = document.getElementById('search') as HTMLInputElement
const toastEl = document.getElementById('toast')!

const glyphs = (selection as any).icons as Glyph[]

function render(filter = '') {
  grid.innerHTML = ''
  const term = normalizeText(filter)

  glyphs
    .filter(g => {
      // 1) tags do icon.tags (array)
      const tagsArray = g.icon.tags ?? []

      // 2) ligatures do properties.ligatures (string csv)
      const ligasArray = g.properties.ligatures
        ? g.properties.ligatures.split(',').map(t => t.trim())
        : []

      // 3) nome do ícone
      const keywords = [
        g.properties.name,
        ...tagsArray,
        ...ligasArray
      ]

      // 4) busca accent-insensitive
      return keywords.some(raw =>
        normalizeText(raw).includes(term)
      )
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
        navigator.clipboard
          .writeText(snippet)
          .then(() => showToast(`Copiado: icon-${g.properties.name}`))
      }
      grid.appendChild(card)
    })
}

function showToast(msg: string) {
  toastEl.textContent = msg
  toastEl.hidden = false
  setTimeout(() => (toastEl.hidden = true), 2000)
}

searchInput.addEventListener('input', () => render(searchInput.value))

// primeira renderização
render()
