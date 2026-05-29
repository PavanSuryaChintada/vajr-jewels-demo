import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from '@/components/LoadingScreen';
import CustomCursor from '@/components/CustomCursor';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import BrandStory from '@/components/BrandStory';
import CollectionsGrid from '@/components/CollectionsGrid';
import HorizontalScrollGallery from '@/components/HorizontalScrollGallery';
import BridalExperience from '@/components/BridalExperience';
import FeaturedProducts from '@/components/FeaturedProducts';
import CraftsmanshipSection from '@/components/CraftsmanshipSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import AppointmentBooking from '@/components/AppointmentBooking';
import Footer from '@/components/Footer';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Lock scroll while loading
    document.body.style.overflow = loading ? 'hidden' : 'auto';
    
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'auto';
    };
  }, [loading]);

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-primary-foreground">
      <CustomCursor />
      
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen key="loading" />}
      </AnimatePresence>

      {!loading && (
        <div className="animate-in fade-in duration-1000">
          <Navbar />
          <main>
            <HeroSection />
            <BrandStory />
            <CollectionsGrid />
            <HorizontalScrollGallery />
            <BridalExperience />
            <FeaturedProducts />
            <CraftsmanshipSection />
            <TestimonialsSection />
            <AppointmentBooking />
          </main>
          <Footer />
        </div>
      )}
    </div>
  );
}
