import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Calendar } from 'lucide-react';
import Lightbox from '../components/common/Lightbox';
import ShareButton from '../components/common/ShareButton';
import SEOOptimizer from '../components/common/SEOOptimizer';
import StructuredData from '../components/common/StructuredData';
import { portfolioProjects } from '../data/portfolioProjects';

interface Project {
  id: string;
  title: string;
  location: string;
  category: string;
  image: string;
  heroImages: string[];
  images: string[];
  fullDescription: string;
  datePosted: string;
}

const projectDescriptions: Record<string, string> = {
  'kahawa-west': `From concept to the final detail, this project was about more than decorating, it was about creating a home that feels lived-in, layered, and entirely personal. Every decision, from the custom furniture to the curated accessories, was made with the client's lifestyle in mind. Rich, dark tones like walnut and charcoal grounded the spaces with elegance, while vibrant orange and earthy brown accents added warmth and energy without overwhelming the calm.

Soft, neutral walls offered a versatile backdrop, allowing each room to speak its language while still feeling part of a unified whole. Clean silhouettes, plush textures, and handcrafted finishes created a quiet rhythm throughout, one that invites you in and encourages you to stay. Lighting played a central role, not only illuminating each space but also adding a sense of softness and intention. Lamps, rather than overheads, became mood-setters, casting a gentle glow across carefully styled surfaces.

Even smaller details weren't left to chance. A simple drop zone was tucked into the corridor, reimagining the entryway with both function and future flexibility in mind. Every corner feels considered, from the intimate dining table that welcomes conversation, to the restful bedroom designed like a deep exhale. This home doesn't just look complete, it feels like it was always meant to be this way. Warm, grounded, and quietly refined.`,

  'ciata-mall': `This corporate office design for Prime Land Developers showcases how thoughtful planning can transform a compact workspace into a sophisticated, highly functional environment. The project required balancing the firm's need for professional presentation with practical daily operations, all within a limited footprint at Ciata Mall.

The design strategy centered on creating distinct zones that flow seamlessly together. The reception area welcomes clients with clean lines and professional finishes, while the conference room provides an impressive backdrop for important meetings. Custom storage solutions maximize every square foot, ensuring the space remains organized and clutter-free.

Material selection played a crucial role in establishing the firm's professional identity. We chose a palette of warm neutrals with strategic accent colors that reflect the company's connection to land and development. Custom furniture pieces were designed specifically for the space, ensuring perfect fit and optimal functionality.

Lighting design enhances both the aesthetic appeal and practical usability of the space. A combination of ambient and task lighting creates the right atmosphere for different activities, from client consultations to detailed project work. The result is a workspace that not only looks impressive but actively supports the team's productivity and success.`,

  'rongai-remodel': `This comprehensive home renovation in Rongai transformed a traditional residence into a sophisticated, contemporary living space while preserving its inherent character. The project required a delicate balance between honoring the home's original architecture and introducing modern amenities and design sensibilities.

The renovation began with a complete reimagining of the floor plan to improve flow and functionality. We opened up key areas to create better sight lines and natural light penetration throughout the home. The kitchen became the heart of the transformation, featuring custom cabinetry, premium countertops, and a thoughtfully designed island that serves as both workspace and gathering point.

Material selection focused on timeless elegance with contemporary touches. Rich hardwood flooring flows throughout the main living areas, while carefully chosen tile work adds texture and visual interest in key spaces. The fireplace received special attention, becoming a stunning focal point that anchors the living room with both warmth and style.

Custom millwork and built-in storage solutions maximize functionality while maintaining clean, uncluttered lines. Lighting design plays a crucial role, with a combination of architectural lighting and carefully selected fixtures creating ambiance and highlighting the home's best features. The result is a space that feels both timeless and thoroughly modern, perfectly suited to contemporary family life.`,

  'kitengela-townhouse': `We designed a townhouse that would appeal to a broad range of potential buyers or renters, balancing clean style with functional living. To create a versatile foundation, we used crisp white walls that provide a neutral backdrop, easy to blend with any personal style, or repaint when needed. In the living and dining areas, we introduced modern light fixtures to elevate the overall ambiance without overwhelming the space. For the kitchen, we selected warm neutral cabinetry and contrasted it with dark countertops to achieve a sleek, modern feel. A fall pantry was included to maximize storage in the compact layout, and a double sink, essential for everyday practicality, was thoughtfully integrated. This home is integrated to feel effortlessly stylish while remaining adaptable and highly livable.`,

  'contemporary-store': `This contemporary retail space demonstrates how thoughtful design can transform a functional electrical shop into an engaging, modern shopping environment. The project required balancing practical retail needs with aesthetic appeal, creating a space that serves both customers and staff efficiently.

The design strategy focused on clean zoning and intuitive navigation. Product display areas are clearly defined while maintaining visual flow throughout the space. Custom shelving and display systems maximize product visibility while keeping the overall aesthetic clean and uncluttered.

Material selection emphasizes durability and easy maintenance without sacrificing style. Matte finishes and neutral tones create a sophisticated backdrop that allows products to take center stage. Strategic use of accent colors and textures adds visual interest and helps guide customer movement through the space.

Lighting design plays a crucial role in both functionality and ambiance. A combination of general illumination and focused product lighting ensures optimal visibility while creating an inviting atmosphere. The checkout area receives special attention, designed for efficiency while maintaining the overall design aesthetic. The result is a retail environment that feels both professional and welcoming, encouraging customers to explore and engage with the products.`,

  'wellness-centre': `A Calming Approach to Care, Wellness Centre Design. This wellness centre design was a unique opportunity to reimagine a clinical space through the lens of warmth, calm, and intentional design. Our brief was to create a functional yet inviting environment that would support both staff workflow and patient comfort, a delicate balance we achieved by layering thoughtful layouts with carefully curated color palettes and bespoke detailing throughout.

The project included several key zones: a welcoming reception area, a comfortable waiting space, a fully functional pharmacy, a triage space, three private clinic rooms, a compact kitchen for staff use, and a well-organized storage room. Each space was designed to serve a specific need while contributing to the overall flow and cohesiveness of the center.

To bring a sense of serenity to the wellness experience, we worked with a soft, complementary palette of dusty rose and sage green hues chosen for their gentle, grounding quality. These colors were used in subtle ways across finishes, upholstery, and accent features, creating a tranquil atmosphere that puts both patients and staff at ease.

Custom cabinetry and built-ins were incorporated to enhance efficiency and reduce visual clutter, while modern yet understated lightning was layered throughout to provide both functionality and ambiance. The reception and waiting areas were designed to feel open and approachable, with comfortable seating, curved edges, and warm textures that soften the clinical setting.`,

  'kindaruma-homes': `Our client approached us with a ready-built apartment, lighting in place, walls up, and a clean slate to work with. The brief was simple: inject warmth, colour, and character, all within a budget of less than 1 million. The result? A modern, inviting Airbnb designed to feel like home for every guest.

We worked with a palette anchored in off-white, balanced with black as a grounding tone, and layered with burnt orange and deep blue accents to add personality and depth.

In the living room, we created a strong focal point with a fluted TV wall and a floating console that visually expands the compact space. A custom-designed 3-seater sofa paired with a bold burnt orange accent chair set the tone for comfort and style. A round fluted coffee table echoed the TV wall's detail, and carefully chosen minimalist artwork kept the look modern yet uncluttered.

The dining area grew naturally from the existing island. Instead of crowding the space, we opted for two sleek black bar stools with gold legs. This subtle choice elevated the design while keeping the layout open and functional, ideal for Airbnb living.

In the main bedroom, we mounted a wall-to-wall headboard behind a 5x6 box bed, giving the space a sense of luxury without being overdesigned. Cream curtains softened the walls, while a rug with blue undertones anchored the room and tied the colour story together.

The study bedroom was designed to be practical yet welcoming. We managed to fit in a 4x6 box bed alongside a compact study area, making it versatile for both rest and productivity. Styled with greys and blues, and grounded by a soft off-white carpet, the space feels calm, functional, and comfortable for longer stays.

Throughout the apartment, accessories were kept minimal, just enough to feel thoughtful, but neutral enough to appeal to a broad range of guests. The result is a home that's stylish, functional, and easy to fall in love with, whether for a short visit or an extended stay.`,

  'karen-wellness-lounge': `The client loved the first space we designed. Then she trusted us with a second. When it came time to create her third wellness centre, she knew exactly who to call.

Located in Karen, this project was designed around a simple objective: creating a reception that immediately communicates calm, comfort, and confidence. As the first point of contact for every visitor, the space needed to feel warm, welcoming, and aligned with the centre's commitment to wellness.

A palette of light wood flooring, soft ambient lighting, earthy furnishings, natural greenery, and carefully selected artwork works together to create a relaxed atmosphere without feeling clinical. Every element was considered not only for its visual appeal but also for how it contributes to the overall experience of the people using the space.

From the furniture layout and circulation to the lighting and finishing details, the design encourages visitors to slow down, settle in, and feel at ease from the moment they arrive.

The result is a reception that does more than welcome guests, it quietly sets the tone for the care and experience that follows.`,

  'thome-garden-estate-bathroom': `Bathroom Renovation: A Boutique Sanctuary Reimagined

Some spaces carry more potential than their original design ever intended. This bathroom was one of them. What began as a cramped, dated room with conventional fixtures and minimal storage has been completely reimagined into a light-filled retreat that balances everyday practicality with boutique-hotel refinement.

The brief was clear: make the space feel larger, work harder, and look effortlessly elegant. The conventional bathtub was removed in favour of a generous walk-in shower enclosed by a frameless glass partition, instantly opening the floor plan and anchoring a cleaner, more contemporary aesthetic.

A custom-designed vanity integrates discreet storage throughout, eliminating visual clutter without sacrificing function. Statement mirrors and wall-mounted sconces define a sophisticated focal point, while brushed gold fittings introduce warmth and a quiet sense of luxury across every surface.

Bespoke shelving completes the scheme, offering both practical storage and deliberate space for styling. Every material, from the wall and floor tiles to the joinery finishes, was selected to work cohesively, creating a palette that feels bright, considered, and timeless.

The result is a space that feels noticeably larger, measurably more functional, and entirely transformed. A daily routine, elevated.

Project Scope: Full Bathroom Renovation & Interior Fit-Out

Services: Concept Design · Space Planning · Material Selection · Custom Joinery · Fixture Specification · Procurement & Installation Supervision

"A successful renovation is not just about changing finishes, it's about reimagining how a space can better serve the people who use it every day."`,

  'kikuyu': `A Room Reborn with Warmth & Character

Some spaces hold so much potential, you just need to peel back the layers to let their true beauty shine. When we first stepped into this living room, it carried a playful mix of grey, yellow, and green against peach walls. It was cheerful, yes, but our clients dreamed of something more timeless and intimate; a room that felt soft, warm, and welcoming.

We began by changing the paint colour from peach to Soft Intimate White by Crown, instantly creating a brighter, more serene canvas. The existing sofa was lovingly reupholstered in an off-white textured fabric, giving it a fresh lease of life while keeping the classic shape the family loved. We designed custom pillow covers in warm rusts and soft patterns to add depth and a personal touch, and dressed the windows in elegant new curtains, airy sheers layered with flowing drapery that frame the light and add graceful movement to the room.

A cozy dining area now flows seamlessly into the living space, perfect for everyday meals or slow Sunday mornings. On the floor, a rich brown Persian carpet grounds the room with warmth and a sense of history. The walls were brought to life with thoughtfully selected artwork and elegant picture lights, while a sculptural chandelier now floats overhead, casting a gentle glow in the evenings. Fresh flowers and curated accessories complete the transformation, bringing vibrancy and a lived-in charm to every corner.

This is more than a makeover, it's a reflection of our clients' love for home and the little moments that make it special. What was once a cool, mismatched space is now a sanctuary of calm and character; a room that invites you to linger, laugh, and create memories for years to come.`
};

