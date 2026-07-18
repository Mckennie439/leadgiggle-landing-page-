import React from 'react';
import { motion } from 'framer-motion';
import { Home, Hammer, PenTool, Laptop } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOOptimizer from '../components/common/SEOOptimizer';
import StructuredData from '../components/common/StructuredData';

const services = [
  {
    icon: <Home className="h-10 w-10 text-brown-600" />,
    title: 'Full Design Services',
    description: 'Comprehensive interior design services in Nairobi and across Kenya, tailored for both residential and commercial spaces. From architectural review to final styling, we oversee every design phase with precision and purpose, creating interiors that balance function, comfort, and aesthetic harmony.',
    link: '/services/full-design-services-kenya'
  },
  {
    icon: <Hammer className="h-10 w-10 text-brown-600" />,
    title: 'Home Renovations',
    description: "Breathe new life into your home with professional renovation services in Kenya. Whether it's a single-room upgrade or a full-home transformation, we modernize outdated spaces with practical layouts, refined finishes, and contemporary style that reflects how you live today.",
    link: '/services/renovations'
  },
  {
    icon: <PenTool className="h-10 w-10 text-brown-600" />,
    title: 'Home Furnishing',
    description: 'Thoughtfully curated home furnishing services in Nairobi, Kenya, designed to bring balance, comfort, and character to every room. From furniture and fabrics to lighting, artwork, and accessories, we create spaces that feel personal, timeless, and completely yours.',
    link: '/services/furnishing'
  },
  {
    icon: <Laptop className="h-10 w-10 text-brown-600" />,
    title: 'Virtual Interior Design',
    description: "Experience your dream space before it's built with our virtual interior design services in Kenya. Using advanced e-design tools and photorealistic 3D visualizations, we help you explore layouts, finishes, and styles remotely, perfect for homeowners and developers across Nairobi and beyond.",
    link: '/services/virtual-design'
  },
  {
    icon: <PenTool className="h-10 w-10 text-brown-600" />,
    title: 'Custom Furniture',
    description: 'We create custom furniture in Kenya, crafted to fit your exact space, style, and lifestyle. Every piece is designed from scratch, no templates, no off-the-shelf shortcuts,  just bespoke craftsmanship that blends design innovation with timeless quality.',
    link: '/services/custom-furniture'
  }
];

const ServicesPage: React.FC = () => {
  return (
    <>
      <SEOOptimizer
        title="Interior Design Services in Kenya | Avalanche Creations"
        description="Explore end-to-end interior design services for residential and commercial spaces. Thoughtful, personal, and functional design tailored to how you live and work."
        keywords="interior design services Kenya, residential design Nairobi, home renovation services, home furnishing Kenya, virtual interior design, custom furniture Kenya"
        type="website"
        image="https://ykndyjgvochvehwimhhq.supabase.co/storage/v1/object/public/Website%20Assests/banner-images/interior-design-services-kenya-avalanche-creations.jpg"
      />
      <StructuredData
        type="breadcrumb"
        data={[
          { name: 'Home', url: 'https://www.avalanchecreations.co.ke/' },
          { name: 'Services', url: 'https://www.avalanchecreations.co.ke/services' },
        ]}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="relative bg-grain-texture min-h-screen"
      >
        <div className="absolute inset-0 bg-offWhite/90"></div>

        {/* Banner Image — mobile only */}
        <div className="w-full h-[300px] relative overflow-hidden z-10 md:hidden">
          <img
            src="https://ykndyjgvochvehwimhhq.supabase.co/storage/v1/object/public/Website%20Assests/banner-images/interior-design-services-kenya-avalanche-creations.jpg"
            alt="Interior Design Services"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brown-900/10 to-brown-900/05"></div>
        </div>

        {/* Desktop / Tablet: two-column hero */}
        <div className="hidden md:grid md:grid-cols-2 md:gap-12 lg:gap-16 relative z-10 md:h-[460px] lg:h-[520px] md:px-4 lg:px-16">
          {/* Left — Image */}
          <div className="relative overflow-hidden">
            <img
              src="https://ykndyjgvochvehwimhhq.supabase.co/storage/v1/object/public/Website%20Assests/banner-images/interior-design-services-kenya-avalanche-creations.jpg"
              alt="Interior Design Services"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>
          {/* Right — Intro copy, CTA pinned to bottom */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between py-12 lg:py-14"
          >
            <div>
              <h1 className="text-3xl lg:text-4xl font-serif text-brown-900 mb-3">
                Services
              </h1>
              <h2 className="text-xl lg:text-2xl font-serif text-brown-900 mb-5">
                Interior Design Services in Nairobi, Kenya
              </h2>
              <div className="text-sm lg:text-base leading-relaxed text-brown-700 space-y-3">
                <p>Interior design that reflects who you are and how you live.</p>
                <p>
                  At Avalanche Creations, we offer end-to-end interior design services for residential and corporate spaces — personal, functional, and timeless in approach. Every project is shaped around the people who will live and work within it.
                </p>
              </div>
            </div>
            <Link
              to="/quote"
              className="btn btn-primary inline-flex items-center self-start"
              style={{ fontSize: '14px', padding: '10px 20px' }}
            >
              Book a Consultation
            </Link>
          </motion.div>
        </div>

        <div className="py-20 relative z-10">
          <div className="container mx-auto px-4">
            {/* Intro — mobile only (desktop uses two-column hero above) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mb-16 md:hidden"
            >
              <h2 className="text-4xl font-serif text-brown-900 mb-6">
                Services
              </h2>
              <h3 className="text-3xl font-serif text-brown-900 mb-6">
                Interior Design Services in Nairobi, Kenya
              </h3>
              <p className="text-lg text-brown-700 mb-4">
                Interior design that reflects who you are and how you live.
              </p>
              <p className="text-lg text-brown-700 mb-8">
                At Avalanche Creations, we offer end-to-end interior design services for residential and corporate spaces — personal, functional, and timeless in approach. From full home transformations to carefully considered commercial interiors, every project is shaped around the people who will live and work within it.

Whether it's a modern apartment, a custom furniture piece, or a complete renovation, we design spaces that feel as good as they look, intentional, balanced, and built to last.
              </p>
              <Link
                to="/quote"
                className="btn btn-primary inline-flex items-center"
                style={{ fontSize: '14px', padding: '8px 18px' }}
              >
                Book a Consultation
              </Link>
            </motion.div>

            <div className="space-y-0">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="border-t border-brown-200 py-10 flex flex-col md:flex-row md:items-start gap-6 md:gap-12"
                >
                  <div className="flex-shrink-0 w-12 h-12 flex items-start pt-1">
                    {service.icon}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-serif text-brown-800 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-brown-600 leading-relaxed mb-4 max-w-2xl">
                      {service.description}
                    </p>
                    <Link
                      to={service.link}
                      className="inline-flex items-center font-medium text-brown-600 hover:text-brown-900 transition-colors"
                    >
                      Learn More
                    </Link>
                  </div>
                </motion.div>
              ))}
              <div className="border-t border-brown-200" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-16"
            >
              <Link
                to="/quote"
                className="btn btn-primary inline-flex items-center"
              >
                Book a Consultation
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ServicesPage;
