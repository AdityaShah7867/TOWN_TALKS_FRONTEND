import React from 'react'

const Navbar = () => {
  return (
   <div>
  <nav className="bg-gray-800 py-4">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
      {/* Left side: Logo */}
      <div className="flex-shrink-0">
        <a href="#" className="text-white text-lg font-semibold">LOGO</a>
      </div>
      {/* Right side: Links */}
      <div className="hidden md:block">
        <a href="#" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Home</a>
        <a href="#" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">About</a>
        <a href="#" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Services</a>
        <a href="#" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
      </div>
    </div>
  </nav>
</div>

  )
}

export default Navbar