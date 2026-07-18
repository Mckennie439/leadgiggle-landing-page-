import React from 'react';
import { Helmet } from 'react-helmet-async';

interface StructuredDataProps {
  type: 'organization' | 'article' | 'service' | 'project' | 'breadcrumb' | 'faq' | 'webpage';
  // Shape varies by `type` (an object for most types, an array for breadcrumb/faq).
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
}

const StructuredData: React.FC<StructuredDataProps> = ({ type, data }) => {
  const generateStructuredData = () => {
    switch (type) {
      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": ["Organization", "LocalBusiness", "ProfessionalService", "InteriorDesigner"],
          "name": "Avalanche Creations",
          "url": "https://www.avalanchecreations.co.ke/",
          "logo": "https://www.avalanchecreations.co.ke/logos/avalanche-creations-logo.jpeg",
          "image": "https://www.avalanchecreations.co.ke/logos/avalanche-creations-logo.jpeg",
          "description": "Kenya's premier interior design studio offering luxury home and commercial design services in Nairobi and across Kenya.",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "Kenya",
            "addressLocality": "Nairobi",
            "addressRegion": "Nairobi County",
            "streetAddress": "Garden Estate Cedar Court"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+254-700-097-896",
            "contactType": "customer service",
            "email": "avalanchecreationlimited@gmail.com",
            "availableLanguage": ["English", "Swahili"]
          },
          "telephone": "+254-700-097-896",
          "email": "avalanchecreationlimited@gmail.com",
          "sameAs": [
            "https://www.instagram.com/avalanchecreationsltd?igsh=MXJrenBpcGcwbjZhZA=="
          ],
          "foundingDate": "2021",
          "numberOfEmployees": "5-10",
          "areaServed": [
            { "@type": "City", "name": "Nairobi" },
            { "@type": "City", "name": "Kisumu" },
            { "@type": "City", "name": "Mombasa" },
            { "@type": "City", "name": "Nakuru" },
            { "@type": "City", "name": "Eldoret" },
            { "@type": "City", "name": "Meru" },
            { "@type": "City", "name": "Nanyuki" },
            { "@type": "City", "name": "Malindi" },
            { "@type": "Country", "name": "Kenya" }
          ],
          "serviceArea": {
            "@type": "GeoCircle",
            "geoMidpoint": {
              "@type": "GeoCoordinates",
              "latitude": "-1.2921",
              "longitude": "36.8219"
            },
            "geoRadius": "100000"
          },
          "priceRange": "$$-$$$"
        };

      case 'article':
        return {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": data.title,
          "description": data.excerpt,
          "image": {
            "@type": "ImageObject",
            "url": data.image,
            "width": 1200,
            "height": 630,
            "caption": data.title
          },
          "author": {
            "@type": "Person",
            "name": "Esther Njoroge"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Avalanche Creations",
            "logo": {
              "@type": "ImageObject",
              "url": "https://www.avalanchecreations.co.ke/logos/avalanche-creations-logo.jpeg",
              "width": 600,
              "height": 60
            }
          },
          "datePublished": data.datePublished,
          "dateModified": data.dateModified || data.datePublished,
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": data.url
          },
          "articleSection": "Interior Design",
          "keywords": data.keywords || "interior design, Kenya, Nairobi, home design, commercial design"
        };

      case 'service':
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": data.name,
          "description": data.description,
          "provider": {
            "@type": "Organization",
            "name": "Avalanche Creations",
            "url": "https://www.avalanchecreations.co.ke/",
            "logo": {
              "@type": "ImageObject",
              "url": "https://www.avalanchecreations.co.ke/logos/avalanche-creations-logo.jpeg"
            },
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "Kenya",
              "addressLocality": "Nairobi",
              "addressRegion": "Nairobi County",
              "streetAddress": "Garden Estate Cedar Court"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+254-700-097-896",
              "contactType": "customer service",
              "email": "avalanchecreationlimited@gmail.com",
              "availableLanguage": ["English", "Swahili"]
            },
            "sameAs": [
              "https://www.instagram.com/avalanchecreationsltd?igsh=MXJrenBpcGcwbjZhZA=="
            ]
          },
          "areaServed": {
            "@type": "Country",
            "name": "Kenya"
          },
          "serviceType": data.serviceType || "Interior Design",
          "category": data.category || "Interior Design Services",
          "url": data.url,
          "image": data.image,
          ...(data.availableChannel && { "availableChannel": data.availableChannel })
        };

      case 'project':
        return {
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          "name": data.title,
          "description": data.description,
          "image": Array.isArray(data.images) ? data.images.map((img: string) => ({
            "@type": "ImageObject",
            "url": img,
            "caption": data.title,
            "width": 1200,
            "height": 800
          })) : {
            "@type": "ImageObject",
            "url": data.images,
            "caption": data.title,
            "width": 1200,
            "height": 800
          },
          "creator": {
            "@type": "Organization",
            "name": "Avalanche Creations"
          },
          "locationCreated": {
            "@type": "Place",
            "name": data.location,
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "Kenya",
              "addressLocality": data.location
            }
          },
          "genre": "Interior Design",
          "keywords": `interior design, ${data.location}, Kenya, ${data.category.toLowerCase()} design`,
          "url": data.url,
          "dateCreated": data.dateCreated || "2024"
        };

      case 'breadcrumb':
        return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          "itemListElement": data.map((item: any, index: number) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.url
          }))
        };

      case 'faq':
        return {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          "mainEntity": data.map((faq: any) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        };

      case 'webpage':
        return {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": data.name,
          "description": data.description,
          "url": data.url,
          "isPartOf": {
            "@type": "WebSite",
            "name": "Avalanche Creations",
            "url": "https://www.avalanchecreations.co.ke/"
          },
          ...(data.breadcrumb && {
            "breadcrumb": {
              "@type": "BreadcrumbList",
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              "itemListElement": data.breadcrumb.map((item: any, index: number) => ({
                "@type": "ListItem",
                "position": index + 1,
                "name": item.name,
                "item": item.url
              }))
            }
          })
        };

      default:
        return null;
    }
  };

  const structuredData = generateStructuredData();

  if (!structuredData) return null;

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default StructuredData;