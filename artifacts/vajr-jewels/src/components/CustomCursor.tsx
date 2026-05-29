import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button'
      );
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-gold rounded-full pointer-events-none z-[100] mix-blend-difference"
        animate={{
          x: position.x - 6,
          y: position.y - 6,
          scale: isPointer ? 1.5 : 1
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 2 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-gold/50 rounded-full pointer-events-none z-[99]"
        animate={{
          x: position.x - 20,
          y: position.y - 20,
          scale: isPointer ? 1.5 : 1
        }}
        transition={{ type: "spring", stiffness: 250, damping: 20, mass: 1 }}
      />
    </>
  );
}
