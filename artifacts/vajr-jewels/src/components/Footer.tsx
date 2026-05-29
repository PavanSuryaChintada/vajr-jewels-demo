import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#070707] pt-20 pb-10 border-t border-white/5 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <img src="/vajr-jewels-logo.png" alt="VAJR JEWELS" className="h-12 w-auto mb-6" />
            <p className="text-muted-foreground font-light max-w-sm">
              Crafting eternity since 1985. The premier destination for ultra-luxury Indian fine jewelry, specializing in rare diamonds and majestic emeralds.
            </p>
          </div>
          
          <div>
            <h4 className="text-gold font-serif text-xl mb-6">Explore</h4>
            <ul className="space-y-4">
              <li><a href="#collections" className="text-muted-foreground hover:text-white transition-colors text-sm tracking-wide">Collections</a></li>
              <li><a href="#bridal" className="text-muted-foreground hover:text-white transition-colors text-sm tracking-wide">Bridal</a></li>
              <li><a href="#craftsmanship" className="text-muted-foreground hover:text-white transition-colors text-sm tracking-wide">High Jewelry</a></li>
              <li><a href="#about" className="text-muted-foreground hover:text-white transition-colors text-sm tracking-wide">Our Heritage</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-gold font-serif text-xl mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="text-muted-foreground text-sm tracking-wide">Boutique: Taj Mansingh, New Delhi</li>
              <li className="text-muted-foreground text-sm tracking-wide">+91 999 999 9999</li>
              <li className="text-muted-foreground text-sm tracking-wide">concierge@vajrjewels.com</li>
              <li><a href="#" className="text-gold hover:text-white transition-colors text-sm tracking-wide">@vajrjewelsofficial</a></li>
            </ul>
          </div>
        </div>
        
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent mb-8"></div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground/60 text-xs tracking-widest uppercase">
            © 2025 VAJR JEWELS Private Limited. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground/60 hover:text-white text-xs tracking-widest uppercase transition-colors">Privacy</a>
            <a href="#" className="text-muted-foreground/60 hover:text-white text-xs tracking-widest uppercase transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