const ProjectDetailPage: React.FC = () => {
  const { projectSlug } = useParams<{ projectSlug: string }>();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

  const getProjectData = (slug: string): Project | null => {
    const portfolioProject = portfolioProjects.find(p => p.slug === slug);

    if (!portfolioProject || !portfolioProject.gallery) {
      return null;
    }

    const gallery = portfolioProject.gallery;
    const heroImages = gallery.slice(0, 6);

    return {
      id: portfolioProject.slug,
      title: portfolioProject.title,
      location: portfolioProject.location,
      category: portfolioProject.category,
      image: portfolioProject.image,
      heroImages: heroImages,
      images: gallery,
      fullDescription: projectDescriptions[slug] || portfolioProject.description,
      datePosted: portfolioProject.datePosted
    };
  };

  const project = getProjectData(projectSlug || '');

  // Hero image carousel effect
  useEffect(() => {
    if (!project || project.heroImages.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % project.heroImages.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-serif text-brown-900 mb-4">Project Not Found</h1>
          <Link to="/portfolio" className="btn btn-primary">
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  const openLightbox = (imageIndex: number) => {
    setCurrentImageIndex(imageIndex);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImageIndex(0);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => 
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <>
      <SEOOptimizer
        title={`${project.title} - ${project.location} | Avalanche Creations Portfolio`}
        description={project.fullDescription.substring(0, 160)}
        keywords={`${project.title}, ${project.location} interior design, ${project.category.toLowerCase()} design Kenya, interior design portfolio, Nairobi interior projects`}
        type="article"
        image={`https://www.avalanchecreations.co.ke${project.image}`}
        section="Portfolio"
      />
      
      <StructuredData
        type="project"
        data={{
          title: project.title,
          description: project.fullDescription.substring(0, 200),
          location: project.location,
          category: project.category,
          images: project.images.map(img => `https://www.avalanchecreations.co.ke${img}`),
          url: `https://www.avalanchecreations.co.ke/portfolio/${project.id}`
        }}
      />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hero Section with Enhanced Fade-in Effect and Multiple Images */}
        <div className="relative h-[75vh] overflow-hidden">
          {/* Background Images with Fade Effect */}
          {project.heroImages.map((image, index) => (
            <motion.img
              key={index}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ 
                opacity: currentHeroIndex === index ? 1 : 0,
                scale: currentHeroIndex === index ? 1 : 1.05
              }}
              transition={{ 
                opacity: { duration: 2, ease: "easeInOut" },
                scale: { duration: 2.5, ease: "easeOut" }
              }}
              src={image}
              alt={`${project.title} - Hero ${index + 1}`}
              className="absolute inset-0 w-full h-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
            />
          ))}
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute inset-0 bg-gradient-to-b from-brown-900/05 to-brown-900/10"
          />
          
          {/* Project Title on Middle-Left Side */}
          <div className="absolute top-1/2 left-8 md:left-16 transform -translate-y-1/2">
            <motion.h1
              initial={{ opacity: 0, x: -50, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif text-white font-bold"
              style={{ textShadow: '0 4px 20px rgba(0, 0, 0, 0.5)' }}
            >
              {project.title}
            </motion.h1>
          </div>

          {/* Hero Image Indicators */}
          {project.heroImages.length > 1 && (
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {project.heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentHeroIndex(index)}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    currentHeroIndex === index 
                      ? 'w-8 bg-white' 
                      : 'w-2 bg-white/60 hover:bg-white/80'
                  }`}
                  style={{ boxShadow: '0 2px 6px rgba(0, 0, 0, 0.4)' }}
                  aria-label={`Go to hero image ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        <div className="container mx-auto px-4 py-12">
          {/* Project Name (Left) and Description (Right) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8"
          >
            <div>
              <h2 className="text-2xl md:text-3xl font-serif text-brown-900 font-semibold">
                {project.title}
              </h2>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-serif text-brown-900">
                Description
              </p>
            </div>
          </motion.div>

          {/* Horizontal Line Separator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full h-px bg-brown-200 mb-12"
          />

          {/* Full Width Project Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <div className="prose prose-lg max-w-none">
              {project.fullDescription.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-brown-700 mb-6 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>

          {/* Left Side: Project Details | Right Side: Project Images with Vertical Line */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            {/* Left Side: Enhanced Project Details for Desktop */}
            <div className="space-y-8">
              <div className="flex items-center">
                <MapPin className="h-6 w-6 lg:h-7 lg:w-7 text-brown-600 mr-4" />
                <div>
                  <p className="text-sm lg:text-base text-brown-500 uppercase tracking-wide font-medium">Location</p>
                  <p className="text-lg lg:text-xl text-brown-800 font-semibold">{project.location}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Calendar className="h-6 w-6 lg:h-7 lg:w-7 text-brown-600 mr-4" />
                <div>
                  <p className="text-sm lg:text-base text-brown-500 uppercase tracking-wide font-medium">Date Posted</p>
                  <p className="text-lg lg:text-xl text-brown-800 font-semibold">
                    {new Date(project.datePosted).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
              </div>
              <div>
                <ShareButton
                  url={`https://www.avalanchecreations.co.ke/portfolio/${projectSlug}`}
                  title={project.title}
                  description={`Check out this ${project.category} project in ${project.location} by Avalanche Creations`}
                />
              </div>
              <div>
                <p className="text-sm lg:text-base text-brown-500 uppercase tracking-wide mb-3 font-medium">Work with us</p>
                <Link
                  to="/quote"
                  className="text-lg lg:text-xl text-brown-600 hover:text-brown-800 transition-colors border-b-2 border-brown-600 hover:border-brown-800 font-medium"
                >
                  Start Your Project
                </Link>
              </div>
            </div>

            {/* Vertical Line Separator */}
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-brown-200 hidden lg:block"></div>
              
              {/* Right Side: Project Images - Responsive Grid Layout */}
              <div className="lg:pl-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {project.images.map((image, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="group cursor-pointer"
                      onClick={() => openLightbox(index)}
                    >
                      <div className="aspect-[4/5] overflow-hidden rounded-lg shadow-elegant">
                        <img
                          src={image}
                          alt={`${project.title} - Image ${index + 1}`}
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                          loading="lazy"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <Lightbox
          isOpen={lightboxOpen}
          onClose={closeLightbox}
          images={project.images}
          currentIndex={currentImageIndex}
          onPrevious={goToPrevious}
          onNext={goToNext}
          title={project.title}
        />
      </motion.div>
    </>
  );
};

export default ProjectDetailPage;