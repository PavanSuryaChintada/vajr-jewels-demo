import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const images = [
  { src: "/hs-1.png", label: "Brilliant Cuts" },
  { src: "/col-diamond.png", label: "Timeless Elegance" },
  { src: "/story.png", label: "Master Craftsmanship" },
  { src: "/col-emerald.png", label: "Royal Emeralds" },
  { src: "/col-signature.png", label: "Signature Pieces" }
];

export default function HorizontalScrollGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray(".gallery-item");
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          end: () => "+=" + (galleryRef.current?.offsetWidth || 0)
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="h-screen w-full overflow-hidden bg-background relative" id="gallery">
      <div className="absolute top-12 left-6 md:left-12 z-10 mix-blend-difference">
        <h2 className="text-4xl md:text-6xl font-serif text-white tracking-widest uppercase">The Vault</h2>
      </div>
      
      <div ref={galleryRef} className="flex h-full w-[500vw] md:w-[300vw]">
        {images.map((img, index) => (
          <div key={index} className="gallery-item w-screen h-full flex-shrink-0 relative">
            <img src={img.src} alt={img.label} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h3 className="text-4xl md:text-7xl font-serif text-white opacity-80 tracking-widest uppercase parallax-text" data-speed="0.5">
                {img.label}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
