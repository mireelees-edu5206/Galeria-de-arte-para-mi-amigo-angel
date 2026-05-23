import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/gallery/Nav";
import { Hero } from "@/components/gallery/Hero";
import { FeaturedWork } from "@/components/gallery/FeaturedWork";
import { Marquee } from "@/components/gallery/Marquee";
import { WorksGrid } from "@/components/gallery/WorksGrid";
import { ArtistsGallery } from "@/components/gallery/ArtistsGallery";
import { Exhibitions } from "@/components/gallery/Exhibitions";
import { Footer } from "@/components/gallery/Footer";
import { SideMenu } from "@/components/gallery/SideMenu";
import { ScrollProgress } from "@/components/gallery/ScrollProgress";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Arte Nouveau y Decó — Vanguardias Artísticas" },
      {
        name: "description",
        content:
          "Explora las vanguardias artísticas del siglo XIX y XX: Arte Nouveau, Art Decó, Fauvismo, Expresionismo, Cubismo y más. Obras de Paxton, Klimt, Gaudí, Picasso y otros maestros.",
      },
      { property: "og:title", content: "Arte Nouveau y Decó — Vanguardias Artísticas" },
      {
        property: "og:description",
        content: "Descubre los movimientos artísticos que revolucionaron el arte moderno: desde el Art Nouveau hasta las vanguardias del siglo XX.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;500&family=Lora:ital,wght@0,400;1,400&family=JetBrains+Mono:wght@400&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground">
      <ScrollProgress />
      <Nav />
      <Hero />
      <FeaturedWork />
      <Marquee />
      <WorksGrid />
      <ArtistsGallery />
      <Exhibitions />
      <Footer />
      <SideMenu />
    </main>
  );
}
