# 📞 Contact API

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
git clone https://github.com/seu-usuario/contact-api.git

pnpm install
2. Variáveis de Ambiente
Crie um arquivo .env:


DATABASE_URL=postgres://usuario:senha123@localhost:5432/contactdb
PORT=3000
🐳 Docker
Subir banco de dados com Docker Compose

docker compose up -d
docker-compose.yml exemplo:
yaml
Copiar
Editar
version: "3.8"

services:
  db:
    image: postgres:15
    container_name: pg-contact-api
    restart: always
    environment:
      POSTGRES_USER: usuario
      POSTGRES_PASSWORD: senha123
      POSTGRES_DB: contactdb
    ports:
      - "5432:5432"
    volumes:
      - pgdata:/var/lib/postgresql/data

volumes:
  pgdata:
🧪 Testes
Executar com Jest:
bash
Copiar
Editar
pnpm test
Executar com Vitest (opcional):
bash
Copiar
Editar
pnpm vitest run
Estrutura de testes:

Testes unitários para serviços e repositórios

Testes de integração para endpoints usando supertest ou similar

Cobertura via jest --coverage

📄 Documentação OpenAPI
Arquivo: src/docs/openapi.yaml

Use uma extensão como "Swagger Viewer" no VSCode ou publique com Swagger UI Express/Hono middleware.

Exemplo de rota:
yaml
Copiar
Editar
paths:
  /contacts:
    get:
      summary: Listar contatos com paginação
      parameters:
        - name: page
          in: query
          schema:
            type: integer
        - name: limit
          in: query
          schema:
            type: integer
      responses:
        200:
          description: Lista de contatos
📦 Scripts Úteis
bash
Copiar
Editar
pnpm run dev         # Rodar com Bun
pnpm run migrate     # Executar migrations (node-pg-migrate)
pnpm run build       # Transpilar TypeScript
pnpm test            # Rodar testes
📚 Tecnologias
Categoria	Pacotes
Core	hono, pg, zod, dotenv
Dev	typescript, jest, vitest
Migrations	node-pg-migrate
Qualidade	eslint, @typescript-eslint/*
Runtime Dev	bun
```
