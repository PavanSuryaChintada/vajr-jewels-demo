import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Eye } from 'lucide-react';

const products = [
  { name: "Royal Emerald Choker", price: "₹4,85,000", material: "18K Gold, Zambian Emerald, VVS Diamonds", image: "/col-emerald.png" },
  { name: "Solitaire Tennis Bracelet", price: "₹2,15,000", material: "18K White Gold, EF VVS Diamonds", image: "/col-diamond.png" },
  { name: "Heritage Polki Jhumkas", price: "₹3,50,000", material: "22K Gold, Uncut Diamonds, Rubies", image: "/col-heritage.png" },
  { name: "Daily Luxe Pendant", price: "₹85,000", material: "18K Rose Gold, VVS Diamonds", image: "/col-daily.png" },
  { name: "Signature Cocktail Ring", price: "₹1,95,000", material: "Platinum, 2ct Center Diamond", image: "/hs-1.png" },
  { name: "Bridal Statement Set", price: "Price on Request", material: "22K Gold, Polki, Pearls", image: "/col-bridal.png" }
];

export default function FeaturedProducts() {
  return (
    <section className="py-32 bg-background relative border-t border-white/5">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <span className="text-gold tracking-widest uppercase text-sm mb-4 block">Boutique</span>
            <h2 className="text-4xl md:text-5xl font-serif">Featured Pieces</h2>
          </div>
          <a href="#shop" className="text-sm tracking-widest uppercase text-muted-foreground hover:text-gold transition-colors" data-testid="link-view-all">
            View All Pieces &rarr;
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group bg-secondary/50 rounded-sm border border-white/5 hover:border-gold/30 transition-all duration-500 overflow-hidden flex flex-col"
              data-testid={`card-product-${i}`}
            >
              <div className="relative aspect-square overflow-hidden bg-black">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                  <button className="w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center text-foreground hover:text-gold transition-colors" data-testid={`button-wishlist-${i}`}>
                    <Heart size={18} />
                  </button>
                  <button className="w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center text-foreground hover:text-gold transition-colors" data-testid={`button-quickview-${i}`}>
                    <Eye size={18} />
                  </button>
                </div>
              </div>
              
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-serif text-foreground mb-1">{product.name}</h3>
                  <p className="text-xs text-muted-foreground mb-4 font-light">{product.material}</p>
                </div>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-lg font-medium tracking-wide">{product.price}</span>
                  <button className="text-xs uppercase tracking-widest text-gold hover:text-white transition-colors" data-testid={`button-add-cart-${i}`}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
