const EPISODES = [
  {
    id: 1,
    title: 'Episode 1: Flush of Fate',
    thumb:
      'https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1200&auto=format&fit=crop',
    desc: 'The first encounter between Cameramen and Skibidi Toilets shakes the city.'
  },
  {
    id: 2,
    title: 'Episode 2: Frequency War',
    thumb:
      'https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?q=80&w=1200&auto=format&fit=crop',
    desc: 'Speakermen deploy resonance cannons to counter the groove.'
  },
  {
    id: 3,
    title: 'Episode 3: Broadcast Breaker',
    thumb:
      'https://images.unsplash.com/photo-1584380931255-c797bccc273f?q=80&w=1200&auto=format&fit=crop',
    desc: 'TV Men hijack the airwaves to reveal the truth.'
  },
  {
    id: 4,
    title: 'Episode 4: Toiletron Rises',
    thumb:
      'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?q=80&w=1200&auto=format&fit=crop',
    desc: 'A mega Skibidi fuses with a city block. The showdown begins.'
  },
];

export default function EpisodesGallery() {
  return (
    <section id="episodes" className="bg-black py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Episodes</h2>
            <p className="mt-2 text-white/70">Catch up on the saga with our featured highlights.</p>
          </div>
          <a href="#join" className="hidden sm:inline-block px-4 py-2 rounded-full bg-white text-black font-medium hover:bg-white/90">Get Notified</a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {EPISODES.map((ep) => (
            <article key={ep.id} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <div className="aspect-video overflow-hidden">
                <img src={ep.thumb} alt={ep.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-4">
                <h3 className="text-white font-semibold">{ep.title}</h3>
                <p className="mt-1 text-sm text-white/70">{ep.desc}</p>
                <button className="mt-4 inline-flex items-center px-3 py-2 rounded-lg bg-white text-black text-sm font-medium hover:bg-white/90">
                  Watch teaser
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
