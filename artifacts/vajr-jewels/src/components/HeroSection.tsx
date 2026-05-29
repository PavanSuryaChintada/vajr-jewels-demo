import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PARTICLES = Array.from({ length: 36 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 2.5 + 1,
  delay: Math.random() * 10,
  duration: Math.random() * 7 + 8,
}));

/* Each chapter's background image + an object-position to best frame it */
const CHAPTER_IMAGES = [
  { src: null,                          pos: 'center' },   // Ch1 — pure black, diamond draws
  { src: '/story.png',                  pos: 'center 30%' }, // Ch2 — heritage / craftsmanship
  { src: '/hero.png',                   pos: 'center'     }, // Ch3 — diamond necklace centrepiece
  { src: '/vajr-jewels-earrings.png',   pos: 'center 40%' }, // Ch4 — emerald earrings
  { src: '/bridal-hero.png',            pos: 'center'     }, // Ch5 — bridal
];

export default function HeroSection() {
  const containerRef  = useRef<HTMLDivElement>(null);
  const pinRef        = useRef<HTMLDivElement>(null);
  const progressRef   = useRef<HTMLDivElement>(null);
  const diamondRef    = useRef<SVGPathElement>(null);
  const estRef        = useRef<HTMLDivElement>(null);
  const lineLeftRef   = useRef<HTMLDivElement>(null);
  const lineRightRef  = useRef<HTMLDivElement>(null);

  // one ref per chapter image layer
  const img1 = useRef<HTMLDivElement>(null);
  const img2 = useRef<HTMLDivElement>(null);
  const img3 = useRef<HTMLDivElement>(null);
  const img4 = useRef<HTMLDivElement>(null);
  const img5 = useRef<HTMLDivElement>(null);
  const imgRefs = [img1, img2, img3, img4, img5];

  // one ref per chapter text layer
  const ch1 = useRef<HTMLDivElement>(null);
  const ch2 = useRef<HTMLDivElement>(null);
  const ch3 = useRef<HTMLDivElement>(null);
  const ch4 = useRef<HTMLDivElement>(null);
  const ch5 = useRef<HTMLDivElement>(null);
  const chRefs = [ch1, ch2, ch3, ch4, ch5];

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* ── initial states ── */
      imgRefs.forEach(r => gsap.set(r.current, { opacity: 0 }));
      chRefs.forEach(r  => gsap.set(r.current,  { opacity: 0 }));
      gsap.set(lineLeftRef.current,  { scaleX: 0, transformOrigin: 'right center' });
      gsap.set(lineRightRef.current, { scaleX: 0, transformOrigin: 'left center'  });

      if (diamondRef.current) {
        const len = (diamondRef.current as SVGGeometryElement).getTotalLength?.() ?? 260;
        gsap.set(diamondRef.current, { strokeDasharray: len, strokeDashoffset: len });
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          pin: pinRef.current,
          scrub: 1.4,
          start: 'top top',
          end: 'bottom bottom',
          onUpdate: self => {
            if (progressRef.current) gsap.set(progressRef.current, { scaleY: self.progress });
          },
        },
      });

      // ── Chapter 1 · pure black · diamond draws (0–18%) ──────────
      tl.to(ch1.current, { opacity: 1, duration: 0.5 })
        .to(diamondRef.current, { strokeDashoffset: 0, duration: 2.5, ease: 'power1.inOut' }, '<')
        .to(estRef.current,     { opacity: 1, y: 0,   duration: 1   }, '-=0.5')

      // ── Transition → Chapter 2 · story.png (18–36%) ─────────────
        .to(ch1.current,  { opacity: 0,   duration: 0.8 }, '+=0.3')
        .to(img2.current, { opacity: 1,   duration: 1.8, ease: 'power2.inOut' }, '-=0.4')
        .to(ch2.current,  { opacity: 1,   duration: 1   }, '-=0.8')

      // ── Transition → Chapter 3 · hero.png (36–58%) ──────────────
        .to([ch2.current, img2.current], { opacity: 0, duration: 0.8 }, '+=0.6')
        .to(img3.current, { opacity: 1, duration: 1.8, ease: 'power2.inOut' }, '-=0.6')
        .to(ch3.current,  { opacity: 1, duration: 1   }, '-=0.8')

      // ── Transition → Chapter 4 · earrings (58–77%) ──────────────
        .to([ch3.current, img3.current], { opacity: 0, duration: 0.8 }, '+=0.5')
        .to(img4.current, { opacity: 1, duration: 1.8, ease: 'power2.inOut' }, '-=0.6')
        .to([lineLeftRef.current, lineRightRef.current], { scaleX: 1, duration: 1.4, ease: 'power2.out' }, '-=0.5')
        .to(ch4.current,  { opacity: 1, duration: 1 }, '-=1')

      // ── Transition → Chapter 5 · bridal (77–100%) ───────────────
        .to([ch4.current, img4.current], { opacity: 0, duration: 0.8 }, '+=0.4')
        .to([lineLeftRef.current, lineRightRef.current], { scaleX: 0, duration: 0.5 }, '<')
        .to(img5.current, { opacity: 1, duration: 2, ease: 'power2.inOut' }, '-=0.5')
        .to(ch5.current,  { opacity: 1, duration: 1.2 }, '-=0.8');

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative" style={{ height: '500vh' }} data-testid="section-hero">

      {/* ── Pinned viewport ── */}
      <div ref={pinRef} className="relative w-full h-screen overflow-hidden bg-black">

        {/* Floating particles (always visible) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-[1]" aria-hidden>
          {PARTICLES.map(p => (
            <div key={p.id} className="particle-dot" style={{
              left: `${p.x}%`, top: `${p.y}%`,
              width: p.size, height: p.size,
              animationDelay: `${p.delay}s`, animationDuration: `${p.duration}s`,
            }} />
          ))}
        </div>

        {/* ── Image layers (z-[2]) — one per chapter ── */}
        {CHAPTER_IMAGES.map((ch, i) => (
          ch.src ? (
            <div
              key={i}
              ref={imgRefs[i]}
              className="absolute inset-0 z-[2]"
              style={{ willChange: 'opacity' }}
            >
              <img
                src={ch.src}
                alt=""
                className="w-full h-full object-cover"
                style={{ objectPosition: ch.pos }}
              />
              {/* per-image dark overlay */}
              <div className="absolute inset-0 bg-black/55" />
            </div>
          ) : (
            /* Ch1 slot — no image, just let bg-black show */
            <div key={i} ref={imgRefs[i]} className="absolute inset-0 z-[2]" />
          )
        ))}

        {/* Vignette — always on top of images */}
        <div className="absolute inset-0 z-[3] pointer-events-none vignette" />

        {/* Progress bar */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 h-32 w-px bg-white/10 overflow-hidden z-20 hidden md:block">
          <div ref={progressRef} className="absolute top-0 left-0 w-full bg-gold origin-top" style={{ height: '100%' }} />
        </div>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 4, duration: 1 }}
        >
          <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
          <div className="scroll-line" />
        </motion.div>

        {/* ── Chapter 1 · Diamond origin ── */}
        <div ref={ch1} className="story-chapter z-10 flex flex-col items-center justify-center gap-8">
          <svg width="170" height="170" viewBox="0 0 100 100"
            className="drop-shadow-[0_0_40px_rgba(212,175,55,0.4)]">
            <path ref={diamondRef}
              d="M50 5 L90 35 L50 95 L10 35 Z"
              fill="rgba(212,175,55,0.05)" stroke="#D4AF37" strokeWidth="1.5" />
            <path d="M10 35 L90 35" fill="none" stroke="#D4AF37" strokeWidth="0.7" opacity="0.5" />
            <path d="M50 5 L30 35 L50 95" fill="none" stroke="#D4AF37" strokeWidth="0.4" opacity="0.3" />
            <path d="M50 5 L70 35 L50 95" fill="none" stroke="#D4AF37" strokeWidth="0.4" opacity="0.3" />
          </svg>
          <div ref={estRef} className="text-center" style={{ opacity: 0, transform: 'translateY(16px)' }}>
            <p className="text-gold text-xs tracking-[0.45em] uppercase mb-2">Est. 1992</p>
            <p className="text-white/30 text-xs tracking-widest uppercase">Fine Jewellery · Heritage Craftsmanship</p>
          </div>
        </div>

        {/* ── Chapter 2 · story.png · Born from earth ── */}
        <div ref={ch2} className="story-chapter z-10 items-start justify-end pb-28 pl-8 md:pl-24">
          <div className="max-w-xs md:max-w-sm">
            <p className="text-gold text-xs tracking-[0.4em] uppercase mb-4">— The Origin</p>
            <h2 className="font-serif text-white text-4xl md:text-6xl leading-tight mb-6">
              Born from<br />
              <em className="text-gold">the earth's</em><br />
              deepest secrets.
            </h2>
            <div className="w-12 h-px bg-gold/60 mb-5" />
            <p className="text-white/50 text-sm font-light leading-relaxed">
              Each gemstone carries millions of years of history — pressure, heat, and time transformed into pure beauty.
            </p>
          </div>
        </div>

        {/* ── Chapter 3 · hero.png · CRAFTED FOR ETERNITY ── */}
        <div ref={ch3} className="story-chapter z-10 flex flex-col items-center justify-center px-4">
          <p className="text-gold text-xs tracking-[0.55em] uppercase mb-8 md:mb-12">VAJR JEWELS</p>
          <h1 className="font-serif text-white font-light text-center leading-none hero-word-crafted mb-1">
            CRAFTED
          </h1>
          <h1 className="font-serif text-gold font-light text-center leading-none italic hero-word-for mb-1">
            for
          </h1>
          <h1 className="font-serif text-white font-light text-center leading-none hero-word-eternity">
            ETERNITY
          </h1>
          <div className="shimmer-line mt-10 md:mt-14" />
        </div>

        {/* ── Chapter 4 · earrings · Heritage + subtitle ── */}
        <div ref={ch4} className="story-chapter z-10 flex flex-col items-center justify-center px-6">
          <div className="flex items-center gap-5 w-full max-w-md mb-10">
            <div ref={lineLeftRef}  className="flex-1 h-px bg-gold/50" />
            <div className="w-2 h-2 rotate-45 border border-gold/60 shrink-0" />
            <div ref={lineRightRef} className="flex-1 h-px bg-gold/50" />
          </div>
          <p className="text-white/40 text-xs tracking-[0.5em] uppercase mb-5">— The Promise</p>
          <h2 className="font-serif text-white text-3xl md:text-5xl lg:text-6xl text-center leading-snug mb-7">
            Where Heritage<br />
            <em className="text-gold">Meets Brilliance</em>
          </h2>
          <p className="text-white/40 text-sm text-center max-w-sm leading-relaxed font-light">
            Three generations of master craftsmen. Every piece a testament to the timeless art of Indian fine jewellery.
          </p>
        </div>

        {/* ── Chapter 5 · bridal · CTAs ── */}
        <div ref={ch5} className="story-chapter z-10 flex flex-col items-center justify-center gap-9 px-6">
          <div className="text-center">
            <p className="text-gold text-xs tracking-[0.5em] uppercase mb-5">— Begin Your Journey</p>
            <h2 className="font-serif text-white text-3xl md:text-5xl text-center leading-tight mb-3">
              Discover a world where<br />
              <em className="text-gold">every gem tells a story.</em>
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-5">
            <a href="#collections" className="cta-primary" data-testid="button-explore-hero">
              <span>Explore Collection</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="ml-3">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#appointment" className="cta-secondary" data-testid="button-book-hero">
              Book Appointment
            </a>
          </div>
          <div className="flex items-center gap-10 mt-2">
            {[['10,000+','Pieces Crafted'],['30+','Years Heritage'],['100%','Ethically Sourced']].map(([n,l])=>(
              <div key={l} className="text-center">
                <p className="font-serif text-gold text-2xl">{n}</p>
                <p className="text-white/30 text-xs tracking-widest uppercase mt-1">{l}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
