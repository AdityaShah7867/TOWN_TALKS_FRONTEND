import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/Images/logo1.png';

const Navbar = ({ isLoggedIn }) => {
  return (
    <div>
      <nav className="bg-gray-800 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Left side: Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-white text-lg font-semibold">
              <img src={logo} alt="" style={{ width: '125px' }} />
            </Link>
          </div>
          {/* Right side: Links and Buttons */}
          <div className="hidden md:block">
            <Link to="/home" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
            <Link to="/forum" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Forum</Link>
            <Link to="/dashboard" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Dashboard</Link>
            <Link to="/profile" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Profile</Link>
          </div>
          {/* Right side: Conditional Login/Logout button */}
          <div className="hidden md:block">
            {isLoggedIn ? (
              <Link to="/login" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Logout</Link>
            ) : (
              <>
                <Link to="/login" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Login</Link>
                <Link to="/register" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Signup</Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
