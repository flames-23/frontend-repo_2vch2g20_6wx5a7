import { Check } from 'lucide-react';

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

export default function Pricing() {
  return (
    <section id="pricing" className="relative z-10 mx-auto my-24 max-w-6xl px-6">
      <div className="mb-10 text-center">
        <p className="mb-2 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur">Pricing</p>
        <h3 className="text-3xl font-bold sm:text-4xl">Pick your plan</h3>
        <p className="mx-auto mt-2 max-w-2xl text-white/80">Start free and upgrade when you need deeper dashboards and orchestration.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {tiers.map((t) => (
          <div key={t.name} className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur">
            <h4 className="text-lg font-semibold">{t.name}</h4>
            <p className="mt-1 text-3xl font-extrabold">{t.price}</p>
            <p className="mt-1 text-sm text-white/80">{t.desc}</p>
            <ul className="mt-6 space-y-2 text-sm">
              {t.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-white/90">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-md bg-gradient-to-br from-purple-600 via-blue-600 to-orange-500 text-white"><Check size={14} /></span>
                  {f}
                </li>
              ))}
            </ul>
            <a href="#get-started" className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/20">Choose {t.name}</a>
          </div>
        ))}
      </div>
    </section>
  );
}
