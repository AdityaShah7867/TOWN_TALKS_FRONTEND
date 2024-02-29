import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import logo from "../../Assets/Images/logo1.png";

const Navbar = () => {
  const { user, logout } = useAuth();
  const key = new Date().getTime(); // Generate a unique key

  return (
    <div>
      <nav className="bg-indigo-500 py-4 z-99">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Left side: Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-white text-lg font-semibold">
              {/* <img src={logo} alt="" style={{ width: "125px" }} /> */}
              <i>
              <p className="text-lg font-semibold">TOWN TALKS</p>
              </i>
            </Link>
          </div>
          {/* Right side: Links and Buttons */}
          <div className="hidden md:block">
            <Link
              key={key} // Add the unique key here
              to="/home"
              className="text-gray-300  hover:bg-gray-700 px-3 py-2 rounded-md text-lg font-bold"
            >
              Home
            </Link>
            <Link
              key={key + 1} // Another unique key
              to="/forum"
              className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-lg font-bold"
            >
              Forum
            </Link>
            {user ? (
              <>
              {
                user.typeOfUser === "organizer" ? (
              
                <Link
                  key={key + 2} // Another unique key
                  to="/dashboard"
                  className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-lg font-bold"
                >
                  Dashboard
                </Link>)
                :(
                  null
                )
                }
                {/* <Link
                  key={key + 3} // Another unique key
                  to="/profile"
                  className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-lg font-bold"
                >
                  Profile
                </Link> */}
                <button
                  onClick={logout}
                  className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-lg font-bold"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  key={key + 4} // Another unique key
                  to="/login"
                  className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Login
                </Link>
                <Link
                  key={key + 5} // Another unique key
                  to="/register"
                  className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Signup
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
