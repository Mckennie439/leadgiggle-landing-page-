import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Ear, Users, Wrench, Shield, DollarSign, Heart } from 'lucide-react';
import SEOOptimizer from '../components/common/SEOOptimizer';
import StructuredData from '../components/common/StructuredData';
import { getImageUrlWithFallback } from '../lib/imageHelper';

interface Slide {
  id: number;
  image: string;
  title: string;
  alt: string;
  cta: {
    text: string;
    link: string;
  };
}

const slides: Slide[] = [
  {
    id: 1,
    image: 'https://ykndyjgvochvehwimhhq.supabase.co/storage/v1/object/public/Website%20Assests/hero-images/spaces-designed-around-your-story-kenya-avalanche-creations.jpg',
    title: 'We Design Custom Interiors in Kenya with Intention, Precision, and Care.',
    alt: 'Home furnishing project by Avalanche Creations interior designers in Kenya',
    cta: {
      text: 'Start Your Project',
      link: '/quote'
    }
  },
  {
    id: 2,
    image: 'https://ykndyjgvochvehwimhhq.supabase.co/storage/v1/object/public/Website%20Assests/hero-images/intentional-precision-led-interior-design-kenya-avalanche-creations.jpg',
    title: 'Where Your Story Becomes a Space, and Your Space Becomes a Feeling.',
    alt: 'Airbnb furnishing project in Nairobi by Avalanche Creations',
    cta: {
      text: "Let's Talk About Your Space",
      link: '/quote'
    }
  },
  {
    id: 3,
    image: 'https://ykndyjgvochvehwimhhq.supabase.co/storage/v1/object/public/Website%20Assests/hero-images/design-and-build-interiors-kenya-avalanche-creations.jpg',
    title: "Don't Just Dream About It. We Design and Build It.",
    alt: 'Design and build interior design services Kenya - Avalanche Creations',
    cta: {
      text: 'View Services',
      link: '/services'
    }
  },
  {
    id: 4,
    image: 'https://ykndyjgvochvehwimhhq.supabase.co/storage/v1/object/public/Website%20Assests/hero-images/custom-timeless-interior-design-kenya-avalanche-creations.jpg',
    title: 'Custom, Personal, and Timeless Interior Design in Kenya.',
    alt: 'Custom timeless interior design services Kenya - Avalanche Creations',
    cta: {
      text: 'View Portfolio',
      link: '/portfolio'
    }
  },
  {
    id: 5,
    image: 'https://ykndyjgvochvehwimhhq.supabase.co/storage/v1/object/public/Website%20Assests/hero-images/thoughtful-interior-design-process-kenya-avalanche-creations.jpg',
    title: 'Design Is a Journey. Ours Just Happens to Feel Effortless.',
    alt: 'From vision to reality inside our interior design process',
    cta: {
      text: 'See Our Process',
      link: '/process'
    }
  }
];

const features = [
  {
    icon: <Ear className="h-8 w-8" style={{ color: '#8B4513' }} />,
    title: 'We Listen First',
    description: "You don't need design jargon. We ask the right questions, understand your lifestyle, and translate your vision into interiors that reflect who you are. It's design that starts with empathy, and ends with clarity."
  },
  {
    icon: <Users className="h-8 w-8" style={{ color: '#8B4513' }} />,
    title: 'Thoughtfully Personal',
    description: "Your space isn't just about design; it's about your story, your rhythm, your peace of mind. Our approach blends function, emotion, and aesthetics to create interiors that feel distinctly yours."
  },
  {
    icon: <Wrench className="h-8 w-8" style={{ color: '#8B4513' }} />,
    title: 'Functional Beauty',
    description: 'Our spaces look beautiful, but they also work. We balance form and practicality to design interiors that support real life, not staged perfection. Every layout, light, and finish has purpose.'
  },
  {
    icon: <Shield className="h-8 w-8" style={{ color: '#8B4513' }} />,
    title: 'Calm, Guided Process',
    description: 'We make design feel simple, not stressful. From the first consultation to the final reveal, our team keeps you informed and at ease. Every step is clear, collaborative, and grounded in trust.'
  },
  {
    icon: <DollarSign className="h-8 w-8" style={{ color: '#8B4513' }} />,
    title: 'Accessible Luxury',
    description: "Good taste doesn't need a lavish budget. Great design is about intention, not price tags. We help you achieve a refined, timeless look, smartly, sustainably, and within your means."
  },
  {
    icon: <Heart className="h-8 w-8" style={{ color: '#8B4513' }} />,
    title: 'We Truly Value Our Clients',
    description: "We value every client beyond the project. Through honest communication, personalized service, and genuine care, many of our clients become lifelong friends. That's why we're trusted among Kenyas top interior design companies."
  }
];

