// Strategic interlinking map for blog posts and pages
// Links are contextual and precise, not excessive

export interface InternalLink {
  keyword: string; // The exact text to link
  url: string; // The destination URL
  title: string; // Link title attribute for SEO
  priority: number; // Higher priority links are applied first
}

export const interlinkingMap: Record<string, InternalLink[]> = {
  // Blog post: Common Renovation Mistakes
  'common-renovation-mistakes-homeowners-kenya-avoid-costly-regrets': [
    {
      keyword: 'home renovations in Kenya',
      url: '/services/renovations',
      title: 'Professional Home Renovation Services in Kenya',
      priority: 10
    },
    {
      keyword: 'our renovation approach',
      url: '/process',
      title: 'Our Design and Renovation Process',
      priority: 9
    },
    {
      keyword: 'Kikuyu living room renovation',
      url: '/portfolio/kikuyu',
      title: 'Kiambu County Living Room Renovation Project',
      priority: 8
    }
  ],

  // Blog post: True Costs of Renovating
  'behind-the-walls-true-costs-renovating-home-kenya': [
    {
      keyword: 'home renovation in Kenya',
      url: '/services/renovations',
      title: 'Home Renovation Services in Kenya',
      priority: 10
    },
    {
      keyword: 'Airbnb renovation',
      url: '/portfolio/kindaruma-homes',
      title: 'Kilimani Airbnb Renovation Project',
      priority: 9
    },
    {
      keyword: 'custom furniture',
      url: '/services/custom-furniture',
      title: 'Custom Furniture Design Services',
      priority: 8
    },
    {
      keyword: 'design consultation',
      url: '/blog/how-to-prepare-for-interior-design-consultation',
      title: 'How to Prepare for Your Interior Design Consultation',
      priority: 7
    }
  ],

  // Blog post: Design Personal Home
  'how-to-design-home-that-feels-personal-not-cookie-cutter': [
    {
      keyword: 'custom furniture pieces',
      url: '/services/custom-furniture',
      title: 'Custom Furniture Design in Kenya',
      priority: 10
    },
    {
      keyword: 'full design services',
      url: '/services/full-design-services-kenya',
      title: 'Full Interior Design Services',
      priority: 9
    },
    {
      keyword: 'Hilltop Apartment',
      url: '/portfolio/kahawa-west',
      title: 'Hilltop Apartment Home Furnishing Project',
      priority: 8
    }
  ],

  // Blog post: New Builds Interior Design
  'interior-design-new-builds-kenya-what-to-plan-early': [
    {
      keyword: 'comprehensive interior design',
      url: '/services/full-design-services-kenya',
      title: 'Full Interior Design Services for New Builds',
      priority: 10
    },
    {
      keyword: 'virtual design tools',
      url: '/services/virtual-design',
      title: 'Virtual Interior Design and 3D Visualization',
      priority: 9
    },
    {
      keyword: 'design process',
      url: '/blog/from-vision-to-reality-navigating-interior-design-process-kenya',
      title: 'The Interior Design Process in Kenya',
      priority: 8
    }
  ],

  // Blog post: 2026 Design Trends
  '9-interior-design-trends-2026': [
    {
      keyword: 'bespoke furniture',
      url: '/services/custom-furniture',
      title: 'Custom Furniture Design Services',
      priority: 10
    },
    {
      keyword: 'home furnishing',
      url: '/services/furnishing',
      title: 'Professional Home Furnishing Services',
      priority: 9
    },
    {
      keyword: 'Classic Home Remodel',
      url: '/portfolio/rongai-remodel',
      title: 'Rongai Classic Home Remodel Project',
      priority: 8
    }
  ],

  // Blog post: Make Home Feel Smaller
  'interior-design-mistakes-that-make-home-feel-smaller': [
    {
      keyword: 'thoughtful furnishing',
      url: '/services/furnishing',
      title: 'Home Furnishing Services in Nairobi',
      priority: 10
    },
    {
      keyword: 'space planning',
      url: '/services/full-design-services-kenya',
      title: 'Full Design Services with Expert Space Planning',
      priority: 9
    },
    {
      keyword: 'compact townhouse',
      url: '/portfolio/kitengela-townhouse',
      title: 'Kitengela Townhouse Renovation',
      priority: 8
    }
  ],

  // Blog post: Pitfalls Before Hiring Designer
  'interior-design-pitfalls-what-people-get-wrong-before-hiring-designer': [
    {
      keyword: 'first consultation',
      url: '/blog/how-to-prepare-for-interior-design-consultation',
      title: 'How to Prepare for Your Design Consultation',
      priority: 10
    },
    {
      keyword: 'our process',
      url: '/process',
      title: 'Our Interior Design Process',
      priority: 9
    },
    {
      keyword: 'virtual design services',
      url: '/services/virtual-design',
      title: 'Virtual Interior Design Services',
      priority: 8
    }
  ],

  // Blog post: Top Interior Design Companies
  'top-interior-design-companies-kenya-what-sets-best-apart': [
    {
      keyword: 'our design philosophy',
      url: '/about',
      title: 'About Avalanche Creations',
      priority: 10
    },
    {
      keyword: 'completed projects',
      url: '/portfolio',
      title: 'View Our Interior Design Portfolio',
      priority: 9
    },
    {
      keyword: 'design process',
      url: '/blog/from-vision-to-reality-navigating-interior-design-process-kenya',
      title: 'Our Interior Design Process',
      priority: 8
    }
  ],

  // Blog post: Interior Design Process
  'from-vision-to-reality-navigating-interior-design-process-kenya': [
    {
      keyword: 'design consultation',
      url: '/blog/how-to-prepare-for-interior-design-consultation',
      title: 'Prepare for Your Design Consultation',
      priority: 10
    },
    {
      keyword: 'PLD HQ project',
      url: '/portfolio/ciata-mall',
      title: 'Prime Land Developers Office Design Project',
      priority: 9
    },
    {
      keyword: 'full design services',
      url: '/services/full-design-services-kenya',
      title: 'Our Full Interior Design Services',
      priority: 8
    },
    {
      keyword: 'process page',
      url: '/process',
      title: 'How We Work',
      priority: 7
    }
  ],

  // Blog post: Custom Furniture Kenya
  'why-custom-furniture-kenya-leading-personalized-interiors': [
    {
      keyword: 'custom furniture services',
      url: '/services/custom-furniture',
      title: 'Custom Furniture Design in Kenya',
      priority: 10
    },
    {
      keyword: 'bespoke pieces',
      url: '/portfolio/ciata-mall',
      title: 'Corporate Office with Custom Furniture',
      priority: 9
    },
    {
      keyword: 'home furnishing',
      url: '/services/furnishing',
      title: 'Professional Home Furnishing Services',
      priority: 8
    }
  ],

  // Blog post: Interior Design Costs
  'interior-design-costs-kenya-complete-guide-2026': [
    {
      keyword: 'renovation services',
      url: '/services/renovations',
      title: 'Home Renovation Services in Kenya',
      priority: 10
    },
    {
      keyword: 'virtual design option',
      url: '/services/virtual-design',
      title: 'Affordable Virtual Interior Design',
      priority: 9
    },
    {
      keyword: 'furnishing services',
      url: '/services/furnishing',
      title: 'Home Furnishing Services',
      priority: 8
    },
    {
      keyword: 'design process',
      url: '/blog/from-vision-to-reality-navigating-interior-design-process-kenya',
      title: 'Understanding Our Design Process',
      priority: 7
    }
  ],

  // Blog post: Prepare for Consultation
  'how-to-prepare-for-interior-design-consultation': [
    {
      keyword: 'our process',
      url: '/process',
      title: 'Our Interior Design Process',
      priority: 10
    },
    {
      keyword: 'get a quote',
      url: '/quote',
      title: 'Request a Design Consultation',
      priority: 9
    },
    {
      keyword: 'portfolio',
      url: '/portfolio',
      title: 'View Our Completed Projects',
      priority: 8
    }
  ],

  // Blog post: Working with Interior Designer
  'what-to-expect-working-with-interior-designer-kenya': [
    {
      keyword: 'design process',
      url: '/process',
      title: 'How We Work: Our Design Process',
      priority: 10
    },
    {
      keyword: 'residential design',
      url: '/services/full-design-services-kenya',
      title: 'Full Residential Design Services',
      priority: 9
    },
    {
      keyword: 'contemporary store',
      url: '/portfolio/contemporary-store',
      title: 'Contemporary Store Interior Design',
      priority: 8
    },
    {
      keyword: 'schedule a consultation',
      url: '/quote',
      title: 'Schedule Your Design Consultation',
      priority: 7
    }
  ]
};

// Function to apply internal links to content
export const applyInternalLinks = (content: string, slug: string): string => {
  const links = interlinkingMap[slug];

  if (!links || links.length === 0) {
    return content;
  }

  // Sort by priority (highest first)
  const sortedLinks = [...links].sort((a, b) => b.priority - a.priority);

  let processedContent = content;
  const linkedKeywords = new Set<string>(); // Track already linked keywords

  for (const link of sortedLinks) {
    // Skip if this keyword has already been linked
    if (linkedKeywords.has(link.keyword)) {
      continue;
    }

    // Create a case-insensitive regex that matches the keyword only once
    // and not if it's already inside an anchor tag
    const regex = new RegExp(
      `(?<!<a[^>]*>)(?<!<[^>]*)(${link.keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})(?![^<]*</a>)`,
      'i'
    );

    if (regex.test(processedContent)) {
      // Replace only the first occurrence
      processedContent = processedContent.replace(
        regex,
        `<a href="${link.url}" title="${link.title}" class="internal-link">${link.keyword}</a>`
      );
      linkedKeywords.add(link.keyword);
    }
  }

  return processedContent;
};
