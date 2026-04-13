import { ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';

// Mock data for high-end Macrame Fashion
const products = [
  {
    id: 1,
    name: 'Aura Macrame Dress',
    description: 'Intricate hand-knotted evening wear crafted from organic cotton.',
    price: '450.00',
    image: 'https://images.unsplash.com/photo-1515347619362-75fb04b1bf75?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Solstice Woven Tote',
    description: 'Everyday luxury with sustainable threads and wooden handles.',
    price: '180.00',
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Lumina Halter Top',
    description: 'Elegant knotted design perfect for warm summer nights.',
    price: '220.00',
    image: 'https://images.unsplash.com/photo-1603487742131-4160ec999306?q=80&w=800&auto=format&fit=crop',
  }
];

export default function ProductGrid() {
  return (
    <section className="relative z-10 w-full max-w-7xl mx-auto px-8 py-32 bg-brand-light text-brand-dark">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-16 text-center md:text-left"
      >
        <h2 className="text-4xl md:text-5xl font-serif italic tracking-tight mb-4">
          The Latest Collection<span className="text-brand-accent not-italic">.</span>
        </h2>
        <p className="text-brand-dark/60 font-medium uppercase tracking-widest text-sm">Elevate your wardrobe</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: index * 0.2, ease: "easeOut" }}
            key={product.id} 
            className="group flex flex-col bg-white/40 border border-brand-dark/5 rounded-2xl overflow-hidden hover:border-brand-accent/50 hover:shadow-2xl transition-all duration-500"
          >
            <div className="relative h-60 overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-serif italic mb-2">{product.name}</h3>
              <p className="text-sm text-brand-dark/60 mb-6 flex-grow leading-relaxed">{product.description}</p>
              <div className="flex justify-between items-center mt-auto">
                <span className="text-lg font-bold text-brand-accent">€{product.price}</span>
                <button className="flex items-center gap-2 bg-brand-dark hover:bg-brand-accent text-brand-light px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300">
                  <ShoppingBag size={16} />
                  ADD TO CART
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}