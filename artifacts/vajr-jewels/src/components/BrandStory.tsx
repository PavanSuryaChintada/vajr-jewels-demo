import React from 'react';
import { motion } from 'framer-motion';

export default function BrandStory() {
  return (
    <section id="about" className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <div className="w-16 h-px bg-gold"></div>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground">A Legacy of <br/><span className="text-gold italic">Unparalleled Craft</span></h2>
            <p className="text-muted-foreground leading-relaxed text-lg font-light">
              For generations, VAJR JEWELS has been the custodian of India's most extraordinary gems. We do not merely create jewelry; we sculpt heirlooms. Every diamond is meticulously selected, every emerald ethically sourced, and every setting handcrafted by master artisans whose skills have been honed over decades.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg font-light">
              Our pieces are born from a dialogue between ancient heritage and contemporary brilliance. When you wear VAJR, you wear a testament to eternity.
            </p>
            <div className="pt-8">
              <a href="#craftsmanship" className="inline-flex items-center text-gold text-sm tracking-widest uppercase hover:text-white transition-colors" data-testid="link-discover-craft">
                Discover Our Process
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="ml-2" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[3/4] overflow-hidden rounded-sm relative">
              <img src="/story.png" alt="Heritage Craftsmanship" className="w-full h-full object-cover" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10"></div>
            </div>
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-secondary border border-gold/20 flex items-center justify-center p-6 hidden md:flex">
              <p className="text-center font-serif text-gold text-xl italic leading-snug">"Perfection in every facet."</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
