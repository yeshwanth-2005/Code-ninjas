import { Link } from 'react-router-dom';
import { FiTwitter, FiInstagram, FiLinkedin, FiYoutube } from 'react-icons/fi';

function Footer() {
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img src="/logo-white.svg" alt="Coding Ninjas" className="h-8 mb-4" />
            <p className="text-gray-400">
              Learn from the best programming courses and get placed in your dream company.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-white">Careers</Link></li>
              <li><Link to="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-white">Terms & Conditions</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              <li><Link to="/courses" className="text-gray-400 hover:text-white">Courses</Link></li>
              <li><Link to="/practice" className="text-gray-400 hover:text-white">Practice</Link></li>
              <li><Link to="/events" className="text-gray-400 hover:text-white">Events</Link></li>
              <li><Link to="/campus" className="text-gray-400 hover:text-white">Campus Program</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white"><FiTwitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><FiInstagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><FiLinkedin size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><FiYoutube size={20} /></a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© 2024 Coding Ninjas. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;