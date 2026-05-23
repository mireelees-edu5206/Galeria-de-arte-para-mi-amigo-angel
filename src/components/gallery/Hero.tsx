import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "120%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <header ref={ref} className="relative h-[120vh] flex flex-col justify-center px-6 md:px-12 overflow-hidden">
      <motion.div style={{ y: y1, opacity }} className="relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[18vw] md:text-[15vw] leading-[0.82] uppercase tracking-tighter"
        >
          Arte
          <br />
          <span className="ml-[12vw] italic font-serif font-normal normal-case tracking-tight text-primary">Nouveau</span>{" "}
          <span className="text-stroke">& Decó</span>
        </motion.h1>
      </motion.div>

      <motion.div
        style={{ y: y2 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1.2 }}
        className="absolute right-6 md:right-12 bottom-24 md:bottom-32 max-w-xs md:max-w-sm z-10"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary block mb-4">
          Creado por Angel Gonzalez de la Cruz
        </span>
        <p className="font-serif text-xs md:text-sm italic leading-relaxed text-muted-foreground text-pretty">
          Una galería digital que explora las vanguardias artísticas del siglo XIX y XX, desde el Arte Nouveau hasta el Expresionismo. Descubre obras maestras de Paxton, Klimt, Gaudí, Picasso y otros genios que revolucionaron el arte moderno.
        </p>
      </motion.div>

      <div className="absolute top-6 left-6 md:top-12 md:left-12 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground z-10">
        ARTE NOUVEAU<br />Y DECÓ
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[9px] uppercase tracking-[0.4em] text-muted-foreground animate-pulse z-10">
        ↓ Explorar la colección
      </div>
    </header>
  );
}
