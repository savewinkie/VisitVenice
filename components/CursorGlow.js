'use client';
import { useEffect, useRef } from 'react';

export default function CursorGlow() {
  const glowRef = useRef(null);
  useEffect(() => {
    let mouseX = -400, mouseY = -400;
    const handleMove = (e) => { mouseX = e.clientX; mouseY = e.clientY; };
    document.addEventListener('mousemove', handleMove);
    let id;
    const animate = () => {
      if (glowRef.current) {
        glowRef.current.style.left = mouseX + 'px';
        glowRef.current.style.top = mouseY + 'px';
      }
      id = requestAnimationFrame(animate);
    };
    animate();
    return () => { document.removeEventListener('mousemove', handleMove); cancelAnimationFrame(id); };
  }, []);
  return <div className="cursor-glow" ref={glowRef} />;
}