import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Contact } from '@/types/contact';
import { api } from '@/lib/api';
import { Button } from '../atoms/Button';

export default function ContactDetailsPage() {
  const router = useRouter();
  const { id } = router.query;
  const [contact, setContact] = useState<Contact | null>(null);

  useEffect(() => {
    if (id) {
      api.get(`/contacts/${id}`).then(res => setContact(res.data));
    }
  }, [id]);

  const handleDelete = async () => {
    await api.delete(`/contacts/${id}`);
    router.push('/contacts');
  };

  return (
    contact && (
      <div>
        <h2>{contact.name}</h2>
        <p>{contact.email}</p>
        <p>{contact.company}</p>
        <p>{contact.phone}</p>

        <Button onClick={() => router.push(`/contacts/${id}/edit`)}>Editar</Button>
        <Button onClick={handleDelete}>Excluir</Button>
      </div>
    )
  );
}