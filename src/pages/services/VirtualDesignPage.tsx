import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEOOptimizer from '../../components/common/SEOOptimizer';
import StructuredData from '../../components/common/StructuredData';

const BANNER_IMAGE = 'https://ykndyjgvochvehwimhhq.supabase.co/storage/v1/object/public/Website%20Assests/banner-images/virtual-interior-design-services-nairobi-kenya.jpg';

const FAQS = [
  {
    question: 'What is virtual interior design?',
    answer: 'Virtual interior design is a remote design service where professional guidance, layouts, and visual direction are delivered digitally. It allows clients to receive tailored design solutions without in-person meetings, while still benefiting from a clear and cohesive design plan.'
  },
  {
    question: 'How does virtual interior design differ from full interior design services?',
    answer: 'Virtual interior design focuses on design planning and visual guidance, while full interior design services involve on-site coordination and execution. Virtual services are ideal for clients who want flexibility in implementation but still value professional design direction.'
  },
  {
    question: 'Is virtual interior design still personalized?',
    answer: 'Yes. While the process is remote, every design is tailored to your space, lifestyle, and preferences. The service is collaborative and detail-driven, ensuring the outcome feels intentional rather than generic.'
  },
  {
    question: 'What types of spaces are best suited for virtual design?',
    answer: 'Virtual design works well for residential spaces such as living rooms, bedrooms, home offices, rental properties, and small renovations where clear guidance and visualization are key.'
  },
  {
    question: 'Is virtual interior design suitable if I\'m working within a budget?',
    answer: 'Virtual interior design offers flexibility in how and when you implement the design. It\'s best suited for clients who value clear planning and want to avoid costly mistakes, regardless of budget size.'
  }
];

