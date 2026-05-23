import { motion } from "motion/react";
import josephPaxton2 from "@/assets/joseph-paxton-2.png";

export function ArtistSpotlight() {
  return (
    <section className="px-6 md:px-12 py-32 grid grid-cols-12 gap-8 md:gap-12 items-center border-t border-border">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="col-span-12 md:col-span-5"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary block mb-4">
          § III — Arquitecto Visionario
        </span>
        <h2 className="font-display text-6xl md:text-8xl uppercase leading-[0.85] mb-8">
          Joseph<br />Paxton
        </h2>
        <p className="font-serif text-lg leading-relaxed text-muted-foreground mb-10 text-pretty">
          Arquitecto y jardinero inglés del siglo XIX, conocido por su innovador uso del hierro y el cristal en la arquitectura. Su obra más famosa, el{" "}
          <span className="text-foreground italic">Palacio de Cristal</span> (1851), revolucionó la arquitectura de invernaderos y espacios de exhibición.
        </p>
        <a
          href="#"
          className="group inline-flex items-center gap-3 px-8 py-4 border border-primary text-primary text-[10px] uppercase tracking-[0.3em] font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-500"
        >
          Ver la obra
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="col-span-12 md:col-span-7 relative flex justify-end"
      >
        <div className="relative w-full md:w-[85%] aspect-[3/4] overflow-hidden">
          <img
            src={josephPaxton2}
            alt="La Fuente del Emperador — Joseph Paxton"
            loading="lazy"
            className="w-full h-full object-cover object-center"
            width={1200}
            height={1600}
          />
          <div className="absolute top-4 right-4 font-mono text-[9px] uppercase tracking-[0.2em] text-foreground/60 leading-tight text-right">
            La Fuente del Emperador · 1843<br />
            Arquitectura · Chatsworth
          </div>
          <div className="absolute bottom-4 left-4 font-mono text-[9px] uppercase tracking-[0.3em] text-primary">
            Plate 003 / Visionario
          </div>
        </div>
      </motion.div>
    </section>
  );
}
