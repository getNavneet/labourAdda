import React from 'react';
import { Link } from 'react-router-dom';
import { Hammer, UserCircle, Calendar } from 'lucide-react';

export default function Navbar() {
  const isLoggedIn = false; // Temporary mock state

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Hammer className="h-8 w-8" />
            <span className="text-xl font-bold">LabourAdda</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            <Link to="/workers" className="hover:text-blue-200">Find Workers</Link>
            {isLoggedIn ? (
              <>
                <Link to="/bookings" className="flex items-center space-x-1 hover:text-blue-200">
                  <Calendar className="h-5 w-5" />
                  <span>My Bookings</span>
                </Link>
                <Link to="/profile" className="flex items-center space-x-1 hover:text-blue-200">
                  <UserCircle className="h-5 w-5" />
                  <span>Profile</span>
                </Link>
              </>
            ) : (
              <button 
                className="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-blue-50"
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}