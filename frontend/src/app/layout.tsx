export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-50 min-h-screen font-sans text-gray-900">
        <header className="bg-white shadow p-4 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <h1 className="text-xl font-bold">NextTrack CRM</h1>
            {/* Menu ou botão */}
          </div>
        </header>

        <main className="py-8">{children}</main>

        <footer className="bg-white shadow-inner p-4 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Seu Nome
        </footer>
      </body>
    </html>
  );
}
