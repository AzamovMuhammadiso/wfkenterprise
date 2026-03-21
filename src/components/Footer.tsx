import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-2">
            <div className="relative w-12 h-12">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="50" cy="50" r="45" fill="#5B9BD5" opacity="0.2" />
                <path d="M30 50 Q50 30 70 50 Q50 70 30 50" fill="#5B9BD5" />
                <path d="M25 45 L25 55 L35 55 L35 45 Z" fill="#5B9BD5" />
                <path d="M40 40 L40 60 L45 60 L45 40 Z" fill="#5B9BD5" />
                <path d="M50 35 L50 65 L55 65 L55 35 Z" fill="#5B9BD5" />
                <polygon points="65,25 75,35 70,35 70,55 60,55 60,35 55,35" fill="#2B5797" />
              </svg>
            </div>
            <div>
              <span className="text-2xl font-bold">
                <span className="text-gray-800">DM</span>
                <span className="text-blue-500">WORLD</span>
              </span>
            </div>
          </div>
        </div>

        <nav className="flex justify-center space-x-8 mb-12">
          <Link to="/about" className="text-gray-600 hover:text-blue-500 transition-colors text-sm">
            About Us
          </Link>
          <Link to="/services" className="text-gray-600 hover:text-blue-500 transition-colors text-sm">
            Services Offered
          </Link>
          <Link to="/news" className="text-gray-600 hover:text-blue-500 transition-colors text-sm">
            News
          </Link>
          <Link to="/careers" className="text-gray-600 hover:text-blue-500 transition-colors text-sm">
            See Openings
          </Link>
          <Link to="/contact" className="text-gray-600 hover:text-blue-500 transition-colors text-sm">
            Contact Us
          </Link>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-800 mb-4">Company Information</h3>
            <div className="space-y-3">
              <div className="flex items-center text-gray-600 text-sm">
                <MapPin className="w-4 h-4 mr-2 text-blue-500" />
                <span>361 W Army Trail Blvd, Addison, IL 60101</span>
              </div>
              <div className="flex items-center text-gray-600 text-sm">
                <Phone className="w-4 h-4 mr-2 text-blue-500" />
                <span>(630) 472-0000</span>
              </div>
              <div className="flex items-center text-gray-600 text-sm">
                <Mail className="w-4 h-4 mr-2 text-blue-500" />
                <span>info@dmwtrans.com</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-800 mb-4">Social Media</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-500 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-400 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-pink-500 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-700 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center text-sm text-gray-500 pt-8 border-t">
          © 2025 DM World Transportation
        </div>
      </div>
    </footer>
  );
}
