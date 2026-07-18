import React from 'react';
import { Link } from 'react-router-dom';
import {
  Instagram,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: '#3D1E0B' }} className="pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <h2 
                style={{ 
                  color: '#FFFFFF',
                  fontWeight: 'bold',
                  fontSize: '1.875rem',
                  lineHeight: '2.25rem',
                  fontFamily: 'Cormorant Garamond, serif',
                  letterSpacing: '0.025em',
                  display: 'block'
                }}
              >
                AVALANCHE CREATIONS
              </h2>
            </div>
            <p className="mb-6 text-sm leading-relaxed" style={{ color: '#F5F0EA' }}>
              Transforming spaces with clarity, care, and intention.
Avalanche Creations designs interiors that begin with how you live, not just how you want a space to look. Through thoughtful planning, honest collaboration, and refined execution, we help you uncover the full potential of your home or workplace.
As trusted interior designers in Nairobi, Kenya, we create calm, cohesive interiors that reflect your story and feel deeply, unmistakably yours.
            </p>
            <div className="mb-4">
              <h3 
                style={{ 
                  color: '#FFFFFF',
                  fontWeight: '600',
                  fontSize: '1.25rem',
                  lineHeight: '1.75rem',
                  fontFamily: 'Cormorant Garamond, serif',
                  marginBottom: '1.5rem'
                }}
              >
                Follow Us
              </h3>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/avalanchecreationsltd?igsh=MXJrenBpcGcwbjZhZA=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-white transition-opacity hover:opacity-80"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/avalanche-creations-limited-98a72939a/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-white transition-opacity hover:opacity-80"
              >
                <svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              style={{
                color: '#FFFFFF',
                fontWeight: '600',
                fontSize: '1.25rem',
                lineHeight: '1.75rem',
                fontFamily: 'Cormorant Garamond, serif',
                marginBottom: '1.5rem'
              }}
            >
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-white hover:opacity-80 transition-opacity">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white hover:opacity-80 transition-opacity">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white hover:opacity-80 transition-opacity">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/process" className="text-white hover:opacity-80 transition-opacity">
                  Process
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-white hover:opacity-80 transition-opacity">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-white hover:opacity-80 transition-opacity">
                  Read
                </Link>
              </li>
              <li>
                <Link to="/quote" className="text-white hover:opacity-80 transition-opacity">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="border-t mt-8 pt-8" style={{ borderColor: '#562A0E' }}>
          <h3
            style={{
              color: '#FFFFFF',
              fontWeight: '600',
              fontSize: '1.25rem',
              lineHeight: '1.75rem',
              fontFamily: 'Cormorant Garamond, serif',
              marginBottom: '1.5rem'
            }}
          >
            Contact Us
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-start">
              <MapPin className="h-5 w-5 mr-3 mt-1 flex-shrink-0 text-white" />
              <p style={{ color: '#FFFFFF' }}>
                Garden Estate Cedar Court,<br />
                Nairobi
              </p>
            </div>
            <div>
              <a
                href="tel:+254700097896"
                className="flex items-center text-white hover:opacity-80"
              >
                <Phone className="h-5 w-5 mr-3 text-white" />
                +254 700 097 896
              </a>
            </div>
            <div>
              <a
                href="mailto:avalanchecreationlimited@gmail.com"
                className="flex items-center text-white hover:opacity-80"
              >
                <Mail className="h-5 w-5 mr-3 text-white" />
                avalanchecreationlimited@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t mt-8 pt-8 text-center text-sm" style={{ borderColor: '#562A0E', color: '#FFFFFF' }}>
          <p>
            &copy; {currentYear} Avalanche Creations. All rights reserved.
            <span className="mx-2 text-white">|</span>
            <Link
              to="/privacy-policy"
              className="text-white hover:opacity-80"
            >
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;