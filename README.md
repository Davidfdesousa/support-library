# 🧱 Support Library Monorepo

Este é o monorepo do **Support Library**, um conjunto de bibliotecas pensadas para design systems modernos, com foco em acessibilidade, múltiplos temas, compatibilidade multiplataforma (React, Angular e Web Components), e integração via CDN.

---

## 📦 Estrutura

Gerenciado com [Turborepo](https://turbo.build/repo), o monorepo está organizado da seguinte forma:

### Aplicações

- `apps/playground-react`: playground em React para testes dos componentes.
- `apps/playground-angular`: playground em Angular.
- `apps/docs`: documentação em Next.js com Storybook integrado.

### Pacotes

- `packages/ui`: biblioteca de Web Components com suporte a React e Angular.
- `packages/tokens`: tokens de design organizados por categorias (`spacing`, `color`, `typography`, etc.).
- `packages/fonts`: gerenciamento e exposição de fontes via CDN.
- `packages/icons`: biblioteca de ícones otimizados para UI.
- `packages/eslint-config`: configurações compartilhadas de ESLint.
- `packages/typescript-config`: `tsconfig` compartilhado entre os pacotes.

---

## 🎨 Temas

Suporte nativo a temas:

- `light`
- `dark`
- `contrast` (alto contraste: #000, #fff, #fff333)

Troca de temas via classe na tag `html`, ex: `html.light`, `html.dark`.

---

## 🌐 CDN & Storybook

Tokens e fontes disponíveis via CDN para fácil integração em qualquer aplicação.

- 🔗 **Storybook Online**: [Acesse aqui](https://cdnexamples.blob.core.windows.net/storybook/index.html)
- 📁 Tokens e fontes exportados para: `/storybook-static/cdn`

---

## 🛠️ Tecnologias

- [TypeScript](https://www.typescriptlang.org/)
- [Stencil](https://stenciljs.com/) para Web Components
- [React](https://reactjs.org/) + [Angular](https://angular.io/)
- [Storybook](https://storybook.js.org/)
- [Style Dictionary](https://amzn.github.io/style-dictionary/#/)
- [Turborepo](https://turbo.build/)
- [Azure Blob Storage](https://azure.microsoft.com/) para hospedagem de CDN

---

## 🧪 Testes

A biblioteca de componentes tem suporte a testes unitários e segue as recomendações de acessibilidade (WCAG).

---

## 🚀 Comandos

### Instalar dependências

```sh
yarn install
```

### Build

```sh
yarn build
```

### Dev (para desenvolvimento local)

```sh
yarn dev
```

### Gerar tokens

```sh
yarn build:tokens
```

---

## ☁️ Remote Caching (opcional)

Caso queira habilitar cache remoto com a Vercel:

```sh
npx turbo login
npx turbo link
```

---

## 📚 Links úteis

- [Guia oficial Turborepo](https://turbo.build/repo/docs)
- [Guia oficial Stencil](https://stenciljs.com/docs/introduction)
- [Style Dictionary](https://amzn.github.io/style-dictionary/#/)

---

## 📬 Contato

Projeto mantido por [David](https://www.linkedin.com/in/davidfdesousa/) — ideias, sugestões ou melhorias são bem-<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Ícones IcoMoon</title>
  <!-- CSS do IcoMoon -->
  <link rel="stylesheet" href="/src/assets/icomoon/style.css" />
  <!-- CSS de aplicação -->
  <link rel="stylesheet" href="/src/style.css" />
</head>
<body>
  <div class="app-container">
    <h1>Ícones IcoMoon</h1>
    <input id="search" type="text" placeholder="Filtrar por nome ou keyword…" />
    <div id="grid" class="icon-grid"></div>
  </div>
  <div id="toast" class="toast" hidden></div>
  <script type="module" src="/src/main.ts"></script>
</body>
</html>


body {
margin: 0;
min-height: 100vh;
display: flex;
justify-content: center;
background: #121212;
color: #fff;
}

.app-container {
max-width: 800px;
width: 100%;
padding: 24px;
box-sizing: border-box;
}

h1 {
text-align: center;
margin-bottom: 16px;
}

#search {
width: 100%;
padding: 8px;
margin-bottom: 16px;
font-size: 16px;
box-sizing: border-box;
background: #1e1e1e;
color: #fff;
border: 1px solid #555;
border-radius: 4px;
}

.icon-grid {
display: grid;
grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
gap: 16px;
}

.icon-card {
background: #1f1f1f;
border: 1px solid #444;
border-radius: 4px;
padding: 16px;
text-align: center;
cursor: pointer;
}

.icon-card i {
font-size: 48px;
display: block;
}

.details {
margin-top: 8px;
display: flex;
flex-direction: column;
gap: 4px;
white-space: nowrap;
font-family: system-ui, sans-serif;
}

.ligature {
font-size: 14px;
color: #fff;
}

.code {
font-size: 12px;
color: #aaa;
}

.toast {
position: fixed;
bottom: 24px;
left: 50%;
transform: translateX(-50%);
background: #333;
color: #fff;
padding: 8px 16px;
border-radius: 4px;
pointer-events: none;
font-family: system-ui, sans-serif;}


import ‘./style.css’
import selection from ‘./assets/icomoon/selection.json’

interface Glyph {
icon: {
tags?: string[]
}
properties: {
name: string
code: number
ligatures?: string
}
}

// normalize acentos
function normalizeText(str: string): string {
return str
.normalize(‘NFD’)
.replace(/[̀-\u036f]/g, ‘’)
.toLowerCase()
}

const grid = document.getElementById(‘grid’)!
const searchInput = document.getElementById(‘search’) as HTMLInputElement
const toastEl = document.getElementById(‘toast’)!
const glyphs = (selection as any).icons as Glyph[]

function render(filter = ‘’) {
const term = normalizeText(filter)
grid.innerHTML = ‘’

glyphs
.filter(g => {
const tagsArray = g.icon.tags ?? []
const ligasArray = g.properties.ligatures
? g.properties.ligatures.split(’,’).map(t => t.trim())
: []
const keywords = [g.properties.name, …tagsArray, …ligasArray]
return keywords.some(raw => normalizeText(raw).includes(term))
})
.forEach(g => {
const ligas = g.properties.ligatures
? g.properties.ligatures.split(’,’).map(t => t.trim()).slice(0,2)
: []
const toShow = ligas.length > 0 ? ligas : [g.properties.name]


const card = document.createElement('div')
  card.className = 'icon-card'
  card.innerHTML = `
    <i class="icon icomoon icon-${g.properties.name}"></i>
    <div class="details">
      ${toShow.map(l => `<span class="ligature">${l}</span>`).join('')}
      <span class="code">U+${g.properties.code.toString(16).toUpperCase()}</span>
    </div>
  `
  card.onclick = () => {
    const snippet = `<i class=\"icon icomoon icon-${g.properties.name}\"></i>`
    navigator.clipboard.writeText(snippet).then(() => showToast(`Copiado: icon-${g.properties.name}`))
  }
  grid.appendChild(card)
})}

function showToast(msg: string) {
toastEl.textContent = msg
toastEl.hidden = false
setTimeout(() => (toastEl.hidden = true), 2000)
}

searchInput.addEventListener(‘input’, () => render(searchInput.value))
render()










