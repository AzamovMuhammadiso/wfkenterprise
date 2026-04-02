import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import logo from "../assets/image/logo.png";

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-center mb-8">
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
                <span className="text-gray-800">WFK</span>
                <span className="text-blue-500">ENTERPRISE</span>
              </span>
            </div>
          </div>
        </div>

        <nav className="flex flex-wrap justify-center gap-4 mb-12">
          <Link
            to="/about"
            className="text-gray-600 hover:text-blue-500 transition-colors text-sm"
          >
            About Us
          </Link>
          <Link
            to="/services"
            className="text-gray-600 hover:text-blue-500 transition-colors text-sm"
          >
            Services Offered
          </Link>
          <Link
            to="/news"
            className="text-gray-600 hover:text-blue-500 transition-colors text-sm"
          >
            News
          </Link>
          <Link
            to="/careers"
            className="text-gray-600 hover:text-blue-500 transition-colors text-sm"
          >
            See Openings
          </Link>
          <Link
            to="/contact"
            className="text-gray-600 hover:text-blue-500 transition-colors text-sm"
          >
            Contact Us
          </Link>
          <Link
            to="/privacy-policy"
            className="text-gray-600 hover:text-blue-500 transition-colors text-sm"
          >
            Privacy Policy
          </Link>
          <Link
            to="/sms-terms"
            className="text-gray-600 hover:text-blue-500 transition-colors text-sm"
          >
            SMS Terms
          </Link>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-800 mb-4">
              Company Information
            </h3>
            <div className="space-y-3">
              <div className="flex items-center text-gray-600 text-sm">
                <MapPin className="w-4 h-4 mr-2 text-blue-500" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=30505+Bainbridge+Rd+Suite+101+Solon+OH+44139"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-600 hover:text-blue-500 hover:underline"
                >
                  30505 Bainbridge Rd Suite 101 Solon, OH 44139
                </a>
              </div>
              <div className="flex items-center text-gray-600 text-sm">
                <Phone className="w-4 h-4 mr-2 text-blue-500" />
                <a
                  href="tel:+14402667901"
                  className="text-gray-600 hover:text-blue-500 hover:underline"
                >
                  1-(440)266-7901
                </a>
              </div>
              <div className="flex items-center text-gray-600 text-sm">
                <Mail className="w-4 h-4 mr-2 text-blue-500" />
                <a
                  href="mailto:info@wfkenterprise.com"
                  className="text-gray-600 hover:text-blue-500 hover:underline"
                >
                  info@wfkenterprise.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center text-sm text-gray-500 pt-8 border-t">
          © 2025 WFK ENTERPRISE LLC
        </div>
      </div>
    </footer>
  );
}
