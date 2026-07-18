import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import Lightbox from '../components/common/Lightbox';
import SEOOptimizer from '../components/common/SEOOptimizer';
import StructuredData from '../components/common/StructuredData';
import { getImageUrlWithFallback } from '../lib/imageHelper';

import { portfolioProjects, type PortfolioProject } from '../data/portfolioProjects';

type FilterCategory = 'All' | 'Residential' | 'Corporate';

const PortfolioPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [lightboxTitle, setLightboxTitle] = useState('');

  const filterButtons: FilterCategory[] = ['All', 'Residential', 'Corporate'];

  const filteredProjects = portfolioProjects.filter(project => {
    if (activeFilter === 'All') return true;
    return project.category === activeFilter;
  }).sort((a, b) => {
    // Sort by date in descending order (most recent first)
    return new Date(b.datePosted).getTime() - new Date(a.datePosted).getTime();
  });

  const openLightbox = (project: PortfolioProject, imageIndex: number = 0) => {
    setLightboxImages([getImageUrlWithFallback(project.image)]);
    setLightboxTitle(project.title);
    setCurrentImageIndex(imageIndex);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImageIndex(0);
    setLightboxImages([]);
    setLightboxTitle('');
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? lightboxImages.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => 
      prev === lightboxImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <>
      <SEOOptimizer
        title="Interior Design Portfolio | Projects in Kenya | Avalanche Creations"
        description="View a curated portfolio of residential and commercial interior design projects across Kenya, rooted in context and crafted with intention."
        keywords="interior design portfolio Kenya, residential design projects Nairobi, commercial interior projects Kenya, home renovation portfolio"
        type="website"
        image="https://ykndyjgvochvehwimhhq.supabase.co/storage/v1/object/public/Website%20Assests/banner-images/interior-design-services-kenya-avalanche-creations.jpg"
      />
      <StructuredData
        type="breadcrumb"
        data={[
          { name: 'Home', url: 'https://www.avalanchecreations.co.ke/' },
          { name: 'Portfolio', url: 'https://www.avalanchecreations.co.ke/portfolio' },
        ]}
      />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brown-900 mb-6">
               Portfolio
            </h1>
            <h2 className="text-2xl md:text-3xl font-serif text-brown-900 mb-6">
              Interior Design Portfolio – Residential & Corporate Projects in Kenya
            </h2>
            <p className="text-lg md:text-xl text-brown-700 mb-4">
              Every space tells a story, here's ours.
            </p>
            <p className="text-lg md:text-xl text-brown-700 max-w-3xl mx-auto">
This portfolio is a curated collection of interiors shaped by people, place, and purpose. Each project begins with listening — to how a space is meant to be lived in, how it should function, and the atmosphere it needs to create.

From private homes to commercial environments, our work reflects a belief in thoughtful design that balances beauty with function, clarity with warmth, and vision with practicality. Rooted in the Kenyan context and informed by timeless principles, these are spaces not just designed to be seen, but experienced.
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center mb-12"
          >
            <div className="flex flex-wrap gap-3 justify-center">
              {filterButtons.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeFilter === filter
                      ? 'shadow-md'
                      : 'hover:shadow-sm'
                  }`}
                  style={{
                    backgroundColor: activeFilter === filter ? '#8B4513' : '#FFFFFF',
                    color: activeFilter === filter ? '#FFFFFF' : '#562A0E',
                    border: `1px solid ${activeFilter === filter ? '#8B4513' : '#E8DDD0'}`
                  }}
                >
                  {filter} {filter !== 'All' && 'Projects'}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div 
                  className="aspect-[4/5] w-full overflow-hidden rounded-lg shadow-elegant mb-4 cursor-pointer"
                  onClick={() => openLightbox(project)}
                >
                  <img
                    src={getImageUrlWithFallback(project.image)}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="text-xs px-2 py-1 bg-beige-200 text-brown-700 rounded-full mb-2 inline-block">
                  {project.type}
                </div>
                <div className="flex items-center gap-2 text-brown-600 mb-2">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{project.location}</span>
                </div>
                <h2 className="text-xl font-serif text-brown-900 mb-2 group-hover:text-brown-700 transition-colors">
                  {project.title}
                </h2>
                <p className="text-brown-700 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <Link
                  to={`/portfolio/${project.slug}`}
                  className="inline-block text-brown-600 hover:text-brown-800 transition-colors text-sm"
                  style={{
                    textDecoration: 'underline',
                    textUnderlineOffset: '4px'
                  }}
                >
                  Step Inside the Space
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* No Results Message */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-brown-600 text-lg">
                No projects found in this category.
              </p>
            </motion.div>
          )}
        </div>

        <Lightbox
          isOpen={lightboxOpen}
          onClose={closeLightbox}
          images={lightboxImages}
          currentIndex={currentImageIndex}
          onPrevious={goToPrevious}
          onNext={goToNext}
          title={lightboxTitle}
        />
      </motion.div>
    </>
  );
};

export default PortfolioPage;