import React from 'react';
import { motion } from 'framer-motion';
import BrandMark from '@/components/BrandMark';

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background pointer-events-none"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2, ease: 'easeInOut' }}
    >
      <div className="relative flex flex-col items-center gap-10">

        {/* Animated diamond outline */}
        <motion.svg
          width="100" height="100" viewBox="0 0 100 100"
          className="opacity-60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 0.6 }}
        >
          <motion.path
            d="M50 5 L90 35 L50 95 L10 35 Z"
            fill="transparent"
            stroke="hsl(var(--primary))"
            strokeWidth="1.2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.6, ease: 'easeInOut' }}
          />
          <motion.line x1="10" y1="35" x2="90" y2="35"
            stroke="hsl(var(--primary))" strokeWidth="0.6" opacity="0.5"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.8, ease: 'easeInOut' }}
          />
        </motion.svg>

        {/* Typography wordmark */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 1, ease: 'easeOut' }}
        >
          <BrandMark size="lg" />
        </motion.div>

        {/* Thin progress line */}
        <motion.div
          className="w-24 h-px bg-gold/30 overflow-hidden relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.5 }}
        >
          <motion.div
            className="absolute inset-y-0 left-0 bg-gold"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ delay: 1.8, duration: 0.7, ease: 'easeInOut' }}
          />
        </motion.div>

      </div>
    </motion.div>
  );
}
