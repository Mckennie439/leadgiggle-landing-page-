import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEOOptimizer from '../../components/common/SEOOptimizer';
import StructuredData from '../../components/common/StructuredData';

const BANNER_IMAGE = 'https://ykndyjgvochvehwimhhq.supabase.co/storage/v1/object/public/Website%20Assests/banner-images/custom-furniture-design-kenya-interiors.jpg';

const FAQS = [
  {
    question: 'Is custom furniture comfortable as well as beautiful?',
    answer: 'Absolutely. We believe well-designed furniture should feel as good as it looks. Every custom piece is designed for real-life use, prioritizing comfort, support, and ergonomics alongside aesthetics.'
  },
  {
    question: 'Will custom furniture fit my space properly?',
    answer: 'Yes. Custom furniture is designed around the exact dimensions of your room, your layout, and how the piece will interact with its surroundings. Where needed, we assess the space directly to ensure proportions, clearances, and functionality are thoughtfully considered.'
  },
  {
    question: "What if I'm not sure what kind of furniture I want?",
    answer: "That's completely fine. Part of our role is to help you clarify your vision. We guide you through style direction, explore references, and curate options for forms, materials, and finishes that align with your space and lifestyle."
  },
  {
    question: 'What material and fabric options are available?',
    answer: 'We work with a carefully selected range of fabrics, leathers, woods, and finishes. Whether your preference leans timeless and understated or bold and expressive, we help you choose materials that suit both the design intent and everyday use.'
  },
  {
    question: 'Can I trust the quality of custom furniture?',
    answer: 'Yes. Each piece is crafted by skilled artisans using quality materials and precise construction techniques. From joinery to stitching, attention is given to durability, finish, and longevity so the furniture continues to perform and age beautifully over time.'
  },
  {
    question: 'Is custom furniture only for large projects?',
    answer: 'Not at all. Custom furniture can be designed for a single feature piece or as part of a full interior project. The scope depends on your needs, space, and vision.'
  }
];

const CustomFurniturePage: React.FC = () => {
  return (
    <>
      <SEOOptimizer
        title="Custom Furniture Design Kenya | Pieces Made to Belong"
        description="Bespoke furniture designed for your space, lifestyle, and needs. From statement pieces to built-ins, every detail is considered and crafted to fit."
        keywords="custom furniture Kenya, bespoke furniture Nairobi, made-to-order furniture Kenya, custom furniture design, artisan furniture Kenya"
        type="service"
        image={BANNER_IMAGE}
      />

      <StructuredData
        type="service"
        data={{
          name: 'Custom Furniture Design',
          description: 'Bespoke custom furniture designed and crafted for your specific space in Kenya. From statement pieces to full built-in solutions, every detail is considered and crafted to fit perfectly.',
          serviceType: 'Custom Furniture Design',
          category: 'Bespoke Furniture & Interior Design Services',
          url: 'https://www.avalanchecreations.co.ke/services/custom-furniture',
          image: BANNER_IMAGE
        }}
      />

      <StructuredData type="faq" data={FAQS} />

      <StructuredData
        type="breadcrumb"
        data={[
          { name: 'Home', url: 'https://www.avalanchecreations.co.ke/' },
          { name: 'Services', url: 'https://www.avalanchecreations.co.ke/services' },
          { name: 'Custom Furniture', url: 'https://www.avalanchecreations.co.ke/services/custom-furniture' },
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
            src="https://ykndyjgvochvehwimhhq.supabase.co/storage/v1/object/public/Website%20Assests/banner-images/custom-furniture-design-kenya-interiors.jpg"
            alt="Custom Furniture Design"
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
                  Custom Furniture Kenya
                </h1>
                <p className="text-lg md:text-xl text-brown-700 mb-6">
                  Custom furniture design gives you pieces that don't just look good, they fit. Perfectly. Into your layout, your lifestyle, and the way you use your space. It's for moments when nothing off the shelf quite works, or when you want to create something that feels truly yours.
                </p>
                <p className="text-lg md:text-xl text-brown-700 mb-6">
                  Whether you're designing an entire space or looking for a single statement piece, custom furniture solves layout limitations, awkward gaps, and specific functional needs. It brings together form and function, creating pieces that feel intentional rather than added on.
                </p>
                <p className="text-lg md:text-xl text-brown-700 mb-6">
                  Our process begins by understanding your space, vision, and use-case. From there, we sketch and spec each piece with purpose. We guide decisions around finishes, upholstery, proportions, and built-in functionality, then coordinate with trusted makers to bring the design to life with precision and care.
                </p>
                <p className="text-lg md:text-xl text-brown-700 mb-6">
                  No compromises. Just furniture designed to belong exactly where it lives.
                </p>
                <p className="text-lg md:text-xl text-brown-700 font-medium">
                  If you can imagine it, we can design it.
                </p>
              </motion.div>

              <div className="space-y-16">
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
                        Is custom furniture comfortable as well as beautiful?
                      </h3>
                      <p className="text-brown-700">
                        Absolutely. We believe well-designed furniture should feel as good as it looks. Every custom piece is designed for real-life use, prioritizing comfort, support, and ergonomics alongside aesthetics.
                      </p>
                    </div>

                    <div className="pb-8 border-b border-brown-200">
                      <h3 className="text-xl font-serif text-brown-900 mb-4">
                        Will custom furniture fit my space properly?
                      </h3>
                      <p className="text-brown-700">
                        Yes. Custom furniture is designed around the exact dimensions of your room, your layout, and how the piece will interact with its surroundings. Where needed, we assess the space directly to ensure proportions, clearances, and functionality are thoughtfully considered.
                      </p>
                    </div>

                    <div className="pb-8 border-b border-brown-200">
                      <h3 className="text-xl font-serif text-brown-900 mb-4">
                        What if I'm not sure what kind of furniture I want?
                      </h3>
                      <p className="text-brown-700">
                        That's completely fine. Part of our role is to help you clarify your vision. We guide you through style direction, explore references, and curate options for forms, materials, and finishes that align with your space and lifestyle.
                      </p>
                    </div>

                    <div className="pb-8 border-b border-brown-200">
                      <h3 className="text-xl font-serif text-brown-900 mb-4">
                        What material and fabric options are available?
                      </h3>
                      <p className="text-brown-700">
                        We work with a carefully selected range of fabrics, leathers, woods, and finishes. Whether your preference leans timeless and understated or bold and expressive, we help you choose materials that suit both the design intent and everyday use.
                      </p>
                    </div>

                    <div className="pb-8 border-b border-brown-200">
                      <h3 className="text-xl font-serif text-brown-900 mb-4">
                        Can I trust the quality of custom furniture?
                      </h3>
                      <p className="text-brown-700">
                        Yes. Each piece is crafted by skilled artisans using quality materials and precise construction techniques. From joinery to stitching, attention is given to durability, finish, and longevity so the furniture continues to perform and age beautifully over time.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-serif text-brown-900 mb-4">
                        Is custom furniture only for large projects?
                      </h3>
                      <p className="text-brown-700">
                        Not at all. Custom furniture can be designed for a single feature piece or as part of a full interior project. The scope depends on your needs, space, and vision.
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
                    Ready to Bring Your Vision to Life?
                  </h2>
                  <p className="text-lg text-brown-700 mb-8">
                    Custom furniture allows your space to work better, feel more personal, and reflect how you truly live. Each piece is designed with intention, scale, and longevity in mind.
                  </p>
                  <Link
                    to="/quote"
                    className="btn btn-primary inline-flex items-center"
                  >
                    Design Custom Pieces
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

export default CustomFurniturePage;
