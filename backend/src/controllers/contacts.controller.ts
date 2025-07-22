import { Context } from 'hono';
import { ContactService } from '../services/contacts.service.ts';

export class ContactController {
  private service = new ContactService();

  async create(c: Context) {
    try {
      const body = await c.req.json();

      const emailExists = await this.service.existsByEmail(body.email);
      if (emailExists) {
        return c.json({ message: 'Email já cadastrado' }, 409);
      }

      const contact = await this.service.create(body);
      return c.json(contact, 201);
    } catch (error: any) {
      console.error('Create contact error:', error);
      return c.json({ message: 'Erro interno ao criar contato' }, 500);
    }
  }

  async list(c: Context) {
    try {
      const page = Number(c.req.query('page') || 1);
      const limit = Number(c.req.query('limit') || 10);
      const result = await this.service.list(page, limit);
      return c.json(result);
    } catch (error) {
      console.error('List contacts error:', error);
      return c.json({ message: 'Erro interno ao listar contatos' }, 500);
    }
  }

  async getById(c: Context) {
    try {
      const id = c.req.param('id');
      const contact = await this.service.getById(id);
      if (!contact) {
        return c.json({ message: 'Contato não encontrado' }, 404);
      }
      return c.json(contact);
    } catch (error) {
      console.error('Get contact by ID error:', error);
      return c.json({ message: 'Erro interno ao buscar contato' }, 500);
    }
  }

  async update(c: Context) {
    try {
      const id = c.req.param('id');
      const body = await c.req.json();

      const existing = await this.service.getById(id);
      if (!existing) {
        return c.json({ message: 'Contato não encontrado' }, 404);
      }

      if (body.email && body.email !== existing.email) {
        const emailExists = await this.service.existsByEmail(body.email);
        if (emailExists) {
          return c.json({ message: 'Email já cadastrado' }, 409);
        }
      }

      const contact = await this.service.update(id, body);
      return c.json(contact);
    } catch (error: any) {
      console.error('Update contact error:', error);
      return c.json({ message: 'Erro interno ao atualizar contato' }, 500);
    }
  }

  async delete(c: Context) {
    try {
      const id = c.req.param('id');

      const existing = await this.service.getById(id);
      if (!existing) {
        return c.json({ message: 'Contato não encontrado' }, 404);
      }

      await this.service.delete(id);
      return c.body(null, 204);
    } catch (error) {
      console.error('Delete contact error:', error);
      return c.json({ message: 'Erro interno ao deletar contato' }, 500);
    }
  }
}
