import Header from './Header';
import Footer from './Footer';
import '../../style.css';

function App() {

  return (
    <div className="relative min-h-screen bg-brand-light text-brand-dark overflow-x-hidden font-sans">
      {/* Global Navigation */}
      <Header />

      <main>
        {/* Background Elements */}
        <div className="video-container">
          <div className="video-overlay"></div>
          <div className="central-glow"></div>
        </div>

        {/* Hero Section */}
        <section className="hero-content">
          <div className="hero-text-wrapper">
            <p className="eyebrow">Curated Collections</p>
            <h1 className="main-headline">Styling By VA<span className="accent-dot">.</span></h1>
            <p className="description">Elevating your personal style with curated collections and editorial looks.</p>
            <button className="cta-button">Explore Now</button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;