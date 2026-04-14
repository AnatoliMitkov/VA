import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function HeroGallery() {
  const containerRef = useRef(null);
  
  // Track the scroll progress through this specific container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // 1. The Main Image expands from a narrow portrait to full width
  const centerWidth = useTransform(scrollYProgress, [0, 0.4], ["30vw", "100vw"]);
  const centerHeight = useTransform(scrollYProgress, [0, 0.4], ["60vh", "100vh"]);
  const centerRadius = useTransform(scrollYProgress, [0, 0.4], ["24px", "0px"]);
  
  // 2. The side product cards fade in and slide up as the center expands
  const sideOpacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);
  const sideY = useTransform(scrollYProgress, [0.2, 0.5], [100, 0]);

  // 3. Typography slides up at the very end of the scroll sequence
  const textOpacity = useTransform(scrollYProgress, [0.4, 0.7], [0, 1]);
  const textY = useTransform(scrollYProgress, [0.4, 0.7], [50, 0]);

  return (
    <div ref={containerRef} className="relative h-[250vh] bg-brand-light">
      {/* Sticky container keeps everything in the viewport while scrolling */}
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        
        {/* Main Expanding Image */}
        <motion.div 
          className="relative z-10 overflow-hidden shadow-2xl"
          style={{ width: centerWidth, height: centerHeight, borderRadius: centerRadius }}
        >
          <img src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2000&auto=format&fit=crop" alt="VA Store Fashion" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/10"></div>
        </motion.div>

        {/* Left Product Card */}
        <motion.div 
          className="absolute left-[5%] md:left-[10%] top-1/4 w-40 md:w-64 h-64 md:h-80 z-20"
          style={{ opacity: sideOpacity, y: sideY }}
        >
          <img src="https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=800&auto=format&fit=crop" alt="Macrame Bag" className="w-full h-full object-cover rounded-lg shadow-xl border border-white/20" />
        </motion.div>

        {/* Right Product Card */}
        <motion.div 
          className="absolute right-[5%] md:right-[10%] top-1/3 w-40 md:w-64 h-64 md:h-80 z-20"
          style={{ opacity: sideOpacity, y: sideY }}
        >
          <img src="https://images.unsplash.com/photo-1515347619362-75fb04b1bf75?q=80&w=800&auto=format&fit=crop" alt="Macrame Dress" className="w-full h-full object-cover rounded-lg shadow-xl border border-white/20" />
        </motion.div>

        {/* Typography Reveal */}
        <motion.div 
          className="absolute bottom-16 md:bottom-24 left-0 right-0 z-30 text-center text-white drop-shadow-lg"
          style={{ opacity: textOpacity, y: textY }}
        >
          <h1 className="font-serif text-6xl md:text-9xl italic tracking-tight">Handmade</h1>
          <p className="font-sans uppercase tracking-[0.4em] text-xs md:text-sm mt-6 font-medium">Unique Fashion By VA</p>
        </motion.div>
      </div>
    </div>
  );
}