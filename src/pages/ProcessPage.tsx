import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEOOptimizer from '../components/common/SEOOptimizer';
import {
  MessageCircle,
  Search,
  Lightbulb,
  Presentation as PresentationChart,
  ShoppingCart,
  Palette,
  Star,
  Check,
} from 'lucide-react';
import StructuredData from '../components/common/StructuredData';

interface ProcessStep {
  icon: React.ReactNode;
  number: string;
  title: string;
  description: string;
}

const processSteps: ProcessStep[] = [
  {
    number: '01',
    icon: <MessageCircle className="h-12 w-12 text-brown-600" />,
    title: 'Discovery & Consultation',
    description:
      'We begin with a conversation, virtual or in person, focused on understanding your space, routines, priorities, and long-term goals. This stage is about listening, not proposing solutions, so the design responds to how you actually live or work.',
  },
  {
    number: '02',
    icon: <Search className="h-12 w-12 text-brown-600" />,
    title: 'Review & Analysis',
    description:
      'Your space is carefully assessed through measurements, photographs, and spatial analysis. We evaluate layout constraints, opportunities, light, and flow, ensuring design decisions are grounded in what the space can realistically support.',
  },
  {
    number: '03',
    icon: <Lightbulb className="h-12 w-12 text-brown-600" />,
    title: 'Concept Development',
    description:
      'Design direction takes shape through mood boards, layout ideas, and material cues. This phase explores possibilities while maintaining alignment with function, budget, and lifestyle, refining the vision before anything is finalized.',
  },
  {
    number: '04',
    icon: <PresentationChart className="h-12 w-12 text-brown-600" />,
    title: 'Design Presentation',
    description:
      'You receive a complete design proposal that brings all elements together: layouts, finishes, furniture, lighting, and key details. Seeing the full picture upfront allows for confident decisions before procurement or construction begins.',
  },
  {
    number: '05',
    icon: <ShoppingCart className="h-12 w-12 text-brown-600" />,
    title: 'Procurement & Execution',
    description:
      'We coordinate sourcing, manage timelines, and oversee installation to ensure the design is executed as intended. This stage is about precision, translating plans into reality with minimal disruption and close attention to detail.',
  },
  {
    number: '06',
    icon: <Palette className="h-12 w-12 text-brown-600" />,
    title: 'Styling & Final Touches',
    description:
      'The final layer brings cohesion to the space. Accessories, lighting adjustments, and finishing details are added thoughtfully to ensure the interior feels balanced, lived-in, and complete.',
  },
  {
    number: '07',
    icon: <Star className="h-12 w-12 text-brown-600" />,
    title: 'Reveal & Ongoing Support',
    description:
      'We walk you through the finished space and remain available for adjustments or questions. Completion isn\u2019t an endpoint, support is part of the process.',
  },
];

const philosophyPoints: string[] = [
  'Our design philosophy is grounded in the belief that interiors should be timeless rather than trend-led, remaining relevant, functional, and considered long after the initial reveal.',
  'Rather than relying on templates or trend-driven formulas, we evaluate each project based on context, the space itself, the client\u2019s lifestyle or workflow, and the functional demands of everyday use. This ensures every design decision is purposeful, not decorative.',
  'We prioritize cohesion over excess. Every element is selected to serve a clear role within the larger design, allowing spaces to feel resolved rather than overdesigned. This approach reduces visual noise and supports interiors that age gracefully over time.',
  'Practical use is considered at every stage. Layouts, materials, and finishes are assessed not only for aesthetic impact, but for how they perform in real life. Comfort, durability, and ease of use are treated as design requirements, not afterthoughts.',
  'Collaboration is built into the process. Clients are involved at key decision points, allowing alignment and informed feedback before execution. This ensures the final outcome reflects intentional choices rather than assumptions, resulting in spaces that feel cohesive, balanced, and deeply considered.',
];

