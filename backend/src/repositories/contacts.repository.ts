import { db } from '../db/client.ts';
import { Contact } from '../models/contact.model.ts';

export class ContactRepository {
  async create(data: Omit<Contact, 'id'>): Promise<Contact> {
    const result = await db.query(
      'INSERT INTO contacts (name, email, company, phone) VALUES ($1, $2, $3, $4) RETURNING *',
      [data.name, data.email, data.company, data.phone]
    );
    return result.rows[0];
  }

  async list(page: number, limit: number): Promise<Contact[]> {
    const offset = (page - 1) * limit;
    const result = await db.query('SELECT * FROM contacts LIMIT $1 OFFSET $2', [limit, offset]);
    return result.rows;
  }

  async getById(id: string): Promise<Contact> {
    const result = await db.query('SELECT * FROM contacts WHERE id = $1', [id]);
    return result.rows[0];
  }

  async update(id: string, data: Partial<Contact>): Promise<Contact> {
    const fields = Object.keys(data);
    const values = Object.values(data);
    const setClause = fields.map((f, i) => `${f} = $${i + 1}`).join(', ');

    const result = await db.query(
      `UPDATE contacts SET ${setClause} WHERE id = $${fields.length + 1} RETURNING *`,
      [...values, id]
    );
    return result.rows[0];
  }

  async delete(id: string): Promise<void> {
    await db.query('DELETE FROM contacts WHERE id = $1', [id]);
  }

  async existsByEmail(email: string): Promise<boolean> {
  const result = await db.query('SELECT 1 FROM contacts WHERE email = $1', [email]);
  if (!result.rowCount) return false;
  return result.rowCount > 0; 
  }

}
