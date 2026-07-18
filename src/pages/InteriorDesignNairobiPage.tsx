import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft, ChevronRight,
  Phone, MessageCircle, X, Check, Plus, Minus,
} from 'lucide-react';
import { supabase } from '../lib/supabase';
import Footer from '../components/layout/Footer';
import FloatingCTA from '../components/common/FloatingCTA';
import { Gallery4, type Gallery4Item } from '../components/ui/gallery4';

// ─── Constants ────────────────────────────────────────────────────────────────

const WEBHOOK_URL = 'https://hook.eu2.make.com/7mf3jarqa5750tmmupzwj2potzm4ouei';

const FOUNDER_IMAGE =
  'https://ykndyjgvochvehwimhhq.supabase.co/storage/v1/object/public/Website%20Assests/thomebathroomrenovation-images/thome-bathroom-renovation-wall-sconce-esther-njoroge.lead-interior-designer-avalanche-creations.jpg';

const SERVICES_IMAGE =
  'https://ykndyjgvochvehwimhhq.supabase.co/storage/v1/object/public/Website%20Assests/banner-images/interior-design-services-kenya-avalanche-creations.jpg';

const APPROACH_IMAGE =
  'https://ykndyjgvochvehwimhhq.supabase.co/storage/v1/object/public/Website%20Assests/kilimaniairbnb-images/airbnb-kilimani-nairobi-bedroom-01.jpg';

const PROBUILDERS_LOGO =
  'https://ykndyjgvochvehwimhhq.supabase.co/storage/v1/object/public/Website%20Assests/logos/probuilders-kenya.jpeg';

const heroSlides = [
  'https://ykndyjgvochvehwimhhq.supabase.co/storage/v1/object/public/Website%20Assests/hero-images/spaces-designed-around-your-story-kenya-avalanche-creations.jpg',
  'https://ykndyjgvochvehwimhhq.supabase.co/storage/v1/object/public/Website%20Assests/hero-images/intentional-precision-led-interior-design-kenya-avalanche-creations.jpg',
  'https://ykndyjgvochvehwimhhq.supabase.co/storage/v1/object/public/Website%20Assests/hero-images/design-and-build-interiors-kenya-avalanche-creations.jpg',
  'https://ykndyjgvochvehwimhhq.supabase.co/storage/v1/object/public/Website%20Assests/hero-images/custom-timeless-interior-design-kenya-avalanche-creations.jpg',
  'https://ykndyjgvochvehwimhhq.supabase.co/storage/v1/object/public/Website%20Assests/hero-images/thoughtful-interior-design-process-kenya-avalanche-creations.jpg',
];

// One representative image per project (portfolio cover/intro images)
const portfolioItems: Gallery4Item[] = [
  {
    id: 'thome-garden-estate-bathroom',
    title: 'A Boutique Sanctuary Reimagined',
    description: 'A complete bathroom renovation in Thome, Garden Estate — bespoke shelving, refined materials, and a sense of calm clarity.',
    slug: 'thome-garden-estate-bathroom',
    image: 'https://ykndyjgvochvehwimhhq.supabase.co/storage/v1/object/public/Website%20Assests/thomebathroomrenovation-images/thome-bathroom-renovation-bespoke-shelving.jpg',
  },
  {
    id: 'kikuyu',
    title: 'Kikuyu Residence',
    description: 'A Kiambu County home transformed through thoughtful layout planning, curated finishes, and interior styling with lasting coherence.',
    slug: 'kikuyu',
    image: 'https://ykndyjgvochvehwimhhq.supabase.co/storage/v1/object/public/Website%20Assests/kiambucountyhomerenovation-images/kiambu-county-home-renovations-interior-styling.jpg',
  },
  {
    id: 'kindaruma-homes',
    title: 'Kindaruma Homes',
    description: 'A Kilimani Airbnb designed for both function and impression — warm materials, considered proportion, and a dining space that stays in memory.',
    slug: 'kindaruma-homes',
    image: 'https://ykndyjgvochvehwimhhq.supabase.co/storage/v1/object/public/Website%20Assests/kilimaniairbnb-images/airbnb-kilimani-nairobi-dining-04.jpg',
  },
  {
    id: 'kahawa-west',
    title: 'Hilltop Apartment',
    description: 'Custom furniture and spatial refinement in Kahawa West — every detail resolved to serve the rhythm of daily life.',
    slug: 'kahawa-west',
    image: 'https://ykndyjgvochvehwimhhq.supabase.co/storage/v1/object/public/Website%20Assests/hilltopapartment-images/hilltop-apartment-kahawa-west-custom-furniture-detail-avalanche-creations.jpg',
  },
  {
    id: 'rongai-remodel',
    title: 'Classic Home Remodel',
    description: 'A living room renovation in Rongai — familiar bones, new intent. A space returned to itself with clarity and proportion.',
    slug: 'rongai-remodel',
    image: 'https://ykndyjgvochvehwimhhq.supabase.co/storage/v1/object/public/Website%20Assests/rongai-images/rongai-living-room-renovation%20(2).jpg',
  },
  {
    id: 'kitengela-townhouse',
    title: 'Townhouse Reimagined',
    description: 'A Kitengela townhouse reshaped from the inside out — cohesive interiors that balance openness, warmth, and character.',
    slug: 'kitengela-townhouse',
    image: 'https://ykndyjgvochvehwimhhq.supabase.co/storage/v1/object/public/Website%20Assests/kitengelatownhousereimagined-images/kitengela-living-room-interior%20(2).jpg',
  },
];

const services = [
  {
    title: 'Full Home Design',
    body: 'A complete transformation where every corner of your home is meticulously curated, blending timeless style with a process that ensures every detail serves your life and comfort.',
  },
  {
    title: 'Home Renovations',
    body: 'Elevate your existing spaces with thoughtful layouts, premium finishes, and enduring design, creating rooms that feel refreshed yet timeless.',
  },
  {
    title: 'Home Furnishing',
    body: 'Select and place furniture, lighting, and décor that are both functional and artfully considered, so every space feels intentional and harmonious.',
  },
  {
    title: 'Virtual Interior Design',
    body: 'Experience expert guidance from anywhere, with bespoke layouts, material palettes, and styling advice tailored to your home\'s unique rhythm and personality.',
  },
  {
    title: 'Custom Furniture',
    body: 'Invest in crafted, one-of-a-kind pieces designed to perfectly fit your space, your style, and the way you live, where functionality meets artistry.',
  },
];

interface FaqItem {
  q: string;
  a: React.ReactNode;
}

