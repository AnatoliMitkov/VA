import './globals.css';
import ClientEngine from '../components/ClientEngine';

export const metadata = {
  title: 'The VA Store | High-End Macramé',
  description: 'Elevating traditional craftsmanship into avant-garde fashion. Hand-knotted in Sofia, Bulgaria.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Inter:wght@300;400;500&display=swap" rel="stylesheet" />
      </head>
      
      {/* 
        By wrapping children in ClientEngine, we isolate the heavy 
        GSAP/Lenis JavaScript to the client side, keeping Next.js blazing fast.
      */}
      <body className="bg-[#1C1C1C] text-[#1C1C1C] font-sans overflow-hidden cursor-none selection:bg-[#1C1C1C] selection:text-[#EFECE8]">
        <ClientEngine>
          {children}
        </ClientEngine>
      </body>
    </html>
  );
}