import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center">
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
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors ${
                isActive('/about')
                  ? 'text-blue-500 border-b-2 border-blue-500 pb-1'
                  : 'text-gray-700 hover:text-blue-500'
              }`}
            >
              About Us
            </Link>
            <Link
              to="/services"
              className={`text-sm font-medium transition-colors ${
                isActive('/services')
                  ? 'text-blue-500 border-b-2 border-blue-500 pb-1'
                  : 'text-gray-700 hover:text-blue-500'
              }`}
            >
              Services Offered
            </Link>
            <Link
              to="/news"
              className={`text-sm font-medium transition-colors ${
                isActive('/news')
                  ? 'text-blue-500 border-b-2 border-blue-500 pb-1'
                  : 'text-gray-700 hover:text-blue-500'
              }`}
            >
              News
            </Link>
            <Link
              to="/careers"
              className={`text-sm font-medium transition-colors ${
                isActive('/careers')
                  ? 'text-blue-500 border-b-2 border-blue-500 pb-1'
                  : 'text-gray-700 hover:text-blue-500'
              }`}
            >
              See Openings
            </Link>
            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors ${
                isActive('/contact')
                  ? 'text-blue-500 border-b-2 border-blue-500 pb-1'
                  : 'text-gray-700 hover:text-blue-500'
              }`}
            >
              Contact Us
            </Link>
            <Link
              to="/quote"
              className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors text-sm font-medium"
            >
              Request a Quote
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
