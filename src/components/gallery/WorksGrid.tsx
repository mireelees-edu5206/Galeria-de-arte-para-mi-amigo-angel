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
import img11 from "@/assets/11.jpg";
import img12 from "@/assets/12.jpg";
import img13 from "@/assets/13.jpg";
import img14 from "@/assets/14.jpg";
import img15 from "@/assets/15.jpg";
import img16 from "@/assets/16.jpg";
import img17 from "@/assets/17.jpg";
import img18 from "@/assets/18.jpg";
import img19 from "@/assets/19.jpg";
import img20 from "@/assets/20.jpg";
import img21 from "@/assets/21.jpg";
import img22 from "@/assets/22.jpg";
import img23 from "@/assets/23.jpg";
import img24 from "@/assets/24.jpg";
import img25 from "@/assets/25.jpg";
import img26 from "@/assets/26.jpg";
import img27 from "@/assets/27.jpg";
import img28 from "@/assets/28.jpg";
import img29 from "@/assets/29.jpg";
import img30 from "@/assets/30.jpg";
import img31 from "@/assets/31.jpg";
import img32 from "@/assets/32.jpg";
import img33 from "@/assets/33.jpg";
import img34 from "@/assets/34.jpg";
import img35 from "@/assets/35.jpg";
import img36 from "@/assets/36.jpg";
import img37 from "@/assets/37.jpg";
import img38 from "@/assets/38.jpg";
import img39 from "@/assets/39.jpg";
import img40 from "@/assets/40.jpg";
import img41 from "@/assets/41.jpg";
import img42 from "@/assets/42.jpg";
import img43 from "@/assets/43.jpg";
import img44 from "@/assets/44.jpg";
import img45 from "@/assets/45.jpg";
import img46 from "@/assets/46.jpg";
import img47 from "@/assets/47.jpg";
import img48 from "@/assets/48.jpg";
import img49 from "@/assets/49.jpg";
import img50 from "@/assets/50.jpg";
import img51 from "@/assets/51.jpg";
import img52 from "@/assets/52.jpg";
import img53 from "@/assets/53.jpg";
import img54 from "@/assets/54.jpg";
import img55 from "@/assets/55.jpg";
import img56 from "@/assets/56.jpg";
import img57 from "@/assets/57.jpg";
import img58 from "@/assets/58.jpg";
import img59 from "@/assets/59.jpg";
import img60 from "@/assets/60.jpg";
import img61 from "@/assets/61.jpg";
import img62 from "@/assets/62.jpg";
import img63 from "@/assets/63.jpg";
import img64 from "@/assets/64.jpg";
import img65 from "@/assets/65.jpg";
import img66 from "@/assets/66.jpg";
import img67 from "@/assets/67.jpg";
import img68 from "@/assets/68.jpg";
import img69 from "@/assets/69.jpg";
import img70 from "@/assets/70.jpg";
import img71 from "@/assets/71.jpg";
import img72 from "@/assets/72.jpg";
import img73 from "@/assets/73.jpg";
import img74 from "@/assets/74.jpg";
import img75 from "@/assets/75.jpg";
import img76 from "@/assets/76.jpg";
import img77 from "@/assets/77.jpg";
import img78 from "@/assets/78.jpg";
import img79 from "@/assets/79.jpg";
import img80 from "@/assets/80.jpg";
import img81 from "@/assets/81.jpg";
import img82 from "@/assets/82.jpg";
import img83 from "@/assets/83.jpg";
import img84 from "@/assets/84.jpg";
import img85 from "@/assets/85.jpg";
import img86 from "@/assets/86.jpg";
import img87 from "@/assets/87.jpg";
import img88 from "@/assets/88.jpg";
import img89 from "@/assets/89.jpg";
import img90 from "@/assets/90.jpg";
import img91 from "@/assets/91.jpg";
import img92 from "@/assets/92.jpg";
import img93 from "@/assets/93.jpg";
import img94 from "@/assets/94.jpg";
import img95 from "@/assets/95.jpg";
import img96 from "@/assets/96.jpg";
import img97 from "@/assets/97.jpg";
import img98 from "@/assets/98.jpg";
import img99 from "@/assets/99.jpg";
import img100 from "@/assets/100.jpg";
import img101 from "@/assets/101.jpg";
import img102 from "@/assets/102.jpg";
import img103 from "@/assets/103.jpg";
import img104 from "@/assets/104.jpg";
import img105 from "@/assets/105.jpg";

