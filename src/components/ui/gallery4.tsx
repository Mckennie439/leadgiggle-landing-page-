import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { type CarouselApi, Carousel, CarouselContent, CarouselItem } from './carousel';

export interface Gallery4Item {
  id: string;
  title: string;
  description: string;
  slug: string;
  image: string;
}

export interface Gallery4Props {
  items: Gallery4Item[];
}

const Gallery4 = ({ items }: Gallery4Props) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!carouselApi) return;
    const update = () => {
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };
    update();
    carouselApi.on('select', update);
    carouselApi.on('reInit', update);
    return () => {
      carouselApi.off('select', update);
      carouselApi.off('reInit', update);
    };
  }, [carouselApi]);

  return (
    <div>
      <Carousel
        setApi={setCarouselApi}
        opts={{ align: 'start', containScroll: 'trimSnaps' }}
      >
        <CarouselContent className="ml-0 pl-4 md:pl-8 lg:pl-16">
          {items.map((item) => (
            <CarouselItem
              key={item.id}
              className="basis-[82vw] sm:basis-[340px] lg:basis-[380px] pl-4"
            >
              <Link
                to={`/portfolio/${item.slug}`}
                className="group block relative overflow-hidden focus:outline-none"
                style={{ height: 'clamp(380px, 58vw, 520px)' }}
              >
                {/* Full-bleed image */}
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />

                {/* Dark gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to top, rgba(20,8,3,0.9) 0%, rgba(20,8,3,0.3) 50%, rgba(20,8,3,0.05) 80%)',
                    transition: 'opacity 400ms ease',
                  }}
                />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-7">
                  <p
                    style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      color: '#FFFFFF',
                      fontSize: '1.2rem',
                      fontWeight: 600,
                      lineHeight: 1.3,
                      marginBottom: 8,
                    }}
                  >
                    {item.title}
                  </p>
                  <p
                    className="line-clamp-2"
                    style={{
                      color: 'rgba(255,255,255,0.7)',
                      fontSize: '0.78rem',
                      lineHeight: 1.65,
                      marginBottom: 16,
                    }}
                  >
                    {item.description}
                  </p>
                  <span
                    className="inline-flex items-center gap-1.5"
                    style={{
                      color: '#F5D9C0',
                      fontSize: '0.7rem',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      fontWeight: 600,
                    }}
                  >
                    Learn More{' '}
                    <ArrowRight
                      className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5"
                    />
                  </span>
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Dot indicators */}
      <div className="flex items-center justify-center gap-2 mt-8 px-4">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => carouselApi?.scrollTo(i)}
            aria-label={`Go to project ${i + 1}`}
            className="transition-all duration-500"
            style={{
              height: 3,
              width: currentSlide === i ? 28 : 10,
              borderRadius: 2,
              backgroundColor: currentSlide === i ? '#C8A882' : 'rgba(200,168,130,0.25)',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export { Gallery4 };
