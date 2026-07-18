import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEOOptimizer from '../components/common/SEOOptimizer';
import StructuredData from '../components/common/StructuredData';
import { blogPosts } from '../data/blogPosts';
import { getImageUrlWithFallback } from '../lib/imageHelper';

const BlogPage: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const sortedBlogPosts = [...blogPosts].sort((a, b) => {
    return new Date(b.datePosted).getTime() - new Date(a.datePosted).getTime();
  });

  const categories = ['All', ...Array.from(new Set(blogPosts.map(post => post.category)))];

  const filteredPosts = selectedFilter === 'All'
    ? sortedBlogPosts
    : sortedBlogPosts.filter(post => post.category === selectedFilter);

  return (
    <>
      <SEOOptimizer
        title="Interior Design Journal | Insights by Avalanche Creations"
        description="An editorial journal exploring interior design ideas, renovation insights, and behind-the-scenes stories shaped by real spaces and lived experience."
        keywords="interior design blog Kenya, home design tips Nairobi, renovation ideas Kenya, interior design journal, design insights"
        type="website"
        image="https://ykndyjgvochvehwimhhq.supabase.co/storage/v1/object/public/Website%20Assests/banner-images/interior-design-services-kenya-avalanche-creations.jpg"
      />
      <StructuredData
        type="breadcrumb"
        data={[
          { name: 'Home', url: 'https://www.avalanchecreations.co.ke/' },
          { name: 'Read', url: 'https://www.avalanchecreations.co.ke/blog' },
        ]}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen"
        style={{ backgroundColor: '#F9F7F4' }}
      >
        {/* Hero Section */}
        <div className="relative overflow-hidden" style={{ backgroundColor: '#F5F1EC' }}>
          <div className="absolute inset-0 opacity-5">
            <div className="w-full h-full bg-gradient-to-br from-brown-200 to-beige-300"></div>
          </div>

          <div className="container mx-auto px-4 py-20 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center mb-16"
            >
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-6 leading-tight text-brown-900">
                Read
              </h1>

              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-light mb-8 leading-tight text-brown-900">
                Interior Design – Insights & Stories
              </h2>

              <div className="max-w-4xl mx-auto">
                <p className="text-xl md:text-2xl font-light leading-relaxed mb-6" style={{ color: '#562A0E' }}>
Design is more than appearance. It’s the way a space unfolds, supports daily life, and quietly shapes how we think, feel, and live.
                </p>
                <p className="text-lg leading-relaxed" style={{ color: '#703811' }}>
                  This journal explores interior design through a considered lens — sharing renovation insights, design perspectives, and behind-the-scenes stories drawn from real projects and lived spaces. Each piece reflects our belief that thoughtful design balances beauty with function, intention with emotion, and creativity with clarity.

Here, we reflect on spaces, processes, and ideas that shape how we design — offering perspective for those who care about interiors that are intentional, enduring, and deeply considered.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Sorting Strip */}
        <div className="border-b" style={{ borderColor: '#E8DDD0', backgroundColor: '#FAF8F5' }}>
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-semibold text-sm" style={{ color: '#562A0E' }}>
                Sort by
              </span>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedFilter(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedFilter === category
                        ? 'shadow-md'
                        : 'hover:shadow-sm'
                    }`}
                    style={{
                      backgroundColor: selectedFilter === category ? '#8B4513' : '#FFFFFF',
                      color: selectedFilter === category ? '#FFFFFF' : '#562A0E',
                      border: `1px solid ${selectedFilter === category ? '#8B4513' : '#E8DDD0'}`
                    }}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Articles Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-5xl mx-auto">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 + (index * 0.1) }}
                className="mb-16"
              >
                {/* Image Section */}
                <div className="relative overflow-hidden rounded-sm shadow-elevated group mb-6">
                  <img
                    src={getImageUrlWithFallback(post.image)}
                    alt={post.title}
                    className="w-full h-80 md:h-96 object-cover transform group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brown-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Content Section */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-sm" style={{ color: '#8B4513' }}>
                    <span className="px-3 py-1 rounded-full text-xs font-medium tracking-wide uppercase" style={{ backgroundColor: '#F5F0EA', color: '#562A0E' }}>
                      {post.category}
                    </span>
                    <span>{post.readTime}</span>
                  </div>

                  <h2 className="font-serif text-3xl md:text-4xl font-light leading-tight" style={{ color: '#3D1E0B' }}>
                    {post.title}
                  </h2>

                  <div className="editorial-excerpt">
                    <p className="text-lg leading-relaxed" style={{ color: '#562A0E' }}>
                      {post.excerpt}
                    </p>
                  </div>

                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-block font-medium text-base transition-colors"
                    style={{
                      color: '#8B4513',
                      textDecoration: 'underline',
                      textUnderlineOffset: '4px'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#703811'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#8B4513'}
                  >
                    View Article
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default BlogPage;
