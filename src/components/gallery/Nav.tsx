import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useState } from "react";

export function Nav() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);

  useMotionValueEvent(scrollY, "change", (y) => {
    const delta = y - lastY;
    setLastY(y);
    // Oculta rápido al bajar más de 60px, reaparece al subir
    if (delta > 8 && y > 60) {
      setHidden(true);
    } else if (delta < -4) {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      animate={hidden ? { y: "-110%", opacity: 0 } : { y: 0, opacity: 1 }}
      transition={{ duration: 0.18, ease: [0.4, 0, 0.2, 1] }}
      className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-6 border-b border-border bg-background/70 backdrop-blur-lg"
    >
      <div className="flex flex-col leading-none">
        <span className="font-mono text-[10px] tracking-[0.3em] text-primary uppercase">Vanguardias Artísticas · MMXXVI</span>
        <span className="font-display text-2xl md:text-3xl tracking-tight uppercase mt-1">Bitácora de Historia</span>
        <p className="font-serif text-sm text-muted-foreground mt-2 max-w-md">
          Explora las vanguardias artísticas del siglo XIX y XX: Arte Nouveau, Art Decó, Fauvismo, Expresionismo, Cubismo y más.
        </p>
      </div>
    </motion.nav>
  );
}
