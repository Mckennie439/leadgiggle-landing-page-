import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEOOptimizer from '../../components/common/SEOOptimizer';
import StructuredData from '../../components/common/StructuredData';

const BANNER_IMAGE = 'https://ykndyjgvochvehwimhhq.supabase.co/storage/v1/object/public/Website%20Assests/banner-images/home-renovation-interior-design-nairobi-kenya.jpg';

const FAQS = [
  {
    question: 'What does your home renovation service include?',
    answer: 'Our home renovation services are design-led and tailored to how you live. They typically include space planning, layout refinement, material and finish selection, lighting design, and overall design coordination to ensure the renovated space feels cohesive, functional, and intentional.'
  },
  {
    question: 'Do you handle both small and full-scale home renovations?',
    answer: 'We work on a range of renovation projects, from targeted updates to full-scale home transformations. The common thread across all projects is thoughtful design, clear direction, and a focus on long-term functionality rather than cosmetic changes alone.'
  },
  {
    question: 'When is the best time to involve an interior designer in a renovation?',
    answer: 'Ideally, an interior designer should be involved at the very beginning of a renovation. Early engagement allows us to influence layouts, lighting, and structural decisions that have a lasting impact on how the space functions and feels once complete.'
  },
  {
    question: 'Do you work with clients who have already started renovating?',
    answer: "Yes. Whether construction has already begun or you're still in the planning phase, we can step in to bring clarity, cohesion, and a strong design vision to the project. We assess what's been done, identify opportunities for improvement, and guide the next steps with intention."
  },
  {
    question: 'Do you manage contractors and construction work?',
    answer: 'Our role focuses on interior design and renovation planning rather than construction management. However, we collaborate closely with contractors and trades to ensure the design intent is executed accurately and consistently throughout the renovation process.'
  },
  {
    question: 'How long does a home renovation typically take?',
    answer: 'Timelines vary depending on the size and complexity of the renovation. During the early design phase, we help establish a realistic scope and sequence so expectations are clear and decisions are made confidently before work begins.'
  },
  {
    question: 'What kind of budget should I expect for a home renovation?',
    answer: 'Every renovation is different, and costs depend on the scale of work, materials selected, and level of customization. Our home renovation services are best suited for clients who value thoughtful planning, quality execution, and design decisions that stand the test of time.'
  },
  {
    question: 'How do I know if your renovation services are right for me?',
    answer: 'Our renovation services are ideal for homeowners who want a space that works better for their lifestyle and feels cohesive from start to finish. If you value collaboration, attention to detail, and a design-led approach, you\'re likely a good fit.'
  }
];

