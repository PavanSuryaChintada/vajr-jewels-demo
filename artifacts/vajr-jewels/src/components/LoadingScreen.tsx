import React from 'react';
import { motion } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background pointer-events-none"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <div className="relative flex flex-col items-center">
        <motion.svg
          width="120"
          height="120"
          viewBox="0 0 100 100"
          className="mb-8"
        >
          <motion.path
            d="M50 5 L90 35 L50 95 L10 35 Z"
            fill="transparent"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </motion.svg>
        <motion.img
          src="/vajr-jewels-logo.png"
          alt="VAJR JEWELS"
          className="w-48 h-auto object-contain drop-shadow-[0_0_15px_rgba(212,175,55,0.5)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
        />
        <div className="absolute inset-0 floating-particles"></div>
      </div>
    </motion.div>
  );
}
