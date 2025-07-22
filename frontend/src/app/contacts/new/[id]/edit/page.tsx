'use client';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Contact } from '@/types/contact';
import { api } from '@/lib/api';
import { ContactForm } from '@/components/organisms/ContactForm';

export default function EditContactPage() {
  const { id } = useParams();
  const [contact, setContact] = useState<Contact | null>(null);

  useEffect(() => {
    if (id) {
      api.get(`/contacts/${id}`).then((res) => setContact(res.data));
    }
  }, [id]);

  if (!contact) {
    return <p className="p-4 text-gray-500">Carregando contato...</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Editar Contato</h1>
      <ContactForm contact={contact} />
    </div>
  );
}
