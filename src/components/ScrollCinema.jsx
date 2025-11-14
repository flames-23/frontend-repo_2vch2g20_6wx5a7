import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function ScrollCinema() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end end'] });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 1.1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-2, 6]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.2, 0.35, 0.5, 0.2]);

  const scene1Opacity = useTransform(scrollYProgress, [0.0, 0.15, 0.25, 0.35], [1, 1, 0.4, 0]);
  const scene2Opacity = useTransform(scrollYProgress, [0.25, 0.4, 0.55, 0.65], [0, 0.6, 1, 0.4]);
  const scene3Opacity = useTransform(scrollYProgress, [0.55, 0.7, 0.85, 1], [0, 0.5, 1, 1]);

  const titleY = useTransform(scrollYProgress, [0, 0.5, 1], [40, 0, -40]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);

  return (
    <section ref={containerRef} className="relative z-10">
      <div className="relative h-[260vh] bg-gradient-to-b from-transparent via-black/20 to-black/40">
        <div className="sticky top-0 h-screen overflow-hidden">
          <motion.div style={{ opacity: glowOpacity }} className="pointer-events-none absolute -inset-40 -z-10">
            <div className="absolute left-1/2 top-1/3 h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,_rgba(124,58,237,0.25),_rgba(59,130,246,0.2),_rgba(249,115,22,0.12),_transparent_70%)] blur-3xl" />
          </motion.div>

          <motion.div style={{ scale, rotate }} className="absolute inset-0">
            <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </motion.div>

          <div className="absolute inset-0">
            <motion.div style={{ opacity: scene1Opacity }} className="absolute inset-0 flex items-center justify-center">
              <div className="mx-auto max-w-3xl p-6 text-center">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur">
                  Scene 1 • Diagnose
                </div>
                <h2 className="mb-3 text-3xl font-bold sm:text-5xl">See your business like a movie storyboard</h2>
                <p className="text-white/80">We plot your processes, teams, and metrics into clean frames so you can spot the gaps instantly.</p>
              </div>
            </motion.div>

            <motion.div style={{ opacity: scene2Opacity }} className="absolute inset-0 flex items-center justify-center">
              <div className="mx-auto max-w-3xl p-6 text-center">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-300/20 bg-blue-300/10 px-3 py-1 text-xs text-blue-100 backdrop-blur">
                  Scene 2 • Map
                </div>
                <h2 className="mb-3 text-3xl font-bold sm:text-5xl">Assemble the path with cinematic clarity</h2>
                <p className="text-white/80">Milestones slide into place with AI-crafted steps tailored to your stage and resources.</p>
              </div>
            </motion.div>

            <motion.div style={{ opacity: scene3Opacity }} className="absolute inset-0 flex items-center justify-center">
              <div className="mx-auto max-w-3xl p-6 text-center">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-1 text-xs text-amber-100 backdrop-blur">
                  Scene 3 • Scale
                </div>
                <h2 className="mb-3 text-3xl font-bold sm:text-5xl">Roll credits at 100 Cr</h2>
                <p className="text-white/80">Dashboards, orchestrated chat, and continuous audits keep your story moving to the big finale.</p>
              </div>
            </motion.div>
          </div>

          <motion.div style={{ y: titleY, opacity: titleOpacity }} className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-center">
            <p className="text-sm text-white/70">Scroll to play the trailer</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
