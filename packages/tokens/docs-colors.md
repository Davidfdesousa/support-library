# 🎨 Design Tokens – Guia Visual (Estilo Primer + Support Library)

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

| Token           | Descrição                                 | Light                 | Dark                  |
|----------------|---------------------------------------------|------------------------|------------------------|
| `color.bg`     | Fundo da interface                         | `#FFFFFF`             | `#111827`             |
| `color.content`| Cor de conteúdo sobre `bg`                | `#111827`             | `#FFFFFF`             |
| `color.border` | Cor de divisões e contornos               | `#E5E7EB`             | `#4B5563`             |

---

## 🔷 Primary (cor principal)

| Token                     | Light       | Dark        |
|--------------------------|-------------|-------------|
| `primary.subtle`         | `#DBEAFE`   | `#1E3A8A`   |
| `primary.muted`          | `#93C5FD`   | `#1D4ED8`   |
| `primary.default`        | `#3B82F6`   | `#60A5FA`   |
| `primary.strong`         | `#2563EB`   | `#93C5FD`   |
| `primary.intense`        | `#1D4ED8`   | `#BFDBFE`   |
| `primary.hover`          | `#60A5FA`   | `#3B82F6`   |
| `primary.pressed`        | `#2563EB`   | `#93C5FD`   |

---

## 🟧 Secondary (laranja)

| Token                     | Light       | Dark        |
|--------------------------|-------------|-------------|
| `secondary.subtle`       | `#FED7AA`   | `#4E1E0E`   |
| `secondary.muted`        | `#FB923C`   | `#9A3412`   |
| `secondary.default`      | `#FF6200`   | `#FB923C`   |
| `secondary.strong`       | `#C2410C`   | `#FDBA74`   |
| `secondary.intense`      | `#9A3412`   | `#FFD5BB`   |
| `secondary.hover`        | `#F97316`   | `#FF7728`   |
| `secondary.pressed`      | `#C2410C`   | `#EA580C`   |

---

## ✅ Status Tokens

| Token                 | Light (bg) | Light (default) | Dark (bg) | Dark (default) |
|----------------------|-------------|------------------|------------|-----------------|
| `success.subtle`     | `#D1FAE5`   | `#10B981`        | `#065F46`  | `#6EE7B7`       |
| `warning.subtle`     | `#FEF3C7`   | `#F59E0B`        | `#78350F`  | `#FDE68A`       |
| `danger.subtle`      | `#FECACA`   | `#EF4444`        | `#7F1D1D`  | `#F87171`       |
| `info.subtle`        | `#DBEAFE`   | `#3B82F6`        | `#1E3A8A`  | `#60A5FA`       |

---

## 🧩 Tokens de componente (ex: Botão)

| Token                        | Base usada                        |
|-----------------------------|-----------------------------------|
| `button.primary.bg`         | `color.primary.default`          |
| `button.primary.content`    | `color.content`                  |
| `button.primary.hover-bg`   | `color.primary.hover`            |
| `button.secondary.bg`       | `color.secondary.default`        |
| `button.secondary.content`  | `color.content`                  |

---

## 📘 Recomendações

- Use tokens semânticos ao invés de nomes brutos (ex: `primary.500` ❌)
- Mantenha `bg` e `content` como base para layout e contraste
- Use `subtle` para fundos, `muted` para estados passivos, `strong/intense` para alto impacto
- Nomes consistentes = fácil theming, fácil manutenção

---

> 💡 **Dica**: esse padrão permite construir temas completos, alterar apenas `light.json` e `dark.json` e manter todos os componentes funcionando 100% com Design Tokens.

