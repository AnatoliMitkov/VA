export default function Collections() {
    return (
        <div className="pt-40 md:pt-56 pb-24 px-6 md:px-12 max-w-[1800px] mx-auto">
            <div className="mb-24 md:mb-40 flex flex-col md:flex-row justify-between items-end border-b border-[#1C1C1C]/20 pb-12">
                <div className="overflow-hidden"><h1 className="hero-title font-serif text-6xl md:text-9xl font-light leading-none tracking-tighter uppercase translate-y-full">Archive</h1></div>
                <p className="hero-sub max-w-sm text-sm md:text-base font-light tracking-wide text-gray-600 leading-relaxed opacity-0 mt-8 md:mt-0">Explore our curated archive of bespoke macramé, designed to bring structural elegance to the modern wardrobe.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-24 md:gap-y-40">
                <div className="md:col-span-5 flex flex-col gap-6">
                    <a href="/product" className="transition-link w-full aspect-[3/4] overflow-hidden rounded-sm view-img group hover-target block" data-cursor-text="Shop €450">
                        <img className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105" src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1500&auto=format&fit=crop" alt="Collection 1" />
                    </a>
                    <div className="reveal-text opacity-0 translate-y-8 flex justify-between items-center text-sm uppercase tracking-widest font-medium"><a href="/product" className="transition-link hover-target">Aura Vest</a><p>€450</p></div>
                </div>

                <div className="md:col-span-6 md:col-start-7 md:mt-40 flex flex-col gap-6">
                    <div className="w-full aspect-[4/5] overflow-hidden rounded-sm view-img group hover-target" data-cursor-text="Shop €620">
                        <img className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105" src="https://images.unsplash.com/photo-1550614000-4b95d4ed8bd9?q=80&w=1500&auto=format&fit=crop" alt="Collection 2" />
                    </div>
                    <div className="reveal-text opacity-0 translate-y-8 flex justify-between items-center text-sm uppercase tracking-widest font-medium"><p>Ethereal Gown</p><p>€620</p></div>
                </div>

                <div className="md:col-span-8 md:col-start-3 flex flex-col gap-6">
                    <div className="w-full aspect-[16/9] overflow-hidden rounded-sm view-img group hover-target" data-cursor-text="Shop €380">
                        <img className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105" src="https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2000&auto=format&fit=crop" alt="Collection 3" />
                    </div>
                    <div className="reveal-text opacity-0 translate-y-8 flex justify-between items-center text-sm uppercase tracking-widest font-medium"><p>Lumina Top</p><p>€380</p></div>
                </div>
            </div>
        </div>
    );
}