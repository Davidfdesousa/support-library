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

Projeto mantido por [David](https://github.com/seu-usuario-aqui) — ideias, sugestões ou melhorias são bem-vindas!