const VirtualDesignPage: React.FC = () => {
  return (
    <>
      <SEOOptimizer
        title="Virtual Interior Design Services Kenya | Design, Delivered Remotely"
        description="Professional interior design delivered online. Clear plans, 3D visuals, and expert guidance you can implement at your own pace, wherever you are."
        keywords="virtual interior design Kenya, e-design services Nairobi, online interior design Kenya, remote interior design, 3D visualization interior design Kenya"
        type="service"
        image={BANNER_IMAGE}
      />

      <StructuredData
        type="service"
        data={{
          name: 'Virtual Interior Design Services',
          description: 'Professional virtual interior design services delivered remotely. Clear design plans, 3D visualizations, and expert guidance for clients across Kenya and beyond.',
          serviceType: 'Virtual Interior Design',
          category: 'Virtual Design & E-Design Services',
          url: 'https://www.avalanchecreations.co.ke/services/virtual-design',
          image: BANNER_IMAGE,
          availableChannel: {
            '@type': 'ServiceChannel',
            'serviceUrl': 'https://www.avalanchecreations.co.ke/quote',
            'availableLanguage': ['English', 'Swahili'],
            'servicePhone': '+254-700-097-896'
          }
        }}
      />

      <StructuredData type="faq" data={FAQS} />

      <StructuredData
        type="breadcrumb"
        data={[
          { name: 'Home', url: 'https://www.avalanchecreations.co.ke/' },
          { name: 'Services', url: 'https://www.avalanchecreations.co.ke/services' },
          { name: 'Virtual Interior Design', url: 'https://www.avalanchecreations.co.ke/services/virtual-design' },
        ]}
      />

      <motion.div
      >
        <div className="absolute inset-0 bg-offWhite/90"></div>

        {/* Banner Image */}
        <div className="w-full h-[300px] md:h-[400px] lg:h-[500px] relative overflow-hidden z-10">
          <img
            src="https://ykndyjgvochvehwimhhq.supabase.co/storage/v1/object/public/Website%20Assests/banner-images/virtual-interior-design-services-nairobi-kenya.jpg"
            alt="Virtual Interior Design Services"
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
                  Virtual Interior Design Services Kenya
                </h1>
                <p className="text-lg md:text-xl text-brown-700 mb-6">
                  Design expertise, delivered wherever you are.
                </p>
                <p className="text-lg md:text-xl text-brown-700 mb-6">
                  Not every project requires in-person design, but that doesn't mean it should feel any less personal. Our virtual interior design services offer clarity, collaboration, and creative direction, no matter where you're located.
                </p>
                <p className="text-lg md:text-xl text-brown-700">
                  This service is ideal for clients who value thoughtful design, clear guidance, and flexibility in how their project is executed.
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
                    We begin by understanding your goals, your space, and your personal style. From there, we develop tailored design plans you can implement confidently at your own pace.
                  </p>
                  <p className="text-brown-700 mb-6">
                    Every recommendation is intentional, detailed, and visually guided, so you're never left guessing. While the process is remote, the experience remains collaborative, considered, and deeply personal.
                  </p>
                  <p className="text-brown-700">
                    This service is best suited for clients who want professional design input and clear direction, without requiring on-site involvement.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-2xl md:text-3xl font-serif text-brown-900 mb-6">
                    3D Visualizations
                  </h2>
                  <p className="text-brown-700 mb-6">
                    3D visualizations transform ideas into clear, photorealistic visuals. Before committing to layouts, finishes, or materials, we show you how your space will actually look, down to proportion, flow, and detail.
                  </p>
                  <p className="text-brown-700 mb-6">
                    Whether you're building from plans or rethinking an existing space, 3D visualizations help eliminate uncertainty and reduce costly design mistakes. You gain clarity, confidence, and peace of mind before any physical work begins.
                  </p>
                  <p className="text-brown-700">
                    We work from architectural plans, sketches, or moodboards to create high-quality 3D renders that illustrate furniture placement, finishes, lighting, and spatial relationships from multiple perspectives. This allows you to refine decisions early, when changes are simple and cost-effective.
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
                  <h2 className="text-2xl md:text-3xl font-serif text-brown-900 mb-6">
                    E-Design Services
                  </h2>
                  <p className="text-brown-700 mb-6">
                    E-Design is a fully guided interior design service delivered remotely. It's designed for clients who prefer flexibility in execution but still want a cohesive, professional design vision.
                  </p>
                  <p className="text-brown-700 mb-6">
                    This service works well for new homeowners, renters, or renovators who want expert guidance without a full on-site design scope. You receive a clear, personalized plan that shows you what to buy, where to place it, and how to bring the look together with confidence.
                  </p>
                  <p className="text-brown-700">
                    You share your space details, preferences, and goals. We provide a complete design roadmap, including layouts, moodboards, color palettes, furniture and décor selections, and implementation guidance. You execute the plan at your own pace, with a strong design vision leading the way.
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
                  <div className="space-y-8">
                    <div className="pb-8 border-b border-brown-200">
                      <h3 className="text-xl font-serif text-brown-900 mb-4">
                        What is virtual interior design?
                      </h3>
                      <p className="text-brown-700">
                        Virtual interior design is a remote design service where professional guidance, layouts, and visual direction are delivered digitally. It allows clients to receive tailored design solutions without in-person meetings, while still benefiting from a clear and cohesive design plan.
                      </p>
                    </div>

                    <div className="pb-8 border-b border-brown-200">
                      <h3 className="text-xl font-serif text-brown-900 mb-4">
                        How does virtual interior design differ from full interior design services?
                      </h3>
                      <p className="text-brown-700">
                        Virtual interior design focuses on design planning and visual guidance, while full interior design services involve on-site coordination and execution. Virtual services are ideal for clients who want flexibility in implementation but still value professional design direction.
                      </p>
                    </div>

                    <div className="pb-8 border-b border-brown-200">
                      <h3 className="text-xl font-serif text-brown-900 mb-4">
                        Is virtual interior design still personalized?
                      </h3>
                      <p className="text-brown-700">
                        Yes. While the process is remote, every design is tailored to your space, lifestyle, and preferences. The service is collaborative and detail-driven, ensuring the outcome feels intentional rather than generic.
                      </p>
                    </div>

                    <div className="pb-8 border-b border-brown-200">
                      <h3 className="text-xl font-serif text-brown-900 mb-4">
                        What types of spaces are best suited for virtual design?
                      </h3>
                      <p className="text-brown-700">
                        Virtual design works well for residential spaces such as living rooms, bedrooms, home offices, rental properties, and small renovations where clear guidance and visualization are key.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-serif text-brown-900 mb-4">
                        Is virtual interior design suitable if I'm working within a budget?
                      </h3>
                      <p className="text-brown-700">
                        Virtual interior design offers flexibility in how and when you implement the design. It's best suited for clients who value clear planning and want to avoid costly mistakes, regardless of budget size.
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
                    Our virtual interior design service offers professional guidance, layouts, and sourcing support wherever you are, without compromising on thoughtfulness or detail.
                  </p>
                  <Link
                    to="/quote"
                    className="btn btn-primary inline-flex items-center"
                  >
                    Work With Us Virtually
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

export default VirtualDesignPage;
