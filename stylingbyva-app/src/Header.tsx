import { Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="site-header fixed top-4 left-0 right-0 z-50 mx-auto max-w-6xl px-8 py-4 liquid-glass flex justify-between items-center transition-all duration-300 text-brand-dark">
      <a href="/" className="logo flex items-center">
        <img src="/VA_Gold_PNG_Logo.png" alt="Styling By VA Logo" className="h-10 w-auto" />
      </a>
      
      <nav className="desktop-menu hidden md:flex gap-10">
        {['SHOP', 'COLLECTIONS', 'EDITORIAL', 'ABOUT'].map((item) => (
          <a key={item} href={`/${item.toLowerCase()}`} className="hover:text-brand-accent transition-colors font-medium text-sm tracking-wide text-brand-dark">
            {item}
          </a>
        ))}
      </nav>
      
      <button className="mobile-menu-btn md:hidden text-brand-dark hover:text-brand-accent transition-colors" aria-label="Open Menu">
        <Menu size={24} />
      </button>
    </header>
  );
}