import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEOOptimizer from '../../components/common/SEOOptimizer';
import StructuredData from '../../components/common/StructuredData';

const BANNER_IMAGE = 'https://ykndyjgvochvehwimhhq.supabase.co/storage/v1/object/public/Website%20Assests/banner-images/home-furnishing-and-styling-nairobi-kenya.jpg';

const FAQS = [
  {
    question: 'What does your home furnishing service include?',
    answer: 'Our home furnishing services typically include furniture selection, fabric and upholstery curation, lighting, artwork, soft furnishings, and accessories. Each selection is made with the goal of creating a cohesive, comfortable, and well-balanced space.'
  },
  {
    question: 'Is home furnishing only for new homes?',
    answer: 'Not at all. Home furnishing works just as well for existing spaces that need refinement or a fresh perspective. Whether you\'re settling into a new home or updating a space you\'ve lived in for years, furnishing helps bring clarity and cohesion to the overall design.'
  },
  {
    question: 'Can you work with existing furniture or pieces I already own?',
    answer: "Yes. We're happy to incorporate existing furniture, artwork, or sentimental pieces where appropriate. Our role is to layer new elements around what you already have so the space feels intentional rather than pieced together."
  },
  {
    question: 'Do you offer custom furniture as part of home furnishing?',
    answer: "Yes. When off-the-shelf options don't quite work, custom furniture can be designed to suit your space, layout, and functional needs. This ensures the finished space feels tailored rather than generic."
  },
  {
    question: 'How do you ensure everything works together?',
    answer: 'We approach home furnishing holistically, considering scale, proportion, color, texture, and flow. Each item is selected in relation to the others, ensuring the space feels cohesive and visually balanced rather than overstyled.'
  },
  {
    question: 'Is home furnishing suitable if I don\'t want a full interior design service?',
    answer: "Absolutely. Home furnishing is ideal if the structure of your space works well, but it lacks warmth, personality, or cohesion. It's a focused service designed to elevate how your home looks and feels without a full renovation."
  }
];

