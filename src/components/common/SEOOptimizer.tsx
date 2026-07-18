import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOOptimizerProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  type?: 'website' | 'article' | 'service';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  noindex?: boolean;
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  title,
  description,
  keywords,
  image = "https://www.avalanchecreations.co.ke/hero-images/nairobi-luxury-home-renovation-project.jpg",
  type = 'website',
  publishedTime,
  modifiedTime,
  author = 'Avalanche Creations',
  section = 'Interior Design',
  noindex = false,
}) => {
  const location = useLocation();
  const baseUrl = 'https://www.avalanchecreations.co.ke';
  const currentUrl = `${baseUrl}${location.pathname}`;

  // Force canonical URL to always use the primary domain
  const canonicalUrl = currentUrl;

  // Enhanced keywords for better SEO
  const defaultKeywords = "interior design Kenya, Nairobi interior designers, luxury interior design, home renovation Kenya, office interior design, custom furniture Kenya, interior styling, space planning, 3D visualization, Avalanche Creations";
  const finalKeywords = keywords ? `${keywords}, ${defaultKeywords}` : defaultKeywords;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={finalKeywords} />
      <meta name="author" content={author} />
      <meta name="robots" content={noindex ? "noindex, follow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"} />
      <meta name="googlebot" content={noindex ? "noindex, follow" : "index, follow"} />

      {/* Canonical URL - Force primary domain */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Hreflang — signals English content for English-speaking audiences */}
      <link rel="alternate" hreflang="en" href={canonicalUrl} />

      {/* Open Graph Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:secure_url" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Avalanche Creations" />
      <meta property="og:locale" content="en_KE" />

      {/* Article specific tags */}
      {type === 'article' && (
        <>
          <meta property="article:author" content={author} />
          <meta property="article:section" content={section} />
          {publishedTime && <meta property="article:published_time" content={publishedTime} />}
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
        </>
      )}

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={title} />

      {/* Additional SEO Tags */}
      <meta name="theme-color" content="#8B4513" />
      <meta name="msapplication-TileColor" content="#8B4513" />
      <meta name="application-name" content="Avalanche Creations" />

      {/* Geo Tags for Local SEO */}
      <meta name="geo.region" content="KE-30" />
      <meta name="geo.placename" content="Nairobi" />
      <meta name="geo.position" content="-1.2921;36.8219" />
      <meta name="ICBM" content="-1.2921, 36.8219" />

      {/* Language and Content Tags */}
      <meta httpEquiv="content-language" content="en-KE" />
      <meta name="language" content="English" />
      <meta name="coverage" content="Worldwide" />
      <meta name="distribution" content="Global" />
      <meta name="rating" content="General" />

      {/* Mobile Optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <meta name="format-detection" content="telephone=yes" />
      <meta name="format-detection" content="address=yes" />

      {/* Preconnect for Performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
    </Helmet>
  );
};

export default SEOOptimizer;
