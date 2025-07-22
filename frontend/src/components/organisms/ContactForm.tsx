
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Contact } from '@/types/contact';
import { api } from '@/lib/api';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const contactSchema = z.object({
  name: z.string().min(3, 'Nome deve ter pelo menos 3 letras'),
  email: z.string().email('E-mail inválido'),
  phone: z.string().min(8, 'Telefone obrigatório'),
  company: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

interface ContactFormProps {
  contact?: Contact;
}

export function ContactForm({ contact }: ContactFormProps) {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: contact ?? {},
  });

  async function onSubmit(data: ContactFormData) {
    setSubmitting(true);
    if (contact) {
      await api.patch(`/contacts/${contact.id}`, data);
    } else {
      await api.post('/contacts', data);
    }
    router.push('/contacts');
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white shadow-lg rounded-xl p-8 max-w-xl mx-auto mt-10 space-y-6 animate-fade-in"
    >
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        {contact ? 'Editar Contato' : 'Novo Contato'}
      </h2>

      {/* Nome */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
        <input
          {...register('name')}
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            errors.name ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name.message}</p>}
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input
          {...register('email')}
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            errors.email ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>}
      </div>

      {/* Telefone */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
        <input
          {...register('phone')}
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            errors.phone ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.phone && <p className="text-sm text-red-600 mt-1">{errors.phone.message}</p>}
      </div>

      {/* Empresa */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Empresa</label>
        <input
          {...register('company')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Botão */}
      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200 disabled:opacity-60"
      >
        {submitting ? 'Salvando...' : contact ? 'Atualizar Contato' : 'Criar Contato'}
      </button>
    </form>
  );
}
