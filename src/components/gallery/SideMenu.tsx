import { motion, AnimatePresence } from "motion/react";
import { useState, useMemo, useCallback, useEffect } from "react";

/* ── artist data (matches ArtistsGallery) ────────────────────────── */
const artistsByMovement: Record<string, string[]> = {
  "Arte Nouveau": ["Joseph Paxton", "Gustav Klimt", "Antoni Gaudí", "Alfons Mucha", "Charles Lewis Tiffany", "Victor Horta"],
  "Art Decó": ["Alexander Calder"],
  "De Stijl": ["Theo Van Doesburg", "Gerrit Rietveld"],
  "Suprematismo": ["Kasimir Malevich", "Piet Mondrian", "Paul Klee"],
  "Fauvismo": ["Henri Matisse", "André Derain", "Albert Marquet", "Maurice Vlaminick"],
  "Dadaísmo": ["Marcel Duchamp", "Kandinsky"],
  "Abstraccionismo": ["Robert Delaunay"],
  "Futurismo": ["Umberto Boccioni", "Giorgio de Chirico"],
  "Cubismo": ["Pablo Picasso"],
  "Expresionismo": ["James Ensor", "Egon Schiele", "Ernst Ludwing Kircher", "Edvard Munch"],
};

// Maps SideMenu artist name → data-artist attribute value in WorksGrid
// (handles name mismatches like "Antoni Gaudí" → "ANTONIO GAUDÍ")
const artistToDataAttr: Record<string, string> = {
  "Joseph Paxton": "JOSEPH PAXTON",
  "Gustav Klimt": "GUSTAV KLIMT",
  "Antoni Gaudí": "ANTONIO GAUDÍ",
  "Alfons Mucha": "ALFONS MARIA MUCHA",
  "Charles Lewis Tiffany": "CHARLES LEWIS TIFFANY",
  "Victor Horta": "VICTOR HORTA",
  "Alexander Calder": "ALEXANDER CALDER",
  "Theo Van Doesburg": "THEO VAN DOESBURG",
  "Gerrit Rietveld": "GERRIT RIETVELD",
  "Kasimir Malevich": "KASIMIR MALEVICH",
  "Henri Matisse": "HENRI MATISSE",
  "André Derain": "ANDRÉ DERAIN",
  "Albert Marquet": "ALBERT MARQUET",
  "Maurice Vlaminick": "MAURICE VLAMINICK",
  "Marcel Duchamp": "MARCEL DUCHAMP",
  "Kandinsky": "KANDINSKY",
  "Piet Mondrian": "PIET MONDRIAN",
  "Paul Klee": "PAUL KLEE",
  "Robert Delaunay": "ROBERT DELAUNAY",
  "Umberto Boccioni": "UMBERTO BOCCIONI",
  "Giorgio de Chirico": "GIORGIO DE CHIRICO",
  "Pablo Picasso": "PABLO PICASSO",
  "James Ensor": "JAMES ENSOR",
  "Egon Schiele": "EGON SCHIELE",
  "Ernst Ludwing Kircher": "ERNST LUDWING KIRCHER",
  "Edvard Munch": "EDVARD MUNCH",
};

const allMovements = Object.keys(artistsByMovement);
const allArtists = Object.values(artistsByMovement).flat();

/* ── Artwork type ─────────────────────────────────────────────── */
interface Artwork {
  title: string;
  artist: string;
}

/* ── scroll helpers ────────────────────────────────────────────── */
function scrollToArtist(name: string) {
  // Use the data-artist attribute for precise targeting
  const dataValue = artistToDataAttr[name];
  let el: Element | null = null;

  if (dataValue) {
    el = document.querySelector(`[data-artist="${dataValue}"]`);
  }

  // Fallback: scan all [data-artist] elements for partial match
  if (!el) {
    const allArtistEls = document.querySelectorAll("[data-artist]");
    for (const a of allArtistEls) {
      const attr = (a.getAttribute("data-artist") || "").toUpperCase();
      if (attr.includes(name.toUpperCase()) || name.toUpperCase().includes(attr)) {
        el = a;
        break;
      }
    }
  }

  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "center" });
    // flash highlight
    el.classList.add("ring-2", "ring-primary/60", "ring-offset-2", "ring-offset-background");
    setTimeout(() => el!.classList.remove("ring-2", "ring-primary/60", "ring-offset-2", "ring-offset-background"), 2200);
  }
}

function scrollToArtwork(title: string) {
  const allFigures = document.querySelectorAll("[data-artwork-title]");
  for (const fig of allFigures) {
    const t = (fig.getAttribute("data-artwork-title") || "").toUpperCase();
    if (t.includes(title.toUpperCase())) {
      fig.scrollIntoView({ behavior: "smooth", block: "center" });
      // flash highlight
      fig.classList.add("ring-2", "ring-primary/60", "ring-offset-2", "ring-offset-background");
      setTimeout(() => fig.classList.remove("ring-2", "ring-primary/60", "ring-offset-2", "ring-offset-background"), 2200);
      return;
    }
  }
}

