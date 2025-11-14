import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const tiers = [
  {
    name: 'Starter',
    price: 'Free',
    desc: 'For solo founders exploring the copilot.',
    features: ['1 Workspace', 'Basic chat & dashboards', 'Email support']
  },
  {
    name: 'Growth',
    price: '$29/mo',
    desc: 'For small teams mapping processes and goals.',
    features: ['3 Workspaces', 'Orchestrated chat', 'Goal tracking', 'Priority support']
  },
  {
    name: 'Scale',
    price: '$99/mo',
    desc: 'For scaling orgs syncing revenue, ops, and teams.',
    features: ['Unlimited workspaces', 'Advanced dashboards', 'SSO & roles', 'Success manager']
  }
];

const skylineHeights = [24, 40, 56, 72, 48, 64, 36, 52, 28];

export default function Pricing() {
  return (
    <section id="pricing" className="relative z-10 mx-auto my-24 max-w-6xl px-6">
      {/* Skyline background that builds up on scroll */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(56,189,248,0.08),transparent)]" />
      </div>

      <div className="mb-10 text-center">
        <p className="mb-2 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur">Pricing</p>
        <h3 className="text-3xl font-bold sm:text-4xl">Pick your plan</h3>
        <p className="mx-auto mt-2 max-w-2xl text-white/80">Start free and upgrade when you need deeper dashboards and orchestration.</p>
      </div>

      {/* Animated skyline */}
      <div className="relative mx-auto mb-10 max-w-4xl">
        <div className="flex h-32 items-end justify-between gap-2">
          {skylineHeights.map((h, i) => (
            <motion.div
              key={i}
              initial={{ scaleY: 0, opacity: 0 }}
              whileInView={{ scaleY: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: 'easeOut' }}
              className="w-6 origin-bottom rounded-md bg-gradient-to-b from-cyan-400/80 to-cyan-500/30 shadow-[0_-6px_20px_rgba(34,211,238,0.25)_inset]"
              style={{ height: `${h * 4}px` }}
            />
          ))}
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0a0b0f] to-transparent" />
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {tiers.map((t, idx) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.15 * idx }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-cyan-500/0 via-cyan-500/0 to-cyan-500/0 transition-colors duration-300 group-hover:via-cyan-500/5 group-hover:to-cyan-500/10" />
            <h4 className="text-lg font-semibold">{t.name}</h4>
            <p className="mt-1 text-3xl font-extrabold">{t.price}</p>
            <p className="mt-1 text-sm text-white/80">{t.desc}</p>
            <ul className="mt-6 space-y-2 text-sm">
              {t.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-white/90">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-md bg-cyan-500/20 text-cyan-300"><Check size={14} /></span>
                  {f}
                </li>
              ))}
            </ul>
            <a href="#get-started" className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-cyan-500 px-4 py-2 text-sm font-semibold text-black hover:bg-cyan-400">Choose {t.name}</a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
