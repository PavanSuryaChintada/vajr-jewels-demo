import React from 'react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const words = "Crafted For Eternity".split(" ");

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="/hero.png" alt="Luxury Diamond Necklace" className="w-full h-full object-cover opacity-60 scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50"></div>
        <div className="absolute inset-0 floating-particles"></div>
      </div>

      <div className="relative z-10 text-center px-6 mt-20">
        <div className="overflow-hidden mb-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { delayChildren: 3.5, staggerChildren: 0.2 }
              }
            }}
            className="flex flex-wrap justify-center gap-x-4"
          >
            {words.map((word, i) => (
              <motion.span
                key={i}
                className="text-5xl md:text-7xl lg:text-8xl font-serif text-foreground font-light tracking-tight drop-shadow-2xl"
                variants={{
                  hidden: { y: 100, opacity: 0 },
                  visible: { y: 0, opacity: 1, transition: { duration: 1, ease: [0.2, 0.65, 0.3, 0.9] } }
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.div>
        </div>

        <motion.p
          className="text-xl md:text-2xl font-serif italic text-gold mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4.5, duration: 1 }}
        >
          Where Heritage Meets Brilliance
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 5, duration: 1 }}
        >
          <a href="#collections" className="px-8 py-4 bg-gold text-primary-foreground text-sm tracking-widest uppercase hover:bg-white transition-colors duration-300 w-full sm:w-auto" data-testid="button-explore-hero">
            Explore Collection
          </a>
          <a href="#appointment" className="px-8 py-4 border border-gold text-gold text-sm tracking-widest uppercase hover:bg-gold/10 transition-colors duration-300 w-full sm:w-auto glow-hover" data-testid="button-book-hero">
            Book Appointment
          </a>
        </motion.div>
      </div>
    </section>
  );
}