const faqs: FaqItem[] = [
  {
    q: 'How much does an interior designer cost in Nairobi, Kenya?',
    a: (
      <div className="space-y-3">
        <p>Projects can range from around 40,000 KES for a single room to 5 million KES or more for fully customized luxury homes.</p>
        <p>However, Interior design costs vary widely depending on the size of the space, scope of work, and level of finishes.</p>
        <p>At Avalanche Creations, we begin with a private on-site consultation (5,000 KES) to understand your space, lifestyle, and priorities. During the session, we discuss realistic investment ranges and the most practical direction for your project.</p>
      </div>
    ),
  },
  {
    q: 'Why do you start with a paid consultation instead of a free quote?',
    a: (
      <div className="space-y-3">
        <p>Every home is different. Layout, lighting, finishes, and lifestyle needs all influence the design direction and cost.</p>
        <p>Our consultation is a private, one-hour session — either on-site or virtual — where we study your space and understand your priorities before proposing solutions. This gives you clear direction, realistic investment ranges, and the most appropriate next steps.</p>
        <p>Clients leave the session with clear direction and actionable insights, not just a number.</p>
      </div>
    ),
  },
  {
    q: 'What happens after I book the consultation?',
    a: (
      <div className="space-y-3">
        <p>Once you submit the booking form:</p>
        <ul className="space-y-1 pl-4">
          <li>— We call within 24 hours to confirm your availability</li>
          <li>— A convenient date and time is scheduled</li>
          <li>— We meet at your space for the one-hour consultation</li>
          <li>— After the session, we agree on the most suitable next steps for your project</li>
        </ul>
      </div>
    ),
  },
  {
    q: 'What exactly happens during the one-hour consultation?',
    a: (
      <div className="space-y-3">
        <p>During the session, we:</p>
        <ul className="space-y-1 pl-4">
          <li>— Walk through your space together</li>
          <li>— Discuss your lifestyle, needs, and priorities</li>
          <li>— Identify layout or design opportunities</li>
          <li>— Offer guidance on style, materials, and finishes</li>
          <li>— Explain the most suitable service and next steps</li>
        </ul>
        <p>The goal is to give you clarity and direction, not overwhelm you with design jargon.</p>
      </div>
    ),
  },
  {
    q: 'How should I prepare for the consultation?',
    a: (
      <div className="space-y-3">
        <p>Before the meeting, it helps to think about:</p>
        <ul className="space-y-1 pl-4">
          <li>— How you want the space to feel</li>
          <li>— Any functional issues you're experiencing</li>
          <li>— Colors, styles, or spaces you admire</li>
          <li>— Your approximate budget range</li>
          <li>— Your timeline</li>
        </ul>
        <p>Even if your ideas aren't fully clear, that's perfectly fine. The consultation is designed to help you define them.</p>
      </div>
    ),
  },
  {
    q: 'Do you only design full homes, or can I start with one room?',
    a: (
      <div className="space-y-3">
        <p>You can start with a single room, a furniture upgrade, or a full home transformation.</p>
        <p>The consultation helps define the best starting point based on your priorities, timeline, and budget.</p>
      </div>
    ),
  },
  {
    q: 'Can you work within my budget?',
    a: (
      <div className="space-y-3">
        <p>Yes. Every project begins with a conversation about your priorities and budget range.</p>
        <p>Our role is to help you allocate your budget intentionally, so the final space feels cohesive, functional, and timeless rather than pieced together.</p>
      </div>
    ),
  },
  {
    q: 'What makes Avalanche Creations approach better than other interior design companies in Nairobi, Kenya?',
    a: (
      <div className="space-y-3">
        <p>Many projects begin with quick quotes and rushed decisions.</p>
        <p>Our approach is process-led, meaning we first understand your space, lifestyle, and priorities before design begins. Each stage builds on the last, reducing confusion, costly revisions, and disconnected results.</p>
        <p>This creates:</p>
        <ul className="space-y-1 pl-4">
          <li>— Clear decision-making</li>
          <li>— Better coordination during execution</li>
          <li>— Interiors that feel cohesive and intentional</li>
        </ul>
      </div>
    ),
  },
  {
    q: 'How do I book a consultation?',
    a: (
      <p>Simply fill out the booking form on this page. We'll call you to confirm your availability and schedule your one-hour on-site consultation.</p>
    ),
  },
  {
    q: 'What if I don\'t want an on-site consultation?',
    a: (
      <div className="space-y-3">
        <p>If an on-site visit isn't possible or convenient, you can start with a paid virtual consultation.</p>
        <p>This one-hour online session allows us to:</p>
        <ul className="space-y-1 pl-4">
          <li>— Review your space through photos, videos, or floor plans</li>
          <li>— Understand your needs and priorities</li>
          <li>— Recommend the most suitable design direction and service</li>
        </ul>
        <p>For larger or more complex projects, an on-site visit may still be recommended later to ensure accuracy and proper execution.</p>
      </div>
    ),
  },
  {
    q: 'What if I\'m not ready to start the project immediately after the consultation?',
    a: (
      <div className="space-y-3">
        <p>That's completely fine.</p>
        <p>The consultation gives you clarity on the most practical direction for your space, so you can move forward when the timing feels right.</p>
        <p>Many clients use this stage to:</p>
        <ul className="space-y-1 pl-4">
          <li>— Plan their budget</li>
          <li>— Align timelines with personal schedules</li>
          <li>— Phase their project if needed</li>
        </ul>
      </div>
    ),
  },
  {
    q: 'Is the consultation fee only for Nairobi?',
    a: (
      <div className="space-y-3">
        <p>The 5,000 KES consultation fee applies to both on-site consultations within Nairobi and virtual consultation.</p>
        <p>For locations outside Nairobi:</p>
        <ul className="space-y-1 pl-4">
          <li>— Travel costs are discussed based on distance for on-site visits</li>
          <li>— Virtual consultations are available at the standard consultation fee</li>
        </ul>
      </div>
    ),
  },
  {
    q: 'Do I have to use your contractors or suppliers?',
    a: (
      <div className="space-y-3">
        <p>No. You can:</p>
        <ul className="space-y-1 pl-4">
          <li>— Work with our recommended teams, or</li>
          <li>— Use your own contractors and suppliers</li>
        </ul>
        <p>We can either:</p>
        <ul className="space-y-1 pl-4">
          <li>— Manage the entire project, or</li>
          <li>— Provide design guidance while your team executes</li>
        </ul>
      </div>
    ),
  },
  {
    q: 'What services do you offer?',
    a: (
      <div className="space-y-3">
        <p>We provide residential interior design services in Nairobi and across Kenya, including:</p>
        <ul className="space-y-1 pl-4">
          <li>— Full home interior design</li>
          <li>— Home renovations</li>
          <li>— Home furnishing and styling</li>
          <li>— Virtual interior design (delivered online)</li>
          <li>— Custom furniture design</li>
        </ul>
        <p>Each service follows a structured, process-led approach to ensure clarity and cohesive results.</p>
      </div>
    ),
  },
  {
    q: 'What is the difference between an interior designer and a contractor in Nairobi?',
    a: (
      <p>Interior designers focus on spatial planning, material coordination, lighting strategy, and overall design direction. Contractors focus on execution and construction. When both roles are clearly defined and sequenced correctly, projects move more efficiently and cohesively.</p>
    ),
  },
  {
    q: 'How long do interior design projects take in Nairobi?',
    a: (
      <div className="space-y-3">
        <p>Timelines vary depending on the size, scope, and complexity of the project.</p>
        <p>As a general guide:</p>
        <ul className="space-y-1 pl-4">
          <li>— Single room: 2–6 weeks</li>
          <li>— Apartment: 1–3 months</li>
          <li>— Full home or large renovation: 3–6+ months</li>
        </ul>
        <p>During the consultation, we'll provide a clearer timeline based on your specific space, requirements, and project scope.</p>
      </div>
    ),
  },
  {
    q: 'Do you handle both design and execution?',
    a: (
      <div className="space-y-3">
        <p>Yes. We can:</p>
        <ul className="space-y-1 pl-4">
          <li>— Provide design-only services</li>
          <li>— Oversee the project during implementation</li>
          <li>— Manage the full design and execution process</li>
          <li>— Offer complete design-and-build solutions</li>
        </ul>
        <p>Our level of involvement is tailored to your needs, whether you want full project management or just professional design guidance.</p>
      </div>
    ),
  },
  {
    q: 'How early should I engage an interior designer in Nairobi?',
    a: (
      <p>The ideal time is before construction or renovation begins. Early engagement allows layout planning, lighting coordination, and material selection to inform the build rather than react to it.</p>
    ),
  },
  {
    q: 'Do you offer interior design services in Nairobi only?',
    a: (
      <div className="space-y-3">
        <p>We are based in Garden Estate, Cedar Court, Nairobi, but we work with clients across Kenya.</p>
        <p>Each project is planned around your location, timeline, and scope. During the consultation, we'll discuss the most practical and effective approach for your space.</p>
      </div>
    ),
  },
  {
    q: 'Do you work with apartments and gated communities in Nairobi?',
    a: (
      <p>Yes. We regularly design apartments, townhouses, and standalone homes across Nairobi. Each property type comes with different spatial constraints, service access considerations, and approval requirements. During the consultation, we assess how these factors influence layout, materials, and execution sequencing.</p>
    ),
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

const mapBudgetToNumber = (range: string): number => {
  switch (range) {
    case 'Below KES 500,000': return 250000;
    case 'KES 500,000 to KES 1,500,000': return 1000000;
    case 'KES 1,500,000 to KES 3,000,000': return 2250000;
    case 'Above KES 3,000,000': return 3500000;
    default: return 0;
  }
};

// ─── Form types ───────────────────────────────────────────────────────────────

interface NairobiFormData {
  name: string;
  phone: string;
  location: string;
  serviceType: string;
  consultationReason: string;
  spaceDescription: string;
  consultationType: string;
  consultationWindow: string;
  timeline: string;
  budgetRange: string;
  hearAbout: string;
  acknowledged: boolean;
}

const inputStyle: React.CSSProperties = {
  backgroundColor: '#FFFFFF',
  color: '#3D1E0B',
  border: '1px solid #E1CCBB',
};
const labelClass = 'block text-xs font-semibold uppercase tracking-widest mb-2';
const inputClass = 'w-full px-4 py-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-brown-600 transition-all';
const selectClass = 'w-full px-4 py-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-brown-600 transition-all appearance-none cursor-pointer';

const SelectWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="relative">
    {children}
    <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center" style={{ color: '#562A0E' }}>
      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  </div>
);

// ─── Page ─────────────────────────────────────────────────────────────────────

const InteriorDesignNairobiPage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isNavSolid, setIsNavSolid] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const [showThankYouModal, setShowThankYouModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [formData, setFormData] = useState<NairobiFormData>({
    name: '',
    phone: '',
    location: '',
    serviceType: '',
    consultationReason: '',
    spaceDescription: '',
    consultationType: '',
    consultationWindow: '',
    timeline: '',
    budgetRange: '',
    hearAbout: '',
    acknowledged: false,
  });

  const heroRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const heroH = heroRef.current?.offsetHeight ?? window.innerHeight * 0.85;
      setIsNavSolid(window.scrollY > heroH * 0.7);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToForm = (e?: React.MouseEvent) => {
    e?.preventDefault();
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const nextSlide = () => setCurrentSlide(p => (p + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide(p => (p - 1 + heroSlides.length) % heroSlides.length);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const target = e.target as HTMLInputElement;
    setFormData(prev => ({
      ...prev,
      [name]: target.type === 'checkbox' ? target.checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.acknowledged) {
      setSubmitError('Please confirm that you understand the consultation fee before submitting.');
      return;
    }
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      const combinedDescription = [
        formData.spaceDescription,
        `Consultation type: ${formData.consultationType}`,
        `Preferred window: ${formData.consultationWindow}`,
        `Timeline: ${formData.timeline}`,
      ].filter(Boolean).join(' | ');

      const { error } = await supabase.from('quote_requests').insert([{
        name: formData.name,
        email: '',
        phone: formData.phone,
        location: formData.location,
        services: [formData.serviceType],
        description: combinedDescription,
        budget: mapBudgetToNumber(formData.budgetRange),
        inspiration_source: 'nairobi-landing-page',
        inspiration_detail: `Reason: ${formData.consultationReason} | Heard via: ${formData.hearAbout}`,
        start_date: null,
        expected_completion_date: null,
        created_at: new Date().toISOString(),
      }]);
      if (error) throw error;

      await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, source: 'nairobi-landing-page' }),
      });

      setShowThankYouModal(true);
      setFormData({
        name: '', phone: '', location: '', serviceType: '', consultationReason: '',
        spaceDescription: '', consultationType: '', consultationWindow: '', timeline: '',
        budgetRange: '', hearAbout: '', acknowledged: false,
      });
    } catch {
      setSubmitError('There was an error submitting your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: typeof f.a === 'string' ? f.a : '' },
    })),
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'InteriorDesigner',
    name: 'Avalanche Creations',
    url: 'https://www.avalanchecreations.co.ke',
    image: 'https://ykndyjgvochvehwimhhq.supabase.co/storage/v1/object/public/Website%20Assests/logos/avalanchecreations-logo.png',
    description: 'Nairobi-based interior design studio offering full home design, renovations, furnishing, virtual design, and custom furniture across Kenya.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Garden Estate Cedar Court',
      addressLocality: 'Nairobi',
      addressCountry: 'KE',
    },
    telephone: '+254700097896',
    priceRange: 'KES 40,000 – KES 5,000,000+',
    areaServed: { '@type': 'Place', name: 'Nairobi, Kenya' },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.avalanchecreations.co.ke' },
      { '@type': 'ListItem', position: 2, name: 'Interior Design Nairobi', item: 'https://www.avalanchecreations.co.ke/interior-design-nairobi' },
    ],
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Interior Design Services Nairobi',
    provider: { '@type': 'LocalBusiness', name: 'Avalanche Creations' },
    areaServed: { '@type': 'Place', name: 'Nairobi, Kenya' },
    description: 'Full-service interior design for homes and select commercial spaces across Nairobi and Kenya.',
    offers: {
      '@type': 'Offer',
      price: '5000',
      priceCurrency: 'KES',
      description: 'Private one-hour interior design consultation — on-site or virtual.',
    },
  };

  return (
    <div style={{ fontFamily: 'Work Sans, sans-serif', color: '#3D1E0B', backgroundColor: '#FAF9F6' }}>
      <Helmet>
        <title>Interior Design Company in Nairobi | Avalanche Creations</title>
        <meta name="description" content="Searching for interior design companies in Nairobi? Get clarity before design begins. Start with a private interior design consultation at Avalanche Creations." />
        <link rel="canonical" href="https://www.avalanchecreations.co.ke/interior-design-nairobi" />
        <link rel="alternate" hreflang="en" href="https://www.avalanchecreations.co.ke/interior-design-nairobi" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Interior Design Company in Nairobi | Avalanche Creations" />
        <meta property="og:description" content="Searching for interior design companies in Nairobi? Get clarity before design begins. Start with a private interior design consultation at Avalanche Creations." />
        <meta property="og:url" content="https://www.avalanchecreations.co.ke/interior-design-nairobi" />
        <meta property="og:image" content="https://ykndyjgvochvehwimhhq.supabase.co/storage/v1/object/public/Website%20Assests/hero-images/custom-timeless-interior-design-kenya-avalanche-creations.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Avalanche Creations" />
        <meta property="og:locale" content="en_KE" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Interior Design Company in Nairobi | Avalanche Creations" />
        <meta name="twitter:description" content="Searching for interior design companies in Nairobi? Get clarity before design begins. Start with a private interior design consultation at Avalanche Creations." />
        <meta name="twitter:image" content="https://ykndyjgvochvehwimhhq.supabase.co/storage/v1/object/public/Website%20Assests/hero-images/custom-timeless-interior-design-kenya-avalanche-creations.jpg" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>

      {/* ── 01. STICKY NAV ────────────────────────────────────────────────── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: 'rgba(250,249,246,0.97)',
          boxShadow: isNavSolid ? '0 2px 12px rgba(61,30,11,0.1)' : 'none',
          backdropFilter: 'blur(8px)',
          height: 72,
        }}
      >
        <div className="h-full flex items-center justify-center px-4">
          <Link to="/" className="flex items-center justify-center">
            <img
              src="https://ykndyjgvochvehwimhhq.supabase.co/storage/v1/object/public/Website%20Assests/logos/avalanchecreations-logo.png"
              alt="Avalanche Creations"
              className={`transition-all duration-300 ${isNavSolid ? 'h-16 md:h-20' : 'h-14 md:h-16'}`}
              style={{ objectFit: 'contain', imageRendering: 'auto' }}
            />
          </Link>
        </div>
      </nav>

      {/* ── 02. HERO ──────────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative flex flex-col md:flex-row"
        style={{ minHeight: '85vh', paddingTop: 64 }}
      >
        {/* Right: image panel */}
        <div className="relative overflow-hidden order-1 md:order-2 w-full md:w-[55%]" style={{ minHeight: 280 }}>
          {heroSlides.map((img, i) => (
            <div
              key={i}
              className="absolute inset-0 transition-opacity duration-[2000ms]"
              style={{
                opacity: currentSlide === i ? 1 : 0,
                backgroundImage: `url(${img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          ))}

          {/* Image nav controls — bottom-right of image panel */}
          <div className="absolute bottom-5 right-5 z-10 flex items-center gap-3">
            <button
              onClick={prevSlide}
              aria-label="Previous"
              className="flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300"
              style={{ backgroundColor: 'rgba(0,0,0,0.45)' }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.65)')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.45)')}
            >
              <ChevronLeft className="h-4 w-4 text-white" />
            </button>

            <div className="flex gap-1.5">
              {heroSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  aria-label={`Slide ${i + 1}`}
                  className="h-1.5 rounded-full transition-all duration-500"
                  style={{
                    width: currentSlide === i ? 20 : 6,
                    backgroundColor: currentSlide === i ? '#FFFFFF' : 'rgba(255,255,255,0.5)',
                  }}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              aria-label="Next"
              className="flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300"
              style={{ backgroundColor: 'rgba(0,0,0,0.45)' }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.65)')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.45)')}
            >
              <ChevronRight className="h-4 w-4 text-white" />
            </button>
          </div>
        </div>

        {/* Left: copy panel */}
        <div
          className="relative order-2 md:order-1 w-full md:w-[45%] flex flex-col justify-between px-6 py-10 md:px-10 lg:px-14 md:py-14"
          style={{ backgroundColor: '#3D1E0B' }}
        >
          <div>
            <h1
              className="mb-5"
              style={{ fontFamily: 'Cormorant Garamond, serif', color: '#FFFFFF', fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', lineHeight: 1.22, fontWeight: 600 }}
            >
              Interior Design Company in Nairobi Creating Custom Timeless Interiors with Intention and Care
            </h1>

            <div className="mb-8 space-y-4" style={{ color: '#F5F0EA', fontSize: '0.95rem', lineHeight: 1.75, maxWidth: '44ch' }}>
              <p style={{ color: '#D4C4B7', fontWeight: 500 }}>Interior design decisions are expensive to get wrong.</p>
              <p>
                At Avalanche Creations, every choice is guided by a clear, structured process. We begin by understanding your space, not handing you a quote, so you move forward with confidence and clarity.
              </p>
              <p>
                Start with a private interior design consultation and experience the difference clarity makes.
              </p>
            </div>
          </div>

          <div>
            <button
              onClick={scrollToForm}
              className="btn btn-primary self-start"
              style={{ fontSize: 14, padding: '10px 20px' }}
            >
              <span className="hidden sm:inline">Book a Private Interior Design Consultation</span>
              <span className="sm:hidden">Book a Consultation</span>
            </button>
          </div>
        </div>
      </section>

      {/* ── 03. AS FEATURED IN ────────────────────────────────────────────── */}
      <section className="py-16 px-4" style={{ backgroundColor: '#F5F0EA' }}>
        <div className="max-w-[720px] mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="mb-6" style={{ fontSize: '0.6rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#8B4513', fontWeight: 700 }}>
              AS FEATURED IN
            </p>
            <img src={PROBUILDERS_LOGO} alt="ProBuilders Kenya" loading="lazy" className="mx-auto mb-6 rounded-sm h-[64px] sm:h-[48px]" style={{ objectFit: 'contain' }} />
            <blockquote
              className="mb-5"
              style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.1rem, 2.2vw, 1.5rem)', fontStyle: 'italic', lineHeight: 1.55, color: '#3D1E0B', fontWeight: 400 }}
            >
              "The difference between a reactive build and a predictable one often lies in a decision made at the very beginning. Not who you hire. But when."
            </blockquote>
            <p className="mb-5 text-sm" style={{ color: '#703811', fontWeight: 600 }}>
              — Esther Njoroge, Founder &amp; Lead Interior Designer, Avalanche Creations
            </p>
            <p className="mb-4" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1rem', color: '#562A0E', fontStyle: 'italic' }}>
              Architect, Interior Designer, or Contractor: Who Should You Engage First When Building in Kenya?
            </p>
            <a
              href="https://probuilderskenya.com/architect-interior-designer-or-contractor-who-should-you-engage-first-when-building-in-kenya/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium transition-opacity hover:opacity-75"
              style={{ color: '#8B4513' }}
            >
              Read Article
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── 05. ABOUT ─────────────────────────────────────────────────────── */}
      <section className="py-20 px-4" style={{ backgroundColor: '#FAF9F6' }}>
        <div className="max-w-[720px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="mb-8" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 600, color: '#3D1E0B' }}>
              About Avalanche Creations
            </h2>
            <div className="space-y-5" style={{ color: '#562A0E', lineHeight: 1.8 }}>
              <p>
                Founded in 2021, Avalanche Creations is a Nairobi-based interior design studio built on a considered, quality-first approach.
              </p>
              <p>
                Over the past five years, we have completed more than 25 carefully executed residential projects across Nairobi and Kenya. We intentionally limit the number of projects we undertake each year, allowing every space to move through a clear, structured process from consultation to final delivery. This ensures each design is not rushed, templated, or delegated without oversight, but thoughtfully resolved and aligned with how our clients actually live.
              </p>
              <p>
                Our work is grounded in clarity and long-term thinking. Rather than prioritising trends or volume, we focus on cohesion, proportion, and functional longevity. Every decision is made in context, of the space, of the client's lifestyle, and of the investment being made.
              </p>
              <p>
                We provide full-service interior design for homes and select commercial spaces across Nairobi and Kenya, covering space planning, lighting design, custom furniture, and renovations. Each project is approached with depth, structure, and close involvement, so clients never feel overwhelmed or left guessing.
              </p>
            </div>
            <div className="mt-8">
              <button
                onClick={scrollToForm}
                className="btn btn-primary"
                style={{ fontSize: 14, padding: '10px 20px' }}
              >
                Work With Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 06. OUR APPROACH ──────────────────────────────────────────────── */}
      <section className="py-20 px-4" style={{ backgroundColor: '#F5F0EA' }}>
        <div className="max-w-[1100px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            {/* Mobile: image first, copy below */}
            <div className="flex flex-col-reverse md:flex-row gap-12 md:gap-16 items-start">
              {/* Copy — with accent border */}
              <div className="w-full md:w-1/2 border-l-[3px] pl-8" style={{ borderColor: '#8B4513' }}>
                <h2 className="mb-10" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 600, color: '#3D1E0B' }}>
                  Our Approach
                </h2>
                <div className="space-y-8">
                  {[
                    {
                      title: 'Process-Driven',
                      body: 'Every design decision follows a structured framework, reducing uncertainty and helping you move forward with confidence.',
                    },
                    {
                      title: 'Purposeful Design',
                      body: 'We prioritise function and longevity over trends, ensuring every element serves a meaningful role within the space.',
                    },
                    {
                      title: 'Focused Attention',
                      body: 'By limiting the number of projects we undertake, we remain closely involved at every stage, delivering thoughtful execution rather than rushed results.',
                    },
                  ].map(item => (
                    <div key={item.title}>
                      <h3 className="mb-2" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.2rem', fontWeight: 600, color: '#3D1E0B' }}>
                        {item.title}
                      </h3>
                      <p style={{ color: '#562A0E', lineHeight: 1.75, fontSize: '0.9rem' }}>{item.body}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-8" style={{ color: '#3D1E0B', lineHeight: 1.75, fontSize: '0.9rem', fontStyle: 'italic' }}>
                  At Avalanche Creations, interior design is not about decoration alone. It is about creating environments that feel intentional, cohesive, and quietly enduring.
                </p>
              </div>

              {/* Image — right on desktop, first on mobile */}
              <div className="w-full md:w-1/2 overflow-hidden rounded-sm" style={{ aspectRatio: '4/5' }}>
                <img
                  src={APPROACH_IMAGE}
                  alt="Avalanche Creations interior design approach"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 07. TESTIMONIALS ──────────────────────────────────────────────── */}
      <section className="py-20 px-4" style={{ backgroundColor: '#FAF9F6' }}>
        <div className="max-w-[1100px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-center mb-12" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 600, color: '#3D1E0B' }}>
              Trusted by Homeowners and Industry Professionals Across Nairobi
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  quote: "Incredibly professional and works in a timely organized manner. It's been a pleasure working with Avalanche Creations. Their expertise, adaptability, and alignment with our needs go unmatched, looking forward to working together on many more projects.",
                  name: 'Joy Kituku',
                  role: 'Homeowner, Nairobi',
                },
                {
                  quote: 'As a contractor, I have worked on several projects with Avalanche Creations and I have found them to be very professional and highly competent interior designers.',
                  name: 'Samuel Njoroge',
                  role: 'Contractor',
                },
              ].map(t => (
                <div
                  key={t.name}
                  className="p-8 rounded-sm"
                  style={{ backgroundColor: '#F9F5F1', borderLeft: '4px solid #8B4513', boxShadow: '0 4px 16px rgba(139,69,19,0.08)' }}
                >
                  <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '4rem', lineHeight: 0.8, color: '#D4C4B7', marginBottom: 12 }}>&ldquo;</div>
                  <p className="mb-6" style={{ color: '#3D1E0B', lineHeight: 1.75, fontSize: '0.95rem' }}>{t.quote}</p>
                  <div>
                    <p style={{ fontWeight: 700, color: '#8B4513', fontSize: '0.85rem' }}>{t.name}</p>
                    <p style={{ color: '#703811', fontSize: '0.8rem' }}>{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 08. PORTFOLIO ─────────────────────────────────────────────────── */}
      <section className="py-20" style={{ backgroundColor: '#3D1E0B' }}>
        <div className="px-4 mb-12 text-center">
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 600, color: '#FFFFFF' }}>
            A Look Inside Our Work
          </h2>
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <Gallery4 items={portfolioItems} />
        </motion.div>
        <div className="px-4 mt-12 text-center">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 transition-all duration-200"
            style={{
              fontSize: '0.8rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              fontWeight: 600,
              color: '#FFFFFF',
              borderBottom: '1px solid rgba(255,255,255,0.4)',
              paddingBottom: 3,
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = 'rgba(255,255,255,0.8)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = 'rgba(255,255,255,0.4)'; }}
          >
            Explore Full Portfolio
          </Link>
        </div>
      </section>

      {/* ── 09. SERVICES ──────────────────────────────────────────────────── */}
      <section className="py-20 px-4" style={{ backgroundColor: '#FAF9F6' }}>
        <div className="max-w-[1100px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="mb-6 text-center" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 600, color: '#3D1E0B' }}>
              Interior Design Services in Nairobi, Kenya
            </h2>
            <p className="text-center mb-6 mx-auto" style={{ color: '#562A0E', lineHeight: 1.8, maxWidth: '68ch' }}>
              Every home carries context, and design should respond to it. We offer end-to-end interior design services across Nairobi and Kenya. From complete home transformations to focused furnishing and renovations, each project is shaped with intention, proportion, and long-term cohesion in mind.
            </p>
            <p className="text-center mb-10 mx-auto" style={{ color: '#562A0E', lineHeight: 1.8, maxWidth: '68ch' }}>
              The result is a space that feels natural, balanced, and built to last.
            </p>
            <img
              src={SERVICES_IMAGE}
              alt="Interior design services in Nairobi, Kenya"
              loading="lazy"
              className="w-full rounded-sm mb-12 object-cover"
              style={{ height: 'clamp(200px, 30vw, 360px)' }}
            />
            <div>
              <p className="mb-6" style={{ fontSize: '0.6rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#8B4513', fontWeight: 700 }}>
                Our Services
              </p>
              {services.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="border-t py-8"
                  style={{ borderColor: '#E1CCBB' }}
                >
                  <h3 className="mb-3" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem', fontWeight: 600, color: '#3D1E0B' }}>
                    {s.title}
                  </h3>
                  <p style={{ color: '#562A0E', lineHeight: 1.75, fontSize: '0.9rem', maxWidth: '72ch' }}>{s.body}</p>
                </motion.div>
              ))}
              <div className="border-t" style={{ borderColor: '#E1CCBB' }} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 10. WHY THIS APPROACH WORKS ───────────────────────────────────── */}
      <section className="py-20 px-4" style={{ backgroundColor: '#F5F0EA' }}>
        <div className="max-w-[720px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="mb-8" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 600, color: '#3D1E0B' }}>
              Why This Approach Works
            </h2>
            <div className="space-y-5 mb-10" style={{ color: '#562A0E', lineHeight: 1.8 }}>
              <p>Interior design is not simply about selecting finishes or arranging furniture. It is about protecting the integrity of your investment.</p>
              <p>When decisions are made out of order, selecting materials before resolving layout, choosing furniture before understanding proportion, committing to renovations without clarity, the result often feels fragmented. Adjustments become costly. Confidence fades.</p>
              <p style={{ fontWeight: 500, color: '#3D1E0B' }}>A process-led approach prevents reactive decisions.</p>
            </div>
            <div className="space-y-6 mb-10">
              {[
                { title: 'Strategic Sequencing', body: 'Design elements are resolved in a deliberate order. Layout informs lighting. Lighting informs material selection. Materials inform furnishing. This ensures the final space feels cohesive rather than assembled over time.' },
                { title: 'Alignment Before Commitment', body: 'Ideas are tested and refined before procurement or construction begins. This reduces costly revisions and protects both time and budget.' },
                { title: 'Long-Term Relevance', body: 'Because every element is considered in context, the outcome is not trend-driven or impulsive. It feels complete from day one, and continues to feel relevant for years.' },
              ].map(item => (
                <div key={item.title} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="h-5 w-5" style={{ color: '#8B4513' }} />
                  </div>
                  <div>
                    <p className="mb-1" style={{ fontWeight: 600, color: '#3D1E0B' }}>{item.title}</p>
                    <p style={{ color: '#562A0E', lineHeight: 1.75, fontSize: '0.9rem' }}>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.2rem', color: '#3D1E0B', lineHeight: 1.6 }}>
              The result is not louder design.<br />
              It is quieter confidence.<br />
              A home that feels resolved, intentional, and enduring.
            </p>
            <div className="mt-10">
              <button
                onClick={scrollToForm}
                className="btn btn-primary"
                style={{ fontSize: 14, padding: '10px 20px' }}
              >
                Book a Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 11. MEET ESTHER ───────────────────────────────────────────────── */}
      <section className="py-20 px-4" style={{ backgroundColor: '#FAF9F6' }}>
        <div className="max-w-[1100px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            {/* Mobile: image first, copy below */}
            <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">
              {/* Image — left on desktop, first on mobile */}
              <div className="w-full md:w-auto flex-shrink-0">
                <div
                  className="overflow-hidden rounded-sm w-full"
                  style={{ width: '100%', maxWidth: '100%' }}
                >
                  <img
                    src={FOUNDER_IMAGE}
                    alt="Esther Njoroge — Founder & Lead Interior Designer, Avalanche Creations"
                    loading="lazy"
                    className="w-full object-cover object-top rounded-sm"
                    style={{
                      aspectRatio: '3/4',
                      maxHeight: 520,
                      objectPosition: 'top',
                    }}
                  />
                </div>
              </div>

              {/* Bio */}
              <div className="flex-1 border-l-[3px] pl-8" style={{ borderColor: '#8B4513' }}>
                <p className="mb-3" style={{ fontSize: '0.6rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#8B4513', fontWeight: 700 }}>
                  MEET OUR LEAD INTERIOR DESIGNER
                </p>
                <h2 className="mb-1" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', fontWeight: 600, color: '#3D1E0B' }}>
                  Esther Njoroge
                </h2>
                <p className="mb-6" style={{ color: '#703811', fontStyle: 'italic', fontSize: '0.9rem' }}>
                  Founder &amp; Lead Interior Designer
                </p>
                <div className="space-y-4" style={{ color: '#562A0E', lineHeight: 1.8, fontSize: '0.9rem' }}>
                  <p>Esther Njoroge founded Avalanche Creations in 2021 with a clear vision: to create custom interiors that feel deeply personal, functional, and beautifully aligned with the way her clients truly live.</p>
                  <p>Before launching the studio, she spent five years working in general management, where she led teams, coordinated operations, and learned the value of structure, clarity, and thoughtful decision-making. That experience continues to shape how she approaches design today — with intention, organisation, and calm guidance from concept to completion.</p>
                  <p>Esther believes great design is not just about aesthetics. It's about how a space makes you feel every day. A well-designed home should support your lifestyle, reduce stress, improve flow, and create a sense of pride, comfort, and joy. It should feel like yours, not just visually, but emotionally.</p>
                  <p>At Avalanche Creations, every project is approached as a collaboration. The goal is simple yet bold: to create spaces that are uniquely tailored to each client, not only stunning in appearance but grounded in function and meaning.</p>
                  <p>Because when design is done well, it doesn't just transform a space, it elevates how you live within it.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 12 + 13. CONSULTATION DETAIL + FORM (unified) ─────────────────── */}
      <section ref={formRef} id="consultation-form" className="py-20 px-4" style={{ backgroundColor: '#F5F0EA' }}>
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>

            {/* Consultation copy header */}
            <div className="mb-12">
              <p className="mb-4" style={{ fontSize: '0.6rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#8B4513', fontWeight: 700 }}>
                BOOK A PRIVATE INTERIOR DESIGN CONSULTATION
              </p>
              <h2 className="mb-6" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.3rem, 2.2vw, 1.7rem)', fontWeight: 600, color: '#3D1E0B', lineHeight: 1.3 }}>
                You deserve clarity and confidence for the choices you are to make for your space.
              </h2>
              <div className="space-y-4 mb-6" style={{ color: '#562A0E', lineHeight: 1.8, fontSize: '0.9rem' }}>
                <p>Every project begins with a private, one-hour consultation.</p>
                <p>This session allows your space to be properly assessed before recommendations are made, ensuring clarity around layout, finishes, scope, and realistic investment.</p>
              </div>
              <div className="py-5 px-6 rounded-sm mb-6" style={{ backgroundColor: '#FAF9F6', borderLeft: '3px solid #8B4513' }}>
                <p className="mb-2" style={{ fontWeight: 700, color: '#3D1E0B' }}>Consultation Fee: 5,000 KES</p>
                <ul className="space-y-1" style={{ color: '#562A0E', fontSize: '0.85rem', lineHeight: 1.7 }}>
                  <li>— On-site consultation within Nairobi</li>
                  <li>— Virtual consultation (conducted online)</li>
                </ul>
              </div>
              <p className="mb-6" style={{ color: '#562A0E', lineHeight: 1.8, fontSize: '0.9rem' }}>
                This ensures dedicated time, focused guidance, and professional insight tailored specifically to your home.
              </p>
              <div className="mb-6">
                <p className="mb-3" style={{ fontWeight: 600, color: '#3D1E0B', fontSize: '0.9rem' }}>During Your Consultation You Will:</p>
                <ul className="space-y-2" style={{ color: '#562A0E', fontSize: '0.9rem', lineHeight: 1.75 }}>
                  <li>— Review your space with professional guidance</li>
                  <li>— Receive clear direction on layout and finishes</li>
                  <li>— Understand scope and realistic investment ranges</li>
                  <li>— Leave with defined next steps for your project</li>
                </ul>
              </div>
              <p style={{ color: '#562A0E', lineHeight: 1.8, fontSize: '0.9rem', fontStyle: 'italic' }}>
                Recommendations are made after understanding your space and how you live within it, not from assumptions.
              </p>
              <p className="mt-3" style={{ color: '#562A0E', lineHeight: 1.8, fontSize: '0.9rem' }}>
                By the end of the session, you'll know the most practical direction forward and the next steps to bring your space to life.
              </p>
              <div className="mt-8" style={{ width: '100%', height: 1, backgroundColor: '#E1CCBB' }} />
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-8">

              {/* Name */}
              <div>
                <label htmlFor="nb-name" className={labelClass} style={{ color: '#562A0E' }}>Name</label>
                <input
                  type="text" id="nb-name" name="name"
                  value={formData.name} onChange={handleChange} required
                  className={inputClass} style={inputStyle}
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="nb-phone" className={labelClass} style={{ color: '#562A0E' }}>
                  Phone Number{' '}
                  <span className="normal-case font-normal tracking-normal" style={{ color: '#703811' }}>(WhatsApp Preferred)</span>
                </label>
                <input
                  type="tel" id="nb-phone" name="phone"
                  value={formData.phone} onChange={handleChange} required
                  className={inputClass} style={inputStyle}
                />
              </div>

              {/* Location */}
              <div>
                <label htmlFor="nb-location" className={labelClass} style={{ color: '#562A0E' }}>Location</label>
                <input
                  type="text" id="nb-location" name="location"
                  value={formData.location} onChange={handleChange} required
                  placeholder="City or area within Kenya"
                  className={inputClass} style={inputStyle}
                />
              </div>

              {/* Service Type */}
              <div>
                <label htmlFor="nb-service" className={labelClass} style={{ color: '#562A0E' }}>Type of Interior Design Service</label>
                <SelectWrapper>
                  <select id="nb-service" name="serviceType" value={formData.serviceType} onChange={handleChange} required className={selectClass} style={inputStyle}>
                    <option value="" disabled>Select...</option>
                    <option>Home Renovation</option>
                    <option>Full Interior Design Services</option>
                    <option>Home Furnishing</option>
                    <option>Custom Furniture Design</option>
                    <option>Virtual Interior Design</option>
                    <option>Not Sure Yet</option>
                  </select>
                </SelectWrapper>
              </div>

              {/* Consultation Reason */}
              <div>
                <label htmlFor="nb-reason" className={labelClass} style={{ color: '#562A0E' }}>Biggest Reason for the Consultation</label>
                <input
                  type="text" id="nb-reason" name="consultationReason"
                  value={formData.consultationReason} onChange={handleChange} required
                  placeholder="What prompted you to reach out about your home?"
                  className={inputClass} style={inputStyle}
                />
              </div>

              {/* Space Description */}
              <div>
                <label htmlFor="nb-space" className={labelClass} style={{ color: '#562A0E' }}>Tell Us Briefly About Your Space</label>
                <textarea
                  id="nb-space" name="spaceDescription"
                  value={formData.spaceDescription} onChange={handleChange} required
                  rows={4} placeholder="2 to 3 sentences: what it is, where it is, and what feels unresolved"
                  className={`${inputClass} resize-none`} style={inputStyle}
                />
              </div>

              {/* Consultation Type */}
              <div>
                <label htmlFor="nb-constype" className={labelClass} style={{ color: '#562A0E' }}>Preferred Consultation Type</label>
                <SelectWrapper>
                  <select id="nb-constype" name="consultationType" value={formData.consultationType} onChange={handleChange} required className={selectClass} style={inputStyle}>
                    <option value="" disabled>Select...</option>
                    <option>On-site Interior Design Consultation (Nairobi)</option>
                    <option>Virtual Interior Design Consultation (Anywhere in Kenya)</option>
                  </select>
                </SelectWrapper>
              </div>

              {/* Consultation Window */}
              <div>
                <label htmlFor="nb-window" className={labelClass} style={{ color: '#562A0E' }}>Preferred Consultation Window</label>
                <SelectWrapper>
                  <select id="nb-window" name="consultationWindow" value={formData.consultationWindow} onChange={handleChange} required className={selectClass} style={inputStyle}>
                    <option value="" disabled>Select...</option>
                    <option>Morning (8am to 12pm)</option>
                    <option>Afternoon (12pm to 5pm)</option>
                    <option>Evening (5pm to 7pm)</option>
                  </select>
                </SelectWrapper>
              </div>

              {/* Timeline */}
              <div>
                <label htmlFor="nb-timeline" className={labelClass} style={{ color: '#562A0E' }}>How Soon Are You Looking to Get Started?</label>
                <SelectWrapper>
                  <select id="nb-timeline" name="timeline" value={formData.timeline} onChange={handleChange} required className={selectClass} style={inputStyle}>
                    <option value="" disabled>Select...</option>
                    <option>Ready to start within 1 month</option>
                    <option>Planning for 2 to 3 months from now</option>
                    <option>Exploring options, no fixed timeline</option>
                    <option>Just researching for now</option>
                  </select>
                </SelectWrapper>
              </div>

              {/* Budget Range */}
              <div>
                <label htmlFor="nb-budget" className={labelClass} style={{ color: '#562A0E' }}>
                  Approximate Budget Range for Your Project{' '}
                  <span className="normal-case font-normal tracking-normal" style={{ color: '#703811' }}>(Optional)</span>
                </label>
                <SelectWrapper>
                  <select id="nb-budget" name="budgetRange" value={formData.budgetRange} onChange={handleChange} className={selectClass} style={inputStyle}>
                    <option value="">Select...</option>
                    <option>Below KES 500,000</option>
                    <option>KES 500,000 to KES 1,500,000</option>
                    <option>KES 1,500,000 to KES 3,000,000</option>
                    <option>Above KES 3,000,000</option>
                    <option>Not sure yet</option>
                  </select>
                </SelectWrapper>
              </div>

              {/* How did you hear */}
              <div>
                <label htmlFor="nb-hear" className={labelClass} style={{ color: '#562A0E' }}>How Did You Hear About Avalanche Creations?</label>
                <SelectWrapper>
                  <select id="nb-hear" name="hearAbout" value={formData.hearAbout} onChange={handleChange} required className={selectClass} style={inputStyle}>
                    <option value="" disabled>Select...</option>
                    <option>Instagram</option>
                    <option>Google Search</option>
                    <option>Referral</option>
                    <option>WhatsApp</option>
                    <option>Other</option>
                  </select>
                </SelectWrapper>
              </div>

              {/* Acknowledgment */}
              <div>
                <label htmlFor="nb-ack" className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox" id="nb-ack" name="acknowledged"
                    checked={formData.acknowledged} onChange={handleChange}
                    className="mt-1 h-4 w-4 flex-shrink-0 cursor-pointer rounded-sm"
                    style={{ accentColor: '#8B4513' }}
                  />
                  <span style={{ color: '#562A0E', lineHeight: 1.6, fontSize: '0.9rem' }}>
                    I understand the interior design consultation fee is KES 5,000, confirmed upon booking.
                  </span>
                </label>
              </div>

              {/* Error */}
              {submitError && (
                <div className="p-4 rounded-sm" style={{ backgroundColor: '#FEF2F2', color: '#7F1D1D', border: '1px solid #FECACA' }}>
                  <p className="text-sm">{submitError}</p>
                </div>
              )}

              {/* Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full btn flex items-center justify-center text-base py-4 ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                  style={{ backgroundColor: '#8B4513', color: '#FAF9F6', fontSize: 14 }}
                  onMouseEnter={e => { if (!isSubmitting) e.currentTarget.style.backgroundColor = '#703811'; }}
                  onMouseLeave={e => { if (!isSubmitting) e.currentTarget.style.backgroundColor = '#8B4513'; }}
                >
                  {isSubmitting ? 'Submitting...' : 'Book My Interior Design Consultation'}
                </button>
              </div>

              <p className="text-center" style={{ fontStyle: 'italic', color: '#703811', fontSize: '0.8rem' }}>
                We will call you within 24 hours to confirm your availability and schedule your session.
              </p>
            </form>
          </motion.div>
        </div>
      </section>

      {/* ── 14. FAQ ───────────────────────────────────────────────────────── */}
      <section className="py-20 px-4" style={{ backgroundColor: '#F5F0EA' }}>
        <div className="max-w-[720px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-center mb-12" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 600, color: '#3D1E0B' }}>
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="rounded-sm overflow-hidden"
                  style={{ border: '1px solid #E1CCBB', backgroundColor: activeAccordion === i ? '#FFFFFF' : '#FAF9F6' }}
                >
                  <button
                    onClick={() => setActiveAccordion(prev => prev === i ? null : i)}
                    className="w-full text-left px-5 py-4 flex items-start justify-between gap-4 transition-colors duration-200"
                    style={{ backgroundColor: 'transparent' }}
                    aria-expanded={activeAccordion === i}
                  >
                    <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.05rem', fontWeight: 600, color: '#3D1E0B', lineHeight: 1.4, flex: 1 }}>
                      {faq.q}
                    </span>
                    <span className="flex-shrink-0 mt-0.5" style={{ color: '#8B4513' }}>
                      {activeAccordion === i
                        ? <Minus className="h-5 w-5" />
                        : <Plus className="h-5 w-5" />
                      }
                    </span>
                  </button>
                  <AnimatePresence>
                    {activeAccordion === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div className="px-5 pb-5 pr-12" style={{ color: '#562A0E', lineHeight: 1.75, fontSize: '0.9rem' }}>
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 15. STILL HAVE QUESTIONS — phone only ─────────────────────────── */}
      <section className="py-16 px-4" style={{ backgroundColor: '#3D1E0B' }}>
        <div className="max-w-[720px] mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="mb-4" style={{ color: '#C8B5A0', fontSize: '0.6rem', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 700 }}>
              STILL HAVE QUESTIONS?
            </p>
            <p className="mb-6 text-base sm:text-base" style={{ fontFamily: 'Cormorant Garamond, serif', color: '#FFFFFF', lineHeight: 1.6 }}>
              Talk to our lead interior designer.
            </p>
            <a
              href="tel:+254700097896"
              className="inline-flex items-center justify-center gap-3 transition-opacity hover:opacity-80"
            >
              <Phone className="h-7 w-7 sm:h-6 sm:w-6" style={{ color: '#C8B5A0' }} />
              <span style={{ fontFamily: 'Cormorant Garamond, serif', color: '#FFFFFF', fontSize: 'clamp(1.8rem, 4vw, 2rem)', fontWeight: 600, letterSpacing: '0.04em' }}>
                0700097896
              </span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── 16. MAP ───────────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: '#FAF9F6' }}>
        <div style={{ height: 'clamp(220px, 25vw, 320px)' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7!2d36.887!3d-1.245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f175c79b96929%3A0x7f1e2b5de8c83cdf!2sGarden%20Estate%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1700000000000"
            width="100%"
            height="100%"
            style={{ border: 0, display: 'block' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Avalanche Creations Location — Garden Estate, Nairobi"
          />
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────────────────────── */}
      <Footer />

      {/* ── FLOATING CTA ──────────────────────────────────────────────────── */}
      <FloatingCTA />

      {/* ── THANK YOU MODAL ───────────────────────────────────────────────── */}
      <AnimatePresence>
        {showThankYouModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ backgroundColor: 'rgba(61,30,11,0.7)', backdropFilter: 'blur(4px)' }}
          >
            <motion.div
              initial={{ scale: 0.92, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 20 }}
              className="relative w-full max-w-[480px] rounded-sm p-8 md:p-10 text-center"
              style={{ backgroundColor: '#FAF9F6', boxShadow: '0 20px 60px rgba(0,0,0,0.3)' }}
            >
              <button
                onClick={() => setShowThankYouModal(false)}
                className="absolute top-4 right-4 p-1 rounded-full transition-opacity hover:opacity-60"
              >
                <X className="h-5 w-5" style={{ color: '#562A0E' }} />
              </button>

              <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#F5F0EA' }}>
                <Check className="h-7 w-7" style={{ color: '#8B4513' }} />
              </div>

              <h3 className="mb-3" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.6rem', fontWeight: 600, color: '#3D1E0B' }}>
                Request Received
              </h3>
              <p className="mb-3" style={{ color: '#562A0E', lineHeight: 1.7 }}>
                Thank you, your consultation request has been received.
              </p>
              <p className="mb-8" style={{ color: '#703811', fontSize: '0.85rem', lineHeight: 1.6 }}>
                We will call you within 24 hours to confirm your availability and schedule your session.
              </p>

              <a
                href="https://wa.me/254700097896?text=Hi%2C%20I%20just%20submitted%20a%20consultation%20request.%20Here%20are%20some%20ideas%20and%20images%20to%20help%20prepare%20for%20our%20session."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary w-full inline-flex items-center justify-center gap-2"
                style={{ fontSize: 14, padding: '10px 20px' }}
              >
                <MessageCircle className="h-5 w-5" />
                Share inspiration on WhatsApp
              </a>

              <button
                onClick={() => setShowThankYouModal(false)}
                className="mt-4 text-sm transition-opacity hover:opacity-60"
                style={{ color: '#703811' }}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default InteriorDesignNairobiPage;
