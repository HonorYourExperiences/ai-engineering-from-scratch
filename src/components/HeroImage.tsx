import type { HeroImageData } from '../types';

interface HeroImageProps {
  image: HeroImageData;
}

export function HeroImage({ image }: HeroImageProps) {
  return (
    <section className="hero-image" aria-label="Replaceable hero image layer">
      <img src={image.src} alt={image.alt} />
    </section>
  );
}
