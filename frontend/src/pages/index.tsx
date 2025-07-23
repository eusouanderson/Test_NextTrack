'use client';

import React from 'react';
import Image from 'next/image';
import nextappsImg from '@/styles/assets/images/nextapps.png';
import ContactListPage from '@/components/pages/ContactListPage';
import ContactManager from '@/components/pages/ContactManager';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-10 space-y-6">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
        Bem-vindo ao <span className="text-blue-600">NextTrack CRM</span>
      </h1>

      <Image
        src={nextappsImg}
        alt="NextApps Logo"
        width={400}
        height={100}
        className="rounded shadow-md"
      />

      <div className="w-full max-w-5xl px-4">
        <ContactManager />
      </div>
    </div>
  );
}
