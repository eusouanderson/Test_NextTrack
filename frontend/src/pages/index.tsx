// src/pages/index.tsx
import React from 'react';
import ContactListPage from '@/components/pages/ContactListPage';

export default function Home() {
  return (
    <div>
      <h1>Bem-vindo ao NextTrack CRM</h1>
      <ContactListPage />
    </div>
  );
}