const processBenefits: string[] = [
  'Clear decision-making at every stage',
  'Fewer surprises during execution',
  'Better coordination between design and installation',
  'Spaces that feel cohesive, functional, and considered, not overdesigned',
];

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'When is the best time to engage an interior designer in Kenya?',
    answer:
      'The ideal time is as early as possible, whether you\u2019re building, renovating, or furnishing. Early involvement allows design decisions to shape layout, flow, and budgets more effectively. This reduces costly revisions later and ensures the space is planned holistically from the start.',
  },
  {
    question: 'How involved will I be during the design process?',
    answer:
      'The process is collaborative, but not overwhelming. You\u2019re involved at key decision points such as concept approval, materials selection, and final sign-off. We handle the coordination and details while keeping you informed and confident at every stage.',
  },
  {
    question: 'How long does a typical interior design project take?',
    answer:
      'Timelines vary depending on project scope, size, and level of customization. Full design projects often take several months from concept to completion, while furnishing-only projects may move faster. Clear timelines are established early and refined as the project progresses.',
  },
  {
    question: 'How do you manage budgets during the design process?',
    answer:
      'Budgets are discussed upfront and treated as a design framework, not an afterthought. We design within defined parameters, recommend options at different price points, and help prioritise where to invest. This ensures decisions remain informed and aligned throughout the project.',
  },
  {
    question: 'Can you work with my existing contractor or team?',
    answer:
      'Yes. We regularly collaborate with architects, contractors, and other consultants. Clear communication and defined roles allow the design intent to be executed accurately, while maintaining a smooth and coordinated workflow across all teams involved.',
  },
  {
    question: 'Is the process flexible for partial projects or specific rooms?',
    answer:
      'The process is adaptable. Whether you\u2019re furnishing a single space or completing a full home, each step is scaled to suit the project. This ensures the same level of thought, clarity, and attention regardless of size.',
  },
  {
    question: 'What happens once the project is completed?',
    answer:
      'After completion, we conduct a final walkthrough to ensure everything aligns with the approved design. Any necessary adjustments are addressed, and guidance is provided on care and use of the space. Our involvement doesn\u2019t end abruptly; we remain available for follow-up support.',
  },
  {
    question: 'What makes your interior design process different?',
    answer:
      'Our process balances creativity with structure. Design decisions are guided by how clients live and use their spaces, not trends alone. This approach results in interiors that feel considered, functional, and timeless long after completion.',
  },
];

