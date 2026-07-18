import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ChevronRight, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const FloatingCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-30"
        >
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className={`flex items-center justify-center w-14 h-14 rounded-full shadow-elegant transition-colors pulse-button`}
            style={{ 
              backgroundColor: isOpen ? '#703811' : '#8B4513',
              color: '#FAF9F6'
            }}
            whileTap={{ scale: 0.95 }}
            aria-label={isOpen ? "Close consultation menu" : "Open consultation menu"}
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Calendar className="h-6 w-6" />
            )}
          </motion.button>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 10 }}
                transition={{ duration: 0.2 }}
                className="absolute bottom-16 right-0 w-64 rounded-sm shadow-elevated overflow-hidden"
                style={{ backgroundColor: '#FAF9F6' }}
              >
                <div className="p-4" style={{ backgroundColor: '#8B4513', color: '#FAF9F6' }}>
                  <h3 className="font-serif text-lg">Book a Consultation</h3>
                  <p className="text-sm" style={{ color: '#F5F0EA' }}>
                    Transform your space with us
                  </p>
                </div>
                <div className="p-4 space-y-3">
                  <Link
                    to="/quote"
                    className="flex items-center justify-between p-3 rounded-sm transition-colors"
                    style={{ 
                      backgroundColor: '#F5F0EA',
                      color: '#3D1E0B'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#EBE1D5'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#F5F0EA'}
                    onClick={() => setIsOpen(false)}
                  >
                    <span>Book a Consultation</span>
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                  <a
                    href="tel:+254700097896"
                    className="flex items-center justify-between p-3 rounded-sm transition-colors"
                    style={{ 
                      backgroundColor: '#F5F0EA',
                      color: '#3D1E0B'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#EBE1D5'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#F5F0EA'}
                    onClick={() => setIsOpen(false)}
                  >
                    <span>Call Now</span>
                    <ChevronRight className="h-4 w-4" />
                  </a>
                  <a
                    href="https://wa.me/254700097896"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-sm transition-colors"
                    style={{ 
                      backgroundColor: '#F5F0EA',
                      color: '#3D1E0B'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#EBE1D5'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#F5F0EA'}
                    onClick={() => setIsOpen(false)}
                  >
                    <span>Chat on WhatsApp</span>
                    <ChevronRight className="h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingCTA;