import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BrandMark from '@/components/BrandMark';

gsap.registerPlugin(ScrollTrigger);

/* ─── Floating particles ─────────────────────────────────── */
const PARTICLES = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 2 + 1,
  delay: Math.random() * 10,
  dur: Math.random() * 7 + 9,
}));

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinRef       = useRef<HTMLDivElement>(null);
  const progressRef  = useRef<HTMLDivElement>(null);

  /* image wrapper refs (one per chapter) — wrap controls opacity */
  const wrap1 = useRef<HTMLDivElement>(null);
  const wrap2 = useRef<HTMLDivElement>(null);
  const wrap3 = useRef<HTMLDivElement>(null);
  const wrap4 = useRef<HTMLDivElement>(null);
  const wrap5 = useRef<HTMLDivElement>(null);

  /* inner <img> refs — inner img controls scale for Ken-Burns zoom */
  const img2 = useRef<HTMLImageElement>(null);
  const img3 = useRef<HTMLImageElement>(null);
  const img4 = useRef<HTMLImageElement>(null);
  const img5 = useRef<HTMLImageElement>(null);

  /* chapter text overlay refs */
  const ch1 = useRef<HTMLDivElement>(null);
  const ch2 = useRef<HTMLDivElement>(null);
  const ch3 = useRef<HTMLDivElement>(null);
  const ch4 = useRef<HTMLDivElement>(null);
  const ch5 = useRef<HTMLDivElement>(null);

  /* chapter 4 gold rule lines */
  const lineL = useRef<HTMLDivElement>(null);
  const lineR = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      /* ── initial states ── */
      gsap.set([wrap1.current, wrap2.current, wrap3.current, wrap4.current, wrap5.current], { opacity: 0 });
      gsap.set([img2.current, img3.current, img4.current, img5.current], { scale: 1.0 });
      gsap.set([ch1.current, ch2.current, ch3.current, ch4.current, ch5.current], { opacity: 0 });
      gsap.set(lineL.current, { scaleX: 0, transformOrigin: 'right center' });
      gsap.set(lineR.current, { scaleX: 0, transformOrigin: 'left center' });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          pin: pinRef.current,
          scrub: 1.4,
          start: 'top top',
          end: 'bottom bottom',
          onUpdate: s => {
            if (progressRef.current) gsap.set(progressRef.current, { scaleY: s.progress });
          },
        },
      });

      /* ── Chapter 1 — brand reveal on black ── */
      tl.to(ch1.current, { opacity: 1, duration: 1 })

      /* ── Transition 1 → 2 (story.png) ── */
        .to(ch1.current, { opacity: 0, duration: 0.8 }, '+=1.2')
        .to(wrap2.current, { opacity: 1, duration: 1.6, ease: 'power2.inOut' }, '-=0.4')
        .to(img2.current,  { scale: 1.22, duration: 7, ease: 'none' }, '<')
        .to(ch2.current,   { opacity: 1, duration: 1 }, '-=0.9')

      /* ── Transition 2 → 3 (hero.png) ── */
        .to(ch2.current,  { opacity: 0, duration: 0.8 }, '+=1.4')
        .to(img2.current, { scale: 1.45, duration: 1.2, ease: 'power2.in' }, '<')
        .to(wrap2.current,{ opacity: 0, duration: 0.9, ease: 'power2.in' }, '<+=0.2')
        .to(wrap3.current, { opacity: 1, duration: 1.6, ease: 'power2.inOut' }, '-=0.7')
        .to(img3.current,  { scale: 1.22, duration: 7, ease: 'none' }, '<')
        .to(ch3.current,   { opacity: 1, duration: 1 }, '-=0.9')

      /* ── Transition 3 → 4 (earrings) ── */
        .to(ch3.current,  { opacity: 0, duration: 0.8 }, '+=1.4')
        .to(img3.current, { scale: 1.45, duration: 1.2, ease: 'power2.in' }, '<')
        .to(wrap3.current,{ opacity: 0, duration: 0.9, ease: 'power2.in' }, '<+=0.2')
        .to(wrap4.current, { opacity: 1, duration: 1.6, ease: 'power2.inOut' }, '-=0.7')
        .to(img4.current,  { scale: 1.22, duration: 7, ease: 'none' }, '<')
        .to([lineL.current, lineR.current], { scaleX: 1, duration: 1.6, ease: 'power2.out' }, '-=0.4')
        .to(ch4.current,   { opacity: 1, duration: 1 }, '-=1.2')

      /* ── Transition 4 → 5 (bridal) ── */
        .to([ch4.current, lineL.current, lineR.current], { opacity: 0, duration: 0.8 }, '+=1.4')
        .to(img4.current, { scale: 1.45, duration: 1.2, ease: 'power2.in' }, '<')
        .to(wrap4.current,{ opacity: 0, duration: 0.9, ease: 'power2.in' }, '<+=0.2')
        .to(wrap5.current, { opacity: 1, duration: 1.8, ease: 'power2.inOut' }, '-=0.7')
        .to(img5.current,  { scale: 1.22, duration: 7, ease: 'none' }, '<')
        .to(ch5.current,   { opacity: 1, duration: 1.2 }, '-=1');

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative" style={{ height: '500vh' }} data-testid="section-hero">

      {/* ── Pinned viewport ───────────────────────────────── */}
      <div ref={pinRef} className="relative w-full h-screen overflow-hidden bg-black">

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-[1]" aria-hidden>
          {PARTICLES.map(p => (
            <div key={p.id} className="particle-dot" style={{
              left: `${p.x}%`, top: `${p.y}%`,
              width: p.size, height: p.size,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.dur}s`,
            }} />
          ))}
        </div>

        {/* ── Ch1 wrap — pure black, no image ── */}
        <div ref={wrap1} className="absolute inset-0 z-[2]" />

        {/* ── Ch2 wrap — story.png / heritage ── */}
        <div ref={wrap2} className="absolute inset-0 z-[2] overflow-hidden">
          <img ref={img2} src="/story.png" alt=""
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: 'center 30%', transformOrigin: 'center center' }} />
          <div className="absolute inset-0 bg-black/52" />
        </div>

        {/* ── Ch3 wrap — hero.png / necklace ── */}
        <div ref={wrap3} className="absolute inset-0 z-[2] overflow-hidden">
          <img ref={img3} src="/hero.png" alt=""
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: 'center', transformOrigin: 'center center' }} />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* ── Ch4 wrap — earrings ── */}
        <div ref={wrap4} className="absolute inset-0 z-[2] overflow-hidden">
          <img ref={img4} src="/vajr-jewels-earrings.png" alt=""
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: 'center 40%', transformOrigin: 'center center' }} />
          <div className="absolute inset-0 bg-black/42" />
        </div>

        {/* ── Ch5 wrap — bridal ── */}
        <div ref={wrap5} className="absolute inset-0 z-[2] overflow-hidden">
          <img ref={img5} src="/bridal-hero.png" alt=""
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: 'center', transformOrigin: 'center center' }} />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Vignette */}
        <div className="absolute inset-0 z-[3] pointer-events-none vignette" />

        {/* Progress bar */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 h-28 w-px bg-white/10 overflow-hidden z-20 hidden md:block">
          <div ref={progressRef} className="absolute top-0 left-0 w-full bg-gold origin-top" style={{ height: '100%' }} />
        </div>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.8, duration: 1 }}
        >
          <span className="text-white/35 text-[10px] tracking-[0.35em] uppercase">Scroll</span>
          <div className="scroll-line" />
        </motion.div>

        {/* ════ Chapter 1 — Premium brand reveal ════ */}
        <div ref={ch1} className="story-chapter z-10 flex flex-col items-center justify-center gap-8">
          <div className="flex flex-col items-center gap-7 select-none">
            <BrandMark size="xl" />
            <div className="flex items-center gap-5 mt-2">
              <div className="w-14 h-px bg-gold/30" />
              <span className="text-gold/50 text-[9px] tracking-[0.7em] uppercase">Est. 1992</span>
              <div className="w-14 h-px bg-gold/30" />
            </div>
            <p className="text-white/18 text-[9px] tracking-[0.5em] uppercase text-center" style={{ opacity: 0.18 }}>
              Fine Jewellery&nbsp;&nbsp;·&nbsp;&nbsp;Heritage Craftsmanship
            </p>
          </div>
        </div>

        {/* ════ Chapter 2 — Born from earth (story.png) ════ */}
        <div ref={ch2} className="story-chapter z-10 items-start justify-end pb-28 pl-8 md:pl-24">
          <div className="max-w-xs md:max-w-sm">
            <p className="text-gold text-[10px] tracking-[0.5em] uppercase mb-4">— The Origin</p>
            <h2 className="font-serif text-white text-4xl md:text-[3.4rem] leading-[1.1] mb-5">
              Born from<br />
              <em className="text-gold">the earth's</em><br />
              deepest secrets.
            </h2>
            <div className="w-10 h-px bg-gold/55 mb-5" />
            <p className="text-white/45 text-sm font-light leading-relaxed">
              Each gemstone carries millions of years of history — pressure, heat, and time transformed into pure beauty.
            </p>
          </div>
        </div>

        {/* ════ Chapter 3 — CRAFTED FOR ETERNITY (hero.png) ════ */}
        <div ref={ch3} className="story-chapter z-10 flex flex-col items-center justify-center px-4 text-center">
          <p className="text-gold/75 text-[10px] tracking-[0.6em] uppercase mb-10">VAJR JEWELS</p>
          <h1 className="font-serif text-white font-light leading-none hero-word-crafted mb-1">CRAFTED</h1>
          <h1 className="font-serif text-gold  font-light leading-none italic hero-word-for mb-1">for</h1>
          <h1 className="font-serif text-white font-light leading-none hero-word-eternity">ETERNITY</h1>
          <div className="shimmer-line mt-10 md:mt-14" />
        </div>

        {/* ════ Chapter 4 — Heritage (earrings) ════ */}
        <div ref={ch4} className="story-chapter z-10 flex flex-col items-center justify-center px-6">
          <div className="flex items-center gap-5 w-full max-w-md mb-10">
            <div ref={lineL} className="flex-1 h-px bg-gold/50" />
            <div className="w-[6px] h-[6px] rotate-45 border border-gold/60 shrink-0" />
            <div ref={lineR} className="flex-1 h-px bg-gold/50" />
          </div>
          <p className="text-white/35 text-[10px] tracking-[0.55em] uppercase mb-5">— The Promise</p>
          <h2 className="font-serif text-white text-3xl md:text-5xl lg:text-[3.4rem] text-center leading-[1.15] mb-6">
            Where Heritage<br />
            <em className="text-gold">Meets Brilliance</em>
          </h2>
          <p className="text-white/35 text-sm text-center max-w-xs leading-relaxed font-light">
            Three generations of master craftsmen. Every piece a testament to the timeless art of Indian fine jewellery.
          </p>
        </div>

        {/* ════ Chapter 5 — Invitation (bridal) ════ */}
        <div ref={ch5} className="story-chapter z-10 flex flex-col items-center justify-center gap-9 px-6">
          <div className="text-center">
            <p className="text-gold/75 text-[10px] tracking-[0.55em] uppercase mb-5">— Begin Your Journey</p>
            <h2 className="font-serif text-white text-3xl md:text-[2.8rem] text-center leading-snug mb-2">
              Discover a world where<br />
              <em className="text-gold">every gem tells a story.</em>
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-5">
            <a href="#collections" className="cta-primary" data-testid="button-explore-hero">
              <span>Explore Collection</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" className="ml-3">
                <path d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="#appointment" className="cta-secondary" data-testid="button-book-hero">
              Book Appointment
            </a>
          </div>
          <div className="flex items-center gap-8 md:gap-12 mt-2">
            {[['10,000+', 'Pieces Crafted'], ['30+', 'Years Heritage'], ['100%', 'Ethically Sourced']].map(([n, l]) => (
              <div key={l} className="text-center">
                <p className="font-serif text-gold text-xl md:text-2xl">{n}</p>
                <p className="text-white/25 text-[9px] tracking-widest uppercase mt-1">{l}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