const HomeFurnishingPage: React.FC = () => {
  return (
    <>
      <SEOOptimizer
        title="Home Furnishing Services Kenya | Curated, Cohesive Living"
        description="Furniture, fabrics, lighting, and finishing touches curated with intention. We bring warmth, balance, and personality to homes that feel complete."
        keywords="home furnishing Kenya, furniture curation Nairobi, interior styling Kenya, home décor services, soft furnishings Kenya"
        type="service"
        image={BANNER_IMAGE}
      />

      <StructuredData
        type="service"
        data={{
          name: 'Home Furnishing Services',
          description: 'Curated home furnishing services in Kenya. Furniture, fabrics, lighting, and finishing touches selected with intention to create warm, balanced, and cohesive living spaces.',
          serviceType: 'Home Furnishing & Styling',
          category: 'Interior Design & Furnishing Services',
          url: 'https://www.avalanchecreations.co.ke/services/furnishing',
          image: BANNER_IMAGE
        }}
      />

      <StructuredData type="faq" data={FAQS} />

      <StructuredData
        type="breadcrumb"
        data={[
          { name: 'Home', url: 'https://www.avalanchecreations.co.ke/' },
          { name: 'Services', url: 'https://www.avalanchecreations.co.ke/services' },
          { name: 'Home Furnishing', url: 'https://www.avalanchecreations.co.ke/services/furnishing' },
        ]}
      />

      <motion.div
      >
        <div className="absolute inset-0 bg-offWhite/90"></div>

        {/* Banner Image */}
        <div className="w-full h-[300px] md:h-[400px] lg:h-[500px] relative overflow-hidden z-10">
          <img
            src="https://ykndyjgvochvehwimhhq.supabase.co/storage/v1/object/public/Website%20Assests/banner-images/home-furnishing-and-styling-nairobi-kenya.jpg"
            alt="Home Furnishing Services"
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
                  Home Furnishing Services Kenya
                </h1>
                <p className="text-lg md:text-xl text-brown-700 mb-6">
                  Our home furnishing services are about bringing your space to life through thoughtful finishing touches that feel considered, cohesive, and deeply personal. Whether you're moving into a new home or refreshing an existing one, we curate furniture, fabrics, lighting, artwork, and accessories that transform a house into a place that feels like yours.
                </p>
                <p className="text-lg md:text-xl text-brown-700">
                  Furnishing isn't about filling rooms. It's about creating balance, comfort, and visual harmony so every element feels intentional and connected.
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
                    We begin by understanding how you live, what you value, and the atmosphere you want your home to evoke. From there, we curate pieces that align with both your aesthetic and your everyday needs.
                  </p>
                  <p className="text-brown-700 mb-6">
                    From selecting curtains and soft furnishings to designing custom furniture, choosing the right rug, lighting, or even a small but meaningful detail, no element is treated as an afterthought. Each layer is chosen to complement the space, enhance flow, and support how the room is used.
                  </p>
                  <p className="text-brown-700">
                    It's not about trends or excess. It's about layering comfort, beauty, and function in a way that feels effortless, timeless, and true to you.
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
                        What does your home furnishing service include?
                      </h3>
                      <p className="text-brown-700">
                        Our home furnishing services typically include furniture selection, fabric and upholstery curation, lighting, artwork, soft furnishings, and accessories. Each selection is made with the goal of creating a cohesive, comfortable, and well-balanced space.
                      </p>
                    </div>

                    <div className="pb-6 border-b border-brown-200/30">
                      <h3 className="text-lg md:text-xl font-serif text-brown-900 mb-3">
                        Is home furnishing only for new homes?
                      </h3>
                      <p className="text-brown-700">
                        Not at all. Home furnishing works just as well for existing spaces that need refinement or a fresh perspective. Whether you're settling into a new home or updating a space you've lived in for years, furnishing helps bring clarity and cohesion to the overall design.
                      </p>
                    </div>

                    <div className="pb-6 border-b border-brown-200/30">
                      <h3 className="text-lg md:text-xl font-serif text-brown-900 mb-3">
                        Can you work with existing furniture or pieces I already own?
                      </h3>
                      <p className="text-brown-700">
                        Yes. We're happy to incorporate existing furniture, artwork, or sentimental pieces where appropriate. Our role is to layer new elements around what you already have so the space feels intentional rather than pieced together.
                      </p>
                    </div>

                    <div className="pb-6 border-b border-brown-200/30">
                      <h3 className="text-lg md:text-xl font-serif text-brown-900 mb-3">
                        Do you offer custom furniture as part of home furnishing?
                      </h3>
                      <p className="text-brown-700">
                        Yes. When off-the-shelf options don't quite work, custom furniture can be designed to suit your space, layout, and functional needs. This ensures the finished space feels tailored rather than generic.
                      </p>
                    </div>

                    <div className="pb-6 border-b border-brown-200/30">
                      <h3 className="text-lg md:text-xl font-serif text-brown-900 mb-3">
                        How do you ensure everything works together?
                      </h3>
                      <p className="text-brown-700">
                        We approach home furnishing holistically, considering scale, proportion, color, texture, and flow. Each item is selected in relation to the others, ensuring the space feels cohesive and visually balanced rather than overstyled.
                      </p>
                    </div>

                    <div className="pb-6">
                      <h3 className="text-lg md:text-xl font-serif text-brown-900 mb-3">
                        Is home furnishing suitable if I don't want a full interior design service?
                      </h3>
                      <p className="text-brown-700">
                        Absolutely. Home furnishing is ideal if the structure of your space works well, but it lacks warmth, personality, or cohesion. It's a focused service designed to elevate how your home looks and feels without a full renovation.
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
                    From furniture and lighting to textiles and finishing touches, we curate and place every element to create a home that feels complete, comfortable, and lived in.
                  </p>
                  <Link
                    to="/quote"
                    className="btn btn-primary inline-flex items-center"
                  >
                    Furnish Your Space
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

export default HomeFurnishingPage;
