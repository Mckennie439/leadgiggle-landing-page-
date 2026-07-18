import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  compact?: boolean;
}

const Header: React.FC<HeaderProps> = ({ compact = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerClasses = `fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
    isScrolled ? 'shadow-elegant' : ''
  }`;

  const headerStyle = {
    backgroundColor: isScrolled ? 'rgba(250, 249, 246, 0.95)' : '#FAF9F6',
    backdropFilter: isScrolled ? 'blur(8px)' : 'none',
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/process', label: 'Process' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/blog', label: 'Read' },
    { path: '/quote', label: 'Contact' },
  ];

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        type: 'tween',
        duration: 0.2,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'tween',
        duration: 0.2,
      },
    },
  };

  return (
    <header className={headerClasses} style={headerStyle}>
      <div className="container mx-auto px-4">
        <div className={`flex justify-between items-center transition-all duration-300 ${
          compact ? 'py-1.5' : (isScrolled ? 'py-2' : 'py-4')
        }`}>
          {/* Logo */}
          <Link to="/" className="z-50 flex-shrink-0">
            <motion.img
              src="https://ykndyjgvochvehwimhhq.supabase.co/storage/v1/object/public/Website%20Assests/logos/avalanchecreations-logo.png"
              alt="Avalanche Creations Logo"
              className={`transition-all duration-300 ${
                compact ? 'h-12 md:h-14' : (isScrolled ? 'h-16 md:h-20' : 'h-20 md:h-24')
              }`}
              style={{ imageRendering: 'auto' }}
              initial={false}
              animate={{ scale: compact ? 0.8 : (isScrolled ? 0.9 : 1) }}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-all px-3 py-1.5 rounded-sm ${
                    isActive
                      ? 'border-b-2'
                      : ''
                  }`
                }
                style={({ isActive }) => ({
                  color: isActive ? '#8B4513' : '#562A0E',
                  backgroundColor: isActive ? '#F5F0EA' : 'transparent',
                  borderBottomColor: isActive ? '#8B4513' : 'transparent',
                })}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="z-50 lg:hidden p-2"
            style={{ color: '#562A0E' }}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial="closed"
                animate="open"
                exit="closed"
                variants={mobileMenuVariants}
                className="absolute top-full left-0 right-0 shadow-elegant lg:hidden"
                style={{ backgroundColor: '#FAF9F6' }}
              >
                <nav className="container mx-auto px-4 py-2">
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      className={({ isActive }) =>
                        `block w-full text-sm font-medium py-2 px-3 rounded-sm mb-1 transition-all ${
                          isActive ? 'border-b-2' : ''
                        }`
                      }
                      style={({ isActive }) => ({
                        color: isActive ? '#8B4513' : '#562A0E',
                        backgroundColor: isActive ? '#F5F0EA' : 'transparent',
                        borderBottomColor: isActive ? '#8B4513' : 'transparent',
                      })}
                    >
                      {link.label}
                    </NavLink>
                  ))}
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}

export default Header;