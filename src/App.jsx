import Navbar from './components/Navbar';
import Pricing from './components/Pricing';
import { ArrowRight, Check, MoveRight } from 'lucide-react';
import { motion } from 'framer-motion';

function Accent() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(56,189,248,0.15),transparent),radial-gradient(40%_30%_at_80%_60%,rgba(59,130,246,0.12),transparent)]" />
      <div className="absolute left-1/2 top-[35%] h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.18),rgba(99,102,241,0.12),transparent_70%)] blur-3xl" />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 pb-16 pt-36">
      <Accent />
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-white/80 backdrop-blur">
            New design • Motion-first • Brand-ready
          </div>
          <h1 className="text-balance bg-gradient-to-b from-white to-white/70 bg-clip-text text-5xl font-extrabold leading-[1.1] text-transparent sm:text-6xl">
            Scale smarter.
            <br />
            Build faster.
          </h1>
          <p className="mt-4 max-w-xl text-pretty text-white/80">
            Scaling Wolf AI is your lean growth copilot. Map what matters, align teams, and move from idea to 100 Cr with clarity — minus the visual noise.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#get-started" className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 text-sm font-semibold text-black shadow hover:bg-cyan-400">
              Get started free <ArrowRight size={16} />
            </a>
            <a href="#how" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 hover:bg-white/10">
              How it works
            </a>
          </div>

          <div className="mt-6 flex items-center gap-6 text-xs text-white/60">
            <div className="flex items-center gap-2"><span className="inline-flex h-5 w-5 items-center justify-center rounded-md bg-cyan-500/20 text-cyan-300"><Check size={14} /></span>No credit card</div>
            <div className="flex items-center gap-2"><span className="inline-flex h-5 w-5 items-center justify-center rounded-md bg-cyan-500/20 text-cyan-300"><Check size={14} /></span>Setup in minutes</div>
            <div className="flex items-center gap-2"><span className="inline-flex h-5 w-5 items-center justify-center rounded-md bg-cyan-500/20 text-cyan-300"><Check size={14} /></span>AI guidance</div>
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="relative">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-1 shadow-2xl backdrop-blur">
            <div className="rounded-2xl bg-gradient-to-b from-white/10 to-white/0 p-6">
              <div className="mb-4 text-xs uppercase tracking-wider text-white/60">Blueprint</div>
              <div className="grid grid-cols-3 gap-3">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="aspect-video rounded-xl border border-white/10 bg-white/[0.06]" />
                ))}
              </div>
              <div className="mt-6 flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-3">
                <div>
                  <p className="text-sm font-medium">Your roadmap</p>
                  <p className="text-xs text-white/60">Milestones auto-generated</p>
                </div>
                <button className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-3 py-2 text-xs font-semibold text-black hover:bg-cyan-400">
                  Open <MoveRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Benefits() {
  const items = [
    {
      title: 'Clarity over clutter',
      desc: 'Cut through noise with a simple plan that everyone can follow.',
    },
    {
      title: 'Operate as one',
      desc: 'Goals, owners, and metrics aligned across teams in one view.',
    },
    {
      title: 'Always-on guidance',
      desc: 'Your AI copilot spots gaps and nudges the right next move.',
    },
  ];
  return (
    <section id="features" className="relative mx-auto max-w-6xl px-6 pb-10">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {items.map((it) => (
          <div key={it.title} className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-sm backdrop-blur transition-colors hover:bg-white/10">
            <h3 className="text-base font-semibold">{it.title}</h3>
            <p className="mt-1 text-sm text-white/75">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { k: 'Diagnose', d: 'Audit metrics and map your current state.' },
    { k: 'Map', d: 'Generate milestones and assign owners.' },
    { k: 'Scale', d: 'Track progress with live dashboards.' },
  ];
  return (
    <section id="how" className="relative mx-auto max-w-6xl px-6 py-16">
      <div className="mb-8 text-center">
        <p className="mb-2 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-white/80 backdrop-blur">How it works</p>
        <h2 className="text-3xl font-bold sm:text-4xl">From idea to execution</h2>
        <p className="mx-auto mt-2 max-w-2xl text-white/75">A lightweight flow designed to align your team and move fast without the animation overload.</p>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {steps.map((s, i) => (
          <motion.div key={s.k} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.05 }} className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-md bg-cyan-500/20 text-cyan-300">{i + 1}</div>
            <h3 className="text-base font-semibold">{s.k}</h3>
            <p className="mt-1 text-sm text-white/75">{s.d}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="get-started" className="relative mx-auto max-w-5xl px-6 py-16">
      <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-white/10 to-white/0 p-8 text-center backdrop-blur">
        <h3 className="text-2xl font-semibold">Ready when you are</h3>
        <p className="mx-auto mt-2 max-w-2xl text-white/75">Create a workspace, set goals, and let the copilot map your path. You can always switch to the cinematic mode later.</p>
        <a className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 text-sm font-semibold text-black shadow hover:bg-cyan-400" href="#">
          Create free account <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-5xl px-6 py-16">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
        <h3 className="mb-2 text-xl font-semibold">Contact</h3>
        <p className="text-white/75">Want brand-aligned visuals or custom motion? Share your brief and we’ll tailor it to your identity.</p>
        <form className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <input className="rounded-xl border border-white/10 bg-white/10 p-3 text-sm text-white placeholder-white/60 outline-none" placeholder="Name" />
          <input className="rounded-xl border border-white/10 bg-white/10 p-3 text-sm text-white placeholder-white/60 outline-none" placeholder="Email" />
          <textarea rows="4" className="sm:col-span-2 rounded-xl border border-white/10 bg-white/10 p-3 text-sm text-white placeholder-white/60 outline-none" placeholder="Tell us what you want to change" />
          <button type="button" className="sm:col-span-2 rounded-xl bg-cyan-500 px-6 py-3 text-sm font-semibold text-black hover:bg-cyan-400">Send</button>
        </form>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0a0b0f] text-white">
      <Navbar />
      <main className="relative">
        <Hero />
        <Benefits />
        <Process />
        <Pricing />
        <CTA />
        <Contact />
      </main>
      <footer className="relative z-10 border-t border-white/10 py-10 text-center text-white/60">
        <p>© {new Date().getFullYear()} Scaling Wolf AI — All rights reserved.</p>
      </footer>
    </div>
  );
}
