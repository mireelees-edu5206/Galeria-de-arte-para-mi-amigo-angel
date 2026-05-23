export function Marquee() {
  const items = [
    "Joseph Paxton",
    "Gustav Klimt",
    "Antoni Gaudí",
    "Alfons Mucha",
    "Charles Tiffany",
    "Victor Horta",
    "Alexander Calder",
    "Theo Van Doesburg",
    "Gerrit Rietveld",
    "Kasimir Malevich",
    "Henri Matisse",
    "André Derain",
    "Maurice Vlaminck",
    "Albert Marquet",
    "Piet Mondrian",
    "Paul Klee",
    "Marcel Duchamp",
    "Kandinsky",
    "Robert Delaunay",
    "Umberto Boccioni",
    "Giorgio de Chirico",
    "Pablo Picasso",
    "James Ensor",
    "Egon Schiele",
    "Ernst Kirchner",
    "Edvard Munch",
  ];
  const row = [...items, ...items];
  return (
    <section className="border-y border-border py-10 overflow-hidden bg-background">
      <div className="flex whitespace-nowrap animate-marquee gap-16">
        {row.map((name, i) => (
          <div key={i} className="flex items-center gap-16 shrink-0">
            <span className="font-display text-5xl md:text-7xl uppercase tracking-tighter">{name}</span>
            <span className="text-primary font-serif italic text-3xl">✦</span>
          </div>
        ))}
      </div>
    </section>
  );
}
