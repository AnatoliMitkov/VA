"use client";

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Home() {
    
    // Parallax effect specifically for the Hero Image
    useEffect(() => {
        gsap.to('.hero-img', {
            yPercent: 15, ease: "none",
            scrollTrigger: { trigger: "#smooth-content", start: "top top", end: "bottom top", scrub: true }
        });
    }, []);

    return (
        <>
            <section className="h-screen w-full relative flex flex-col justify-end pb-12 md:pb-24 px-6 md:px-12">
                <div className="absolute inset-0 w-full h-full overflow-hidden z-0 bg-[#d4c8b8]">
                    <img className="hero-img w-full h-full object-cover scale-[1.2] opacity-0" src="https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?q=80&w=2500&auto=format&fit=crop" alt="High end macrame fashion" />
                    <div className="absolute inset-0 bg-black/20"></div>
                </div>
                <div className="relative z-10 w-full flex flex-col md:flex-row justify-between items-end gap-8 text-[#EFECE8]">
                    <div className="w-full md:w-auto">
                        <div className="overflow-hidden -mb-[1vw]"><h1 className="hero-title font-serif text-[15vw] md:text-[9vw] font-light leading-none tracking-tighter uppercase translate-y-full">Woven</h1></div>
                        <div className="overflow-hidden"><h1 className="hero-title font-serif text-[15vw] md:text-[9vw] font-light leading-none tracking-tighter uppercase translate-y-full ml-0 md:ml-12">Elegance</h1></div>
                    </div>
                    <div className="w-full md:w-1/4 pb-4 md:pb-8 flex flex-col gap-4">
                        <p className="hero-sub text-xs md:text-sm tracking-[0.2em] font-light uppercase opacity-0">Elevating traditional craftsmanship into avant-garde fashion. Hand-knotted in Sofia, Bulgaria.</p>
                        <div className="hero-sub w-full h-[1px] bg-white/30 opacity-0"></div>
                        <p className="hero-sub text-xs tracking-widest uppercase opacity-0 hover-target cursor-pointer w-max">Scroll to explore ↓</p>
                    </div>
                </div>
            </section>

            <section className="py-12 md:py-24 overflow-hidden bg-[#1C1C1C] text-[#EFECE8]">
                <div className="marquee-container flex whitespace-nowrap text-3xl md:text-6xl font-serif font-light tracking-widest uppercase italic">
                    <span className="px-8">The Fall/Winter Collection</span><span className="px-8 text-white/30">•</span><span className="px-8">Handcrafted in Bulgaria</span><span className="px-8 text-white/30">•</span><span className="px-8">The Fall/Winter Collection</span><span className="px-8 text-white/30">•</span><span className="px-8">Handcrafted in Bulgaria</span><span className="px-8 text-white/30">•</span>
                </div>
            </section>

            <section className="py-24 md:py-40 px-6 md:px-12 max-w-[1800px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center">
                    <div className="md:col-span-5 flex flex-col gap-12"><h2 className="reveal-text opacity-0 translate-y-8 font-serif text-4xl md:text-6xl font-light leading-tight">Where heritage meets high-fashion.</h2><p className="reveal-text opacity-0 translate-y-8 text-sm md:text-base font-light tracking-wide max-w-md text-gray-600 leading-relaxed">Each piece is meticulously crafted using sustainable materials, blending the ancient art of macramé with modern, structural silhouettes designed for the contemporary woman.</p><a href="/collections" className="transition-link block w-full md:w-3/4 aspect-[3/4] overflow-hidden rounded-sm view-img group hover-target" data-cursor-text="View"><img className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105" src="https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=1500&auto=format&fit=crop" alt="Detail shot" /></a></div>
                    <div className="md:col-span-7 mt-12 md:mt-32"><a href="/product" className="transition-link block w-full aspect-[4/5] md:aspect-auto md:h-[90vh] overflow-hidden rounded-sm view-img relative group hover-target" data-cursor-text="Shop €450"><img className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105" src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2000&auto=format&fit=crop" alt="Main Collection Piece" /></a></div>
                </div>
            </section>
        </>
    );
}