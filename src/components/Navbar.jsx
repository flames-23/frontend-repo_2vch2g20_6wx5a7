import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const NavLinks = () => (
    <>
      <a href="#features" className="group relative text-sm font-medium text-white/80 hover:text-white">
        <span>Features</span>
        <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-cyan-400 to-indigo-400 transition-all duration-300 group-hover:w-full" />
      </a>
      <a href="#how" className="group relative text-sm font-medium text-white/80 hover:text-white">
        <span>How it works</span>
        <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-cyan-400 to-indigo-400 transition-all duration-300 group-hover:w-full" />
      </a>
      <a href="#pricing" className="group relative text-sm font-medium text-white/80 hover:text-white">
        <span>Pricing</span>
        <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-cyan-400 to-indigo-400 transition-all duration-300 group-hover:w-full" />
      </a>
      <a href="#contact" className="group relative text-sm font-medium text-white/80 hover:text-white">
        <span>Contact</span>
        <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-cyan-400 to-indigo-400 transition-all duration-300 group-hover:w-full" />
      </a>
    </>
  );

  return (
    <header className="fixed inset-x-0 top-0 z-30">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`mx-auto max-w-7xl px-6 ${scrolled ? "py-3" : "py-5"}`}
      >
        <div className={`relative flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-4 ${scrolled ? "py-2.5" : "py-3.5"} backdrop-blur-xl`}>          
          {/* Glow accent */}
          <div className="pointer-events-none absolute inset-0 -z-10 rounded-2xl ring-1 ring-white/10 before:absolute before:inset-0 before:-z-10 before:rounded-2xl before:bg-[radial-gradient(120%_80%_at_0%_0%,rgba(56,189,248,0.15),transparent),radial-gradient(120%_80%_at_100%_0%,rgba(99,102,241,0.12),transparent)]" />

          <a href="#" className="relative flex items-center gap-2">
            <motion.div
              initial={false}
              animate={{ scale: scrolled ? 0.92 : 1 }}
              className="flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-b from-cyan-400/25 to-indigo-400/20 text-cyan-200 shadow-inner shadow-cyan-500/20"
            >
              SW
            </motion.div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-semibold tracking-tight text-white">Scaling Wolf AI</span>
              <span className="text-[10px] font-medium text-white/50">Scale smarter</span>
            </div>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            <NavLinks />
          </nav>

          <div className="hidden md:block">
            <a href="#get-started" className="group relative inline-flex items-center overflow-hidden rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-black transition-colors hover:bg-cyan-400">
              <span className="relative z-10">Get Started</span>
              <span className="absolute inset-0 -z-0 translate-y-8 bg-white/30 blur-lg transition-transform duration-500 group-hover:translate-y-0" />
            </a>
          </div>

          <button
            className="inline-flex items-center justify-center rounded-lg p-2 text-white md:hidden"
            onClick={() => setOpen((s) => !s)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="mt-2 overflow-hidden rounded-2xl border border-white/10 bg-black/60 p-3 backdrop-blur md:hidden"
            >
              <div className="flex flex-col gap-2">
                <NavLinks />
                <a href="#get-started" className="mt-2 rounded-lg bg-cyan-500 px-3 py-2 text-center text-sm font-semibold text-black hover:bg-cyan-400">Get Started</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
}