const projects = [
  {
    id: 1,
    image: 'https://ykndyjgvochvehwimhhq.supabase.co/storage/v1/object/public/Website%20Assests/hero-images/inside-our-interior-design-portfolio-kenya.jpg',
    alt: 'Inside Avalanche Creations interior design portfolio showcasing thoughtfully designed residential and commercial spaces across Kenya'
  },
  {
    id: 2,
    image: 'https://ykndyjgvochvehwimhhq.supabase.co/storage/v1/object/public/Website%20Assests/hero-images/selected-interior-design-projects-avalanche-creations.jpg',
    alt: 'Selected interior design projects by Avalanche Creations, highlighting timeless interiors designed with intention and detail'
  },
  {
    id: 3,
    image: 'https://ykndyjgvochvehwimhhq.supabase.co/storage/v1/object/public/Website%20Assests/hero-images/residential-and-commercial-interior-design-projects-kenya.jpg',
    alt: 'Residential and commercial interior design projects by Avalanche Creations'
  }
];

const HomePage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <>
      <SEOOptimizer
        title="Avalanche Creations | Top Interior Design Company in Kenya"
        description="Avalanche Creations is a trusted interior design studio creating calm, cohesive residential and commercial spaces across Kenya. We design with intention, blending function, beauty, and personal storytelling."
        keywords="interior design Kenya, Nairobi interior designers, luxury home design, office interior design, home renovation Kenya, custom furniture design, interior styling Kenya, space planning Nairobi"
        type="website"
        image="https://i.postimg.cc/NjSv3Drb/residential-design-kenya-avalanche-creation.jpg"
      />

      <StructuredData
        type="organization"
        data={{}}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hero Slider */}
        <section className="relative h-[85vh] w-full overflow-hidden" style={{ backgroundColor: '#000000' }}>
          <div className="absolute inset-0">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className="absolute inset-0 transition-opacity duration-[2000ms] ease-in-out"
                style={{
                  opacity: currentSlide === index ? 1 : 0,
                  backgroundImage: `url(${getImageUrlWithFallback(slide.image)})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center center',
                  backgroundRepeat: 'no-repeat',
                  imageRendering: 'high-quality',
                  filter: 'none',
                  transform: 'scale(1)',
                  backgroundAttachment: 'scroll',
                }}
              >
                <img
                  src={getImageUrlWithFallback(slide.image)}
                  alt={slide.alt}
                  className="hidden"
                  loading={index === 0 ? 'eager' : 'lazy'}
                  width="1920"
                  height="1080"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.1))'
                  }}
                />
              </div>
            ))}
          </div>

          <div className="relative h-full flex items-center z-10">
            <div className="container mx-auto px-6 lg:px-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{
                    duration: 1.2,
                    ease: "easeOut"
                  }}
                  className="max-w-3xl"
                >
                  <h1
                    className="font-serif text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.2] xs:leading-tight mb-8"
                    style={{
                      color: '#3D1E0B !important'
                    }}
                  >
                    {slides[currentSlide].title}
                  </h1>
                  <Link
                    to={slides[currentSlide].cta.link}
                    className="btn inline-flex items-center px-6 py-3"
                    style={{
                      backgroundColor: '#D4C4B7',
                      color: '#3D1E0B',
                      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.25)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#C8B5A0';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#D4C4B7';
                    }}
                  >
                    {slides[currentSlide].cta.text}
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-500 ${
                  currentSlide === index
                    ? 'w-8'
                    : 'w-2 hover:opacity-75'
                }`}
                style={{
                  backgroundColor: currentSlide === index ? '#FFFFFF' : 'rgba(255, 255, 255, 0.6)',
                  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.4)'
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <div className="absolute bottom-8 right-8 z-20 flex space-x-3">
            <button
              onClick={prevSlide}
              className="flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 hover:scale-110"
              style={{
                backgroundColor: 'rgba(212, 196, 183, 0.95)',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(200, 181, 160, 0.95)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(212, 196, 183, 0.95)';
              }}
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6" style={{ color: '#3D1E0B' }} />
            </button>
            <button
              onClick={nextSlide}
              className="flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 hover:scale-110"
              style={{
                backgroundColor: 'rgba(212, 196, 183, 0.95)',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(200, 181, 160, 0.95)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(212, 196, 183, 0.95)';
              }}
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6" style={{ color: '#3D1E0B' }} />
            </button>
          </div>
        </section>

        {/* Intro Text Section */}
        <section className="py-20" style={{ backgroundColor: '#F9F5F1' }}>
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-4xl mx-auto"
            >
              <div className="prose prose-lg max-w-none mb-8" style={{ color: '#562A0E' }}>
                <p className="mb-6">
                  <span className="font-semibold text-xl" style={{ color: '#3D1E0B' }}>
                    Our reputation ranks us among Kenya's top interior design firms… but for us, it's not about being known; it's about being trusted.
                  </span>
                  {' '}
                  It's the confidence our clients place in us, the joy in every reveal, and that quiet "wow" when everything comes together. That's what drives us.
                </p>
                <p className="mb-6">
                  We're a calm, curated interior design team fluent in both dreams and deadlines, blending creative vision with professional project management.

Every project begins with your story, the rhythm of your daily life, and the feeling you want your space to evoke.
                </p>
                <p className="mb-6">
                  Then we design with intention, creating spaces that make you pause, step back, and smile.
                </p>
                <p className="mb-6">
                  Avalanche Creation is Kenya's interior design company that answers your messages, respects your timeline, and delivers spaces that capture your story in form and feeling.
                </p>
                <p>
                  With clarity, care, and a finish so refined, you'll wonder why you ever settled for less.
                </p>
              </div>
              <Link
                to="/quote"
                className="btn btn-primary inline-flex items-center"
              >
                Book a Consultation
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-20" style={{ backgroundColor: '#FAF9F6' }}>
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-serif mb-3" style={{ color: '#3D1E0B' }}>
                Why Choose Avalanche Creations
              </h2>
              <h3 className="text-2xl md:text-3xl font-serif mb-6" style={{ color: '#3D1E0B' }}>
                Trusted Interior Design Company in Nairobi, Kenya.
              </h3>
              <div className="max-w-3xl">
                <p className="text-xl mb-4" style={{ color: '#562A0E' }}>
                  Design is personal, and so is how we work.
                </p>
                <p className="text-xl" style={{ color: '#562A0E' }}>
                  At Avalanche Creations, we blend creative expertise with a thoughtful, end-to-end experience that makes every client feel seen, supported, and inspired.

Whether you're designing a new home, renovating your apartment, or refreshing a commercial space in Nairobi or across Kenya, we turn ideas into beautifully livable interiors.
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10 mb-16">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
                  className="border-t pt-6"
                  style={{ borderColor: 'rgba(139, 69, 19, 0.2)' }}
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-serif mb-3" style={{ color: '#562A0E' }}>{feature.title}</h3>
                  <p className="leading-relaxed" style={{ color: '#703811' }}>{feature.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Link
                to="/about"
                className="btn btn-primary inline-flex items-center"
              >
                Step Inside Our Story
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Portfolio Preview Section */}
        <section className="py-20" style={{ backgroundColor: '#FAF8F5' }}>
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-serif mb-6" style={{ color: '#3D1E0B' }}>
                A Look Inside Our Work
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-sm shadow-elegant"
                >
                  <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                    <img
                      src={getImageUrlWithFallback(project.image)}
                      alt={project.alt}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                      width="800"
                      height="600"
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            <Link
              to="/portfolio"
              className="btn btn-primary inline-flex items-center"
            >
              Explore the Portfolio
            </Link>
          </div>
        </section>

        {/* Dark CTA Section */}
        <section className="py-20" style={{ backgroundColor: '#3D1E0B', color: '#FAF9F6' }}>
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-8" style={{ color: '#FAF9F6' }}>
                Interior Design in Kenya: From Vision to Reality with the Right Partner.
              </h2>
              <div className="prose prose-lg max-w-none mb-8" style={{ color: '#FAF9F6' }}>
                <p className="mb-6">
                  Designing a stunning home or commercial space in Kenya shouldn't feel stressful or overwhelming.

We understand that when you reach out to an interior design company in Nairobi, it's because you're ready to stop second-guessing finishes, furnishings, and colors. You want a space that reflects your lifestyle, without the chaos of figuring it out by yourself.
                </p>
                <p className="mb-6">
                  Many of our clients come to us unsure of where to start or how to express exactly what they're looking for. That's okay,  it's not your job to have the perfect vision. It's ours to help uncover it.
                </p>
                <p className="mb-2">
                  Through thoughtful collaboration, we help you move:
                </p>
                <ul className="list-none space-y-2 mb-6 ml-4">
                  <li>✓ From uncertainty to clarity.</li>
                  <li>✓ From rooms that feel disconnected to spaces that feel complete.</li>
                  <li>✓ From "just a house" to "this feels like home."</li>
                </ul>
                <p className="mb-6">
                  We guide the entire design journey, from concept sketches to custom furniture selection, procurement, and final styling, ensuring every detail aligns with your rhythm and values.
                </p>
                <p className="mb-6">
                  Because with Avalanche Creations, you're not just hiring interior designers in Kenya, you're choosing a trusted design partner who listens, understands, and creates with intention.
                </p>
              </div>
              <Link
                to="/quote"
                className="btn inline-flex items-center"
                style={{
                  backgroundColor: '#D4C4B7',
                  color: '#3D1E0B'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#C8B5A0';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#D4C4B7';
                }}
              >
                Book a Consultation
              </Link>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default HomePage;
