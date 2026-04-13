import { Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-4 left-0 right-0 z-50 mx-auto max-w-6xl px-8 py-4 liquid-glass flex justify-between items-center transition-all duration-300 text-white">
      <a href="/" className="text-xl font-bold tracking-tight uppercase">
        Styling By VA
      </a>
      
      <nav className="hidden md:flex gap-10">
        {['SHOP', 'COLLECTIONS', 'EDITORIAL', 'ABOUT'].map((item) => (
          <a key={item} href={`/${item.toLowerCase()}`} className="hover:text-brand-accent transition-colors font-medium text-sm tracking-wide">
            {item}
          </a>
        ))}
      </nav>
      
      <button className="md:hidden text-white hover:text-brand-accent transition-colors" aria-label="Open Menu">
        <Menu size={24} />
      </button>
    </header>
  );
}