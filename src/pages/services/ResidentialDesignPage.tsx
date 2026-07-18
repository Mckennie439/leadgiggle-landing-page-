import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEOOptimizer from '../../components/common/SEOOptimizer';
import StructuredData from '../../components/common/StructuredData';

const ResidentialDesignPage: React.FC = () => {
  return (
    <>
      <SEOOptimizer
        title="Full Interior Design Services | Thoughtful, Custom Interiors"
        description="End-to-end interior design for residential and corporate spaces. From concept to completion, we create cohesive, deeply personal interiors tailored to how you live and work."
        keywords="full interior design services Kenya, residential design Nairobi, corporate interior design, architectural review, space planning Kenya, interior styling services"
        type="service"
        image="https://ykndyjgvochvehwimhhq.supabase.co/storage/v1/object/public/Website%20Assests/banner-images/full-service-interior-design-kenya.jpg"
      />

      <StructuredData
        type="service"
        data={{
          name: "Full Interior Design Services",
          description: "Comprehensive interior design services for residential and corporate spaces in Kenya. From architectural review and space planning to final styling and procurement coordination.",
          serviceType: "Full Interior Design",
          category: "Interior Design Services",
          url: "https://www.avalanchecreations.co.ke/services/full-design-services-kenya",
          image: "https://ykndyjgvochvehwimhhq.supabase.co/storage/v1/object/public/Website%20Assests/banner-images/full-service-interior-design-kenya.jpg"
        }}
      />

      <StructuredData
        type="faq"
        data={[
          {
            question: "What does full interior design services include?",
            answer: "Full interior design services cover the entire design journey, from early-stage space planning and concept development to material selection, furniture sourcing, custom detailing, and final styling. The scope is tailored to each project based on its scale, function, and level of customization."
          },
          {
            question: "Do you offer both residential and corporate interior design services?",
            answer: "Yes. We work on both residential and corporate projects, designing private homes, renovations, and select commercial spaces such as offices and client-facing environments. Each project is approached with the same level of detail and intentionality."
          },
          {
            question: "When is the best time to hire an interior designer?",
            answer: "Ideally, an interior designer should be engaged as early as possible, especially for new builds or renovations. Early involvement allows us to influence layouts, lighting, and infrastructure decisions that have a lasting impact on how the space functions and feels."
          },
          {
            question: "Do you design and source custom furniture?",
            answer: "Yes. Custom furniture is often part of our full interior design services when it helps achieve a cohesive and tailored outcome. We design bespoke pieces that integrate seamlessly with the overall space rather than feeling like standalone additions."
          },
          {
            question: "What is the typical investment for full interior design services?",
            answer: "Investment varies depending on project scope, size, and level of customization. Full interior design services are best suited for clients who value thoughtful planning, detailed execution, and long-term design solutions rather than quick or budget-led fixes."
          }
        ]}
      />

      <StructuredData
        type="breadcrumb"
        data={[
          { name: 'Home', url: 'https://www.avalanchecreations.co.ke/' },
          { name: 'Services', url: 'https://www.avalanchecreations.co.ke/services' },
          { name: 'Full Design Services', url: 'https://www.avalanchecreations.co.ke/services/full-design-services-kenya' },
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

        {/* Banner Image */}
        <div className="w-full h-[300px] md:h-[400px] lg:h-[500px] relative overflow-hidden z-10">
          <img
            src="https://ykndyjgvochvehwimhhq.supabase.co/storage/v1/object/public/Website%20Assests/banner-images/full-service-interior-design-kenya.jpg"
            alt="Full Design Services"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brown-900/10 to-brown-900/05"></div>
        </div>

        <div className="py-20 relative z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-16"
              >
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-brown-900 mb-6">
                  Full Interior Design Services Kenya (Residential &amp; Corporate)
                </h1>
                <p className="text-lg md:text-xl text-brown-700 mb-6">
                  Our full interior design services begin with a comprehensive review of architectural drawings, including mechanical and electrical layouts. This early-stage analysis ensures that every decision, from space planning to lighting placement, supports both your vision and the way you want to live or work in your space.
                </p>
                <p className="text-lg md:text-xl text-brown-700 mb-6">
                  By addressing functionality and flow at the foundation stage, we're able to design spaces that feel intuitive, cohesive, and considered long before finishes or furnishings are introduced.
                </p>
                <p className="text-lg md:text-xl text-brown-700">
                  Whether we're designing a private residence or a corporate environment, this thoughtful groundwork allows design intent and practical execution to move forward in alignment from the very beginning.
                </p>
              </motion.div>

              <div className="space-y-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-2xl md:text-3xl font-serif text-brown-900 mb-6">
                    Our Approach
                  </h2>
                  <p className="text-brown-700 mb-6">
                    As a full-service interior design studio in Kenya, our approach is rooted in clarity, collaboration, and attention to detail.
                  </p>
                  <p className="text-brown-700 mb-6">
                    We take the time to align practical considerations with aesthetic goals, identifying potential challenges early and refining layouts before implementation begins. This proactive process helps avoid costly revisions later and allows each design decision to feel intentional rather than reactive.
                  </p>
                  <div className="text-brown-700 mb-6">
                    <p className="mb-3">Our full interior design process typically includes:</p>
                    <ul className="space-y-2 ml-4">
                      <li>✓ Design discovery and lifestyle or brand analysis</li>
                      <li>✓ Space planning and layout refinement</li>
                      <li>✓ Material, finish, and furniture selection</li>
                      <li>✓ 3D visualization where appropriate</li>
                      <li>✓ Custom detailing and procurement coordination</li>
                      <li>✓ Final styling and on-site finishing touches</li>
                    </ul>
                  </div>
                  <p className="text-brown-700">
                    From concept development to final styling, we guide you through every phase of the journey. Each layer is purposeful, personal, and beautifully executed, resulting in spaces that feel cohesive, functional, and deeply connected to the people who use them.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="mb-8">
                    <h2 className="text-2xl md:text-3xl font-serif text-brown-900 mb-6">
                      Residential Interior Design Kenya
                    </h2>
                    <p className="text-brown-700 mb-6">
                      A home should do more than look beautiful. It should support your daily life, reflect who you are, and feel like a place you can grow into.
                    </p>
                    <p className="text-brown-700 mb-6">
                      Our residential interior design services are designed for homeowners building new homes or renovating existing spaces who want more than surface-level styling. We help translate ideas, emotions, and aspirations into spaces that feel personal, timeless, and thoughtfully lived in.
                    </p>
                    <p className="text-brown-700 mb-6">
                      From blank floor plans to long-loved rooms, we meet you where you are. We listen first, then layer functionality, flow, and feeling into every decision we make. From spatial layout and lighting design to finishes, furnishings, and final styling, every choice is guided by how you live and what matters most to you.
                    </p>
                    <p className="text-brown-700 mb-6">
                      This service is ideal for homeowners who value intentional design and are ready to invest in a cohesive, long-term solution rather than quick fixes or trend-led updates.
                    </p>
                    <p className="text-brown-700 font-medium">
                      Starting fresh? Starting over? Still figuring it out? We're here when you're ready to design a home that truly feels like you.
                    </p>
                  </div>
                  <Link
                    to="/quote"
                    className="btn btn-primary inline-flex items-center"
                  >
                    Let's talk about your space
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="mb-8">
                    <h2 className="text-2xl md:text-3xl font-serif text-brown-900 mb-6">
                      Corporate Interior Design Kenya
                    </h2>
                    <p className="text-brown-700 mb-6">
                      Your workspace should reflect your brand, energize your team, and support productivity without sacrificing style.
                    </p>
                    <p className="text-brown-700 mb-6">
                      We design corporate interiors that balance aesthetic presence with thoughtful function, creating environments that feel professional, welcoming, and aligned with your business identity. From modern offices to elevated client-facing spaces, our corporate interior design services focus on clarity, cohesion, and purpose.
                    </p>
                    <p className="text-brown-700 mb-6">
                      Each project begins with understanding your goals, how people move through the space, and how they interact within it. From there, we shape layouts, lighting, furniture, and finishes that enhance workflow, elevate perception, and communicate your brand values in every detail.
                    </p>
                    <p className="text-brown-700 font-medium">
                      When done right, interior design doesn't just serve your space, it strengthens your brand and the experience of everyone who uses it.
                    </p>
                  </div>
                  <Link
                    to="/quote"
                    className="btn btn-primary inline-flex items-center"
                  >
                    Let's talk about your space
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-2xl md:text-3xl font-serif text-brown-900 mb-8">
                    Frequently Asked Questions
                  </h2>

                  <div className="space-y-8">
                    <div className="pb-8 border-b border-brown-200/30">
                      <h3 className="text-lg font-medium text-brown-900 mb-3">
                        What does full interior design services include?
                      </h3>
                      <p className="text-brown-700">
                        Full interior design services cover the entire design journey, from early-stage space planning and concept development to material selection, furniture sourcing, custom detailing, and final styling. The scope is tailored to each project based on its scale, function, and level of customization.
                      </p>
                    </div>

                    <div className="pb-8 border-b border-brown-200/30">
                      <h3 className="text-lg font-medium text-brown-900 mb-3">
                        Do you offer both residential and corporate interior design services?
                      </h3>
                      <p className="text-brown-700">
                        Yes. We work on both residential and corporate projects, designing private homes, renovations, and select commercial spaces such as offices and client-facing environments. Each project is approached with the same level of detail and intentionality.
                      </p>
                    </div>

                    <div className="pb-8 border-b border-brown-200/30">
                      <h3 className="text-lg font-medium text-brown-900 mb-3">
                        When is the best time to hire an interior designer?
                      </h3>
                      <p className="text-brown-700">
                        Ideally, an interior designer should be engaged as early as possible, especially for new builds or renovations. Early involvement allows us to influence layouts, lighting, and infrastructure decisions that have a lasting impact on how the space functions and feels.
                      </p>
                    </div>

                    <div className="pb-8 border-b border-brown-200/30">
                      <h3 className="text-lg font-medium text-brown-900 mb-3">
                        Do you design and source custom furniture?
                      </h3>
                      <p className="text-brown-700">
                        Yes. Custom furniture is often part of our full interior design services when it helps achieve a cohesive and tailored outcome. We design bespoke pieces that integrate seamlessly with the overall space rather than feeling like standalone additions.
                      </p>
                    </div>

                    <div className="pb-8">
                      <h3 className="text-lg font-medium text-brown-900 mb-3">
                        What is the typical investment for full interior design services?
                      </h3>
                      <p className="text-brown-700">
                        Investment varies depending on project scope, size, and level of customization. Full interior design services are best suited for clients who value thoughtful planning, detailed execution, and long-term design solutions rather than quick or budget-led fixes.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-2xl md:text-3xl font-serif text-brown-900 mb-6">
                    Ready to bring your vision to life?
                  </h2>
                  <p className="text-lg text-brown-700 mb-8">
                    Whether you're building, renovating, or reimagining your home, our full design service guides every detail from concept to completion with clarity and intention.
                  </p>
                  <Link
                    to="/quote"
                    className="btn btn-primary inline-flex items-center"
                  >
                    Start Your Project Today
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

export default ResidentialDesignPage;
