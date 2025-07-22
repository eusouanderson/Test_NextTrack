import 'dotenv/config';
import app from '../app.ts';
import type { Contact } from '../types/contact.types.ts';

const baseUrl = process.env.BASE_URL ?? 'http://localhost:3001';

describe('Contacts API via fetch handler', () => {
  let createdContactId: number | undefined;

  it('deve listar contatos com paginação', async () => {
    const url = new URL(`${baseUrl}/contacts`);
    url.searchParams.append('page', '1');
    url.searchParams.append('limit', '10');

    const req = new Request(url.toString(), { method: 'GET' });
    const res = await app.fetch(req);

    expect(res.status).toBe(200);
    const data = await res.json() as Contact[];
    expect(Array.isArray(data)).toBe(true);
  });

  it('deve criar um novo contato', async () => {
    const url = `${baseUrl}/contacts`;

    const uniqueSuffix = Date.now();
    const newContact = {
      name: `Anderson Silva ${uniqueSuffix}`,
      email: `anderson${uniqueSuffix}@example.com`,
      company: "Tech Solutions Ltda",
      phone: "+55 11 91234-5678"
    };

    const req = new Request(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newContact),
    });

    const res = await app.fetch(req);
    expect(res.status).toBe(201);

    const data = await res.json() as Contact;
    expect(data).toHaveProperty('id');
    expect(data.name).toBe(newContact.name);

    createdContactId = data.id;
  });

  it('deve obter detalhes de um contato pelo ID', async () => {
    const id = createdContactId ?? 1;
    const url = `${baseUrl}/contacts/${id}`;
    const req = new Request(url, { method: 'GET' });

    const res = await app.fetch(req);
    expect(res.status).toBe(200);

    const data = await res.json() as Contact;
    expect(data).toHaveProperty('id', id);
    expect(data).toHaveProperty('name');
  });

  it('deve atualizar parcialmente um contato pelo ID', async () => {
    const id = createdContactId ?? 1;
    const url = `${baseUrl}/contacts/${id}`;
    const updateData = { phone: "+55 11 98765-4321" };

    const req = new Request(url, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updateData),
    });

    const res = await app.fetch(req);
    expect(res.status).toBe(200);

    const data = await res.json() as Contact;
    expect(data).toHaveProperty('phone', updateData.phone);
  });

  it('deve excluir um contato pelo ID', async () => {
    const id = createdContactId ?? 4;
    const url = `${baseUrl}/contacts/${id}`;

    const req = new Request(url, { method: 'DELETE' });
    const res = await app.fetch(req);

    expect([200, 204]).toContain(res.status);
    
    const res2 = await app.fetch(req);
    expect(res2.status).toBe(404);
  });
});
