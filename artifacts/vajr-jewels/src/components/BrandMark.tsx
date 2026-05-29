import React from 'react';

interface BrandMarkProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const sizes = {
  sm:  { vajr: 'text-xl',    jewels: 'text-[8px]',  gap: 'gap-[6px]',  rule: 'w-10' },
  md:  { vajr: 'text-2xl',   jewels: 'text-[9px]',  gap: 'gap-[7px]',  rule: 'w-12' },
  lg:  { vajr: 'text-4xl',   jewels: 'text-[10px]', gap: 'gap-[9px]',  rule: 'w-16' },
  xl:  { vajr: 'text-6xl',   jewels: 'text-[12px]', gap: 'gap-[12px]', rule: 'w-20' },
};

export default function BrandMark({ size = 'md', className = '' }: BrandMarkProps) {
  const s = sizes[size];
  return (
    <div className={`flex flex-col items-center select-none ${s.gap} ${className}`}>
      {/* Primary wordmark */}
      <span
        className={`font-serif font-light text-foreground leading-none tracking-[0.18em] ${s.vajr}`}
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        VAJR
      </span>

      {/* Thin gold rule */}
      <div className={`${s.rule} h-px bg-gold/50`} />

      {/* Sub-wordmark */}
      <span
        className={`font-sans font-light text-gold tracking-[0.55em] uppercase leading-none ${s.jewels}`}
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        JEWELS
      </span>
    </div>
  );
}
