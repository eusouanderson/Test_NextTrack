'use client';

import { useRouter } from 'next/navigation';
import { ContactForm } from '@/components/organisms/ContactForm';
import { z } from 'zod';
import { contactSchema } from '@/utils/validation';

type FormData = z.infer<typeof contactSchema>;

export default function ContactFormPage() {
  const router = useRouter();

  async function onSubmit(data: FormData) {
    await fetch('/api/contacts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    router.push('/contacts');
  }

  return <ContactForm onSubmit={onSubmit} />;
}
