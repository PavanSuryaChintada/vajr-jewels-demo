import React from 'react';
import { motion } from 'framer-motion';
import { PenTool, Diamond, Hammer, ShieldCheck } from 'lucide-react';

const steps = [
  { icon: PenTool, title: "The Vision", desc: "Every masterpiece begins as a hand-drawn sketch, inspired by nature, architecture, and heritage." },
  { icon: Diamond, title: "Stone Selection", desc: "We source only the top 1% of diamonds and gemstones, rigorously checked for cut, color, clarity, and carat." },
  { icon: Hammer, title: "Master Crafting", desc: "Artisans with decades of experience mold gold and platinum, setting each stone by hand with microscopic precision." },
  { icon: ShieldCheck, title: "Perfection", desc: "A rigorous 50-point inspection ensures the final piece meets the uncompromising VAJR standard." }
];

export default function CraftsmanshipSection() {
  return (
    <section id="craftsmanship" className="py-32 bg-secondary relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-gold tracking-widest uppercase text-sm mb-4 block">The Process</span>
          <h2 className="text-4xl md:text-5xl font-serif">Artistry in Motion</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"></div>
          
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              className="relative flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 rounded-full bg-background border border-gold/30 flex items-center justify-center mb-8 relative z-10 shadow-[0_0_30px_rgba(212,175,55,0.1)]">
                <step.icon size={32} className="text-gold" />
              </div>
              <h3 className="text-2xl font-serif mb-4 text-foreground">{step.title}</h3>
              <p className="text-muted-foreground font-light leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
