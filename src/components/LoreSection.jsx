export default function LoreSection() {
  const points = [
    {
      title: 'Origins of the Skibidi',
      text:
        'Born from a glitch in the algorithm, the Skibidi Toilets emerged as chaotic entities powered by rhythm and meme-energy.',
    },
    {
      title: 'The Cameramen Alliance',
      text:
        'An elite task force formed to document and defend humanity. Their lenses channel focused beams that disrupt Skibidi vibes.',
    },
    {
      title: 'Speakermen & TV Men',
      text:
        'Masters of frequency and signal manipulation. Together, they orchestrate sonic counterattacks and broadcast hope.',
    },
  ];

  return (
    <section id="lore" className="relative bg-black text-white py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.15),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Lore Compendium</h2>
            <p className="mt-4 text-white/80">
              A quick primer on the universe so you can jump right into the action with context.
            </p>
            <div className="mt-8 grid gap-6">
              {points.map((p) => (
                <div key={p.title} className="p-5 rounded-2xl border border-white/10 bg-white/5">
                  <h3 className="font-semibold text-lg">{p.title}</h3>
                  <p className="mt-2 text-white/70">{p.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1614852206734-6728910bcd47?q=80&w=1400&auto=format&fit=crop"
                alt="Neon dystopian city vibes"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-4 text-sm text-white/60">
              Field log image retrieved from a parallel timeline.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
