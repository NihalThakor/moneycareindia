import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SubItem {
  name: string;
  href: string;
  download?: string;
}

interface HeaderProps {
  currentPage?: string;
}

interface NavItem {
  name: string;
  href: string;
  external?: boolean;
  cta?: boolean;
  dropdown?: SubItem[];
}

const Header: React.FC<HeaderProps> = ({ currentPage = 'home' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Downloads', href: '/downloads' },
    {
      name: 'Investor Charter',
      href: '#',
      dropdown: [
        { name: 'Investor Charter - Depository', href: '/investor-charter' },
        { name: 'Investor Charter Booking', href: '#', download: 'investor-charter-booking.pdf' },
        { name: 'Investor Complaint', href: '#', download: 'investor-complaint.pdf' }
      ]
    },
    { name: 'Bank Office', href: '/bank-office' },
    {
      name: 'Investor Section',
      href: '#',
      dropdown: [
        { name: 'SEBI Risk Disclosure', href: '/sebi-risk-disclosure' },
        { name: 'Most Important Terms & Conditions', href: '/mitc' },
        { name: 'Important Circular of Clients', href: '/important-circular' },
        { name: 'Freezing or Blocking of Trading Account', href: '/freezing-blocking' },
        { name: 'Bank Details', href: '/bank-details' }
      ]
    },
    { name: 'E-voting', href: 'https://www.evoting.nsdl.com/', external: true },
    {
      name: 'Contact',
      href: '#',
      dropdown: [
        { name: 'Contact Us', href: '/contact' },
        { name: 'AP Branch Details', href: '#', download: 'ap-branch-details.pdf' },
        { name: 'KMP Details', href: '#', download: 'kmp-details.pdf' }
      ]
    },
    { name: 'Open Account', href: '/open-account', cta: true }
  ];

  return (
    <header className="fixed w-full z-50 bg-white shadow-lg transition-all duration-300">
      {/* Top Contact Bar */}
      <div className="bg-blue-900 text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-xs sm:text-sm">
          {/* Contact Info - Left Side (Desktop) */}
          <div className="hidden sm:flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="truncate">info@moneycareindia.co.in</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>+91-22-6234-5678</span>
            </div>
          </div>
          
          {/* Contact Info - Mobile Layout */}
          <div className="flex sm:hidden items-center space-x-2">
            <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="truncate">info@moneycareindia.co.in</span>
          </div>
          
          {/* Contact Info - Right Side (Mobile) */}
          <div className="flex sm:hidden items-center space-x-2">
            <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>+91-22-6234-5678</span>
          </div>
          
          {/* Social Media Links - Hidden on Mobile */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="hover:text-orange-400 transition-colors text-sm">Facebook</a>
            <a href="#" className="hover:text-orange-400 transition-colors text-sm">Twitter</a>
            <a href="#" className="hover:text-orange-400 transition-colors text-sm">LinkedIn</a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`bg-white transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="relative w-10 h-10 sm:w-16 sm:h-16">
                <img 
                  src="/Logo.png" 
                  alt="Moneycare Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h1 className="text-lg sm:text-xl font-bold">
                  <span className="text-blue-900">Money</span>
                  <span className="text-orange-500 relative">
                    care
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500"></div>
                  </span>
                </h1>
                <p className="text-xs sm:text-sm text-gray-600">Caring for better tomorrow</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  {item.dropdown ? (
                    <div className="relative">
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors py-2"
                      >
                        <span>{item.name}</span>
                        <ChevronDown className="w-4 h-4" />
                      </button>
                      {openDropdown === item.name && (
                        <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border py-2 z-50">
                          {item.dropdown.map((subItem) => (
                            <React.Fragment key={subItem.name}>
                              {subItem.download ? (
                                <a
                                  href={subItem.href}
                                  download={subItem.download}
                                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                                >
                                  {subItem.name}
                                </a>
                              ) : (
                                <Link
                                  to={subItem.href}
                                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                                >
                                  {subItem.name}
                                </Link>
                              )}
                            </React.Fragment>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noopener noreferrer' : undefined}
                      className={`${
                        item.cta
                          ? 'bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors'
                          : 'text-gray-700 hover:text-blue-600 transition-colors'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-gray-700 hover:text-blue-600 transition-colors p-2"
            >
              {isMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t max-h-96 overflow-y-auto">
              <div className="flex flex-col space-y-1 pt-4">
                {navItems.map((item) => (
                  <div key={item.name}>
                    {item.dropdown ? (
                      <div>
                        <button
                          onClick={() => toggleDropdown(item.name)}
                          className="flex items-center justify-between w-full text-left px-3 sm:px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors rounded text-sm sm:text-base"
                        >
                          <span className="truncate">{item.name}</span>
                          <ChevronDown className={`w-4 h-4 transition-transform flex-shrink-0 ${openDropdown === item.name ? 'rotate-180' : ''}`} />
                        </button>
                        {openDropdown === item.name && (
                          <div className="ml-3 sm:ml-4 mt-1 space-y-1">
                            {item.dropdown.map((subItem) => (
                              <a
                                key={subItem.name}
                                href={subItem.href}
                                download={subItem.download}
                                className="block px-3 sm:px-4 py-2 text-xs sm:text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors rounded"
                              >
                                <span className="truncate">{subItem.name}</span>
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        target={item.external ? '_blank' : undefined}
                        rel={item.external ? 'noopener noreferrer' : undefined}
                        className={`block px-3 sm:px-4 py-2 transition-colors rounded text-sm sm:text-base ${
                          item.cta
                            ? 'bg-orange-500 text-white hover:bg-orange-600 text-center mx-2 sm:mx-4'
                            : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                        }`}
                      >
                        <span className="truncate">{item.name}</span>
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header; 