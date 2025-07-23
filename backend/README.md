# 📞 Next Apps API

API RESTful desenvolvida com [Hono](https://hono.dev/), PostgreSQL, TypeScript, e seguindo princípios SOLID. Permite gerenciar contatos com cadastro, listagem paginada, detalhes, edição parcial e remoção.

---

## 📁 Estrutura do Projeto

```bash
src/
├── app.ts # Inicialização da aplicação Hono
├── server.ts # Servidor HTTP
├── routes/ # Rotas HTTP
│ └── contacts.route.ts
├── controllers/ # Lógica dos controladores
│ └── contacts.controller.ts
├── services/ # Regras de negócio
│ └── contacts.service.ts
├── repositories/ # Comunicação com banco de dados
│ └── contacts.repository.ts
├── models/ # Tipos e interfaces
│ └── contact.model.ts
├── db/ # Migrations e conexão
│ ├── migrations/
│ └── client.ts
├── middlewares/ # Middlewares personalizados
│ └── validate.ts
├── validators/ # Schemas de validação Zod
│ └── contact.schema.ts
├── tests/ # Testes com Jest/Vitest
│ └── contact.test.ts
├── docs/ # Documentação OpenAPI e guias
│ ├── openapi.yaml
│ ├── docker.md
│ └── tests.md
├── types/ # Tipagens adicionais
│ └── env.d.ts
└── utils/ # Utilitários
└── pagination.ts
```

## 🚀 Executando o Projeto

### 1. Clonar e instalar dependências

```bash
git clone https://github.com/eusouanderson/Test_NextTrack.git
```

```bash
pnpm install
```

## 2. Variáveis de Ambiente

```bash
Crie um arquivo .env (caso eu tenha ignorado):
```

Ex;

```bash
DATABASE_URL=postgresql://usuario:senha123@localhost:5432/contactdb
BASE_URL=http://localhost:3001
```

## 🐳 Docker

Subir banco de dados com Docker Compose

```docker
docker compose up -d
```

## 🧪 Testes

### Executar com Jest:

```json
"test": "jest",
"test:watch": "jest --watch",
"test:cov": "jest --coverage",
"test:unit": "vitest run",
"test:unit:watch": "vitest",
```

Testes unitários para serviços e repositórios

Testes de integração para endpoints usando supertest ou similar

Cobertura via jest --coverage

## 📄 Documentação OpenAPI

Arquivo: src/docs/openapi.yaml

Use uma extensão como "Swagger Viewer" no VSCode ou publique com Swagger UI Express/Hono middleware.

## 📋 Endpoints

### ➕ Criar um novo contato

Faz um post de um contato.

**Requisição:**

```http
POST /contacts
Content-Type: application/json
```

```json
{
  "name": "Anderson Silva",
  "email": "anderson3.silva@example.com",
  "company": "Tech Solutions Ltda",
  "phone": "+55 11 91234-5678"
}
```

### 🔍 Listar contatos (com paginação opcional)

Retorna uma lista paginada de contatos.

**Requisição:**

```http
GET /contacts?page=1&limit=10
```

response:

```json
[
  {
    "id": 1,
    "name": "Anderson Silva",
    "email": "anderson@example.com",
    "company": "Tech Solutions Ltda",
    "phone": "+55 11 91234-5678",
    "created_at": "2025-07-22T22:54:33.275Z",
    "updated_at": "2025-07-22T22:54:33.275Z"
  }
]
```

### 📄 Obter contato por id

**Requisição:**

```http
GET /contacts/{id}
```

response:

```json
{
  "id": 1,
  "name": "Fabio Careca",
  "email": "fabio.santos@example.com",
  "company": "Tech Solutions Ltda",
  "phone": "+55 11 98765-4321",
  "created_at": "2025-07-22T22:45:41.752Z",
  "updated_at": "2025-07-22T22:45:41.752Z"
}
```

### ✏️ Atualizar parcialmente um contato

Atualiza apenas os campos informados de um contato existente.

**Requisição:**

```http
PATCH /contacts/{id}
Content-Type: application/json
```

response:

```json
{
  "phone": "+55 11 98765-4321"
}
```

### ❌ Excluir um contato

Remove um contato do sistema.

**Requisição:**

```http
DELETE /contacts/{id}
```

> ⚠️ **Importante:**  
> Para testar as rotas da API de forma prática e rápida, recomenda-se usar o arquivo `client.http` com o plugin REST Client do VS Code.  
> Isso facilita enviar requisições HTTP diretamente do editor, sem precisar usar ferramentas externas.

### 📖 Documentação Swagger (OpenAPI)

```http
GET /docs/openai
```

# 📦 Tecnologias Utilizadas

- **Hono** (framework HTTP)
- **TypeScript**
- **Jest** (para testes)
- **Swagger UI**
- **PostgreSQL** (em Docker)
- **Bun** (runtime) ⚠️ **Importante:** certifique-se de ter o Bun instalado para rodar o projeto.

Ex:
