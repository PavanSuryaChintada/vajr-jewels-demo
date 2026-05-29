import React from 'react';
import { motion } from 'framer-motion';

export default function AppointmentBooking() {
  const handleWhatsApp = () => {
    window.open("https://wa.me/919999999999?text=I'd like to book an appointment at VAJR JEWELS", "_blank");
  };

  return (
    <section id="appointment" className="py-32 bg-secondary relative border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-background p-8 md:p-16 border border-gold/20 relative">
          <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-gold"></div>
          <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-gold"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-gold"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-gold"></div>

          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif mb-4">Book a Private Viewing</h2>
            <p className="text-muted-foreground font-light">Experience our masterpieces in person at our flagship boutique.</p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Full Name</label>
                <input type="text" className="w-full bg-secondary border border-white/10 px-4 py-3 text-foreground focus:border-gold outline-none transition-colors" placeholder="Your Name" data-testid="input-name" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Phone Number</label>
                <input type="tel" className="w-full bg-secondary border border-white/10 px-4 py-3 text-foreground focus:border-gold outline-none transition-colors" placeholder="+91" data-testid="input-phone" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Email</label>
                <input type="email" className="w-full bg-secondary border border-white/10 px-4 py-3 text-foreground focus:border-gold outline-none transition-colors" placeholder="your@email.com" data-testid="input-email" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Interest</label>
                <select className="w-full bg-secondary border border-white/10 px-4 py-3 text-foreground focus:border-gold outline-none transition-colors appearance-none" data-testid="select-interest">
                  <option>Bridal Collection</option>
                  <option>Diamond Jewelry</option>
                  <option>Emerald Collection</option>
                  <option>Custom Design</option>
                </select>
              </div>
            </div>

            <div className="pt-6 flex flex-col sm:flex-row gap-4 items-center justify-center">
              <button type="submit" className="w-full sm:w-auto px-12 py-4 bg-gold text-primary-foreground text-sm tracking-widest uppercase hover:bg-white transition-colors duration-300" data-testid="button-submit-booking">
                Request Appointment
              </button>
              <span className="text-muted-foreground text-sm italic">or</span>
              <button type="button" onClick={handleWhatsApp} className="w-full sm:w-auto px-12 py-4 border border-[#25D366] text-[#25D366] text-sm tracking-widest uppercase hover:bg-[#25D366]/10 transition-colors duration-300 flex items-center justify-center gap-2" data-testid="button-whatsapp">
                WhatsApp Us
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
