// src/components/Layout.js
import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="bg-blue-900 text-white p-4 shadow-md">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold">Stock Tracker</h1>
        </div>
      </header>
      <main className="flex-grow container mx-auto p-4">
        {children}
      </main>
      <footer className="bg-blue-900 text-white p-4 shadow-md">
        <div className="container mx-auto text-center">
          &copy; {new Date().getFullYear()} Stock Tracker App
        </div>
      </footer>
    </div>
  );
};

export default Layout;
