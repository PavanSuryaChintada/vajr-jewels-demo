import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import BrandMark from '@/components/BrandMark';

export default function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-40 transition-colors duration-500 ${
        scrolled ? 'bg-background/90 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ delay: 3, duration: 1 }}
    >
      <div className="container mx-auto px-6 h-24 flex items-center justify-between">
        <a href="/" data-testid="link-home">
          <BrandMark size="sm" />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {['Collections', 'Bridal', 'Craftsmanship', 'About'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium tracking-widest text-foreground/80 hover:text-gold transition-colors uppercase" data-testid={`link-${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
          <a href="#appointment" className="px-6 py-2 border border-gold text-gold text-sm tracking-widest uppercase hover:bg-gold hover:text-primary-foreground transition-all duration-300 glow-hover" data-testid="button-book-now-nav">
            Book Now
          </a>
        </nav>

        <button className="md:hidden text-gold" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} data-testid="button-mobile-menu">
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          className="md:hidden absolute top-full left-0 w-full bg-background border-b border-white/5 py-6 px-6 flex flex-col gap-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {['Collections', 'Bridal', 'Craftsmanship', 'About'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-lg font-serif text-foreground hover:text-gold uppercase tracking-widest" onClick={() => setMobileMenuOpen(false)}>
              {item}
            </a>
          ))}
          <a href="#appointment" className="w-full text-center px-6 py-3 border border-gold text-gold hover:bg-gold hover:text-primary-foreground transition-colors uppercase tracking-widest" onClick={() => setMobileMenuOpen(false)}>
            Book Now
          </a>
        </motion.div>
      )}
    </motion.header>
  );
}
