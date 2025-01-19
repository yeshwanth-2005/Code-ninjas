import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src="https://files.codingninjas.com/new-cn-logos-1-1733819445.svg" alt="Coding Ninjas" className="h-8" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/courses" className="text-gray-700 hover:text-primary">Courses</Link>
            <Link to="/practice" className="text-gray-700 hover:text-primary">Practice</Link>
            <Link to="/events" className="text-gray-700 hover:text-primary">Events</Link>
            <Link to="/campus" className="text-gray-700 hover:text-primary">Campus</Link>
            <Link to="/login" className="bg-primary text-white px-6 py-2 rounded-full hover:bg-opacity-90">
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link to="/courses" className="text-gray-700 hover:text-primary">Courses</Link>
              <Link to="/practice" className="text-gray-700 hover:text-primary">Practice</Link>
              <Link to="/events" className="text-gray-700 hover:text-primary">Events</Link>
              <Link to="/campus" className="text-gray-700 hover:text-primary">Campus</Link>
              <Link to="/login" className="bg-primary text-white px-6 py-2 rounded-full hover:bg-opacity-90 text-center">
                Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;