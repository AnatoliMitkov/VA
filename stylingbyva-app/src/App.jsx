import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import ProductGrid from './ProductGrid';
import HeroGallery from '../HeroGallery';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Listen for scroll events to trigger the liquid glass sticky header
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-brand-light text-brand-dark overflow-x-hidden font-sans">
      {/* Global Navigation */}
      <header className={`fixed w-full z-50 transition-all duration-300 flex justify-between items-center ${isScrolled ? 'top-4 max-w-6xl mx-auto left-0 right-0 px-8 py-4 liquid-glass text-white' : 'top-0 px-8 md:px-16 py-6 md:py-8 bg-transparent text-brand-dark'}`}>
        <div className="text-xl font-serif italic tracking-wider">VA STORE</div>
        <nav className="hidden md:flex gap-10">
          {['SHOP', 'COLLECTIONS', 'EDITORIAL', 'ABOUT'].map((item) => (
            <a key={item} href="#" className="hover:text-brand-accent transition-colors font-medium text-sm tracking-widest uppercase">
              {item}
            </a>
          ))}
        </nav>
        <button className="md:hidden" onClick={() => setIsMenuOpen(true)}>
          <Menu size={24} />
        </button>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-brand-light/98 z-[100] flex flex-col justify-center items-center transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <button className="absolute top-6 right-8 text-brand-dark" onClick={() => setIsMenuOpen(false)}>
          <X size={24} />
        </button>
        <nav className="flex flex-col gap-8 text-center">
          {['SHOP', 'COLLECTIONS', 'EDITORIAL', 'ABOUT'].map((item) => (
            <a key={item} href="#" className="text-3xl font-serif italic hover:text-brand-accent transition-colors">
              {item}
            </a>
          ))}
        </nav>
      </div>

      {/* High-End Animated Hero Gallery */}
      <HeroGallery />

      {/* Product Grid Section */}
      <ProductGrid />
    </div>
  );
}

export default App;