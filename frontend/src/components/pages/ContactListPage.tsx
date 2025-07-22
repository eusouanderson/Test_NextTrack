'use client';
import { useEffect, useState } from 'react';
import { Contact } from '@/types/contact';
import { api } from '@/lib/api';
import { ContactCard } from '../molecules/ContactCard';
import Link from 'next/link';

export default function ContactListPage() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    api.get(`/contacts?page=${page}&limit=10`)
      .then((res) => setContacts(res.data))
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false));
  }, [page]);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Lista de Contatos</h1>
        <Link href="/contacts/new">
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
            Novo Contato
          </button>
        </Link>
      </div>

      {contacts.length === 0 ? (
        <p className="text-center text-gray-500">Nenhum contato encontrado.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {contacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))}
        </div>
      )}

      <div className="mt-6 flex justify-center gap-4">
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          disabled={page === 1}
          className="bg-gray-200 text-gray-800 px-3 py-1 rounded disabled:opacity-50"
        >
          Anterior
        </button>
        <span>Página {page}</span>
        <button
          onClick={() => setPage((p) => p + 1)}
          className="bg-gray-200 text-gray-800 px-3 py-1 rounded"
        >
          Próxima
        </button>
      </div>
    </div>
  );
}