const works = [
  { type: "text", title: "ARTE NOUVEAU Y DECÓ", subtitle: "Arte Nouveau y Decó", content: "El movimiento cultural del Arte Nouveau surge a finales del siglo XIX y permanece hasta inicios del siglo XX, buscando contrastar con la industrialización de la Segunda Revolución Industrial. El Arte Nouveau usa motivos inspirados en la naturaleza o materiales orgánicos para plasmar la sensualidad y el erotismo en objetos de arte decorativos, característicos de este movimiento. Este movimiento abarca campos de la pintura, escultura, literatura, decoración, diseño de joyas, muebles y objetos.", span: "md:col-span-12" },
  // Joseph Paxton (3 obras): nombre, foto e información arriba, obras en una línea
  { type: "text", title: "JOSEPH PAXTON", subtitle: "", content: "Arquitecto y jardinero inglés, conocido por diseñar el Palacio de Cristal para la Gran Exposición de 1851.", span: "md:col-span-12", isArtistHeader: true, artistImg: img1 },
  { img: img11, n: "011", title: "El Palacio de Cristal", meta: "Joseph Paxton · 1851", year: "1851", span: "md:col-span-4" },
  { img: img12, n: "012", title: "La Fuente del Emperador", meta: "Joseph Paxton · 1843", year: "1843", span: "md:col-span-4" },
  { img: img13, n: "013", title: "Chatsworth Conservatory", meta: "Joseph Paxton · 1840", year: "1840", span: "md:col-span-4" },
  // Gustav Klimt (4 obras): nombre, foto e información arriba, obras en una línea
  { type: "text", title: "GUSTAV KLIMT", subtitle: "", content: "Pintor simbolista austriaco, uno de los más prominentes miembros del movimiento Art Nouveau.", span: "md:col-span-12", isArtistHeader: true, artistImg: img2 },
  { img: img14, n: "014", title: "El Beso", meta: "Gustav Klimt · 1908", year: "1908", span: "md:col-span-3" },
  { img: img15, n: "015", title: "Retrato de Adele Bloch Bauer I", meta: "Gustav Klimt · 1907", year: "1907", span: "md:col-span-3" },
  { img: img16, n: "016", title: "Medicina", meta: "Gustav Klimt · 1901", year: "1901", span: "md:col-span-3" },
  { img: img17, n: "017", title: "Monte Sanit Victorie", meta: "Gustav Klimt · 1895", year: "1895", span: "md:col-span-3" },
  // Charles Lewis Tiffany (2 obras): nombre, foto e información arriba, obras en una línea
  { type: "text", title: "CHARLES LEWIS TIFFANY", subtitle: "", content: "Artista y diseñador estadounidense, fundador de Tiffany & Co., pionero en el arte del vidrio.", span: "md:col-span-12", isArtistHeader: true, artistImg: img3 },
  { img: img18, n: "018", title: "Collar con diamante amarillo", meta: "Charles Lewis Tiffany · diseño tipo sol", year: "", span: "md:col-span-6" },
  { img: img19, n: "019", title: "Diseño ornamental de joyería", meta: "Charles Lewis Tiffany · catálogo antiguo", year: "", span: "md:col-span-6" },
  // Antonio Gaudi (3 obras): nombre, foto e información arriba, obras en una línea
  { type: "text", title: "ANTONI GAUDÍ", subtitle: "", content: "Arquitecto español, máximo exponente del modernismo catalán, conocido por obras como la Sagrada Familia.", span: "md:col-span-12", isArtistHeader: true, artistImg: img4 },
  { img: img20, n: "020", title: "La Sagrada Familia", meta: "Antonio Gaudi · 1882", year: "1882", span: "md:col-span-4" },
  { img: img21, n: "021", title: "Parque Gue l", meta: "Antonio Gaudi · 1900", year: "1900", span: "md:col-span-4" },
  { img: img22, n: "022", title: "Cesto de Manzanas", meta: "Antonio Gaudi · 1895", year: "1895", span: "md:col-span-4" },
  // Alfons Maria Mucha (4 obras): nombre, foto e información arriba, obras en una línea
  { type: "text", title: "ALFONS MARIA MUCHA", subtitle: "", content: "Pintor y diseñador gráfico checo, famoso por sus pósters Art Nouveau y estilo decorativo distintivo.", span: "md:col-span-12", isArtistHeader: true, artistImg: img5 },
  { img: img23, n: "023", title: "Primavera", meta: "Alfons Maria Mucha · 1896", year: "1896", span: "md:col-span-3" },
  { img: img24, n: "024", title: "Sarah Bernhardt", meta: "Alfons Maria Mucha · 1896", year: "1896", span: "md:col-span-3" },
  { img: img25, n: "025", title: "Salomé", meta: "Alfons Maria Mucha · 1897", year: "1897", span: "md:col-span-3" },
  { img: img26, n: "026", title: "Madona de los Lirios", meta: "Alfons Maria Mucha · 1905", year: "1905", span: "md:col-span-3" },
  // Victor Horta (3 obras): nombre, foto e información arriba, obras en una línea
  { type: "text", title: "VICTOR HORTA", subtitle: "", content: "Arquitecto belga, uno de los fundadores del Art Nouveau, conocido por sus casas urbanas en Bruselas.", span: "md:col-span-12", isArtistHeader: true, artistImg: img6 },
  { img: img27, n: "027", title: "Museo Horta", meta: "Victor Horta · 1901", year: "1901", span: "md:col-span-4" },
  { img: img28, n: "028", title: "Casa Solvay", meta: "Victor Horta · 1903", year: "1903", span: "md:col-span-4" },
  { img: img29, n: "029", title: "Casa Tassel", meta: "Victor Horta · 1893", year: "1893", span: "md:col-span-4" },
  // Alexander Calder (3 obras): nombre, foto e información arriba, obras en una línea
  { type: "text", title: "ALEXANDER CALDER", subtitle: "", content: "Escultor estadounidense, conocido por inventar el móvil y sus esculturas cinéticas abstractas.", span: "md:col-span-12", isArtistHeader: true, artistImg: img7 },
  { img: img30, n: "030", title: "SIN TITULO", meta: "Alexander Calder · 1932", year: "1932", span: "md:col-span-4" },
  { img: img31, n: "031", title: "Panel Naranja", meta: "Alexander Calder · 1936", year: "1936", span: "md:col-span-4" },
  { img: img32, n: "032", title: "Tunel Espacial", meta: "Alexander Calder · 1932", year: "1932", span: "md:col-span-4" },
  // Theo Van Doesburg (3 obras): nombre, foto e información arriba, obras en una línea
  { type: "text", title: "THEO VAN DOESBURG", subtitle: "", content: "Artista neerlandés, fundador del movimiento De Stijl, pionero del arte abstracto.", span: "md:col-span-12", isArtistHeader: true, artistImg: img8 },
  { img: img33, n: "033", title: "Contra-Composicion", meta: "Theo Van Doesburg · 1925", year: "1925", span: "md:col-span-4" },
  { img: img34, n: "034", title: "Bailarines", meta: "Theo Van Doesburg · 1916", year: "1916", span: "md:col-span-4" },
  { img: img35, n: "035", title: "Jugadores de Cartas", meta: "Theo Van Doesburg · 1916", year: "1916", span: "md:col-span-4" },
  // Gerrit Rietveld (3 obras): nombre, foto e información arriba, obras en una línea
  { type: "text", title: "GERRIT RIETVELD", subtitle: "", content: "Diseñador y arquitecto neerlandés, miembro destacado del movimiento De Stijl.", span: "md:col-span-12", isArtistHeader: true, artistImg: img9 },
  { img: img36, n: "036", title: "SILLA CRATE", meta: "Gerrit Rietveld · 1934", year: "1934", span: "md:col-span-4" },
  { img: img37, n: "037", title: "SILLA ROJA Y AZUL", meta: "Gerrit Rietveld · 1917", year: "1917", span: "md:col-span-4" },
  { img: img38, n: "038", title: "SILLA ZIG ZAG", meta: "Gerrit Rietveld · 1934", year: "1934", span: "md:col-span-4" },
  // Kasimir Malevich (3 obras): nombre, foto e información arriba, obras en una línea
  { type: "text", title: "KASIMIR MALEVICH", subtitle: "", content: "Pintor y teórico del arte ruso, pionero del arte abstracto geométrico y fundador del Suprematismo.", span: "md:col-span-12", isArtistHeader: true, artistImg: img10 },
  { img: img39, n: "039", title: "Cuadro Blanco", meta: "Kasimir Malevich · 1918", year: "1918", span: "md:col-span-4" },
  { img: img40, n: "040", title: "Cuadro Negro", meta: "Kasimir Malevich · 1915", year: "1915", span: "md:col-span-4" },
  { img: img41, n: "041", title: "Cuadro Rojo", meta: "Kasimir Malevich · 1915", year: "1915", span: "md:col-span-4" },
  { type: "text", title: "", subtitle: "", content: "", span: "md:col-span-12", isGoldenLine: true },
  { type: "text", title: "FORMAS DE CATARSIS Y MANIFESTACIÓN", subtitle: "Fauvismo y Expresionismo", content: "El Fauvismo es liberar el color con respecto al dibujo, ignorar claroscuros y perspectivas, expresar sentimientos. Era de gente inconformista, que como todo buen artista de vanguardia, quiere liberarse de todo lo anterior y no ser sumiso ante la herencia pictórica. El color es la clave, directamente del tubo, obviando la mímesis y aplicándolo en toques rápidos y vigorosos, dotando la obra de una sensación de espontaneidad.", span: "md:col-span-12" },
  // Henri Matisse (3 obras): nombre, foto e información arriba, obras en una línea
  { type: "text", title: "HENRI MATISSE", subtitle: "", content: "Pintor fauvista francés, líder del movimiento Fauvismo, conocido por su uso del color y sus obras maestras como La Danza.", span: "md:col-span-12", isArtistHeader: true, artistImg: img42 },
  { img: img46, n: "046", title: "Obra 1", meta: "Henri Matisse · 1905", year: "1905", span: "md:col-span-4" },
  { img: img47, n: "047", title: "Obra 2", meta: "Henri Matisse · 1906", year: "1906", span: "md:col-span-4" },
  { img: img48, n: "048", title: "Obra 3", meta: "Henri Matisse · 1907", year: "1907", span: "md:col-span-4" },
  // André Derain (3 obras): nombre, foto e información arriba, obras en una línea
  { type: "text", title: "ANDRÉ DERAIN", subtitle: "", content: "Pintor fauvista francés, cofundador del Fauvismo junto con Matisse, conocido por sus paisajes coloridos y uso vibrante del color.", span: "md:col-span-12", isArtistHeader: true, artistImg: img43 },
  { img: img49, n: "049", title: "Paisaje por Chateou", meta: "André Derain · 1905", year: "1905", span: "md:col-span-4" },
  { img: img50, n: "050", title: "Botes por Co lioure", meta: "André Derain · 1905", year: "1905", span: "md:col-span-4" },
  { img: img51, n: "051", title: "Estaque", meta: "André Derain · 1905", year: "1905", span: "md:col-span-4" },
  // Albert Marquet (3 obras): nombre, foto e información arriba, obras en una línea
  { type: "text", title: "ALBERT MARQUET", subtitle: "", content: "Pintor fauvista francés, conocido por sus paisajes urbanos y marinos con paleta de colores suaves y armoniosos.", span: "md:col-span-12", isArtistHeader: true, artistImg: img44 },
  { img: img52, n: "052", title: "Mujer Rubia", meta: "Albert Marquet · 1919", year: "1919", span: "md:col-span-4" },
  { img: img53, n: "053", title: "Desnudo sobre fondo azul", meta: "Albert Marquet · 1913", year: "1913", span: "md:col-span-4" },
  { img: img54, n: "054", title: "Desnudo en Divan", meta: "Albert Marquet · 1912", year: "1912", span: "md:col-span-4" },
  // Maurice Vlaminick (3 obras): nombre, foto e información arriba, obras en una línea
  { type: "text", title: "MAURICE VLAMINICK", subtitle: "", content: "Pintor fauvista francés, conocido por sus paisajes vigorosos y uso expresivo del color, influenciado por Van Gogh.", span: "md:col-span-12", isArtistHeader: true, artistImg: img45 },
  { img: img55, n: "055", title: "Tractor Rojo", meta: "Maurice Vlaminick · 1956", year: "1956", span: "md:col-span-4" },
  { img: img56, n: "056", title: "Recolectores de Papas", meta: "Maurice Vlaminick · 1907", year: "1907", span: "md:col-span-4" },
  { img: img57, n: "057", title: "Aldea por el Río", meta: "Maurice Vlaminick · 1915", year: "1915", span: "md:col-span-4" },
  { type: "text", title: "", subtitle: "", content: "", span: "md:col-span-12", isGoldenLine: true },
  { type: "text", title: "VANGUARDIAS ARTISTICAS", subtitle: "Vanguardias Artísticas", content: "Las vanguardias artísticas fueron movimientos de la primera mitad del siglo XX que rompieron con la tradición académica, buscando nuevas formas de expresión y lenguajes plásticos innovadores. Se caracterizaron por la rebeldía, la experimentación y la voluntad de reflejar la modernidad y sus tensiones.", span: "md:col-span-12" },
  // Artistas 58, 62, 66, 70, 74, 78, 82, 86, 90, 94, 98, 102 (cada uno con 3 obras)
  // Piet Mondrian (SUPREMATISMO): foto img58
  { type: "text", title: "PIET MONDRIAN", subtitle: "SUPREMATISMO", content: "Pintor neerlandés, pionero del arte abstracto y creador del Neoplasticismo, conocido por sus composiciones geométricas con líneas y colores primarios.", span: "md:col-span-12", isArtistHeader: true, artistImg: img58 },
  { img: img59, n: "059", title: "Composición en Blanco y negro", meta: "Piet Mondrian · 1917", year: "1917", span: "md:col-span-4" },
  { img: img60, n: "060", title: "Broadway Boogie Woogie", meta: "Piet Mondrian · 1943", year: "1943", span: "md:col-span-4" },
  { img: img61, n: "061", title: "Composición con Rojo y Azul", meta: "Piet Mondrian · 1931", year: "1931", span: "md:col-span-4" },
  // Paul Klee (SUPREMATISMO): foto img62
  { type: "text", title: "PAUL KLEE", subtitle: "SUPREMATISMO", content: "Pintor suizo-alemán, maestro de la Bauhaus, conocido por su estilo único que combina expresionismo, surrealismo y abstracción.", span: "md:col-span-12", isArtistHeader: true, artistImg: img62 },
  { img: img63, n: "063", title: "La Noche de Walpurgis", meta: "Paul Klee · 1925", year: "1925", span: "md:col-span-4" },
  { img: img64, n: "064", title: "Ciuda de laguna", meta: "Paul Klee · 1932", year: "1932", span: "md:col-span-4" },
  { img: img65, n: "065", title: "Castilo y Sol", meta: "Paul Klee · 1928", year: "1928", span: "md:col-span-4" },
  // Marcel Duchamp (DADAISMO): foto img66
  { type: "text", title: "MARCEL DUCHAMP", subtitle: "DADAISMO", content: "Artista francés, figura central del Dadaísmo, conocido por sus readymades y cuestionar la naturaleza del arte.", span: "md:col-span-12", isArtistHeader: true, artistImg: img66 },
  { img: img67, n: "067", title: "AUTORRETRATO DE PERFIL", meta: "Marcel Duchamp · 1958", year: "1958", span: "md:col-span-4" },
  { img: img68, n: "068", title: "The Bride Stripped Bare", meta: "Marcel Duchamp · 1923", year: "1923", span: "md:col-span-4" },
  { img: img69, n: "069", title: "The I luminating Gas", meta: "Marcel Duchamp · 1966", year: "1966", span: "md:col-span-4" },
  // Kandinsky (DADAISMO): foto img70
  { type: "text", title: "KANDINSKY", subtitle: "DADAISMO", content: "Pintor ruso, pionero del arte abstracto, teórico del arte y cofundador de la Bauhaus, considerado uno de los padres del arte abstracto.", span: "md:col-span-12", isArtistHeader: true, artistImg: img70 },
  { img: img71, n: "071", title: "En Blanco I", meta: "Kandinsky · 1923", year: "1923", span: "md:col-span-4" },
  { img: img72, n: "072", title: "Moscow I", meta: "Kandinsky · 1916", year: "1916", span: "md:col-span-4" },
  { img: img73, n: "073", title: "Jinete Azul", meta: "Kandinsky · 1903", year: "1903", span: "md:col-span-4" },
  // Robert Delaunay (ABSTRACCIONISMO): foto img74
  { type: "text", title: "ROBERT DELAUNAY", subtitle: "ABSTRACCIONISMO", content: "Pintor francés, cofundador del Orfismo junto con su esposa Sonia, conocido por sus obras abstractas con colores vibrantes y formas circulares.", span: "md:col-span-12", isArtistHeader: true, artistImg: img74 },
  { img: img75, n: "075", title: "Torre Eiffel", meta: "Robert Delaunay · 1909", year: "1909", span: "md:col-span-4" },
  { img: img76, n: "076", title: "Equipo Cardiff", meta: "Robert Delaunay · 1912", year: "1912", span: "md:col-span-4" },
  { img: img77, n: "077", title: "Mujer con Sombri la", meta: "Robert Delaunay · 1913", year: "1913", span: "md:col-span-4" },
  // Umberto Boccioni (FUTURISMO): foto img78
  { type: "text", title: "UMBERTO BOCCIONI", subtitle: "FUTURISMO", content: "Pintor y escultor italiano, figura clave del Futurismo, conocido por sus obras que capturan el movimiento y la dinamismo de la vida moderna.", span: "md:col-span-12", isArtistHeader: true, artistImg: img78 },
  { img: img79, n: "079", title: "Formas Unicas", meta: "Umberto Boccioni · 1913", year: "1913", span: "md:col-span-4" },
  { img: img80, n: "080", title: "El Bebedor", meta: "Umberto Boccioni · 1914", year: "1914", span: "md:col-span-4" },
  { img: img81, n: "081", title: "Silvia", meta: "Umberto Boccioni · 1915", year: "1915", span: "md:col-span-4" },
  // Giorgio de Chirico (FUTURISMO): foto img82
  { type: "text", title: "GIORGIO DE CHIRICO", subtitle: "FUTURISMO", content: "Pintor italiano, fundador de la pintura metafísica, conocido por sus paisajes urbanos enigmáticos y sueños oníricos.", span: "md:col-span-12", isArtistHeader: true, artistImg: img82 },
  { img: img83, n: "083", title: "Nostalgia del Infinito", meta: "Giorgio de Chirico · 1913", year: "1913", span: "md:col-span-4" },
  { img: img84, n: "084", title: "El Dioscuri", meta: "Giorgio de Chirico · 1974", year: "1974", span: "md:col-span-4" },
  { img: img85, n: "085", title: "Las Musas Inquietantes", meta: "Giorgio de Chirico · 1918", year: "1918", span: "md:col-span-4" },
  // Pablo Picasso (CUBISMO): foto img86
  { type: "text", title: "PABLO PICASSO", subtitle: "CUBISMO", content: "Pintor español, cofundador del Cubismo, uno de los artistas más influyentes del siglo XX, conocido por su estilo innovador y versátil.", span: "md:col-span-12", isArtistHeader: true, artistImg: img86 },
  { img: img87, n: "087", title: "Retrato de Dora Maar", meta: "Pablo Picasso · 1937", year: "1937", span: "md:col-span-4" },
  { img: img88, n: "088", title: "Retrato de Ambroise Vollard", meta: "Pablo Picasso · 1910", year: "1910", span: "md:col-span-4" },
  { img: img89, n: "089", title: "Las Señoritas de Avignon", meta: "Pablo Picasso · 1907", year: "1907", span: "md:col-span-4" },
  // James Ensor (EXPRESIONISMO): foto img90
  { type: "text", title: "JAMES ENSOR", subtitle: "EXPRESIONISMO", content: "Pintor belga, pionero del expresionismo, conocido por sus obras satíricas y su uso de máscaras y esqueletos.", span: "md:col-span-12", isArtistHeader: true, artistImg: img90 },
  { img: img91, n: "091", title: "La Entrada de Cristo a Bruselas", meta: "James Ensor · 1889", year: "1889", span: "md:col-span-4" },
  { img: img92, n: "092", title: "Esqueleto Pintor en su Taller", meta: "James Ensor · 1896", year: "1896", span: "md:col-span-4" },
  { img: img93, n: "093", title: "Esqueletos disputándose un arenque", meta: "James Ensor · 1891", year: "1891", span: "md:col-span-4" },
  // Egon Schiele (EXPRESIONISMO): foto img94
  { type: "text", title: "EGON SCHIELE", subtitle: "EXPRESIONISMO", content: "Pintor austriaco, figura destacada del expresionismo, conocido por sus retratos intensos y sus figuras distorsionadas.", span: "md:col-span-12", isArtistHeader: true, artistImg: img94 },
  { img: img95, n: "095", title: "Desnudo Masculino", meta: "Egon Schiele · 1910", year: "1910", span: "md:col-span-4" },
  { img: img96, n: "096", title: "Desnudo Sentado", meta: "Egon Schiele · 1910", year: "1910", span: "md:col-span-4" },
  { img: img97, n: "097", title: "Retrato de Mime Van Osean", meta: "Egon Schiele · 1910", year: "1910", span: "md:col-span-4" },
  // Ernst Ludwing Kircher (EXPRESIONISMO): foto img98
  { type: "text", title: "ERNST LUDWING KIRCHER", subtitle: "EXPRESIONISMO", content: "Pintor alemán, cofundador del grupo Die Brücke, figura clave del expresionismo alemán, conocido por sus retratos urbanos.", span: "md:col-span-12", isArtistHeader: true, artistImg: img98 },
  { img: img99, n: "099", title: "Marcela", meta: "Ernst Ludwing Kircher · 1910", year: "1910", span: "md:col-span-4" },
  { img: img100, n: "100", title: "Desnudo con Sombrero", meta: "Ernst Ludwing Kircher · 1915", year: "1915", span: "md:col-span-4" },
  { img: img101, n: "101", title: "Mujer de la Noche", meta: "Ernst Ludwing Kircher · 1929", year: "1929", span: "md:col-span-4" },
  // Edvard Munch (EXPRESIONISMO): foto img102
  { type: "text", title: "EDVARD MUNCH", subtitle: "EXPRESIONISMO", content: "Pintor noruego, pionero del expresionismo, conocido por sus obras profundamente emocionales y su representación de la angustia humana.", span: "md:col-span-12", isArtistHeader: true, artistImg: img102 },
  { img: img103, n: "103", title: "El Grito", meta: "Edvard Munch · 1893", year: "1893", span: "md:col-span-4" },
  { img: img104, n: "104", title: "Ansiedad", meta: "Edvard Munch · 1894", year: "1894", span: "md:col-span-4" },
  { img: img105, n: "105", title: "Pubertad", meta: "Edvard Munch · 1894", year: "1894", span: "md:col-span-4" },
];

