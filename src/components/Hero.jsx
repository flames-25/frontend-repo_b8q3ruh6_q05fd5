import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* top glow */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[50rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-400/30 via-indigo-400/30 to-fuchsia-400/30 blur-3xl"></div>

      {/* content */}
      <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl flex-col items-center justify-center px-4 pt-28 text-center sm:px-6 lg:px-8">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur">
          Fintech • 3D Credit Card • Glassmorphic
        </span>
        <h1 className="max-w-4xl bg-gradient-to-br from-white via-white to-white/60 bg-clip-text text-4xl font-semibold text-transparent sm:text-5xl md:text-6xl">
          Modern Digital Experiences for Ambitious Brands
        </h1>
        <p className="mt-5 max-w-2xl text-balance text-base text-white/70 sm:text-lg">
          We craft minimalist, high-performance websites with immersive 3D, motion, and crisp
          interfaces that convert. Inspired by Trionn’s signature aesthetic.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#contact"
            className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-xl shadow-cyan-500/20 transition hover:shadow-cyan-400/30"
          >
            Start a Project
          </a>
          <a
            href="#work"
            className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10"
          >
            See Our Work
          </a>
        </div>
      </div>

      {/* gradient overlay bottom for readability */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-slate-950"></div>
    </section>
  );
}
