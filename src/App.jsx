import Spline from '@splinetool/react-spline';
import Navbar from './components/Navbar';
import { ArrowRight, ShieldCheck, LineChart, Users } from 'lucide-react';

function GradientAura() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-0">
      <div className="absolute left-1/2 top-1/3 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,_rgba(124,58,237,0.25),_rgba(59,130,246,0.18),_rgba(249,115,22,0.12),_transparent_70%)] blur-3xl" />
    </div>
  );
}

function Feature({ icon: Icon, title, desc }) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/60 p-6 shadow-lg shadow-black/5 backdrop-blur-md transition hover:translate-y-[-2px] hover:bg-white/70 dark:bg-black/40">
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 via-blue-600 to-orange-500 text-white shadow">
        <Icon size={22} />
      </div>
      <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300">{desc}</p>
    </div>
  );
}

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0b1020] via-[#0b0f1a] to-[#0a0d14] text-white">
      <Navbar />

      <main className="relative">
        <section className="relative mx-auto flex min-h-[78vh] max-w-7xl flex-col items-center justify-center px-6 pt-10 text-center">
          <GradientAura />

          <div className="absolute inset-0">
            <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>

          <div className="relative z-10 mt-28 max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium text-white/80 shadow backdrop-blur-md">
              <span className="inline-flex h-1.5 w-1.5 animate-pulse rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-orange-400" />
              AI Growth Copilot for SMBs
            </div>

            <h1 className="mb-4 bg-gradient-to-br from-white via-white to-white/70 bg-clip-text text-5xl font-extrabold leading-tight text-transparent sm:text-6xl">
              Diagnose. Map. Scale.
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-base text-white/80 sm:text-lg">
              Turn your business vision into a data-driven plan. Set goals, map core processes, and let our AI co-pilot uncover the fastest path from today to 100 Cr.
            </p>

            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href="#get-started" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 via-blue-600 to-orange-500 px-5 py-3 text-sm font-semibold text-white shadow hover:opacity-95">
                Start Free →
              </a>
              <a href="#demo" className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur-md hover:bg-white/10">
                Watch Demo
                <ArrowRight size={16} />
              </a>
            </div>

            <p className="mt-4 text-xs text-white/60">No credit card • Try the chat + dashboards in minutes</p>
          </div>
        </section>

        <section id="features" className="relative z-10 mx-auto mb-24 mt-10 max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <Feature icon={ShieldCheck} title="Business Setup" desc="Set your business type, map core processes, and define targets in one guided flow." />
            <Feature icon={LineChart} title="Smart Dashboards" desc="Goals, health score, and focused views for Sales, Teams, Processes, Finance and Founders." />
            <Feature icon={Users} title="AI Chat Orchestrator" desc="Your copilot audits data gaps and collects what's missing through natural chat." />
          </div>
        </section>

        <section id="get-started" className="relative z-10 mx-auto mb-24 max-w-5xl px-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center shadow-lg backdrop-blur-xl">
            <h2 className="mb-3 text-2xl font-semibold">Ready to scale with the wolf pack?</h2>
            <p className="mb-6 text-white/80">
              Create your workspace, add your business details, and explore the 3D-powered experience.
            </p>
            <a className="inline-block rounded-xl bg-gradient-to-r from-purple-600 via-blue-600 to-orange-500 px-6 py-3 text-sm font-semibold text-white shadow hover:opacity-95" href="#">
              Create Free Account
            </a>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/10/5 py-10 text-center text-white/60">
        <p>© {new Date().getFullYear()} Scaling Wolf AI — All rights reserved.</p>
      </footer>
    </div>
  );
}
