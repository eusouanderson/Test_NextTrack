markdown

# Testes da API de Contatos

## 📝 Descrição

Testes para os endpoints de CRUD (Create, Read, Update, Delete) da API de gerenciamento de contatos implementados usando Fetch API.

## 🧠 Pré-requisitos

- API rodando localmente em `http://localhost`
- Test runner configurado (Jest, Deno test, etc)
- TypeScript (para tipagem dos dados)

## 🧪 Testes Implementados

### 1. Listagem de Contatos com Paginação

```typescript
it('deve listar contatos com paginação', async () => {
  const url = new URL(`${baseUrl}/contacts`);
  url.searchParams.append('page', '1');
  url.searchParams.append('limit', '10');

  const req = new Request(url.toString(), { method: 'GET' });
  const res = await app.fetch(req);

  expect(res.status).toBe(200);
  const data = (await res.json()) as Contact[];
  expect(Array.isArray(data)).toBe(true);
});
```

Verifica:

✅ Status HTTP 200 (OK)

✅ Retorno é um array de contatos

✅ Suporta parâmetros de paginação (page e limit)

### 2. Criação de Novo Contato

```typescript
it('deve criar um novo contato', async () => {
  const newContact = {
    name: 'Anderson Silva',
    email: 'anderson3.silva@example.com',
    company: 'Tech Solutions Ltda',
    phone: '+55 11 91234-5678',
  };

  const req = new Request(`${baseUrl}/contacts`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newContact),
  });

  const res = await app.fetch(req);
  const data = (await res.json()) as Contact;

  expect(res.status).toBe(201);
  expect(data).toHaveProperty('id');
  expect(data.name).toBe(newContact.name);
  createdContactId = data.id;
});
```

Verifica:

✅ Status HTTP 201 (Created)

✅ Contato retornado contém ID

✅ Dados correspondem ao payload enviado

✅ Armazena ID para uso em testes subsequentes

### 3. Obter Detalhes do Contato

```typescript
it('deve obter detalhes de um contato pelo ID', async () => {
  const id = createdContactId ?? 1;
  const req = new Request(`${baseUrl}/contacts/${id}`, { method: 'GET' });

  const res = await app.fetch(req);
  const data = (await res.json()) as Contact;

  expect(res.status).toBe(200);
  expect(data).toHaveProperty('id', id);
  expect(data).toHaveProperty('name');
});
```

Verifica:

✅ Status HTTP 200 (OK)

✅ ID do contato corresponde ao solicitado

✅ Presença de campos obrigatórios (name)

✅ Fallback para ID 1 se criação falhar

### 4. Atualização Parcial do Contato

```typescript
it('deve atualizar parcialmente um contato pelo ID', async () => {
  const id = createdContactId ?? 1;
  const updateData = { phone: '+55 11 98765-4321' };

  const req = new Request(`${baseUrl}/contacts/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updateData),
  });

  const res = await app.fetch(req);
  const data = (await res.json()) as Contact;

  expect(res.status).toBe(200);
  expect(data).toHaveProperty('phone', updateData.phone);
});
```

Verifica:

✅ Status HTTP 200 (OK)

✅ Campo específico foi atualizado

✅ Suporta atualização parcial

### 5. Exclusão do Contato

```typescript
it('deve excluir um contato pelo ID', async () => {
  const id = createdContactId ?? 4;
  const req = new Request(`${baseUrl}/contacts/${id}`, { method: 'DELETE' });
  const res = await app.fetch(req);

  expect([200, 204]).toContain(res.status);
});
```

Verifica:

✅ Status HTTP 200 (OK) ou 204 (No Content)

✅ Fallback para ID 4 se criação falhar

▶️ Como Executar
Inicie a API localmente

Execute o comando de testes:

```bash
pnpm run test
```

### 📌 Observações

Testes são sequenciais e interdependentes

Usa ID do contato criado nos testes subsequentes

Fallback para IDs padrão (1 ou 4) caso criação falhe

Requer servidor local em execução durante os testes

📂 Estrutura do Arquivo

```typescript
import app from '../app.ts';
import type { Contact } from '../types/contact.types.ts';

const baseUrl = 'http://localhost';
let createdContactId: number | undefined;
```
