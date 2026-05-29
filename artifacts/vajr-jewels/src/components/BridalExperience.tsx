import React from 'react';
import { motion } from 'framer-motion';

export default function BridalExperience() {
  return (
    <section id="bridal" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 z-0">
        <img src="/bridal-hero.png" alt="Bridal Collection" className="w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,hsl(var(--background))_100%)]"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif mb-6 text-foreground drop-shadow-2xl">
            The Bridal <br/><span className="text-gold italic">Collection</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground font-light mb-12">
            For the day you become a legend. Exquisite sets designed to echo through generations.
          </p>
          <a href="#appointment" className="inline-block px-10 py-5 bg-gold text-primary-foreground text-sm tracking-widest uppercase hover:bg-white transition-colors duration-300" data-testid="button-explore-bridal">
            Explore Bridal
          </a>
        </motion.div>
      </div>
    </section>
  );
}
