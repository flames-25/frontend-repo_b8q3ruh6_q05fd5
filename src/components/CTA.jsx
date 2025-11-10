export default function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-slate-950 py-20">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(236,72,153,0.08),rgba(0,0,0,0))]"></div>
      <div className="relative mx-auto max-w-4xl rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.07] p-8 text-center backdrop-blur">
        <h3 className="text-2xl font-semibold text-white sm:text-3xl">Have an idea worth polishing?</h3>
        <p className="mx-auto mt-3 max-w-2xl text-white/70">
          Let’s design a site that feels crisp, modern, and purposeful. Share a few details and we’ll get back in 24 hours.
        </p>
        <form className="mx-auto mt-8 grid max-w-xl gap-3 sm:grid-cols-2">
          <input className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-white/20" placeholder="Your name" />
          <input type="email" className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-white/20" placeholder="Email" />
          <input className="sm:col-span-2 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-white/20" placeholder="Project budget (optional)" />
          <textarea rows={4} className="sm:col-span-2 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-white/20" placeholder="Tell us about your project"></textarea>
          <button className="sm:col-span-2 mt-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-xl shadow-pink-500/20 transition hover:shadow-pink-400/30">
            Request Proposal
          </button>
        </form>
      </div>
    </section>
  );
}
