// Centralized service pages data
export interface ServicePage {
  title: string;
  slug: string;
  description: string;
  image?: string;
}

export const servicePages: ServicePage[] = [
  {
    title: 'Full Design Services',
    slug: 'full-design-services-kenya',
    description: 'Comprehensive interior design services in Nairobi and across Kenya, tailored for both residential and commercial spaces. From architectural review to final styling, we oversee every design phase with precision and purpose, creating interiors that balance function, comfort, and aesthetic harmony.',
    image: 'https://ykndyjgvochvehwimhhq.supabase.co/storage/v1/object/public/Website%20Assests/banner-images/full-service-interior-design-kenya.jpg'
  },
  {
    title: 'Home Renovations',
    slug: 'renovations',
    description: 'Breathe new life into your home with professional renovation services in Kenya. Whether it’s a single-room upgrade or a full-home transformation, we modernize outdated spaces with practical layouts, refined finishes, and contemporary style that reflects how you live today.',
    image: 'https://ykndyjgvochvehwimhhq.supabase.co/storage/v1/object/public/Website%20Assests/banner-images/home-renovation-interior-design-nairobi-kenya.jpg'
  },
  {
    title: 'Home Furnishing',
    slug: 'furnishing',
    description: 'Thoughtfully curated home furnishing services in Nairobi, Kenya, designed to bring balance, comfort, and character to every room. From furniture and fabrics to lighting, artwork, and accessories, we create spaces that feel personal, timeless, and completely yours.',
    image: 'https://ykndyjgvochvehwimhhq.supabase.co/storage/v1/object/public/Website%20Assests/banner-images/home-furnishing-and-styling-nairobi-kenya.jpg'
  },
  {
    title: 'Virtual Interior Design',
    slug: 'virtual-design',
    description: 'Experience your dream space before it’s built with our virtual interior design services in Kenya. Using advanced e-design tools and photorealistic 3D visualizations, we help you explore layouts, finishes, and styles remotely,  perfect for homeowners and developers across Nairobi and beyond.',
    image: 'https://ykndyjgvochvehwimhhq.supabase.co/storage/v1/object/public/Website%20Assests/banner-images/virtual-interior-design-services-nairobi-kenya.jpg'
  },
  {
    title: 'Custom Furniture',
    slug: 'custom-furniture',
    description: 'We create custom furniture in Kenya, crafted to fit your exact space, style, and lifestyle. Every piece is designed from scratch, no templates, no off-the-shelf shortcuts,  just bespoke craftsmanship that blends design innovation with timeless quality.',
    image: 'https://ykndyjgvochvehwimhhq.supabase.co/storage/v1/object/public/Website%20Assests/banner-images/custom-furniture-design-kenya-interiors.jpg'
  }
];