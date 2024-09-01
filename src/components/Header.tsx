
import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/">
          <a className="text-2xl font-bold text-blue-600">Stock Tracker</a>
        </Link>
        {/* Future nav items can be added here */}
      </div>
    </header>
  );
};

export default Header;


// Application Name: Styled prominently to stand out.
// Future Navigation: Space left for adding navigation items like links to a dashboard or settings.

