'use client';

export function ContactCard({ contact }) {
  return (
    <div className="bg-white shadow rounded-lg p-4 hover:shadow-lg transition">
      <h3 className="font-semibold text-lg mb-2">{contact.name}</h3>
      <p className="text-gray-600 text-sm">{contact.email}</p>
      <p className="text-gray-600 text-sm">{contact.phone}</p>
      {contact.company && <p className="text-gray-500 italic text-xs">{contact.company}</p>}
    </div>
  );
}
