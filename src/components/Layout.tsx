

import React from 'react';
import Head from 'next/head';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title = 'Stock Tracker' }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Head>
        <title>{title}</title>
        <meta name="description" content="A simple stock tracking application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      <footer className="bg-white shadow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center text-gray-500">
          &copy; {new Date().getFullYear()} Stock Tracker. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;



// Head: Allows setting the page title and meta information.
// Header: We'll create this component next; it contains the application logo/name.
// main: Holds the main content of each page.
// footer: A simple footer; optional at this stage.
