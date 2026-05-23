# Galería de arte — diseño editorial "Obscura"

Una landing extravagante de galería de arte contemporáneo, oscura, cinematográfica, con scroll narrativo. Tipografía editorial enorme, fondo casi negro, acento dorado, fotografías en blanco y negro reveladas por la luz al hacer scroll.

## Dirección visual

- Paleta: negro profundo (#0a0a0a), hueso (#f5f5f5), dorado museo (#d4af37), gris piedra.
- Tipografía: Anton (display gigante condensado), Lora itálica (citas editoriales), JetBrains Mono (metadatos), Inter (UI).
- Tono: museo de arte contemporáneo, no SaaS. Vacíos generosos, asimetría intencional.

## Animaciones de scroll

- Hero parallax: el título "SHADOW IS LIGHT" se mueve más lento que el subtítulo.
- Sección pinned: una obra principal queda fija mientras los textos de la ficha técnica se deslizan al lado.
- Reveal por intersección: cada obra aparece con fade + scale suave al entrar en viewport.
- Cinta marquee horizontal con nombres de artistas en loop infinito.
- Hover en obras: brillo, leve zoom y aparición de metadatos en mono.
- Cursor de spotlight sutil siguiendo el mouse en la zona de galería.

## Secciones

1. Nav fijo minimalista con blur y volumen editorial ("Volume III").
2. Hero con tipografía monumental + bloque de cita.
3. Galería principal con sticky reveal de obra destacada.
4. Grid asimétrico de 3 obras con metadatos técnicos.
5. Spotlight de artista (retrato + bio).
6. Calendario de exposiciones (lista con hover slide).
7. Footer monumental "See the Void" + datos de contacto en mono.

## Detalles técnicos

- Stack: TanStack Start ya configurado, `motion` instalado para animaciones (useScroll, useTransform, whileInView).
- Componentes en `src/components/gallery/` (Nav, Hero, FeaturedWork, Marquee, ArtistSpotlight, Exhibitions, Footer).
- Tokens en `src/styles.css` (oklch): nuevos `--background`, `--foreground`, `--primary` dorado, fuentes desde Google Fonts.
- Imágenes ya generadas en `src/assets/`: hero artwork, sculpture, retrato artista, espacio galería, charcoal.
- Reemplazo del placeholder en `src/routes/index.tsx` por la página completa.
- SEO: title "Obscura — Contemporary Art Institution", meta description, H1 único.
