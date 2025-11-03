import Navbar from './components/Navbar';
import HeroScene from './components/HeroScene';
import LoreSection from './components/LoreSection';
import EpisodesGallery from './components/EpisodesGallery';
import { Mail } from 'lucide-react';
import { useState } from 'react';

export default function App() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail('');
    }, 2200);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <HeroScene />
      <LoreSection />
      <EpisodesGallery />

      <section id="join" className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(244,63,94,0.15),transparent_60%)]" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Join the Resistance</h2>
          <p className="mt-3 text-white/80">
            Get episode drops, behind-the-scenes intel, and secret coordinates delivered straight to your inbox.
          </p>

          <form onSubmit={onSubmit} className="mt-8 mx-auto max-w-xl">
            <div className="flex flex-col sm:flex-row gap-3 items-stretch">
              <div className="relative flex-1">
                <Mail className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/50" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="you@resistance.net"
                  className="w-full rounded-xl bg-white/5 border border-white/10 pl-11 pr-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
                />
              </div>
              <button
                type="submit"
                className="rounded-xl bg-white text-black font-medium px-5 py-3 hover:bg-white/90 transition"
              >
                {submitted ? 'Subscribed!' : 'Sign up'}
              </button>
            </div>
            <p className="mt-3 text-xs text-white/50">No spam. Unsubscribe anytime.</p>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} Skibidi HQ — Fan-made universe hub.</p>
          <div className="text-white/60 text-sm">
            Crafted with vibes and Tailwind.
          </div>
        </div>
      </footer>
    </div>
  );
}
