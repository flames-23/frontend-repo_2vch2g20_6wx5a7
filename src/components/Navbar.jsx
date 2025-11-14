import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const NavLinks = () => (
    <>
      <a href="#features" className="text-sm font-medium text-white/80 hover:text-white">Features</a>
      <a href="#how" className="text-sm font-medium text-white/80 hover:text-white">How it works</a>
      <a href="#pricing" className="text-sm font-medium text-white/80 hover:text-white">Pricing</a>
      <a href="#contact" className="text-sm font-medium text-white/80 hover:text-white">Contact</a>
    </>
  );

  return (
    <header className="relative z-20 w-full">
      <div className="mx-auto max-w-7xl px-6 py-5">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-4 py-3 backdrop-blur">
          <a href="#" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-cyan-500/20 text-cyan-300">SW</div>
            <span className="text-sm font-semibold tracking-tight text-white">Scaling Wolf AI</span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            <NavLinks />
          </nav>

          <div className="hidden md:block">
            <a href="#get-started" className="rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-black hover:bg-cyan-400">Get Started</a>
          </div>

          <button
            className="inline-flex items-center justify-center rounded-lg p-2 text-white md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="mt-2 space-y-1 rounded-2xl border border-white/10 bg-black/50 p-3 backdrop-blur md:hidden">
            <div className="flex flex-col gap-1">
              <NavLinks />
              <a href="#get-started" className="mt-2 rounded-lg bg-cyan-500 px-3 py-2 text-center text-sm font-semibold text-black hover:bg-cyan-400">Get Started</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
