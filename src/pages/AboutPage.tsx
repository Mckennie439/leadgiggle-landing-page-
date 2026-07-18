import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEOOptimizer from '../components/common/SEOOptimizer';
import StructuredData from '../components/common/StructuredData';

const FOUNDER_IMAGE = 'https://ykndyjgvochvehwimhhq.supabase.co/storage/v1/object/public/Website%20Assests/thomebathroomrenovation-images/thome-bathroom-renovation-wall-sconce-esther-njoroge.lead-interior-designer-avalanche-creations.jpg';

const AboutPage: React.FC = () => {
  const values = [
    {
      title: 'Intentional',
      description: 'Behind every design choice is purpose. We create spaces that go beyond style to support your lifestyle, well being, and identity.'
    },
    {
      title: 'Collaborative',
      description: "You're not a bystander, you're part of the process. We design with you, not just for you."
    },
    {
      title: 'Comfort Driven',
      description: "The goal isn't perfection, it's ease. How you move, feel, and rest in your space matters most."
    },
    {
      title: 'Observant',
      description: 'We see what others miss, small details, habits, and unspoken needs that shape how a space truly feels.'
    },
    {
      title: 'Grounded',
      description: 'Every space should feel like home. Whether residential or corporate, we design to create belonging spaces you connect with deeply.'
    },
    {
      title: 'Respectful',
      description: 'We honour your time and trust. That means clear timelines, open communication, and a process that moves at a pace that works for you.'
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="About Avalanche Creations | Interior Designers Kenya"
        description="Learn about Avalanche Creations, an interior design studio guided by clarity, collaboration, and personal storytelling. Design rooted in how people live."
        keywords="about Avalanche Creations, Esther Njoroge interior designer, Nairobi interior design studio, founded 2021 Kenya"
        type="website"
        image="https://ykndyjgvochvehwimhhq.supabase.co/storage/v1/object/public/Website%20Assests/banner-images/about-avalanche-creations-interior-design-studio.jpeg"
      />
      <StructuredData
        type="breadcrumb"
        data={[
          { name: 'Home', url: 'https://www.avalanchecreations.co.ke/' },
          { name: 'About', url: 'https://www.avalanchecreations.co.ke/about' },
        ]}
      />
      <StructuredData
        type="webpage"
        data={{
          name: 'About Avalanche Creations | Interior Designers Kenya',
          description: 'Learn about Avalanche Creations, an interior design studio guided by clarity, collaboration, and personal storytelling. Design rooted in how people live.',
          url: 'https://www.avalanchecreations.co.ke/about',
          breadcrumb: [
            { name: 'Home', url: 'https://www.avalanchecreations.co.ke/' },
            { name: 'About', url: 'https://www.avalanchecreations.co.ke/about' },
          ],
        }}
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
        <div className="w-full h-[300px] md:h-[400px] lg:h-[500px] relative overflow-hidden z-10 md:hidden">
          <img
            src="https://ykndyjgvochvehwimhhq.supabase.co/storage/v1/object/public/Website%20Assests/banner-images/about-avalanche-creations-interior-design-studio.jpeg"
            alt="About Avalanche Creations"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brown-900/10 to-brown-900/05"></div>
        </div>

        <div className="py-20 relative z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">

              {/* About Us — two-column on desktop/tablet, stacked on mobile */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-20"
              >
                {/* Desktop / Tablet: side-by-side, fixed height so CTA aligns with image bottom */}
                <div className="hidden md:grid md:grid-cols-2 md:gap-12 lg:gap-16 md:h-[560px] lg:h-[540px]">
                  {/* Left — Banner Image fills full column height */}
                  <div className="relative overflow-hidden">
                    <img
                      src="https://ykndyjgvochvehwimhhq.supabase.co/storage/v1/object/public/Website%20Assests/banner-images/about-avalanche-creations-interior-design-studio.jpeg"
                      alt="About Avalanche Creations"
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  {/* Right — copy on top, CTA pinned to bottom */}
                  <div className="flex flex-col justify-between">
                    <div>
                      <h1 className="text-3xl lg:text-4xl font-serif text-brown-900 mb-3">
                        About
                      </h1>
                      <h2 className="text-xl lg:text-2xl font-serif text-brown-900 mb-5">
                        About Avalanche Creations | Interior Design Company in Kenya.
                      </h2>
                      <div className="text-sm lg:text-base leading-relaxed text-brown-700 space-y-3">
                        <p>
                          Founded in 2021, Avalanche Creations is a leading interior design company in Kenya, creating spaces that are as functional as they are beautiful. We provide interior design services in Nairobi and across Kenya for both homeowners and businesses, from space planning and lighting design to custom furniture and full renovations.
                        </p>
                        <p>
                          Whether you're crafting a home you love returning to or designing a commercial space that enhances your brand experience, we bring creativity, structure, and a trusted process to every step.
                        </p>
                        <p>
                          With a team that values clarity, collaboration, and results, Avalanche Creations manages every stage, from concept and design to procurement and installation, so you never feel overwhelmed or left guessing.
                        </p>
                      </div>
                    </div>
                    <Link
                      to="/quote"
                      className="btn btn-primary inline-flex items-center self-start"
                      style={{ fontSize: '14px', padding: '10px 20px' }}
                    >
                      Work With Us
                    </Link>
                  </div>
                </div>

                {/* Mobile: copy only (image shown in banner above) */}
                <div className="md:hidden">
                  <h2 className="text-4xl font-serif text-brown-900 mb-4">
                    About
                  </h2>
                  <h3 className="text-2xl font-serif text-brown-900 mb-8">
                    About Avalanche Creations | Interior Design Company in Kenya.
                  </h3>
                  <div className="prose prose-lg text-brown-700 max-w-none">
                    <p className="mb-6">
                      Founded in 2021, Avalanche Creations is a leading interior design company in Kenya, creating spaces that are as functional as they are beautiful.

We provide interior design services in Nairobi and across Kenya for both homeowners and businesses, from space planning and lighting design to custom furniture and full renovations.
                    </p>
                    <p className="mb-6">
                      Whether you're crafting a home you love returning to or designing a commercial space that enhances your brand experience, we bring creativity, structure, and a trusted process to every step.
                    </p>
                    <p>
                      With a team that values clarity, collaboration, and results, Avalanche Creations manages every stage, from concept and design to procurement and installation, so you never feel overwhelmed or left guessing.
                    </p>
                  </div>
                  <Link
                    to="/quote"
                    className="btn btn-primary inline-flex items-center mt-8"
                    style={{ fontSize: '14px', padding: '10px 20px' }}
                  >
                    Work With Us
                  </Link>
                </div>
              </motion.div>

              {/* Our Story Section */}
              <div className="max-w-4xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-20"
                >
                  <h2 className="text-2xl md:text-3xl font-serif text-brown-900 mb-6">Our Story</h2>
                  <div className="prose prose-lg text-brown-700 max-w-none">
                    <p className="mb-6">
                      Avalanche Creations began with a simple belief: great design should feel personal, not complicated.

We noticed a gap in Kenya's interior design industry: clients wanted exceptional design with deep connectedness, but too often found themselves overwhelmed by confusing processes, rushed timelines, and results that didn't reflect their vision.
                    </p>
                    <p className="mb-6">
                      So we built something different, an interior design studio that listens first, collaborates deeply, and delivers spaces that reflect the people who live and work in them.

Since our founding, we've grown through trust and a commitment to craft. Every project is an opportunity to build relationships, not just rooms.
                    </p>
                    <p>
                      Today, Avalanche Creations proudly serves homeowners, brands, and businesses across Kenya, offering personalized interior design services that combine clarity, care, and purpose. Whether residential or commercial, every project is guided by one goal: to help clients bring their vision to life beautifully, functionally, and with meaning.
                    </p>
                  </div>
                </motion.div>

                {/* Founder Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-20"
                >
                  <div className="flex flex-col md:flex-row md:gap-16 md:items-start">
                    {/* Image */}
                    <div className="w-full md:w-2/5 flex-shrink-0 mb-8 md:mb-0">
                      <img
                        src={FOUNDER_IMAGE}
                        alt="Esther Njoroge — Founder & Lead Interior Designer, Avalanche Creations"
                        className="w-full object-cover"
                        style={{ aspectRatio: '3 / 4', objectPosition: 'center top' }}
                        loading="lazy"
                      />
                    </div>
                    {/* Copy */}
                    <div className="md:w-3/5">
                      <p className="text-sm font-sans tracking-widest uppercase text-brown-500 mb-4">
                        Founder
                      </p>
                      <h2 className="text-2xl md:text-3xl font-serif text-brown-900 mb-1">
                        Esther Njoroge
                      </h2>
                      <p className="text-base font-sans text-brown-600 mb-8">
                        Founder &amp; Lead Interior Designer
                      </p>
                      <div className="prose prose-lg text-brown-700 max-w-none">
                        <p>
                          The creative visionary behind Avalanche Creations, Esther leads every project from concept to completion with a structured, design-led approach shaped by five years in general management before founding the studio. She believes a well-designed home goes beyond aesthetics, it should support how you live, feel entirely yours, and elevate your everyday experience within it.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Our Vision Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-20"
                >
                  <h2 className="text-2xl md:text-3xl font-serif text-brown-900 mb-6">Our Vision</h2>
                  <div className="prose prose-lg text-brown-700 max-w-none">
                    <p className="mb-6 text-xl font-medium">
                      At Avalanche Creations, our vision is simple:
That every person experiences the comfort, clarity, and confidence of living or working in a space that truly feels like theirs.
                    </p>
                    <p className="mb-6">
                      We exist to bring your ideas to life through custom interior design in Kenya, interiors that are not only beautiful but also functional, personal, and deeply grounded in how you live or work.
                    </p>
                    <p className="mb-6">
                      We believe every space should reflect its people, their rhythm, their story, and their values.
Whether residential or commercial, our interior design philosophy centers on creating spaces that feel authentic, purposeful, and timeless.
                    </p>
                    <p>
                      To us, a well-designed space isn't just about aesthetics. It enhances well-being, reduces stress, and brings a quiet kind of joy into your everyday life.

And the process to get there? It should feel just as intentional as the design itself: collaborative, transparent, and completely centered on you.
                    </p>
                  </div>
                </motion.div>

                {/* Our Values Section */}
                <div className="mb-20">
                  <h2 className="text-2xl md:text-3xl font-serif text-brown-900 mb-10">Our Values</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
                    {values.map((value, index) => (
                      <motion.div
                        key={value.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="border-t border-brown-200 pt-6"
                      >
                        <h3 className="text-xl font-serif text-brown-800 mb-3">{value.title}</h3>
                        <p className="text-brown-600 leading-relaxed">{value.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* CTA Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <Link
                    to="/quote"
                    className="btn btn-primary inline-flex items-center"
                  >
                    Start Your Project
                  </Link>
                </motion.div>
              </div>

            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default AboutPage;
