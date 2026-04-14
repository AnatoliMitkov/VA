
export default function Footer() {
  return (
    <footer className="w-full bg-[#070b0a] text-white py-16 px-8 mt-20 border-t border-white/10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand Section */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold tracking-tight uppercase mb-4 text-[#5ed29c]">
            Styling By VA
          </h2>
          <p className="text-sm text-white/70 max-w-sm leading-relaxed">
            Elevating your personal style with curated collections and editorial looks. 
            Experience the intersection of high fashion and everyday elegance.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-white/90">Explore</h3>
          <ul className="flex flex-col gap-3">
            {['Shop', 'Collections', 'Editorial', 'About'].map((item) => (
              <li key={item}>
                <a href={`/${item.toLowerCase()}`} className="text-sm text-white/60 hover:text-[#5ed29c] transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-white/90">Support</h3>
          <ul className="flex flex-col gap-3">
            {['Contact', 'FAQ', 'Shipping', 'Returns'].map((item) => (
              <li key={item}>
                <a href={`/${item.toLowerCase()}`} className="text-sm text-white/60 hover:text-[#5ed29c] transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-xs text-white/50">
          &copy; {new Date().getFullYear()} Styling By VA. All rights reserved.
        </p>
        <div className="flex gap-5">
          <a href="#" className="text-white/50 hover:text-[#5ed29c] transition-colors" aria-label="Instagram">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>
          <a href="#" className="text-white/50 hover:text-[#5ed29c] transition-colors" aria-label="Twitter">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
          </a>
          <a href="#" className="text-white/50 hover:text-[#5ed29c] transition-colors" aria-label="Facebook">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
          </a>
        </div>
      </div>
    </footer>
  );
}