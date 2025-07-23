'use client';

import { useState, FormEvent } from 'react';
import { Contact } from '@/types/contact';
import FormGroup from '../molecules/FormGroup';
import Button from '../atoms/Button';

interface ContactFormProps {
  initialData?: Omit<Contact, 'id'>;
  onSubmit: (formData: Omit<Contact, 'id'>) => Promise<void>;
  onCancel: () => void;
  isLoading: boolean;
  isEdit?: boolean;
  error?: string | null;
}

export default function ContactForm({
  initialData = { name: '', email: '', company: '', phone: '' },
  onSubmit,
  onCancel,
  isLoading,
  isEdit = false,
  error = null,
}: ContactFormProps) {
  const [formData, setFormData] = useState(initialData);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="p-4 bg-red-100 border-l-4 border-red-500 text-red-700 rounded">
          <p className="font-medium">{error}</p>
        </div>
      )}

      <FormGroup
        id="name"
        label="Nome Completo"
        name="name"
        type="text"
        value={formData.name}
        onChange={handleInputChange}
        required
      />

      <FormGroup
        id="email"
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleInputChange}
        required
      />

      <FormGroup
        id="company"
        label="Empresa"
        name="company"
        type="text"
        value={formData.company}
        onChange={handleInputChange}
      />

      <FormGroup
        id="phone"
        label="Telefone"
        name="phone"
        type="tel"
        value={formData.phone || ''}
        onChange={handleInputChange}
      />

      <div className="flex justify-end space-x-3 pt-4">
        <Button
          type="button"
          onClick={onCancel}
          disabled={isLoading}
          variant="secondary"
        >
          Cancelar
        </Button>
        <Button
          type="submit"
          disabled={isLoading}
          variant="primary"
        >
          {isLoading ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {isEdit ? 'Atualizando...' : 'Salvando...'}
            </span>
          ) : isEdit ? 'Atualizar' : 'Salvar'}
        </Button>
      </div>
    </form>
  );
}