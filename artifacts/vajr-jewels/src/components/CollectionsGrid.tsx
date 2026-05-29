import React from 'react';
import { motion } from 'framer-motion';

const collections = [
  { name: "Diamond Collection", image: "/col-diamond.png" },
  { name: "Emerald Collection", image: "/col-emerald.png" },
  { name: "Bridal Collection", image: "/col-bridal.png" },
  { name: "Heritage Collection", image: "/col-heritage.png" },
  { name: "Daily Luxury", image: "/col-daily.png" },
  { name: "Signature Collection", image: "/col-signature.png" }
];

export default function CollectionsGrid() {
  return (
    <section id="collections" className="py-32 bg-secondary relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-gold tracking-widest uppercase text-sm mb-4 block">Curated Brilliance</span>
          <h2 className="text-4xl md:text-5xl font-serif">Featured Collections</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((col, i) => (
            <motion.div
              key={col.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="group relative aspect-square overflow-hidden cursor-pointer"
              style={{ perspective: "1000px" }}
              data-testid={`card-collection-${i}`}
            >
              <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                <img src={col.image} alt={col.name} className="w-full h-full object-cover opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              </div>
              
              <div className="absolute inset-0 border border-white/10 group-hover:border-gold/50 transition-colors duration-500 m-4"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col items-center text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-2xl font-serif text-white mb-2">{col.name}</h3>
                <span className="text-gold text-sm tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">Explore &rarr;</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
