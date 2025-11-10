import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Showcase from './components/Showcase';
import CTA from './components/CTA';

function Footer() {
  return (
    <footer className="bg-slate-950 py-10 text-center">
      <p className="text-sm text-white/50">© {new Date().getFullYear()} Trionn-inspired concept site. Built with love and motion.</p>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 font-inter text-white">
      <Navbar />
      <Hero />
      <Services />
      <Showcase />
      <CTA />
      <Footer />
    </div>
  );
}
