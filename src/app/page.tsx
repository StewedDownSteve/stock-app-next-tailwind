import React from 'react';

// src/app/page.tsx
export default function Page() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 animate-pulse">My Landing Page</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="bg-white shadow sm:rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Welcome to My Landing Page</h2>
                <p className="text-gray-600 mb-4">
                  This is a simple landing page built with Next.js and TailwindCSS.
                </p>
                <a
                  href="#"
                  className="inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
