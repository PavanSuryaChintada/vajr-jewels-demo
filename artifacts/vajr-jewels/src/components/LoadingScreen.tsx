import React from 'react';
import { motion } from 'framer-motion';
import BrandMark from '@/components/BrandMark';

const GOLD = 'hsl(46 63% 52%)';

const sparkles = [
  { x: -130, y: -70,  delay: 0.5, size: 3.5 },
  { x:  140, y: -55,  delay: 0.7, size: 2.5 },
  { x: -100, y:  110, delay: 0.9, size: 3.0 },
  { x:  120, y:  100, delay: 0.6, size: 2.5 },
  { x: -165, y:  15,  delay: 1.0, size: 2.0 },
  { x:  170, y:  25,  delay: 0.8, size: 2.0 },
  { x:  -20, y: -155, delay: 0.4, size: 3.0 },
  { x:   20, y:  160, delay: 1.1, size: 2.5 },
];

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background pointer-events-none overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.4, ease: 'easeInOut' }}
    >
      {/* Ambient radial glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 55% 45% at 50% 50%, hsl(46 63% 52% / 0.07) 0%, transparent 70%)',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.8 }}
      />

      {/* Full-width ornamental hairline rule */}
      <motion.div
        className="absolute left-0 right-0"
        style={{ top: '50%', transform: 'translateY(-50%)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 0.8 }}
      >
        <div className="h-px bg-gradient-to-r from-transparent via-gold/18 to-transparent" />
      </motion.div>

      {/* Floating sparkle particles */}
      {sparkles.map((s, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: `calc(50% + ${s.x}px)`, top: `calc(50% + ${s.y}px)` }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0, 1, 0.6, 1, 0.5, 1], scale: [0, 1, 0.85, 1, 0.9, 1] }}
          transition={{
            delay: s.delay,
            duration: 1.6,
            repeat: Infinity,
            repeatType: 'mirror',
            repeatDelay: (i % 3) * 0.6 + 0.4,
          }}
        >
          <svg width={s.size * 5} height={s.size * 5} viewBox="0 0 10 10">
            <path
              d="M5 0 L5.4 4.6 L10 5 L5.4 5.4 L5 10 L4.6 5.4 L0 5 L4.6 4.6 Z"
              fill={GOLD}
              opacity="0.8"
            />
          </svg>
        </motion.div>
      ))}

      <div className="relative flex flex-col items-center gap-7">

        {/* Premium faceted diamond gem */}
        <motion.svg
          width="130" height="130" viewBox="0 0 130 130"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {/* Outer diamond */}
          <motion.path
            d="M65 10 L115 46 L65 120 L15 46 Z"
            fill="transparent"
            stroke={GOLD}
            strokeWidth="1.2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.85 }}
            transition={{ duration: 1.8, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
          />
          {/* Girdle */}
          <motion.line x1="15" y1="46" x2="115" y2="46"
            stroke={GOLD} strokeWidth="0.6"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.45 }}
            transition={{ duration: 0.9, delay: 1.0, ease: 'easeInOut' }}
          />
          {/* Crown table polygon */}
          <motion.polygon
            points="65,10 42,46 65,56 88,46"
            fill="transparent" stroke={GOLD} strokeWidth="0.5"
            initial={{ opacity: 0 }} animate={{ opacity: 0.35 }}
            transition={{ duration: 0.6, delay: 1.5 }}
          />
          {/* Crown left & right facet helpers */}
          <motion.line x1="15" y1="46" x2="42" y2="46" stroke={GOLD} strokeWidth="0.4"
            initial={{ opacity: 0 }} animate={{ opacity: 0.22 }}
            transition={{ delay: 1.65, duration: 0.4 }}
          />
          <motion.line x1="88" y1="46" x2="115" y2="46" stroke={GOLD} strokeWidth="0.4"
            initial={{ opacity: 0 }} animate={{ opacity: 0.22 }}
            transition={{ delay: 1.65, duration: 0.4 }}
          />
          {/* Pavilion center keel */}
          <motion.line x1="65" y1="56" x2="65" y2="120" stroke={GOLD} strokeWidth="0.4"
            initial={{ opacity: 0 }} animate={{ opacity: 0.18 }}
            transition={{ delay: 1.7, duration: 0.5 }}
          />
          {/* Left pavilion facets */}
          <motion.line x1="15" y1="46" x2="65" y2="120" stroke={GOLD} strokeWidth="0.3"
            initial={{ opacity: 0 }} animate={{ opacity: 0.14 }}
            transition={{ delay: 1.8, duration: 0.4 }}
          />
          <motion.line x1="42" y1="46" x2="65" y2="120" stroke={GOLD} strokeWidth="0.3"
            initial={{ opacity: 0 }} animate={{ opacity: 0.14 }}
            transition={{ delay: 1.85, duration: 0.4 }}
          />
          {/* Right pavilion facets */}
          <motion.line x1="115" y1="46" x2="65" y2="120" stroke={GOLD} strokeWidth="0.3"
            initial={{ opacity: 0 }} animate={{ opacity: 0.14 }}
            transition={{ delay: 1.8, duration: 0.4 }}
          />
          <motion.line x1="88" y1="46" x2="65" y2="120" stroke={GOLD} strokeWidth="0.3"
            initial={{ opacity: 0 }} animate={{ opacity: 0.14 }}
            transition={{ delay: 1.85, duration: 0.4 }}
          />
          {/* Table center sparkle */}
          <motion.circle cx="65" cy="46" r="1.8" fill={GOLD}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 2.2, 1], opacity: [0, 1, 0.55] }}
            transition={{ duration: 0.55, delay: 2.05 }}
          />
          {/* Culet (tip) sparkle */}
          <motion.circle cx="65" cy="120" r="1.1" fill={GOLD}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1.8, 1], opacity: [0, 0.9, 0.3] }}
            transition={{ duration: 0.4, delay: 2.15 }}
          />
        </motion.svg>

        {/* VAJR JEWELS wordmark */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <BrandMark size="lg" />
        </motion.div>

        {/* Ornamental divider — lines + diamond lozenges */}
        <motion.div
          className="flex items-center gap-3"
          initial={{ opacity: 0, scaleX: 0.4 }}
          animate={{ opacity: 1, scaleX: 1 }}
          style={{ transformOrigin: 'center' }}
          transition={{ delay: 2.1, duration: 0.7, ease: 'easeOut' }}
        >
          <div className="w-12 h-px bg-gradient-to-r from-transparent to-gold/50" />
          <svg width="6" height="6" viewBox="0 0 10 10">
            <path d="M5 0 L10 5 L5 10 L0 5 Z" fill={GOLD} opacity="0.65" />
          </svg>
          <div className="w-20 h-px" style={{ backgroundColor: 'hsl(46 63% 52% / 0.4)' }} />
          <svg width="6" height="6" viewBox="0 0 10 10">
            <path d="M5 0 L10 5 L5 10 L0 5 Z" fill={GOLD} opacity="0.65" />
          </svg>
          <div className="w-12 h-px bg-gradient-to-l from-transparent to-gold/50" />
        </motion.div>

        {/* Tagline */}
        <motion.p
          className="text-[9px] tracking-[0.38em] uppercase font-light"
          style={{ fontFamily: "'Inter', sans-serif", color: 'hsl(46 63% 52% / 0.52)' }}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4, duration: 0.8 }}
        >
          Curating Your Experience
        </motion.p>

        {/* Gold gradient progress bar */}
        <motion.div
          className="w-36 h-px overflow-hidden relative"
          style={{ backgroundColor: 'hsl(46 63% 52% / 0.12)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.3, duration: 0.4 }}
        >
          <motion.div
            className="absolute inset-y-0 left-0"
            style={{
              background:
                'linear-gradient(90deg, hsl(46 63% 52% / 0.5), hsl(46 63% 52%), hsl(46 63% 52% / 0.5))',
            }}
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ delay: 2.5, duration: 1.0, ease: 'easeInOut' }}
          />
        </motion.div>

      </div>
    </motion.div>
  );
}
