import { motion } from "motion/react";
import exhibitionsBg from "@/assets/exhibitions-bg.jpg";

const movements = [
  { period: "SIGLO XIX—XX", title: "Arte Nouveau y Decó", description: "Movimiento cultural que surge a finales del siglo XIX y permanece hasta inicios del siglo XX, buscando contrastar con la industrialización de la Segunda Revolución Industrial. Usa motivos inspirados en la naturaleza o materiales orgánicos para plasmar la sensualidad y el erotismo en objetos de arte decorativos.", artists: "Joseph Paxton · Gustav Klimt · Antoni Gaudí · Alfons Mucha · Charles Lewis Tiffany · Victor Horta · Alexander Calder · Theo Van Doesburg · Gerrit Rietveld · Kasimir Malevich" },
  { period: "SIGLO XX", title: "Fauvismo y Expresionismo", description: "El Fauvismo es liberar el color con respecto al dibujo, ignorar claroscuros y perspectivas, expresar sentimientos. Era de gente inconformista que quiere liberarse de todo lo anterior. El color es la clave, directamente del tubo, obviando la mímesis y aplicándolo en toques rápidos y vigorosos.", artists: "Henri Matisse · André Derain · Maurice de Vlaminck · Albert Marquet · Kasimir Malevich" },
  { period: "PRIMERA MITAD SIGLO XX", title: "Vanguardias Artísticas", description: "Las vanguardias artísticas fueron movimientos de la primera mitad del siglo XX que rompieron con la tradición académica, buscando nuevas formas de expresión y lenguajes plásticos innovadores. Se caracterizaron por la rebeldía, la experimentación y la voluntad de reflejar la modernidad y sus tensiones.", artists: "Piet Mondrian · Paul Klee · Marcel Duchamp · Kandinsky · Robert Delaunay" },
  { period: "SIGLO XX", title: "Cubismo y Futurismo", description: "Abstraccionismo y Futurismo como movimientos que buscan representar el movimiento, la velocidad y la modernidad a través de formas geométricas y dinámicas, rompiendo con la perspectiva tradicional.", artists: "Pablo Picasso · Umberto Boccioni · Giorgio de Chirico" },
  { period: "SIGLO XX", title: "Expresionismo", description: "Movimiento que busca expresar emociones y experiencias subjetivas a través de la distorsión de la realidad, el uso intensivo del color y formas angulares. Representa la ansiedad, el miedo y las tensiones de la época moderna.", artists: "James Ensor · Egon Schiele · Ernst Ludwig Kirchner · Edvard Munch" },
];

export function Exhibitions() {
  return (
    <section className="relative bg-foreground text-background py-24 md:py-32 px-6 md:px-12">
      <div className="absolute inset-0 z-0">
        <img
          src={exhibitionsBg}
          alt="Exhibitions background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="relative z-10">
        <motion.div
          className="flex justify-between items-end mb-16 md:mb-24 border-b border-background/15 pb-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="overflow-hidden">
            <motion.span
              className="font-mono text-[10px] uppercase tracking-[0.3em] opacity-50 block mb-3"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 0.5, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              § IV — Movimientos Artísticos
            </motion.span>
            <motion.h2
              className="font-display text-5xl md:text-7xl uppercase leading-none"
              initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0.2 }}
              whileInView={{ clipPath: "inset(0 0% 0 0)", opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              Vanguardias
            </motion.h2>
          </div>
          <span className="font-mono text-xs uppercase tracking-[0.2em] hidden md:block">SIGLO XIX—XX</span>
        </motion.div>

        <div>
          {movements.map((mv, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="group grid grid-cols-12 py-8 md:py-10 border-b border-background/15 items-center relative overflow-hidden"
            >
              {/* Animated left accent bar */}
              <motion.div
                className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.06 + 0.3, ease: [0.16, 1, 0.3, 1] }}
                style={{ originY: 0 }}
              />
              <div className="col-span-12 md:col-span-2 font-mono text-xs md:text-sm pl-4">{mv.period}</div>
              <div className="col-span-12 md:col-span-7 mt-2 md:mt-0">
                <h3 className="font-display text-3xl md:text-5xl uppercase leading-none">
                  {mv.title}
                </h3>
                <p className="font-serif text-sm md:text-base mt-3 opacity-80 leading-relaxed">{mv.description}</p>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] mt-3 opacity-60">{mv.artists}</p>
              </div>
              <div className="col-span-12 md:col-span-3 mt-2 md:mt-0 md:text-right">
                <span className="font-mono text-[9px] uppercase tracking-[0.3em] opacity-50">Colección</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
