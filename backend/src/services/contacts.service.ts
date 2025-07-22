import { ContactRepository } from '../repositories/contacts.repository.ts';
import { Contact } from '../models/contact.model.ts';

export class ContactService {
  private repo = new ContactRepository();

  create(data: Omit<Contact, 'id'>) {
    return this.repo.create(data);
  }

  list(page: number, limit: number) {
    return this.repo.list(page, limit);
  }

  getById(id: string) {
    return this.repo.getById(id);
  }

  update(id: string, data: Partial<Contact>) {
    return this.repo.update(id, data);
  }

  delete(id: string) {
    return this.repo.delete(id);
  }

  existsByEmail(email: string): Promise<boolean> {
    return this.repo.existsByEmail(email);
  }
}
