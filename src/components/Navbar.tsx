import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Our Work', path: '/our-work' },
    { name: 'Impact Stories', path: '/impact-stories' },
    { name: 'Get Involved', path: '/get-involved' },
    { name: 'Transparency', path: '/transparency' },
  ];

  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center" aria-label="Srijan-ka-Sankalp Home">
          <div className="flex items-center">
            <span className="text-primary text-2xl font-heading font-bold">Srijan</span>
            <span className="text-secondary text-2xl font-heading font-bold">-ka-</span>
            <span className="text-accent text-2xl font-heading font-bold">Sankalp</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink 
                  to={link.path}
                  className={({ isActive }) => 
                    isActive 
                      ? "text-primary font-medium"
                      : "text-dark hover:text-primary transition-colors duration-300"
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <Link to="/get-involved" className="btn-primary">
            Donate Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-dark focus:outline-none" 
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md z-50">
          <ul className="flex flex-col p-4 space-y-4">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink 
                  to={link.path}
                  className={({ isActive }) => 
                    isActive 
                      ? "block py-2 text-primary font-medium"
                      : "block py-2 text-dark hover:text-primary transition-colors duration-300"
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
            <li>
              <Link 
                to="/get-involved" 
                className="block w-full py-3 text-center bg-primary text-white rounded-lg font-medium hover:bg-primary-600 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Donate Now
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;