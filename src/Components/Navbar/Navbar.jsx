import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Navbar = () => {
  return (
    <div>
      <nav className="bg-gray-800 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Left side: Logo */}
          <div className="flex-shrink-0">
            {/* Use Link instead of anchor tag */}
            <Link to="/" className="text-white text-lg font-semibold">LOGO</Link>
          </div>
          {/* Right side: Links */}
          <div className="hidden md:block">
            {/* Use Link instead of anchor tags */}
            <Link to="/Home" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
            <Link to="/forum" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Forum</Link>
            <Link to="/dashboard" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Dashboard</Link>
            <Link to="/profile" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Profile</Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
