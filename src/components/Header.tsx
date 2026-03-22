import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/image/logo.png";

export default function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center" onClick={closeMenu}>
            <div className="flex items-center space-x-2">
              <div className="relative w-12 h-12">
                <img
                  src={logo}
                  alt="WFK Enterprise Logo"
                  className="w-full h-full"
                />
              </div>
              <div>
                <span className="text-2xl font-bold">
                  <span className="text-gray-800">WFK </span>
                  <span className="text-blue-500">ENTERPRISE</span>
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors ${
                isActive("/about")
                  ? "text-blue-500 border-b-2 border-blue-500 pb-1"
                  : "text-gray-700 hover:text-blue-500"
              }`}
            >
              About Us
            </Link>
            <Link
              to="/services"
              className={`text-sm font-medium transition-colors ${
                isActive("/services")
                  ? "text-blue-500 border-b-2 border-blue-500 pb-1"
                  : "text-gray-700 hover:text-blue-500"
              }`}
            >
              Services Offered
            </Link>
            <Link
              to="/news"
              className={`text-sm font-medium transition-colors ${
                isActive("/news")
                  ? "text-blue-500 border-b-2 border-blue-500 pb-1"
                  : "text-gray-700 hover:text-blue-500"
              }`}
            >
              News
            </Link>
            <Link
              to="/careers"
              className={`text-sm font-medium transition-colors ${
                isActive("/careers")
                  ? "text-blue-500 border-b-2 border-blue-500 pb-1"
                  : "text-gray-700 hover:text-blue-500"
              }`}
            >
              See Openings
            </Link>
            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors ${
                isActive("/contact")
                  ? "text-blue-500 border-b-2 border-blue-500 pb-1"
                  : "text-gray-700 hover:text-blue-500"
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

          {/* Mobile Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-black bg-opacity-50"
          onClick={closeMenu}
        >
          <div
            className="fixed right-0 top-0 h-full w-80 max-w-[90vw] bg-white shadow-xl transform transition-transform duration-300 ease-in-out"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col h-full">
              {/* Close button */}
              <div className="flex justify-end p-4">
                <button
                  onClick={closeMenu}
                  className="p-2 rounded-md text-gray-700 hover:text-blue-500 hover:bg-gray-100"
                  aria-label="Close menu"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Mobile Navigation Links */}
              <nav className="flex flex-col space-y-4 px-6 pb-6">
                <Link
                  to="/about"
                  className={`text-lg font-medium transition-colors py-2 ${
                    isActive("/about")
                      ? "text-blue-500 border-l-4 border-blue-500 pl-4"
                      : "text-gray-700 hover:text-blue-500"
                  }`}
                  onClick={closeMenu}
                >
                  About Us
                </Link>
                <Link
                  to="/services"
                  className={`text-lg font-medium transition-colors py-2 ${
                    isActive("/services")
                      ? "text-blue-500 border-l-4 border-blue-500 pl-4"
                      : "text-gray-700 hover:text-blue-500"
                  }`}
                  onClick={closeMenu}
                >
                  Services Offered
                </Link>
                <Link
                  to="/news"
                  className={`text-lg font-medium transition-colors py-2 ${
                    isActive("/news")
                      ? "text-blue-500 border-l-4 border-blue-500 pl-4"
                      : "text-gray-700 hover:text-blue-500"
                  }`}
                  onClick={closeMenu}
                >
                  News
                </Link>
                <Link
                  to="/careers"
                  className={`text-lg font-medium transition-colors py-2 ${
                    isActive("/careers")
                      ? "text-blue-500 border-l-4 border-blue-500 pl-4"
                      : "text-gray-700 hover:text-blue-500"
                  }`}
                  onClick={closeMenu}
                >
                  See Openings
                </Link>
                <Link
                  to="/contact"
                  className={`text-lg font-medium transition-colors py-2 ${
                    isActive("/contact")
                      ? "text-blue-500 border-l-4 border-blue-500 pl-4"
                      : "text-gray-700 hover:text-blue-500"
                  }`}
                  onClick={closeMenu}
                >
                  Contact Us
                </Link>
                <Link
                  to="/quote"
                  className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition-colors text-lg font-medium text-center mt-4"
                  onClick={closeMenu}
                >
                  Request a Quote
                </Link>
              </nav>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
