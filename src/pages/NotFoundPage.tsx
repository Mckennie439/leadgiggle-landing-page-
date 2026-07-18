import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const NotFoundPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Avalanche Creations</title>
        <meta name="description" content="The page you were looking for could not be found. Return to the Avalanche Creations homepage to explore our interior design services." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <Header />

      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center"
        style={{ backgroundColor: '#FAF9F6' }}
      >
        <p
          className="text-sm font-semibold uppercase tracking-widest mb-4"
          style={{ color: '#8B4513', letterSpacing: '0.2em' }}
        >
          404
        </p>
        <h1
          className="font-serif text-4xl md:text-5xl font-light mb-6"
          style={{ color: '#3D1E0B' }}
        >
          Page Not Found
        </h1>
        <p
          className="text-lg mb-10 max-w-md leading-relaxed"
          style={{ color: '#703811' }}
        >
          The page you were looking for doesn't exist or may have moved. Let's get you back on track.
        </p>
        <Link
          to="/"
          className="btn btn-primary inline-flex items-center"
        >
          Back to Homepage
        </Link>
      </motion.main>

      <Footer />
    </>
  );
};

export default NotFoundPage;