const ProcessPage: React.FC = () => {
  return (
    <>
      <SEOOptimizer
        title="The 7-Step Interior Design Process Kenya | Avalanche Creations"
        description="Discover our 7-step interior design process in Kenya — a calm, collaborative journey from discovery to reveal, designed to bring clarity, confidence, and beautifully resolved spaces."
        keywords="interior design process Kenya, how interior design works, interior design steps Nairobi, design consultation Kenya, interior design journey"
        type="website"
        image="https://ykndyjgvochvehwimhhq.supabase.co/storage/v1/object/public/Website%20Assests/banner-images/the-7-step-interior-design-process-avalance-creations.jpg"
      />

      <StructuredData
        type="faq"
        data={faqs.map((faq) => ({ question: faq.question, answer: faq.answer }))}
      />

      <StructuredData
        type="breadcrumb"
        data={[
          { name: 'Home', url: 'https://www.avalanchecreations.co.ke/' },
          { name: 'Our Process', url: 'https://www.avalanchecreations.co.ke/process' },
        ]}
      />

      <StructuredData
        type="webpage"
        data={{
          name: 'The 7-Step Interior Design Process | Avalanche Creations',
          description: 'Discover our 7-step interior design process in Kenya — a calm, collaborative journey from discovery to reveal, designed to bring clarity and beautifully resolved spaces.',
          url: 'https://www.avalanchecreations.co.ke/process',
          breadcrumb: [
            { name: 'Home', url: 'https://www.avalanchecreations.co.ke/' },
            { name: 'Our Process', url: 'https://www.avalanchecreations.co.ke/process' },
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
        <div className="w-full h-[300px] relative overflow-hidden z-10 md:hidden">
          <img
            src="https://ykndyjgvochvehwimhhq.supabase.co/storage/v1/object/public/Website%20Assests/banner-images/the-7-step-interior-design-process-avalance-creations.jpg"
            alt="The 7-step interior design process by Avalanche Creations"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brown-900/10 to-brown-900/5"></div>
        </div>

        {/* Desktop / Tablet: two-column hero */}
        <div className="hidden md:grid md:grid-cols-2 md:gap-12 lg:gap-16 relative z-10 md:h-[460px] lg:h-[520px] md:px-4 lg:px-16">
          {/* Left — Image */}
          <div className="relative overflow-hidden">
            <img
              src="https://ykndyjgvochvehwimhhq.supabase.co/storage/v1/object/public/Website%20Assests/banner-images/the-7-step-interior-design-process-avalance-creations.jpg"
              alt="The 7-step interior design process by Avalanche Creations"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          {/* Right — Intro copy, CTA pinned to bottom */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between py-12 lg:py-14"
          >
            <div>
              <h1 className="text-3xl lg:text-4xl font-serif text-brown-900 mb-3">
                Process
              </h1>
              <h2 className="text-xl lg:text-2xl font-serif text-brown-900 mb-5">
                The 7-Step Interior Design Process Kenya
              </h2>
              <div className="text-sm lg:text-base leading-relaxed text-brown-700 space-y-3">
                <p>A clear, collaborative journey, designed around you.</p>
                <p>
                  Our process is built to remove uncertainty and replace it with clarity. From the first conversation to final styling, we guide you through each stage of the interior design journey with structure, transparency, and care — ensuring your ideas are translated into spaces that feel cohesive, intentional, and fully resolved.
                </p>
              </div>
            </div>
            <Link
              to="/quote"
              className="btn btn-primary inline-flex items-center self-start"
              style={{ fontSize: '14px', padding: '10px 20px' }}
            >
              Start the Conversation
            </Link>
          </motion.div>
        </div>

        <div className="container mx-auto px-4 py-16 md:py-20 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Hero text — mobile only (desktop uses two-column hero above) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-16 md:hidden"
            >
              <h2 className="text-4xl font-serif text-brown-900 mb-6">
                Process
              </h2>
              <h3 className="text-3xl font-serif text-brown-900 mb-6">
                The 7-Step Interior Design Process Kenya
              </h3>
              <p className="text-lg text-brown-700 mb-4">
                A clear, collaborative journey, designed around you.
              </p>
              <p className="text-lg text-brown-700 mb-8">
                Our process is built to remove uncertainty and replace it with clarity. From the first conversation to final styling, we guide you through each stage of the interior design journey with structure, transparency, and care. By blending creative direction with thoughtful project management, we ensure your ideas are translated into spaces that feel cohesive, intentional, and fully resolved &mdash; without stress or second-guessing.
              </p>
              <Link
                to="/quote"
                className="btn btn-primary inline-flex items-center"
                style={{ fontSize: '14px', padding: '8px 18px' }}
              >
                Start the Conversation
              </Link>
            </motion.div>

            {/* Our Design Philosophy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-20"
            >
              <h2 className="text-2xl md:text-3xl font-serif text-brown-900 mb-8">
                Our Design Philosophy
              </h2>
              <div className="space-y-6">
                {philosophyPoints.map((point, index) => (
                  <p key={index} className="text-brown-700 leading-relaxed">
                    {point}
                  </p>
                ))}
              </div>
            </motion.div>

            {/* Process Steps Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-serif text-brown-900 mb-6">
                From Vision to Reality: Inside Our Interior Design Process Kenya
              </h2>
              <p className="text-lg text-brown-700">
                Every project follows a clear sequence, designed to guide decisions early and reduce uncertainty later. Each stage builds on the last, allowing ideas to be refined, tested, and resolved before execution begins.
              </p>
            </motion.div>

            {/* Process Steps */}
            <div className="space-y-12 md:space-y-16">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12"
                >
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="w-20 h-20 bg-beige-100 rounded-full flex items-center justify-center relative">
                        {step.icon}
                        <span className="absolute -top-2 -right-2 w-7 h-7 bg-brown-600 text-offWhite text-xs font-sans font-semibold rounded-full flex items-center justify-center">
                          {step.number}
                        </span>
                      </div>
                      {index < processSteps.length - 1 && (
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 hidden md:block mt-4">
                          <div className="w-0.5 h-12 bg-brown-200"></div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex-grow md:pl-8">
                    <h3 className="text-xl md:text-2xl font-serif text-brown-800 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-brown-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Why This Process Works */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-20"
            >
              <h2 className="text-2xl md:text-3xl font-serif text-brown-900 mb-6">
                Why This Process Works
              </h2>
              <p className="text-brown-700 leading-relaxed mb-6">
                This process is designed to prevent rushed decisions, costly revisions, and disconnected outcomes. By resolving layouts, materials, and intent early, execution becomes calm and predictable rather than reactive.
              </p>
              <p className="text-lg font-serif text-brown-800 mb-4">
                Clients benefit from:
              </p>
              <ul className="space-y-3 mb-6">
                {processBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-brown-600 flex-shrink-0 mt-0.5" />
                    <span className="text-brown-700">{benefit}</span>
                  </li>
                ))}
              </ul>
              <p className="text-brown-700 leading-relaxed">
                Most importantly, the process creates confidence. You know what's happening, why decisions are made, and how each choice contributes to the final result.
              </p>
            </motion.div>

            {/* FAQ Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-20"
            >
              <h2 className="text-2xl md:text-3xl font-serif text-brown-900 mb-8">
                Frequently Asked Questions
              </h2>
              <div className="space-y-8">
                {faqs.map((faq, index) => (
                  <div key={index} className="pb-8 border-b border-brown-200 last:border-b-0 last:pb-0">
                    <h3 className="text-xl font-serif text-brown-900 mb-4">
                      <span className="text-brown-600 mr-2">{index + 1}.</span>
                      {faq.question}
                    </h3>
                    <p className="text-brown-700">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-20"
            >
              <h2 className="text-2xl md:text-3xl font-serif text-brown-900 mb-6">
                Ready to bring your vision to life?
              </h2>
              <p className="text-lg text-brown-700 mb-8">
                Our interior design process is designed to remove uncertainty, guide decisions, and bring clarity from the very first conversation. Whether you're building, renovating, or furnishing, we help you move forward with confidence and intention.
              </p>
              <Link
                to="/quote"
                className="btn btn-primary inline-flex items-center"
              >
                Start the Conversation
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ProcessPage;