const HomeRenovationsPage: React.FC = () => {
  return (
    <>
      <SEOOptimizer
        title="Home Renovation Services Kenya | Design-Led Transformations"
        description="Design-focused home renovations that improve flow, function, and feeling. Thoughtful planning, clear direction, and spaces that truly work for your life."
        keywords="home renovation Kenya, house renovation Nairobi, interior renovation services, design-led renovation, home remodeling Kenya"
        type="service"
        image={BANNER_IMAGE}
      />

      <StructuredData
        type="service"
        data={{
          name: 'Home Renovation Services',
          description: 'Design-led home renovation services in Kenya. We improve flow, function, and feeling through thoughtful planning, layout refinement, and cohesive interior design.',
          serviceType: 'Home Renovation',
          category: 'Interior Design & Renovation Services',
          url: 'https://www.avalanchecreations.co.ke/services/renovations',
          image: BANNER_IMAGE
        }}
      />

      <StructuredData type="faq" data={FAQS} />

      <StructuredData
        type="breadcrumb"
        data={[
          { name: 'Home', url: 'https://www.avalanchecreations.co.ke/' },
          { name: 'Services', url: 'https://www.avalanchecreations.co.ke/services' },
          { name: 'Home Renovations', url: 'https://www.avalanchecreations.co.ke/services/renovations' },
        ]}
      />

      <motion.div
      >
        <div className="absolute inset-0 bg-offWhite/90"></div>

        {/* Banner Image */}
        <div className="w-full h-[300px] md:h-[400px] lg:h-[500px] relative overflow-hidden z-10">
          <img
            src="https://ykndyjgvochvehwimhhq.supabase.co/storage/v1/object/public/Website%20Assests/banner-images/home-renovation-interior-design-nairobi-kenya.jpg"
            alt="Home Renovation Services"
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
                  Home Renovation Services Kenya
                </h1>
                <p className="text-lg md:text-xl text-brown-700">
                  Transform the space you have into one that finally feels like home.
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
                    A renovation isn't just about changing how a room looks, it's about changing how it works for your life now.
                  </p>
                  <p className="text-brown-700 mb-6">
                    Maybe you've just bought a fixer-upper. Maybe the layout you once loved no longer fits your daily rhythm. Or maybe something about your home feels off, and you can't quite explain why.
                  </p>
                  <p className="text-brown-700 mb-6">
                    That's where we come in.
                  </p>
                  <p className="text-brown-700 mb-6">
                    We begin by understanding what's working, what isn't, and what matters most to you. From there, we build a clear design vision around your needs and lifestyle. We rework layouts, update finishes, refine flow, and carefully select materials, lighting, and details so that every element feels intentional and aligned with how you live.
                  </p>
                  <p className="text-brown-700">
                    Our renovation process is design-led, meaning decisions are guided by functionality, cohesion, and long-term comfort rather than quick fixes or surface-level updates.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-2xl md:text-3xl font-serif text-brown-900 mb-6">
                    The Renovation Experience
                  </h2>
                  <p className="text-brown-700 mb-6">
                    With Avalanche Creations, the renovation process becomes more than a construction project. It's a collaborative transformation, one guided by clear direction, thoughtful planning, and confident decision-making at every stage.
                  </p>
                  <p className="text-brown-700 mb-6">
                    Whether you've already gutted the kitchen or haven't picked up a hammer yet, we meet you where you are. We help you reimagine what your home could be and bring that vision to life with purpose, care, and attention to detail.
                  </p>
                  <p className="text-brown-700">
                    The result is a space that feels cohesive, considered, and deeply connected to the way you live, not just how it looks.
                  </p>
                </motion.div>

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

                  <div className="space-y-6">
                    <div className="pb-6 border-b border-brown-200/30">
                      <h3 className="text-lg md:text-xl font-serif text-brown-900 mb-3">
                        What does your home renovation service include?
                      </h3>
                      <p className="text-brown-700">
                        Our home renovation services are design-led and tailored to how you live. They typically include space planning, layout refinement, material and finish selection, lighting design, and overall design coordination to ensure the renovated space feels cohesive, functional, and intentional.
                      </p>
                    </div>

                    <div className="pb-6 border-b border-brown-200/30">
                      <h3 className="text-lg md:text-xl font-serif text-brown-900 mb-3">
                        Do you handle both small and full-scale home renovations?
                      </h3>
                      <p className="text-brown-700">
                        We work on a range of renovation projects, from targeted updates to full-scale home transformations. The common thread across all projects is thoughtful design, clear direction, and a focus on long-term functionality rather than cosmetic changes alone.
                      </p>
                    </div>

                    <div className="pb-6 border-b border-brown-200/30">
                      <h3 className="text-lg md:text-xl font-serif text-brown-900 mb-3">
                        When is the best time to involve an interior designer in a renovation?
                      </h3>
                      <p className="text-brown-700">
                        Ideally, an interior designer should be involved at the very beginning of a renovation. Early engagement allows us to influence layouts, lighting, and structural decisions that have a lasting impact on how the space functions and feels once complete.
                      </p>
                    </div>

                    <div className="pb-6 border-b border-brown-200/30">
                      <h3 className="text-lg md:text-xl font-serif text-brown-900 mb-3">
                        Do you work with clients who have already started renovating?
                      </h3>
                      <p className="text-brown-700">
                        Yes. Whether construction has already begun or you're still in the planning phase, we can step in to bring clarity, cohesion, and a strong design vision to the project. We assess what's been done, identify opportunities for improvement, and guide the next steps with intention.
                      </p>
                    </div>

                    <div className="pb-6 border-b border-brown-200/30">
                      <h3 className="text-lg md:text-xl font-serif text-brown-900 mb-3">
                        Do you manage contractors and construction work?
                      </h3>
                      <p className="text-brown-700">
                        Our role focuses on interior design and renovation planning rather than construction management. However, we collaborate closely with contractors and trades to ensure the design intent is executed accurately and consistently throughout the renovation process.
                      </p>
                    </div>

                    <div className="pb-6 border-b border-brown-200/30">
                      <h3 className="text-lg md:text-xl font-serif text-brown-900 mb-3">
                        How long does a home renovation typically take?
                      </h3>
                      <p className="text-brown-700">
                        Timelines vary depending on the size and complexity of the renovation. During the early design phase, we help establish a realistic scope and sequence so expectations are clear and decisions are made confidently before work begins.
                      </p>
                    </div>

                    <div className="pb-6 border-b border-brown-200/30">
                      <h3 className="text-lg md:text-xl font-serif text-brown-900 mb-3">
                        What kind of budget should I expect for a home renovation?
                      </h3>
                      <p className="text-brown-700">
                        Every renovation is different, and costs depend on the scale of work, materials selected, and level of customization. Our home renovation services are best suited for clients who value thoughtful planning, quality execution, and design decisions that stand the test of time.
                      </p>
                    </div>

                    <div className="pb-6">
                      <h3 className="text-lg md:text-xl font-serif text-brown-900 mb-3">
                        How do I know if your renovation services are right for me?
                      </h3>
                      <p className="text-brown-700">
                        Our renovation services are ideal for homeowners who want a space that works better for their lifestyle and feels cohesive from start to finish. If you value collaboration, attention to detail, and a design-led approach, you're likely a good fit.
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
                  <p className="text-brown-700 mb-8">
                    Thoughtful renovation starts with understanding how you live now and how you want your space to feel moving forward. We help you plan, coordinate, and avoid costly regrets.
                  </p>
                  <Link
                    to="/quote"
                    className="btn btn-primary inline-flex items-center"
                  >
                    Plan Your Renovation
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

export default HomeRenovationsPage;
