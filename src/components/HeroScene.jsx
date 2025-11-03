import Spline from '@splinetool/react-spline';

export default function HeroScene() {
  return (
    <section id="home" className="relative min-h-[80vh] w-full overflow-hidden bg-gradient-to-b from-black via-indigo-950 to-black pt-16">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/6gTzT1dY1b4Pp3bS/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
            Skibidi Toilet: Rise of the Toiletron
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-white/80">
            Dive into the most absurd, action-packed universe on the internet. Follow the Cameramen, Speakermen, and TV Men as they battle the chaotic Skibidi Toilets.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#episodes" className="px-5 py-3 rounded-full bg-white text-black font-medium hover:bg-white/90 transition">Watch Episodes</a>
            <a href="#lore" className="px-5 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition">Explore Lore</a>
          </div>
        </div>
      </div>
    </section>
  );
}
