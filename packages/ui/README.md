# 🧩 UI Library – Support Library

Esta biblioteca contém os **Web Components** reutilizáveis da Support Library, desenvolvidos com [StencilJS](https://stenciljs.com/), com foco em acessibilidade, compatibilidade multiplataforma (React, Angular e Vanilla JS) e integração com tokens temáticos via CDN.

---

## ⚙️ Estrutura

Os componentes estão localizados em:

```
src/components/
```

Exemplo atual:

- `ui-button`: botão base com suporte a variações de tema, acessibilidade e estados (`hover`, `pressed`).

---

## 📦 Compatibilidade

Os componentes são exportados para múltiplos ambientes:

- ✅ Web Components nativos (`.js`)
- ✅ React (`@stencil/react-output-target`)
- ✅ Angular (`@stencil/angular-output-target`)

---

## 🎨 Temas

Os estilos são dinamicamente aplicados com base em tokens carregados via CDN.

Temas disponíveis:

- `light`
- `dark`
- `contrast`

Aplicação via classe no `html`, exemplo:

```html
<html class="dark">
```

---

## 🧪 Acessibilidade

Todos os componentes seguem as diretrizes do [WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/) e boas práticas de foco, roles, ARIA e navegação via teclado.

---

## 🧰 Tokens e Estilos

Os tokens utilizados são carregados automaticamente do pacote `@support-library/tokens`, via arquivos estáticos hospedados no CDN da aplicação.

Tokens disponíveis:

- `color`, `spacing`, `typography`, `radius`, `elevation`, etc.

---

## 🚀 Scripts principais

### Desenvolvimento local

```sh
yarn dev
```

### Build

```sh
yarn build
```

### Testes (futuramente)

```sh
yarn test
```

---

## 🔌 Integração em outras libs

Exemplo de uso em React:

```tsx
import { MyButton } from '@support-library/ui-react';

<MyButton label="Clique aqui" variant="primary" />
```

Em Angular, via módulo:

```ts
import { defineCustomElements } from '@support-library/ui/loader';
defineCustomElements(window);
```

---

## 📘 Observações

- Todos os estilos estão baseados em tokens e não devem ser sobrescritos diretamente.
- O build inclui arquivos compatíveis com browsers modernos (ESModules).
- Componentes possuem fallback visual para ambientes sem suporte a Web Components.

---

## 📬 Contato

Dúvidas, sugestões ou melhorias? Entre em contato com o mantenedor do projeto.