/* ── Read all artworks from the DOM ───────────────────────────── */
function readArtworksFromDOM(): Artwork[] {
  const figs = document.querySelectorAll("[data-artwork-title]");
  return Array.from(figs).map((f) => ({
    title: f.getAttribute("data-artwork-title") || "",
    artist: f.getAttribute("data-artwork-artist") || "",
  })).filter((a) => a.title.length > 0);
}

export function SideMenu() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeTab, setActiveTab] = useState<"movements" | "artists" | "obras">("movements");
  const [selectedMovement, setSelectedMovement] = useState<string | null>(null);
  const [domArtworks, setDomArtworks] = useState<Artwork[]>([]);

  // Read artworks from DOM when obras tab is opened
  useEffect(() => {
    if (activeTab === "obras" && domArtworks.length === 0) {
      // Small delay to ensure WorksGrid is rendered
      const timer = setTimeout(() => {
        setDomArtworks(readArtworksFromDOM());
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [activeTab]);

  const filteredMovements = useMemo(
    () => allMovements.filter((m) => m.toLowerCase().includes(query.toLowerCase())),
    [query],
  );

  const filteredArtists = useMemo(() => {
    let list = selectedMovement ? artistsByMovement[selectedMovement] ?? [] : allArtists;
    if (query) list = list.filter((a) => a.toLowerCase().includes(query.toLowerCase()));
    return list;
  }, [query, selectedMovement]);

  const filteredArtworks = useMemo(() => {
    if (!query) return domArtworks;
    return domArtworks.filter(
      (a) =>
        a.title.toLowerCase().includes(query.toLowerCase()) ||
        a.artist.toLowerCase().includes(query.toLowerCase()),
    );
  }, [query, domArtworks]);

  const handleArtistClick = useCallback((name: string) => {
    scrollToArtist(name);
    setOpen(false);
  }, []);

  const handleMovementClick = useCallback((movement: string) => {
    setSelectedMovement((prev) => (prev === movement ? null : movement));
    setActiveTab("artists");
  }, []);

  const handleArtworkClick = useCallback((title: string) => {
    scrollToArtwork(title);
    setOpen(false);
  }, []);

  const tabs = [
    { id: "movements" as const, label: "Vanguardias" },
    { id: "artists" as const, label: "Artistas" },
    { id: "obras" as const, label: "Obras" },
  ];

  return (
    <>
      {/* ── Floating toggle button ─────────────────────── */}
      <motion.button
        onClick={() => setOpen((v) => !v)}
        className="fixed right-5 top-1/2 -translate-y-1/2 z-[60] w-12 h-12 rounded-full bg-primary/90 text-primary-foreground backdrop-blur-md flex items-center justify-center shadow-lg shadow-primary/25 hover:scale-110 transition-transform duration-300"
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Abrir menú"
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.svg key="x" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </motion.svg>
          ) : (
            <motion.svg key="menu" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
            </motion.svg>
          )}
        </AnimatePresence>
      </motion.button>

      {/* ── Backdrop ───────────────────────────────────── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[55] bg-background/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* ── Panel ─────────────────────────────────────── */}
      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 30, stiffness: 300, mass: 0.8 }}
            className="fixed right-0 top-0 h-full z-[58] w-[340px] md:w-[400px] flex flex-col border-l border-primary/20 bg-background/80 backdrop-blur-2xl"
          >
            {/* Header */}
            <div className="px-6 pt-8 pb-4 border-b border-border">
              <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-primary block mb-2">Explorar</span>
              <h2 className="font-display text-3xl uppercase leading-none">Navegar</h2>
            </div>

            {/* Search */}
            <div className="px-6 py-4">
              <div className="relative">
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={
                    activeTab === "obras"
                      ? "Buscar obra… ej: Cuadro Rojo"
                      : activeTab === "artists"
                      ? "Buscar artista…"
                      : "Buscar vanguardia…"
                  }
                  className="w-full bg-surface/80 border border-border rounded-none px-10 py-3 font-mono text-xs uppercase tracking-wider text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                />
                {query && (
                  <button onClick={() => setQuery("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                )}
              </div>
            </div>

            {/* Tabs */}
            <div className="flex px-6 gap-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => { setActiveTab(tab.id); setQuery(""); }}
                  className={`flex-1 py-2.5 font-mono text-[10px] uppercase tracking-[0.3em] border-b-2 transition-all duration-300 ${
                    activeTab === tab.id
                      ? "border-primary text-primary"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto px-6 py-4 scrollbar-thin">
              <AnimatePresence mode="wait">

                {/* ── MOVEMENTS tab ──────────────────────────── */}
                {activeTab === "movements" && (
                  <motion.div
                    key="movements"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-1"
                  >
                    {selectedMovement && (
                      <button
                        onClick={() => setSelectedMovement(null)}
                        className="w-full text-left font-mono text-[9px] uppercase tracking-[0.3em] text-primary/70 hover:text-primary py-2 transition-colors"
                      >
                        ← Todos los movimientos
                      </button>
                    )}
                    {filteredMovements.map((movement, i) => (
                      <motion.button
                        key={movement}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.04, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        onClick={() => handleMovementClick(movement)}
                        className={`w-full text-left group flex items-center justify-between py-3 border-b border-border/50 transition-all duration-300 hover:pl-2 ${
                          selectedMovement === movement ? "border-primary/40" : ""
                        }`}
                      >
                        <div>
                          <span className={`font-display text-lg uppercase leading-none block transition-colors ${
                            selectedMovement === movement ? "text-primary" : "text-foreground group-hover:text-primary"
                          }`}>
                            {movement}
                          </span>
                          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground mt-1 block">
                            {artistsByMovement[movement].length} artista{artistsByMovement[movement].length > 1 ? "s" : ""}
                          </span>
                        </div>
                        <motion.span
                          className="text-primary/50 group-hover:text-primary transition-colors text-sm"
                          whileHover={{ x: 3 }}
                        >
                          →
                        </motion.span>
                      </motion.button>
                    ))}
                    {filteredMovements.length === 0 && (
                      <p className="font-serif text-sm italic text-muted-foreground py-8 text-center">
                        No se encontraron vanguardias
                      </p>
                    )}
                  </motion.div>
                )}

                {/* ── ARTISTS tab ────────────────────────────── */}
                {activeTab === "artists" && (
                  <motion.div
                    key="artists"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-1"
                  >
                    {selectedMovement && (
                      <div className="pb-3 mb-2 border-b border-primary/20">
                        <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-primary/70 block mb-1">Filtrando por</span>
                        <div className="flex items-center justify-between">
                          <span className="font-display text-base uppercase text-primary">{selectedMovement}</span>
                          <button
                            onClick={() => setSelectedMovement(null)}
                            className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
                          >
                            Limpiar ×
                          </button>
                        </div>
                      </div>
                    )}
                    {filteredArtists.map((artist, i) => (
                      <motion.button
                        key={artist}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.03, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        onClick={() => handleArtistClick(artist)}
                        className="w-full text-left group flex items-center justify-between py-3 border-b border-border/50 transition-all duration-300 hover:pl-2"
                      >
                        <div>
                          <span className="font-display text-base uppercase leading-none block group-hover:text-primary transition-colors">
                            {artist}
                          </span>
                          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground mt-1 block">
                            {Object.entries(artistsByMovement).find(([, artists]) => artists.includes(artist))?.[0]}
                          </span>
                        </div>
                        <motion.span
                          className="text-primary/0 group-hover:text-primary/80 transition-all text-xs font-mono uppercase tracking-wider"
                          whileHover={{ x: 3 }}
                        >
                          Ir →
                        </motion.span>
                      </motion.button>
                    ))}
                    {filteredArtists.length === 0 && (
                      <p className="font-serif text-sm italic text-muted-foreground py-8 text-center">
                        No se encontraron artistas
                      </p>
                    )}
                  </motion.div>
                )}

                {/* ── OBRAS tab ──────────────────────────────── */}
                {activeTab === "obras" && (
                  <motion.div
                    key="obras"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-1"
                  >
                    {domArtworks.length === 0 ? (
                      <p className="font-serif text-sm italic text-muted-foreground py-8 text-center animate-pulse">
                        Cargando obras…
                      </p>
                    ) : filteredArtworks.length === 0 ? (
                      <p className="font-serif text-sm italic text-muted-foreground py-8 text-center">
                        No se encontraron obras
                      </p>
                    ) : (
                      filteredArtworks.map((artwork, i) => (
                        <motion.button
                          key={`${artwork.title}-${i}`}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: Math.min(i * 0.015, 0.4), duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                          onClick={() => handleArtworkClick(artwork.title)}
                          className="w-full text-left group flex items-center justify-between py-3 border-b border-border/50 transition-all duration-300 hover:pl-2"
                        >
                          <div className="flex-1 min-w-0">
                            <span className="font-display text-sm uppercase leading-tight block group-hover:text-primary transition-colors truncate pr-2">
                              {artwork.title}
                            </span>
                            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground mt-1 block truncate">
                              {artwork.artist.split(" · ")[0]}
                            </span>
                          </div>
                          <motion.span
                            className="text-primary/0 group-hover:text-primary/80 transition-all text-xs font-mono uppercase tracking-wider flex-shrink-0"
                            whileHover={{ x: 3 }}
                          >
                            Ver →
                          </motion.span>
                        </motion.button>
                      ))
                    )}
                  </motion.div>
                )}

              </AnimatePresence>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-border">
              <span className="font-mono text-[8px] uppercase tracking-[0.4em] text-muted-foreground/50 block text-center">
                {allArtists.length} artistas · {allMovements.length} vanguardias · {domArtworks.length} obras
              </span>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
