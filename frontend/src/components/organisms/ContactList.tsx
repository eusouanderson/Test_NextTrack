'use client';

import { ContactCard } from '../molecules/ContactCard';

export function ContactList({ contacts }) {
  return (
    <div className="max-w-5xl mx-auto grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-6">
      {contacts.length === 0 && <p className="text-center text-gray-500">Nenhum contato encontrado.</p>}
      {contacts.map(contact => (
        <ContactCard key={contact.id} contact={contact} />
      ))}
    </div>
  );
}
