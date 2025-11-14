import { motion, useScroll, useTransform } from 'framer-motion';

export default function ParallaxReel() {
  const { scrollYProgress } = useScroll();
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const fgY = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);

  return (
    <section id="how" className="relative z-10">
      <div className="relative h-[140vh]">
        <motion.div style={{ y: bgY }} className="absolute inset-0 -z-10 bg-[radial-gradient(80%_60%_at_50%_40%,rgba(59,130,246,0.15),transparent),radial-gradient(60%_40%_at_20%_80%,rgba(168,85,247,0.15),transparent)]" />

        <div className="sticky top-0 mx-auto flex h-screen max-w-6xl items-center px-6">
          <div className="grid w-full grid-cols-1 items-center gap-10 md:grid-cols-2">
            <motion.div style={{ y: fgY }} className="space-y-4">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur">
                How it works
              </p>
              <h3 className="text-3xl font-bold sm:text-4xl">Scroll-shot parallax</h3>
              <p className="text-white/80">Every scroll advances your storyline — diagnose bottlenecks, map next steps, and scale with confidence.</p>
              <ul className="list-disc space-y-2 pl-5 text-white/80">
                <li>Sticky 3D hero stays in frame while content advances</li>
                <li>Parallax layers create depth like a movie shot</li>
                <li>Framer Motion powers smooth transforms</li>
              </ul>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              {[1,2,3,4].map(i => (
                <motion.div key={i} whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }} transition={{ duration: 0.6, delay: i * 0.05 }} className="h-36 rounded-2xl border border-white/10 bg-white/5 backdrop-blur" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
