import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import artwork from "@/assets/exhibitions-bg.jpg";

export function FeaturedWork() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.15, 1, 1.05]);
  const brightness = useTransform(scrollYProgress, [0, 0.4, 0.9], [0.4, 1, 0.6]);
  const labelY = useTransform(scrollYProgress, [0.3, 0.7], [80, 0]);
  const labelOpacity = useTransform(scrollYProgress, [0.3, 0.55], [0, 1]);

  return (
    <section ref={ref} className="relative h-[280vh] bg-background">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            filter: useTransform(brightness, (b) => `brightness(${b})`),
          }}
        >
          <motion.img
            src={artwork}
            alt="Ephemeral Tensions — featured artwork in deep monochrome"
            style={{ scale }}
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40 z-10" />

        <div className="absolute top-10 left-6 md:left-12 z-20 font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
          ALPHONSE MUCHA · 1896
        </div>

        <motion.div
          style={{ y: labelY, opacity: labelOpacity }}
          className="absolute bottom-16 left-6 md:left-12 z-20 max-w-md bg-background/80 backdrop-blur-md border-l-2 border-primary p-6 md:p-8"
        >
          <span className="font-mono text-[10px] block mb-3 text-primary tracking-[0.3em]">ALPHONSE MUCHA</span>
          <h3 className="font-display text-3xl md:text-4xl uppercase mb-4 leading-none">Las Cuatro Estaciones</h3>
          <p className="text-[11px] leading-loose text-muted-foreground uppercase tracking-[0.2em]">
            The Four Seasons · 1896
          </p>
        </motion.div>

        <motion.div
          style={{ opacity: useTransform(scrollYProgress, [0, 0.3], [1, 0]) }}
          className="absolute bottom-8 right-6 md:right-12 z-20 font-mono text-[9px] uppercase tracking-[0.4em] text-muted-foreground"
        >
          Descubrir más
        </motion.div>
      </div>
    </section>
  );
}
