import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Fintech Card UI',
    tag: '3D • Spline • Web',
    img: 'https://images.unsplash.com/photo-1556741533-f6acd6477e9e?q=80&w=1400&auto=format&fit=crop',
  },
  {
    title: 'SaaS Dashboard',
    tag: 'Product • UI/UX',
    img: 'https://images.unsplash.com/photo-1551281044-8d8d0d8de2d9?q=80&w=1400&auto=format&fit=crop',
  },
  {
    title: 'Brand System',
    tag: 'Identity • Motion',
    img: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1400&auto=format&fit=crop',
  },
];

export default function Showcase() {
  return (
    <section id="work" className="relative bg-slate-950 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(99,102,241,0.12),rgba(0,0,0,0))]"></div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Selected work</h2>
            <p className="mt-2 max-w-xl text-white/70">A snapshot of projects where design, motion, and clarity drive results.</p>
          </div>
          <a href="#contact" className="hidden items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur hover:bg-white/10 md:inline-flex">
            All Projects <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="flex items-center justify-between p-5">
                <div>
                  <h3 className="text-base font-semibold text-white">{p.title}</h3>
                  <p className="text-xs text-white/60">{p.tag}</p>
                </div>
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white/90 ring-1 ring-white/10">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