// Alternating animation variants for visual variety
const imgVariants = [
  { hidden: { opacity: 0, y: 80, rotate: -1.5 }, visible: { opacity: 1, y: 0, rotate: 0 } },
  { hidden: { opacity: 0, x: -60, rotate: 1 }, visible: { opacity: 1, x: 0, rotate: 0 } },
  { hidden: { opacity: 0, x: 60, rotate: -1 }, visible: { opacity: 1, x: 0, rotate: 0 } },
  { hidden: { opacity: 0, y: 60, scale: 0.92 }, visible: { opacity: 1, y: 0, scale: 1 } },
  { hidden: { opacity: 0, y: 100, rotate: 2 }, visible: { opacity: 1, y: 0, rotate: 0 } },
];

export function WorksGrid() {
  // track image index separately for variant cycling
  let imgIdx = 0;

  return (
    <section className="px-6 md:px-12 py-32 md:py-48">
      <motion.div
        className="flex justify-between items-end mb-20 md:mb-32 border-b border-border pb-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <div>
          <motion.span
            className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary block mb-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            § II — Obras Destacadas
          </motion.span>
          <h2 className="font-display text-5xl md:text-8xl uppercase leading-none">Arte<br />Nouveau</h2>
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground hidden md:block">
          105 Imágenes<br />en exhibición
        </span>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-x-12 md:gap-y-32">
        {works.map((w, i) => {
          if (w.type === "text") {
            if (w.isGoldenLine) {
              return (
                <motion.div
                  key={i}
                  className="md:col-span-12 py-4"
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileInView={{ scaleX: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  style={{ originX: 0 }}
                >
                  <div className="w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />
                </motion.div>
              );
            }

            if (w.isArtistHeader) {
              return (
                <motion.div
                  key={i}
                  data-artist={w.title}
                  className="md:col-span-12"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="py-8 flex items-center gap-6">
                    {w.artistImg && (
                      <motion.img
                        src={w.artistImg}
                        alt={w.title}
                        className="w-12 h-12 object-cover rounded-full ring-2 ring-primary/30"
                        initial={{ scale: 0.6, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                      />
                    )}
                    <div className="flex-1 overflow-hidden">
                      {w.subtitle && (
                        <motion.span
                          className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary block mb-2"
                          initial={{ opacity: 0, x: -15 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                        >
                          {w.subtitle}
                        </motion.span>
                      )}
                      <motion.h3
                        className="font-display text-5xl md:text-7xl uppercase leading-none"
                        initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0 }}
                        whileInView={{ clipPath: "inset(0 0% 0 0)", opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                      >
                        {w.title}
                      </motion.h3>
                      <motion.p
                        className="font-serif text-sm md:text-base italic leading-relaxed text-muted-foreground text-pretty max-w-4xl mt-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.35 }}
                      >
                        {w.content}
                      </motion.p>
                    </div>
                  </div>
                </motion.div>
              );
            }

            // Section header block
            return (
              <motion.div
                key={i}
                className="md:col-span-12"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="py-12">
                  {w.subtitle ? (
                    <>
                      <motion.span
                        className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary block mb-4"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                      >
                        {w.title}
                      </motion.span>
                      <motion.h3
                        className="font-display text-3xl md:text-5xl uppercase leading-none mb-6"
                        initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0.2 }}
                        whileInView={{ clipPath: "inset(0 0% 0 0)", opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      >
                        {w.subtitle}
                      </motion.h3>
                    </>
                  ) : (
                    <motion.h3
                      className="font-display text-4xl md:text-6xl uppercase leading-none mb-6"
                      initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0.2 }}
                      whileInView={{ clipPath: "inset(0 0% 0 0)", opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                      {w.title}
                    </motion.h3>
                  )}
                  <motion.p
                    className="font-serif text-sm md:text-base italic leading-relaxed text-muted-foreground text-pretty max-w-4xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: 0.3 }}
                  >
                    {w.content}
                  </motion.p>
                </div>
              </motion.div>
            );
          }

          // Image card
          const variantIdx = imgIdx % imgVariants.length;
          imgIdx++;
          const variant = imgVariants[variantIdx];

          return (
            <motion.figure
              key={i}
              data-artwork-title={w.title}
              data-artwork-artist={w.meta}
              variants={variant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: (i % 4) * 0.07 }}
              className={`group relative ${w.span}`}
            >
              <div className="overflow-hidden bg-surface">
                <motion.img
                  src={w.img}
                  alt={w.title}
                  loading="lazy"
                  className="w-full h-auto object-contain max-h-[200px]"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>
              <figcaption className="mt-6 flex justify-between items-baseline">
                <div>
                  <motion.span
                    className="font-mono text-[10px] text-primary uppercase tracking-[0.3em] block mb-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    № {w.n}
                  </motion.span>
                  <h3 className="font-display text-2xl md:text-3xl uppercase leading-none">{w.title}</h3>
                  <p className="font-serif italic text-sm text-muted-foreground mt-2">{w.meta}</p>
                </div>
                <span className="font-mono text-xs text-muted-foreground">{w.year}</span>
              </figcaption>
            </motion.figure>
          );
        })}
      </div>
    </section>
  );
}
