import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ShareButton from '../components/common/ShareButton';
import SEOOptimizer from '../components/common/SEOOptimizer';
import StructuredData from '../components/common/StructuredData';
import { blogPosts } from '../data/blogPosts';
import { getImageUrlWithFallback } from '../lib/imageHelper';
import { applyInternalLinks } from '../data/interlinkingMap';
import { extractFAQs } from '../utils/faqExtractor';

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const latestScrollRef = useRef<HTMLDivElement>(null);
  const upNextScrollRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  const post = blogPosts.find(p => p.slug === slug);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#F9F7F4' }}>
        <div className="text-center">
          <h1 className="text-2xl font-serif text-brown-900 mb-4">Article Not Found</h1>
          <Link to="/blog" className="btn btn-primary">
            Back to Read
          </Link>
        </div>
      </div>
    );
  }

  const latestPosts = [...blogPosts]
    .sort((a, b) => new Date(b.datePosted).getTime() - new Date(a.datePosted).getTime())
    .slice(0, 4);

  const getRelatedPosts = () => {
    const related = blogPosts.filter(p =>
      p.slug !== post.slug &&
      (p.category === post.category || p.tags?.some(tag => post.tags?.includes(tag)))
    );

    if (related.length < 2) {
      return blogPosts.filter(p => p.slug !== post.slug).slice(0, 5);
    }

    return related.slice(0, 10);
  };

  const relatedPosts = getRelatedPosts();

  const scrollLatest = (direction: 'left' | 'right') => {
    if (latestScrollRef.current) {
      const scrollAmount = 350;
      latestScrollRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const scrollUpNext = (direction: 'left' | 'right') => {
    if (upNextScrollRef.current) {
      const scrollAmount = 350;
      upNextScrollRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Apply internal links to content before formatting
  const contentWithLinks = applyInternalLinks(post.content, post.slug);

  // Extract FAQs for structured data
  const faqs = extractFAQs(post.content);

  const formatContent = (content: string) => {
    return content.split('\n\n').map((paragraph, index) => {
      if (paragraph.startsWith('### ')) {
        return (
          <motion.h2
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.02 }}
            className="editorial-subheading relative font-serif text-xl md:text-2xl font-medium mb-5 mt-10 pb-3 border-b"
            style={{
              color: '#3D1E0B',
              borderColor: 'rgba(139, 69, 19, 0.08)'
            }}
          >
            <span className="relative inline-block" dangerouslySetInnerHTML={{ __html: paragraph.replace('### ', '') }}>
            </span>
          </motion.h2>
        );
      } else if (paragraph.startsWith('## ')) {
        return (
          <motion.h2
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.02 }}
            className="editorial-heading font-serif text-2xl md:text-3xl font-medium mb-6 mt-12 first:mt-0"
            style={{ color: '#3D1E0B' }}
            dangerouslySetInnerHTML={{ __html: paragraph.replace('## ', '') }}
          />
        );
      } else if (paragraph.startsWith('> ')) {
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.02 }}
            className="editorial-pullquote my-12"
          >
            <blockquote className="relative p-8 rounded-sm" style={{ backgroundColor: '#F5F1EC', borderLeft: '4px solid #8B4513' }}>
              <p
                className="font-serif text-xl md:text-2xl font-light italic leading-relaxed"
                style={{ color: '#562A0E' }}
                dangerouslySetInnerHTML={{ __html: paragraph.replace('> ', '').replace(/"/g, '') }}
              />
            </blockquote>
          </motion.div>
        );
      } else if (paragraph.startsWith('- ')) {
        const items = paragraph.split('\n- ').map(item => item.replace(/^- /, ''));
        return (
          <motion.ul
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.02 }}
            className="space-y-2.5 mb-8 pl-6"
          >
            {items.map((item, itemIndex) => (
              <motion.li
                key={itemIndex}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.4, delay: (index * 0.02) + (itemIndex * 0.05) }}
                className="relative text-base leading-relaxed"
                style={{ color: '#562A0E' }}
              >
                <span className="absolute -left-6 top-1.5 text-xs font-semibold" style={{ color: '#8B4513' }}>◆</span>
                <span dangerouslySetInnerHTML={{ __html: item }} />
              </motion.li>
            ))}
          </motion.ul>
        );
      } else if (paragraph.includes('**')) {
        // Process bold text with proper HTML support
        let processedParagraph = paragraph;
        const boldRegex = /\*\*(.*?)\*\*/g;
        processedParagraph = processedParagraph.replace(boldRegex, '<strong class="font-semibold" style="color: #3D1E0B">$1</strong>');

        return (
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.02 }}
            className="text-lg leading-relaxed mb-6"
            style={{ color: '#562A0E' }}
            dangerouslySetInnerHTML={{ __html: processedParagraph }}
          />
        );
      } else if (paragraph.startsWith('<div') || paragraph.startsWith('<table') || paragraph.startsWith('<a href')) {
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.02 }}
            className="mb-6"
            dangerouslySetInnerHTML={{ __html: paragraph }}
          />
        );
      } else {
        return (
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.02 }}
            className="text-lg leading-relaxed mb-6"
            style={{ color: '#562A0E' }}
            dangerouslySetInnerHTML={{ __html: paragraph }}
          />
        );
      }
    });
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${months[date.getMonth()]}, ${date.getDate()}, ${date.getFullYear()}`;
  };

  return (
    <>
      <SEOOptimizer
        title={post.title}
        description={post.excerpt}
        keywords={`interior design tips, ${post.category.toLowerCase()}, interior design consultation, Kenya interior design, Nairobi home design`}
        type="article"
        image={`https://www.avalanchecreations.co.ke${post.image}`}
        publishedTime={new Date(post.date).toISOString()}
        section="Interior Design Blog"
      />

      <StructuredData
        type="article"
        data={{
          title: post.title,
          excerpt: post.excerpt,
          image: `https://www.avalanchecreations.co.ke${post.image}`,
          datePublished: new Date(post.date).toISOString(),
          url: `https://www.avalanchecreations.co.ke/blog/${post.slug}`,
          keywords: `interior design tips, ${post.category.toLowerCase()}, interior design consultation, Kenya interior design`
        }}
      />

      {faqs && (
        <StructuredData
          type="faq"
          data={faqs}
        />
      )}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen"
        style={{ backgroundColor: '#F5F1EC' }}
      >
        {/* Latest Articles Strip - Fixed/Sticky */}
        <div className="sticky top-0 z-40 border-b" style={{ borderColor: '#E8DDD0', backgroundColor: '#FAF8F5' }}>
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center gap-4 overflow-hidden">
              <div className="flex-shrink-0">
                <span className="font-serif text-sm font-semibold" style={{ color: '#8B4513' }}>
                  Latest
                </span>
              </div>

              <div className="flex-1 relative overflow-hidden">
                <button
                  onClick={() => scrollLatest('left')}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-1.5 rounded-full shadow-sm transition-all hover:shadow-md"
                  style={{ backgroundColor: '#F9F7F4', color: '#8B4513' }}
                >
                  <ChevronLeft className="h-3 w-3" />
                </button>

                <div
                  ref={latestScrollRef}
                  className="overflow-x-auto scrollbar-hide scroll-smooth"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  <div className="flex gap-3 px-6">
                    {latestPosts.map((latestPost) => (
                      <Link
                        key={latestPost.id}
                        to={`/blog/${latestPost.slug}`}
                        className="flex-shrink-0 px-4 py-2 rounded-full transition-all duration-300 hover:shadow-md whitespace-nowrap"
                        style={{
                          backgroundColor: '#FFFFFF',
                          border: '1px solid #E8DDD0'
                        }}
                      >
                        <span className="text-xs font-medium line-clamp-1" style={{ color: '#3D1E0B' }}>
                          {latestPost.title}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => scrollLatest('right')}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-1.5 rounded-full shadow-sm transition-all hover:shadow-md"
                  style={{ backgroundColor: '#F9F7F4', color: '#8B4513' }}
                >
                  <ChevronRight className="h-3 w-3" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="container mx-auto px-4 py-12">
          <article className="max-w-4xl mx-auto">
            {/* Article Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-serif text-2xl md:text-3xl lg:text-4xl font-normal mb-8 leading-tight"
              style={{ color: '#3D1E0B' }}
            >
              {post.title}
            </motion.h1>

            {/* Feature Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group relative overflow-hidden rounded-sm shadow-elegant mb-6"
            >
              <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                <img
                  src={getImageUrlWithFallback(post.image)}
                  alt={post.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
              </div>
            </motion.div>

            {/* Meta Row with Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 text-sm mb-6 pb-6 border-b flex-wrap"
              style={{ borderColor: '#E8DDD0' }}
            >
              <span
                className="px-4 py-2 rounded-full font-medium"
                style={{
                  backgroundColor: '#F5F0EA',
                  color: '#562A0E',
                  border: '1px solid #E8DDD0'
                }}
              >
                {post.category}
              </span>
              <span
                className="px-4 py-2 rounded-full font-medium"
                style={{
                  backgroundColor: '#FAF8F5',
                  color: '#703811',
                  border: '1px solid #E8DDD0'
                }}
              >
                {post.readTime}
              </span>
              <ShareButton
                url={`https://www.avalanchecreations.co.ke/blog/${slug}`}
                title={post.title}
                description={post.excerpt}
                isMobile={isMobile}
              />
            </motion.div>

            {/* Author Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-3 mb-2"
            >
              <div
                className="flex-shrink-0 w-12 h-12 rounded-full overflow-hidden"
                style={{ border: '2px solid rgba(139, 69, 19, 0.2)' }}
              >
                <img
                  src="https://ykndyjgvochvehwimhhq.supabase.co/storage/v1/object/public/Website%20Assests/banner-images/esther-njoroge-founder-and-lead-interior-designer-avalanche-creations.jpeg"
                  alt="Esther Njoroge"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              <div>
                <p className="text-sm" style={{ color: '#562A0E' }}>
                  Author:{' '}
                  <strong className="font-semibold" style={{ color: '#8B4513' }}>Esther Njoroge</strong>
                  {' '}|{' '}
                  Founder &amp; Lead Interior Designer{' '}
                  <span style={{ color: '#8B4513' }}>Avalanche Creations</span>
                </p>
              </div>
            </motion.div>

            {/* Posting Date */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xs mb-8 pl-15"
              style={{ color: '#A07850', paddingLeft: '60px' }}
            >
              {formatDate(post.date)}
            </motion.div>

            {/* Article Excerpt */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-8 pb-8 border-b editorial-excerpt"
              style={{ borderColor: '#E8DDD0' }}
            >
              <p className="text-xl font-light leading-relaxed" style={{ color: '#562A0E' }}>
                {post.excerpt}
              </p>
            </motion.div>

            {/* Article Body */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="editorial-content prose prose-lg max-w-none mb-16"
            >
              {formatContent(contentWithLinks)}
            </motion.div>

            {/* Bottom Author Bio */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="mt-12 mb-10 p-6 md:p-8 rounded-sm"
              style={{ backgroundColor: '#FAF8F5', border: '1px solid #E8DDD0' }}
            >
              <p className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: '#A07850' }}>
                About the author:
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <div className="flex-shrink-0">
                  <div
                    className="w-20 h-20 rounded-full overflow-hidden"
                    style={{ border: '2px solid rgba(139, 69, 19, 0.25)' }}
                  >
                    <img
                      src="https://ykndyjgvochvehwimhhq.supabase.co/storage/v1/object/public/Website%20Assests/banner-images/esther-njoroge-founder-and-lead-interior-designer-avalanche-creations.jpeg"
                      alt="Esther Njoroge"
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-base mb-0.5" style={{ color: '#8B4513' }}>
                    Esther Njoroge
                  </p>
                  <p className="text-sm mb-3" style={{ color: '#703811' }}>
                    Founder &amp; Lead Interior Designer{' '}
                    <span style={{ color: '#8B4513' }}>Avalanche Creations</span>
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: '#562A0E' }}>
                    Esther Njoroge is the Founder and Lead Interior Designer at{' '}
                    <Link
                      to="/about"
                      className="underline hover:no-underline transition-all"
                      style={{ color: '#8B4513' }}
                    >
                      Avalanche Creations, a Nairobi-based interior design studio founded in 2021
                    </Link>
                    {' '}focused on creating custom, thoughtfully designed residential interiors.
                  </p>
                  <p className="text-sm leading-relaxed mt-3" style={{ color: '#562A0E' }}>
                    Before establishing the studio, she spent five years in general management, an experience that shaped the structured and intentional approach she brings to every project today. Esther believes great design goes beyond aesthetics—it enhances how you live, feel, and connect within your space every day.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="mt-12 pt-8 border-t text-center"
              style={{ borderColor: '#E8DDD0' }}
            >
              <p className="text-lg mb-6" style={{ color: '#562A0E' }}>
                We're here to listen, understand, and bring your vision to life.{' '}
                <Link
                  to="/quote"
                  className="font-medium underline hover:no-underline transition-all"
                  style={{ color: '#8B4513' }}
                >
                  Let's talk about your space
                </Link>
              </p>
            </motion.div>
          </article>
        </div>

        {/* Up Next on Read Section */}
        {relatedPosts.length >= 2 && (
          <div className="border-t py-16" style={{ borderColor: '#E8DDD0', backgroundColor: '#FAF8F5' }}>
            <div className="container mx-auto px-4">
              <h3 className="font-serif text-2xl md:text-3xl font-semibold mb-8" style={{ color: '#3D1E0B' }}>
                Up Next on Read
              </h3>

              <div className="relative">
                <button
                  onClick={() => scrollUpNext('left')}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full shadow-lg transition-all hover:shadow-xl"
                  style={{ backgroundColor: '#F9F7F4', color: '#8B4513' }}
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                <div
                  ref={upNextScrollRef}
                  className="overflow-x-auto scrollbar-hide scroll-smooth"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  <div className="flex gap-6 px-12">
                    {relatedPosts.map((relatedPost) => (
                      <Link
                        key={relatedPost.id}
                        to={`/blog/${relatedPost.slug}`}
                        className="flex-shrink-0 group"
                        style={{ width: '300px' }}
                      >
                        <div className="rounded-sm overflow-hidden shadow-elegant transition-all duration-300 group-hover:shadow-lg group-hover:scale-105 h-full flex flex-col">
                          <div className="w-full overflow-hidden" style={{ height: '200px' }}>
                            <img
                              src={relatedPost.image}
                              alt={relatedPost.title}
                              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                              loading="lazy"
                            />
                          </div>
                          <div className="p-4 flex-1 flex flex-col" style={{ backgroundColor: '#FFFFFF', minHeight: '120px' }}>
                            <div className="flex items-center justify-between text-xs mb-2" style={{ color: '#703811', opacity: 0.7 }}>
                              <span>{relatedPost.category}</span>
                              <span>{relatedPost.readTime}</span>
                            </div>
                            <h4 className="font-medium text-sm leading-snug line-clamp-3" style={{ color: '#3D1E0B', minHeight: '60px' }}>
                              {relatedPost.title}
                            </h4>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => scrollUpNext('right')}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full shadow-lg transition-all hover:shadow-xl"
                  style={{ backgroundColor: '#F9F7F4', color: '#8B4513' }}
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </>
  );
};

export default BlogPostPage;
