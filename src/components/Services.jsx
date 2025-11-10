import { Rocket, Sparkles, Layers3 } from 'lucide-react';

const services = [
  {
    icon: Rocket,
    title: 'Web Experiences',
    desc: 'High-impact marketing sites and product pages with sleek motion and meticulous detail.'
  },
  {
    icon: Sparkles,
    title: 'Brand & Art Direction',
    desc: 'Minimalist visual systems, typography, and 3D-driven identities that feel premium.'
  },
  {
    icon: Layers3,
    title: '3D & Interactions',
    desc: 'Spline, WebGL effects, and micro-interactions that elevate engagement without bloat.'
  }
];

export default function Services() {
  return (
    <section id="services" className="relative bg-slate-950 py-20">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(56,189,248,0.15),rgba(0,0,0,0))]"></div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">What we do</h2>
          <p className="mt-3 text-white/70">A focused set of services to take brands from idea to standout digital presence.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-indigo-400/20 ring-1 ring-white/10">
                <Icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
