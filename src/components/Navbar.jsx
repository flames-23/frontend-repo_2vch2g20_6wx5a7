import { Menu, Sparkles } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-20 w-full">
      <div className="mx-auto max-w-7xl px-6 py-5">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/60 px-4 py-3 shadow-lg shadow-black/5 backdrop-blur-md dark:bg-black/40">
          <a href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 via-blue-500 to-orange-400 text-white shadow">
              <Sparkles size={22} />
            </div>
            <div>
              <p className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                Scaling Wolf AI
              </p>
              <p className="-mt-1 text-[11px] uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Diagnose • Map • Scale
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            <a href="#features" className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Features</a>
            <a href="#how" className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">How it works</a>
            <a href="#contact" className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Contact</a>
          </nav>

          <div className="hidden md:block">
            <a
              href="#get-started"
              className="rounded-xl bg-gradient-to-r from-purple-600 via-blue-600 to-orange-500 px-4 py-2 text-sm font-semibold text-white shadow hover:opacity-95"
            >
              Get Started
            </a>
          </div>

          <button
            className="inline-flex items-center justify-center rounded-lg p-2 md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6 text-gray-800 dark:text-white" />
          </button>
        </div>

        {open && (
          <div className="mt-2 space-y-1 rounded-2xl border border-white/10 bg-white/70 p-3 shadow-lg backdrop-blur-lg dark:bg-black/40 md:hidden">
            <a href="#features" className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-800 hover:bg-white/60 dark:text-gray-200 dark:hover:bg-white/10">Features</a>
            <a href="#how" className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-800 hover:bg-white/60 dark:text-gray-200 dark:hover:bg-white/10">How it works</a>
            <a href="#contact" className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-800 hover:bg-white/60 dark:text-gray-200 dark:hover:bg-white/10">Contact</a>
            <a href="#get-started" className="block rounded-lg bg-gradient-to-r from-purple-600 via-blue-600 to-orange-500 px-3 py-2 text-center text-sm font-semibold text-white">Get Started</a>
          </div>
        )}
      </div>
    </header>
  );
}
