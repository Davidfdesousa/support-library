import { Meta } from "@storybook/blocks";


# ✨ Design Tokens – Guia Visual (Estilo Primer + Support Library)

Este guia segue o padrão semântico inspirado no Primer do GitHub, adaptado para o design system da **Support Library**. A estrutura utiliza tokens nomeados por contexto e intenção de uso, com variações de tom bem definidas para facilitar a aplicação em temas claros e escuros.

---

## 📚 Convenção de nomes

Usamos nomes de **intenção semântica** combinados com **variações de tom**. Os principais grupos são:

### 🧱 Estrutura semântica:

- `bg`: fundo principal da interface (ex: `body`, `card`, `container`)
- `content`: cor de conteúdo visível sobre `bg` (ex: texto, ícones)
- `border`: cor de linhas e contornos
- `primary`, `secondary`, `success`, `warning`, `danger`: cores contextuais principais

### 🌈 Variações de tom:

- `subtle`: mais suave, geralmente para fundo
- `muted`: tom reduzido, para hover ou elementos secundários
- `default`: tom base da identidade visual
- `strong`: maior presença, contraste médio
- `intense`: o tom mais intenso/escuro
- `hover`: estado de foco visual
- `pressed`: estado pressionado

Essas combinações geram tokens como:

- `color.primary.default`
- `color.secondary.subtle`
- `color.content`
- `color.bg`

---

## 🌗 Base Theme Tokens

| Token           | Descrição                                 |
|----------------|---------------------------------------------|
| `color.bg`     | Fundo da interface                         |
| `color.content`| Cor de conteúdo sobre `bg`                |
| `color.border` | Cor de divisões e contornos               |

---

## 🔹 Cores Contextuais

Tokens que definem os estilos principais da interface:

### `primary`, `secondary`, `success`, `warning`, `danger`

Cada um desses tokens possui as seguintes variações:

- `.subtle`
- `.muted`
- `.default`
- `.strong`
- `.intense`
- `.hover`
- `.pressed`

---

## 🧰 Tokens de Componente

Tokens derivados usados em componentes, como botões:

| Token                        | Base usada                        |
|-----------------------------|-----------------------------------|
| `button.primary.bg`         | `color.primary.default`          |
| `button.primary.content`    | `color.content`                  |
| `button.primary.hover-bg`   | `color.primary.hover`            |
| `button.secondary.bg`       | `color.secondary.default`        |
| `button.secondary.content`  | `color.content`                  |

---

## 📘 Recomendações

- Prefira tokens semânticos ao invés de nomes brutos (ex: `primary.500` ❌)
- Use `bg` e `content` como base para estrutura e contraste
- Utilize `subtle` para fundos, `muted` para hover e `strong/intense` para destaque
- A consistência nos nomes facilita o theming e a manutenção

---

> 💡 **Dica**: esse padrão permite construir temas completos alterando apenas os arquivos `light.json`, `dark.json` e `contrast.json`, mantendo todos os componentes funcionando com os mesmos tokens.
