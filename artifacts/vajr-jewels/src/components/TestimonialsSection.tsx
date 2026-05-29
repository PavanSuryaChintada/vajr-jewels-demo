import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  { name: "Priyanka S.", location: "Mumbai", quote: "The bridal set they created for my wedding was beyond my wildest dreams. It felt like wearing history." },
  { name: "Ananya R.", location: "Delhi", quote: "Their emeralds are unmatched. The depth of color and the craftsmanship of the setting is truly world-class." },
  { name: "Vikram M.", location: "London", quote: "I commissioned a custom engagement ring. The process was as flawless as the diamond they sourced." },
  { name: "Meera K.", location: "New York", quote: "VAJR isn't just a jewelry store, it's an experience. Every piece I own from them gets endless compliments." }
];

export default function TestimonialsSection() {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.05)_0%,transparent_50%)]"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold tracking-widest uppercase text-sm mb-4 block">Clientele</span>
          <h2 className="text-4xl md:text-5xl font-serif">Words of Elegance</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-secondary/40 backdrop-blur-md p-10 border border-white/5 rounded-sm hover:border-gold/20 transition-colors"
            >
              <div className="text-gold mb-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="opacity-50">
                  <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.696 20 8.222V8.52H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.696 6 8.222V8.52H10V18H0Z"/>
                </svg>
              </div>
              <p className="text-lg font-light text-foreground/90 leading-relaxed mb-8">"{t.quote}"</p>
              <div>
                <h4 className="font-serif text-gold text-xl">{t.name}</h4>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">{t.location}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
