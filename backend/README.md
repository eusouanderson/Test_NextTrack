```bash

src/
├── app.ts
├── server.ts
├── routes/
│ └── contacts.route.ts
├── controllers/
│ └── contacts.controller.ts
├── services/
│ └── contacts.service.ts
├── repositories/
│ └── contacts.repository.ts
├── models/
│ └── contact.model.ts
├── db/
│ ├── migrations/
│ └── client.ts
├── middlewares/
│ └── validate.ts
├── validators/
│ └── contact.schema.ts
├── tests/
│ └── contact.test.ts
├── docs/
│ └── openapi.yaml
├── types/
│ └── env.d.ts
└── utils/
└── pagination.ts

```

# Depencies

pnpm add hono pg zod dotenv

hono Framework web minimalista (roteamento, handlers)
pg Cliente PostgreSQL
zod Validação de dados
dotenv Carregamento de variáveis de ambiente

# Dependências de Desenvolvimento (devDependencies)

pnpm add -D typescript tsx @types/node \
 jest ts-jest @types/jest \
 vitest \
 node-pg-migrate \
 eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
sudo snap install bun-js

docker compose up -d
