import { Menu, X, Rocket } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Lore', href: '#lore' },
    { label: 'Episodes', href: '#episodes' },
    { label: 'Join', href: '#join' },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-black/30 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2 text-white">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-amber-400 grid place-items-center">
              <Rocket className="h-5 w-5 text-white" />
            </div>
            <span className="font-semibold tracking-tight">Skibidi HQ</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-white/80 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#join"
              className="px-4 py-2 rounded-full bg-white text-black font-medium hover:bg-white/90 transition"
            >
              Join the Crew
            </a>
          </nav>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
            className="md:hidden text-white"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2 rounded-lg text-white/90 hover:bg-white/10"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#join"
                onClick={() => setOpen(false)}
                className="block text-center px-4 py-2 rounded-full bg-white text-black font-medium hover:bg-white/90"
              >
                Join the Crew
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
