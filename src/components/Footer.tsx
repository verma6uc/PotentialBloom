import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Organization Info */}
          <div>
            <Link to="/" className="inline-block mb-6">
              <div className="flex flex-col">
                <span className="text-primary text-2xl font-heading font-bold">Srijan</span>
                <span className="text-secondary text-2xl font-heading font-bold">-ka-</span>
                <span className="text-accent text-2xl font-heading font-bold">Sankalp</span>
              </div>
            </Link>
            <p className="text-medium mb-4">
              Empowering underprivileged children through education, skill development, and healthcare initiatives.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-medium hover:text-primary transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-medium hover:text-primary transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-medium hover:text-primary transition-colors duration-300">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/our-work" className="text-medium hover:text-primary transition-colors duration-300">
                  Our Work
                </Link>
              </li>
              <li>
                <Link to="/impact-stories" className="text-medium hover:text-primary transition-colors duration-300">
                  Impact Stories
                </Link>
              </li>
              <li>
                <Link to="/get-involved" className="text-medium hover:text-primary transition-colors duration-300">
                  Get Involved
                </Link>
              </li>
              <li>
                <Link to="/transparency" className="text-medium hover:text-primary transition-colors duration-300">
                  Transparency & Accountability
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-medium hover:text-primary transition-colors duration-300">
                  Annual Reports
                </a>
              </li>
              <li>
                <a href="#" className="text-medium hover:text-primary transition-colors duration-300">
                  Success Stories
                </a>
              </li>
              <li>
                <a href="#" className="text-medium hover:text-primary transition-colors duration-300">
                  Volunteer FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-medium hover:text-primary transition-colors duration-300">
                  CSR Partnerships
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 text-primary mt-1 flex-shrink-0" />
                <span className="text-medium">123 Education Street, New Delhi, India</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 text-primary flex-shrink-0" />
                <a href="tel:+911234567890" className="text-medium hover:text-primary transition-colors duration-300">
                  +91 123 456 7890
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 text-primary flex-shrink-0" />
                <a href="mailto:info@srijanksankalp.org" className="text-medium hover:text-primary transition-colors duration-300">
                  info@srijanksankalp.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-medium text-sm mb-4 md:mb-0">
              &copy; {currentYear} Srijan-ka-Sankalp. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-medium hover:text-primary transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-medium hover:text-primary transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;