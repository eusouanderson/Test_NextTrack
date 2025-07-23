# Frontend — NextTrack CRM: Módulo de Gestão de Contatos

Este projeto frontend é uma aplicação moderna para gestão de contatos, desenvolvida com foco em alta produtividade, escalabilidade e qualidade de código.

---

## 🧩 Tecnologias Utilizadas

- **Next.js**  
  Framework React com renderização híbrida (SSR, SSG) e roteamento otimizado.
- **TypeScript**  
  Tipagem estática para maior robustez e manutenibilidade.
- **Styled-Components**  
  CSS-in-JS para estilização dinâmica, modular e tema Dark/Light.
- **Arquitetura Atomic Design**  
  Organização de componentes em átomos, moléculas, organismos, templates e páginas para máxima reutilização e clareza.
- **Axios**  
  Cliente HTTP para consumo da API REST de contatos com facilidade e controle.
- **Storybook**  
  Ambiente isolado para desenvolvimento e documentação de componentes UI.

---

## 🎯 Objetivo do Projeto

Desenvolver um módulo de gestão de “Contatos” integrado ao sistema NextTrack CRM que permita:

- Listagem paginada de contatos
- Visualização detalhada
- Criação, edição parcial e exclusão
- Validação e feedbacks UX/UI consistentes

---

## 🗂 Estrutura do Projeto

```http
src/
├── components/
│ ├── atoms/
│ ├── molecules/
│ ├── organisms/
│ ├── templates/
│ └── pages/
├── hooks/
├── services/
├── styles/
├── stories/ # Componentes para Storybook
└── utils/
```

---

## 🚀 Como Rodar o Projeto

### Pré-requisitos

- Node.js v18+
- Yarn ou npm
- API backend NextTrack CRM rodando (ex: http://localhost:3000)

### Passos

## 🚀 Como Rodar o Projeto

### Pré-requisitos

- Node.js v18+
- pnpm instalado globalmente (`npm i -g pnpm`)
- API backend NextTrack CRM rodando (ex: http://localhost:3000)

### Passos

```bash
# Instalar dependências
pnpm install

# Build
pnpm build

# Rodar ambiente de desenvolvimento
pnpm dev

# Rodar ambiente de produção
pnpm start

```
