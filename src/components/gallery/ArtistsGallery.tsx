import { motion } from "motion/react";
import img1 from "@/assets/1.jpg";
import img2 from "@/assets/2.jpg";
import img3 from "@/assets/3.jpg";
import img4 from "@/assets/4.jpg";
import img5 from "@/assets/5.jpg";
import img6 from "@/assets/6.jpg";
import img7 from "@/assets/7.jpg";
import img8 from "@/assets/8.jpg";
import img9 from "@/assets/9.jpg";
import img10 from "@/assets/10.jpg";
import img42 from "@/assets/42.jpg";
import img43 from "@/assets/43.jpg";
import img44 from "@/assets/44.jpg";
import img45 from "@/assets/45.jpg";
import img58 from "@/assets/58.jpg";
import img62 from "@/assets/62.jpg";
import img66 from "@/assets/66.jpg";
import img70 from "@/assets/70.jpg";
import img74 from "@/assets/74.jpg";
import img78 from "@/assets/78.jpg";
import img82 from "@/assets/82.jpg";
import img86 from "@/assets/86.jpg";
import img90 from "@/assets/90.jpg";
import img94 from "@/assets/94.jpg";
import img98 from "@/assets/98.jpg";
import img102 from "@/assets/102.jpg";

const artists = [
  { name: "Joseph Paxton", movement: "Arte Nouveau", years: "1803-1865", img: img1 },
  { name: "Gustav Klimt", movement: "Arte Nouveau", years: "1862-1918", img: img2 },
  { name: "Antoni Gaudí", movement: "Arte Nouveau", years: "1852-1926", img: img4 },
  { name: "Alfons Mucha", movement: "Arte Nouveau", years: "1860-1939", img: img5 },
  { name: "Charles Lewis Tiffany", movement: "Art Decó", years: "1848-1933", img: img3 },
  { name: "Victor Horta", movement: "Art Nouveau", years: "1861-1947", img: img6 },
  { name: "Alexander Calder", movement: "Art Decó", years: "1898-1976", img: img7 },
  { name: "Theo Van Doesburg", movement: "De Stijl", years: "1883-1931", img: img8 },
  { name: "Gerrit Rietveld", movement: "De Stijl", years: "1888-1964", img: img9 },
  { name: "Kasimir Malevich", movement: "Suprematismo", years: "1879-1935", img: img10 },
  { name: "Henri Matisse", movement: "Fauvismo", years: "1869-1954", img: img42 },
  { name: "André Derain", movement: "Fauvismo", years: "1880-1954", img: img43 },
  { name: "Maurice de Vlaminck", movement: "Fauvismo", years: "1876-1958", img: img45 },
  { name: "Albert Marquet", movement: "Fauvismo", years: "1875-1947", img: img44 },
  { name: "Piet Mondrian", movement: "Neoplasticismo", years: "1872-1944", img: img58 },
  { name: "Paul Klee", movement: "Blaue Reiter", years: "1879-1940", img: img62 },
  { name: "Marcel Duchamp", movement: "Dadaísmo", years: "1887-1968", img: img66 },
  { name: "Kandinsky", movement: "Abstraccionismo", years: "1866-1944", img: img70 },
  { name: "Robert Delaunay", movement: "Orfismo", years: "1885-1941", img: img74 },
  { name: "Umberto Boccioni", movement: "Futurismo", years: "1882-1916", img: img78 },
  { name: "Giorgio de Chirico", movement: "Metafísica", years: "1888-1978", img: img82 },
  { name: "Pablo Picasso", movement: "Cubismo", years: "1881-1973", img: img86 },
  { name: "James Ensor", movement: "Expresionismo", years: "1860-1949", img: img90 },
  { name: "Egon Schiele", movement: "Expresionismo", years: "1890-1918", img: img94 },
  { name: "Ernst Ludwig Kirchner", movement: "Expresionismo", years: "1880-1938", img: img98 },
  { name: "Edvard Munch", movement: "Expresionismo", years: "1863-1944", img: img102 },
];

export function ArtistsGallery() {
  return (
    <section className="px-6 md:px-12 py-32 md:py-48">
      <motion.div
        className="flex justify-between items-end mb-20 md:mb-32 border-b border-border pb-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="overflow-hidden">
          <motion.span
            className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary block mb-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            § III — Artistas Completos
          </motion.span>
          <motion.h2
            className="font-display text-5xl md:text-8xl uppercase leading-none"
            initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0.3 }}
            whileInView={{ clipPath: "inset(0 0% 0 0)", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Todos los<br />Artistas
          </motion.h2>
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground hidden md:block">
          26 Artistas<br />en total
        </span>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8">
        {artists.map((artist, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50, scale: 0.94 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.75,
              delay: (i % 6) * 0.07,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="group cursor-pointer"
          >
            <motion.div
              className="relative aspect-square overflow-hidden bg-surface mb-4"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <img
                src={artist.img}
                alt={artist.name}
                loading="lazy"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
              />
              <motion.div
                className="absolute inset-0 bg-primary/10"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
            <h3 className="font-display text-sm md:text-base uppercase leading-none mb-1 group-hover:text-primary transition-colors duration-300">{artist.name}</h3>
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">{artist.movement}</p>
            <p className="font-serif text-xs text-muted-foreground/60 mt-1">{artist.years}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
